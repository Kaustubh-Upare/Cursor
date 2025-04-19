const jwt=require('jsonwebtoken');

const cookieOption={
    httpOnly:true,
    secure:false,
    sameSite:"Lax"
}

const generateToken=(res,user,code,msg)=>{
    const token=jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:"2d"}
    );

    res.status(code)
      .cookie("CurToken",token,cookieOption)
      .json({success:true,user:{
        id:user._id,
        name:user.name,
        email:user.email
      },
      msg
      });

}

module.exports={generateToken}