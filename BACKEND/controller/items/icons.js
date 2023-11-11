const db = require('../../models/index');
const IconsModels = db.items;
const multer = require("multer");
const upload = require("../../middleware/file");
const Response = require('../../res/sendRes')


exports.getAllIcons = async(req,res)=>{
    try{
        const dataIcons = await IconsModels.find({});
        Response.responseSucces(res,dataIcons,200,"Get all icons success");
    }catch(error){
        Response.responseError(res,error,500,error.message);
    }
}

exports.getOneIcon = async(req,res)=>{
    try{
        const id = req.params.id;
        const dataIcons = await IconsModels.findById(id);
        Response.responseSucces(res,dataIcons,200,"Get one icon success");

    }catch(error){
        Response.responseError(res,error,500,error.message);
    }
}

exports.getAllIconsPagination = async(req,res)=>{
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    try{
        const dataIcons = await IconsModels.find({})
        .skip((page-1)*limit)
        .limit(limit);
        Response.responseSucces(res,dataIcons,200,"Get all icons pagination success");
    }catch(error){
        Response.responseError(res,error,500,error.message);
    }
};


exports.postIcons = async(req,res)=>{
    try{
        upload(req,res,async(error)=>{
            if(error instanceof multer.MulterError){
                Response.responseError(res,error,500,error.message);
            }else if(error){
                Response.responseError(res,error,500,error.message);
            }
            const {name,title} = req.body;
            const image = req.file.path;
            if (!name || !image || !title) {
                return res.status(400).json({ msg: "Please enter all fields" });
            }


            const dataIcons = await IconsModels.create({name,image,title});
            Response.responseSucces(res,dataIcons,200,"Post icons success");
            await dataIcons.save();
        });
    }catch(error){
        Response.responseError(res,error,500,error.message);
    }
};

exports.updateIcons = async(req,res)=>{
    const id = req.params.id;
    try{
        upload(req,res,async(error)=>{
            if(error instanceof multer.MulterError){
                Response.responseError(res,error,500,error.message);
            }else if(error){
                Response.responseError(res,error,500,error.message);
            }
            const {name,title} = req.body;
            const image = req.file.path;

            if (!name || !image || !title) {
                return res.status(400).json({ msg: "Please enter all fields" });
            }
            const dataIcons = await IconsModels.findByIdAndUpdate(id,{name,image,title});
            Response.responseSucces(res,dataIcons,200,"Update icons success");
            await dataIcons.save();
        });
    }catch(error){
        Response.responseError(res,error,500,error.message);
    }
}

exports.deleteIcons = async(req,res)=>{
    try{
        const id = req.params.id;
        const dataIcons = await IconsModels.findByIdAndDelete(id);
        Response.responseSucces(res,dataIcons,200,"Delete icons success")

    }catch(error){
        Response.responseError(res,error,500,error.message);
    }
};

module.exports = exports;
