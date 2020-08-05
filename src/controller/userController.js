const express = require('express');
const authMiddlewares = require('../middlewares/auth')
const User = require('../model/User');
const router = express.Router();

router.use(authMiddlewares)

router.get('/todos', async(req, res) => {
   adm = await User.find({'_id': req.userId})
   if(adm[0].nivel === 9999)
   {
      user = await User.find({})
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

}
})

router.put('/:id', async(req, res)=>{
 try { 
   const update = req.body

   await User.updateOne({'_id':req.params.id}, update);
   const userat = await User.findById(req.params.id)
   res.send( {userat})
}
   catch(err){
      return res.send({user:'erro'})}
   
})


module.exports = app => app.use('/users', router)