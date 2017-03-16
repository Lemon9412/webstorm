/**
 * Created by qiqi_ on 2016/9/26.
 */

var time = 10;
function getTime() {
    var ret = setInterval(function(){
        if(time==0) {
            clearInterval(ret);
        }
        console.log(time);
        time = time-1;
    },1000);
}
getTime();

