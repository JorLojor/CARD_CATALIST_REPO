
exports.responseSucces = (res,data,statusCode,message) => {
    res.json({
        data: data,
        message: message,
        statusCode: statusCode
    });
}

exports.responseError = (data,res,statusCode,message) => {
    res.json({
        data:data,
        message: message,
        statusCode: statusCode
    });
    console.log(error.message);
}


module.exports = exports;
