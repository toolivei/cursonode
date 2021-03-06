const express = require('express')
//const subscriber = require('../models/subscriber')
const router = express.Router()
const Subscriber = require('../models/subscriber')


router.get('/subscribers',async (req, res)=>{
    try {
        const subscriber = await Subscriber.find()
        res.json(subscriber)
    } catch (error) {
        res.status(500).json({message: error.message})       
    }
})

router.get('/subscribers/:id', getSubscriber, (req, res)=>{
    res.json(res.subscriber)
})

router.post('/subscribers',async (req, res)=>{
    const subscriber = new Subscriber({
        userName: req.body.userName,
        userChannel: req.body.userChannel
    })

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
        
    } catch (error) {
        res.status(400).json({message: error.message})        
    }
})

router.patch('/subscribers/:id', getSubscriber, async (req, res)=>{

    if(req.body.userName != null){
        res.subscriber.userName = req.body.userName
    }
    if(req.body.userChannel != null){
        res.subscriber.userChannel = req.body.userChannel
    }

    try {
        const updateSubscriber = await res.subscriber.save()
        res.json(updateSubscriber)      
    } catch (error) {
        res.status(400).json({message: error.message})    
    }
})

router.delete('/subscribers/:id', getSubscriber, async (req, res)=>{

    try {
        await res.subscriber.remove()
        res.json({message: 'Subscriber was deleted'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }

})

async function getSubscriber(req, res, next){

    // let subscriber

    try {
        subscriber = await Subscriber.findById(req.params.id)
        if(subscriber==null){
            return res.status(404).json({message: 'subscriber not found!'})
        }
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

    res.subscriber = subscriber
    next()
}

module.exports = router