const express = require('express')
const authMiddlewares = require('../middlewares/auth')
const User = require('../model/User')
const router = express.Router()
const bcrypt = require('bcryptjs')

router.use(authMiddlewares)

router.get('/todos', async(req, res) => {
   const adm = await User.find({'_id': req.userId})

   if(adm[0].nivel === 9999){
      const user = await User.find({})
      return res.send( {user})
      }
   return res.status(400).send({ error: 'Usuario não permetido'})
})



router.get('/ativos/:id', async(req, res) => {
 try {
   const user = await User.findById(req.params.id)
   res.send( {user})
}
catch(err){
   return res.status(400).send({ error: 'Erro'})
}
})



router.put('/:id', async(req, res)=>{
   const update = req.body
try {

   if (update.password){
      const hash = await bcrypt.hash(update.password, 10)
      update.password = hash
   }
      await User.update({'_id':req.params.id}, update)

      const user = await User.findById(req.params.id)
      res.send( {user})
   }
   catch(err){
      return res.send({user:'erro'})}

})


// eslint-disable-next-line no-undef
module.exports = app => app.use('/users', router)
