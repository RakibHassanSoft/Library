const jwt =require('jsonwebtoken')

const generateToken = (email,roll)=>{
    return jwt.sign({email:email,roll:roll},"KeyRakib",{expiresIn: '1h'})
}


const verifyToken = token =>{
    try {
        const decoded = jwt.verify(token,'KeyRakib');
        return decoded;
    } catch (error) {
       return null
    }
}

module.exports ={
    generateToken,verifyToken
}