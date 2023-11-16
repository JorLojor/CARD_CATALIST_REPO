const ItemsModels = require("../../models/items/ItemsModelsCode")
const multer = require("multer");
const upload = require("../../middleware/documentImage");

module.exports = {
    getAllItems: async (req, res) => {
        try {
            const items = await ItemsModels.find({});
            res.status(200).json({
                message: "Get all code items",
                data: items
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                message: "Internal server error",
                error: error.message
            });
        }
    },
    getOneItem: async (req, res) => {
        try {
            const item = await ItemsModels.findById(req.params.id);
            res.status(200).json({
                message: "Get one item",
                data: item
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error",
                error: error.message
            });
        }
    },
    postItem: async (req, res) => {
        try {
            upload(req, res, async (err) => {
                if(err instanceof multer.MulterError){
                    res.status(500).json({
                        message: "Internal server error",
                        error: err.message
                    });
                }else if(err){
                    res.status(500).json({
                        message: "Internal server error",
                        error: err.message
                    });
                }
                const { name,title } = req.body;
                const image = req.file.path;
                const item = await ItemsModels.create({ name, image, title });
                res.status(200).json({
                    message: "Post code item success",
                    data: item
                });
                await item.save();
            })
            } catch (error) {
                res.status(500).json({
                    message: "Internal server error",
                    error: error.message
                }
            );
        }
    },
    updateItem: async (req, res) => {
        const id = req.params.id;
        try {
            upload(req, res, async (err) => {
                if (err instanceof multer.MulterError) {
                    res.status(500).json({
                        message: "Internal server error",
                        error: err.message
                    });
                } else if (err) {
                    res.status(500).json({
                        message: "Internal server error",
                        error: err.message
                    });
                } else {
                    const image = req.file.path;
                    const { name,title } = req.body;
    
                    const updatedItem = await ItemsModels.findByIdAndUpdate(id, { name, image, title }, { new: true });
                    res.status(200).json({
                        message: "Update item success",
                        data: updatedItem
                    });
                }
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                message: "Internal server error",
                error: error.message
            });
        }
    },
    
    deleteItem: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await ItemsModels.findByIdAndDelete(id);
            res.status(200).json({
                message: "Delete item success",
                data: result
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error",
                error: error.message
            });
        }
    },
    deleteAllItems: async (req, res) => {
        try {
            const result = await ItemsModels.deleteMany({});
            res.status(200).json({
                message: "Delete all items success",
                data: result
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error",
                error: error.message
            });
        }
    },
};
