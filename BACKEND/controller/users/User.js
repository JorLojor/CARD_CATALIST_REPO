const db = require('../../models/index');
const UserModels = db.users;
const multer = require("multer");
const upload = require("../../middleware/file");
const Response = require('../../res/sendRes')

exports.getAllUserPaginate = async (req, res) => {
    const page = parseInt(req.querry.page) || 1;
    const limit = parseInt(req.querry.limit) || 20;

    try{
        const dataUser = await UserModels.find({})
        .populate('userSchema')
        .skip((page-1)*limit)
        .limit(limit);


        if(!dataUser){
            return res.status(400).json({ msg: "User not found" });
        }
        if(!dataUser.userSchema){
            return res.status(400).json({ msg: "UserSchema not found" });
        }


        Response.responseSucces(res,dataUser,200,"Get all user pagination success");
    }catch(error){
        Response.responseError(res,error,500,error.message);
    }
};

exports.createUser = async (req, res) => {
    try{
        upload(req,res,async(error)=>{
            if(error instanceof multer.MulterError){
                Response.responseError(res,error,500,error.message);
            }else if(error){
                Response.responseError(res,error,500,error.message);
            }
            const {username,password,type,userSchema} = req.body; 
            userSchema.profilePicture = req.file.path; 
            if (!username || !password || !type || !userSchema) {
                return res.status(400).json({ msg: "Please enter all fields" });
            }

            const dataUser = await UserModels.create({username,password,type,userSchema});
            Response.responseSucces(res,dataUser,200,"Post user success");
            await dataUser.save();
        })
    }catch(error){
        Response.responseError(res,error,500,error.message);
    }
}

exports







































exports.Register = async (req, res) => {};

exports.Login = async (req, res) => {};

exports.UpdateUser = async (req, res) => {};

exports.DeleteUser = async (req, res) => {};
