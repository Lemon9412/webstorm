
exports.genId=function (){
    return "ID_" + (new Date()).getTime() + parseInt(Math.random()*10000);
};
exports.clone=function(obj){
    var result={},oClass=isClass(obj);
     if(oClass==="Object"){
         result={};
     }else if(oClass==="Array"){
         result=[];
     }else{
         return obj;
     }
    for(var key in obj){
        if(obj.hasOwnProperty(key)) {
            var copy = obj[key];
            if (isClass(copy) == "Object") {
                result[key] = arguments.callee(copy);
            } else if (isClass(copy) == "Array") {
                result[key] = arguments.callee(copy);
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
};
function isClass(o){
    if(o===null) return "Null";
    if(o===undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}
exports.arraySync = function (bsFunc,ar){
    var callback = arguments[arguments.length-1];
    if(ar.length==0){
        callback('',[]);
        return
    }
    var sendErr = false;
    var finishNum = ar.length;
    var result = [];
    var args = [0,0];
    for(var index = 2;index<arguments.length-1;++index){
        args.push(arguments[index]);
    }
    args.push(function(err,r){
        if(err){
            if(!sendErr){
                sendErr = true;
                callback(err);
            }
            return;
        }
        --finishNum;
        result[r.i] = r.v;
        if(finishNum==0){
            callback('',result);
        }
    });

    for(var i = 0; i <ar.length ; ++i){
        args[0] = ar[i];
        args[1] = i;
        bsFunc.apply(null,args);
    }
};

function toPromise(f){
    var a = Array.prototype.slice.call(arguments,1);
    var f = arguments[0];
    return new Promise(function(resolve, reject) {
        a.push(function(err,r){
            if(err){
                reject(err);
            }else{
                resolve(r);
            }
        })
        f.apply(null,a);
    });
};
exports.toPromise =toPromise;


