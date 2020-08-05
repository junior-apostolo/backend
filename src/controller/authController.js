const express = require('express');
const bcrypt = require('bcryptjs')
const User = require('../model/User');
const jwt = require('jsonwebtoken')

const router = express.Router();

const authConfig = require('../config/auth.json')

function geradorToken(parms={}){
   return  jwt.sign(parms, authConfig.secret,{
        expiresIn: 86400
    })
}



router.post('/register', async(req, res)=>{
    const { email, cpf} = req.body
  
    try{
        if(await User.findOne({ email })){
            return res.status(400).send({ error: 'Email existente!'})
        }
        if(await User.findOne({ cpf })){
            return res.status(400).send({ error: 'CPF existente!'})
        }
        
        const user = await User.create(req.body);
        user.password = undefined;

        return res.send({ user,
            token: geradorToken({id: user.id}) });
    }catch(err){
        return res.status(400).send({ error: 'Registration failed'})
    }

})

router.post('/authenticated', async(req, res)=>{

    const{email, password} = req.body;

    
    const user = await User.findOne({email}).select('+password')
    let usuario = user
    const cpf_login = await User.findOne({'cpf':email}).select('+password')

    if(!user){
        if(!cpf_login){
            return res.status(400).send({error:'Usuário não encontrado'})
        }
        usuario = cpf_login
       
    }

    if(usuario.nivel == 0){
        
        return res.status(400).send({error:'Usuário Desativado '})
    }

    if( !await bcrypt.compare(password, usuario.password) ){
        return res.status(400).send({error:'Senha Invalida'})
    }

    usuario.password = undefined

    res.send({usuario,     
        token: geradorToken({id: usuario.id})
    })

})



module.exports = app => app.use('/auth', router);