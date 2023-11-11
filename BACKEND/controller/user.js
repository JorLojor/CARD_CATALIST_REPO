const UserModles = require('../models/UserModels');
const UserType = require('../models/UserType');

const getUser = async (req, res) => {
    const {nama} = req.params;
    try{
        const UserTypeRes = await UserType.findOne({ nama });

        if(!UserTypeRes){
            res.status(404).json({
                message: "User not found",
                data: UserTypeRes
            });
        }

        const UserRes = await UserModels.findOne({ userType: UserTypeRes._id });

        if(!UserRes){
            res.status(404).json({
                message: "User not found",
                data: UserRes
            });
        }

        res.status(200).json({
            message: "Get one user",
            data: UserRes
        });

    }catch(error){
        console.log(error.message);
    }
};

const Register = async (req, res) => {
    try{
        const { username, password,type, nama, namaOrganisasi, email, noTelp, lokasi } = req.body;
        const user = new UserModles({
            username,
            password,
            userType:{
                type,
                nama,
                namaOrganisasi,
                email,
                noTelp,
                lokasi
            }
        })
        
        

    }catch(error){
        console.log(error.message);
    }

};

























const Login = async (req, res) => {};


const UpdateUser = async (req, res) => {};

const DeleteUser = async (req, res) => {};
