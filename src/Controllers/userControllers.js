// Controllers to create user

const User = require('../Models/userModel')

const createUser = async(req, res) =>{
    // const data = req.body;
    // const name = data.name;
    // const age = data.age
    // const role = data.role;

    const {name,age,role} = req.body; //Destructuring

    const addUser = new User({
        name: name,
        age: age,
        role: role
    });

    // await addUser.save();

    try{
        const response = await addUser.save();
        if(response){
            res.status(201).json({message:"User Created Sucessfully",response})
        }
    }
    catch(err){
        res.status(500).json({message:"Internal Server Error", err})
    }
}

module.exports = createUser;


