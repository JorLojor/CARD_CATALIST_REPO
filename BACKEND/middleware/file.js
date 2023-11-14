const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets');
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(2, 8);
        const uniqueFilename = `${timestamp}-${randomString}-${file.originalname}`;
        cb(null, uniqueFilename);
    },
});

const fileFilter = (req, file, next) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        next(null, true);
    } else {
        next(new Error('File harus bertipe png, jpeg, atau jpg'), false);
    }
};

  
  const uploadFile = multer({
    storage: fileStorage,
    fileFilter: fileFilter,
  }).single('image');
  
module.exports = uploadFile;
