
const fieldsValidator=(req,res,next)=>{
    const {title,desc}= req.body

    if( !title || !desc){
        return res.status(400).send({msg:"title and desc fields required"})
    }

    if ( typeof title !=="string" || typeof desc !=="string"){
        return res.status(400).send({msg:"title and desc must be string"})
    }

    next()
}

module.exports=fieldsValidator;