var fs = require("fs");
exports.createFileDir=function (url){
    if (fs.existsSync(url)) {
        return;
    } else {
        fs.mkdirSync(url,0777)
    }
};



