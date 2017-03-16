


/* 
 用途：检查输入字符串是否只由汉字、字母、数字、_、-等字符组成
 输入：
 value：字符串
 返回：
 如果通过验证返回true,否则返回false
 */
function f_check_ZhOrNumOrLett(obj,_title){    //判断是否是汉字、字母、数字、_、-等字符组成  
    var regu = "^[-0-9a-zA-Z\u0080-\u07ff\u0800-\uffff]+$";
    var re = new RegExp(regu);
    if (re.test( obj )) {
        return true;
    }
    return false;
}
/* 
 用途：检查输入字符串是否只由汉字、字母、数字、_、-和全角字符组成等字符组成
 输入：
 value：字符串
 返回：
 如果通过验证返回true,否则返回false
 */
function f_check_ZhOrNumOrLettAll(obj,_title){    //判断是否是汉字、字母、数字、_、+、-、*、/、(、)和全角字符组成等字符组成  
    var regu = "^[\uFF00-\uFFFF\u4e00-\u9fa5\()(\s| )、。，\+\.\*:_0-9a-zA-Z-]*$";
    var re = new RegExp(regu);
    if (re.test( obj )) {
        return true;
    }
    return false;
}
/* 
 用途：检查输入字符串是否只由字母、数字、_、-等字符组成
 输入：
 value：字符串
 返回：
 如果通过验证返回true,否则返回false
 */
function f_check_NumOrLett(obj,_title){    //判断是否是字母、数字、_、-等字符组成  
    var regu = "^[、_0-9a-zA-Z\-]+$";
    var re = new RegExp(regu);
    if (re.test( obj )) {
        return true;
    }
    return false;
}
//检查字符长度，如果是汉字则占2-3个字符
/* 
 用途：检查输入字符串是否只由字母、数字、_等字符组成并以字母或数字开头
 输入：
 value：字符串
 返回：
 如果通过验证返回true,否则返回false
 */
function f_check_StartWithLett(value,_title) {
    var myregexp = new RegExp("^[a-zA-Z0-9][_0-9a-zA-Z]*$");
    if (myregexp.test( value )) {
        return true;
    }
    return false;
}
/* 
 用途：检查输入字符串是否只由字母、数字、_等字符组成并以字母或数字开头
 输入：
 value：字符串
 返回：
 如果通过验证返回true,否则返回false
 */
function f_check_LNDL_L(value,_title) {
    var myregexp = new RegExp("^[a-zA-Z][_0-9a-zA-Z]*$");
    if (myregexp.test( value )) {
        return true;
    }
    return false;
}

/* 
 用途：检查输入字符串是否只由字母、数字组成并以字母开头
 输入：
 value：字符串
 返回：
 如果通过验证返回true,否则返回false
 */
function f_check_NumLett(value,_title) {
    var myregexp = new RegExp("^[0-9a-zA-Z]*$");
    if (myregexp.test( value )) {
        return true;
    }
    return false;
}

function strlen(str)
{
    var i;
    var len;
    len = 0;
    if(typeof(str)!='undefined'&&str.length>0)len =  str.replace(/[\u0080-\u07ff]/g,'**').replace(/[\u0800-\uffff]/g,'***').length ;
    return len;
}
/*判断字符长度
 *_value:需要判断的字符串
 *_maxLen：允许的最大长度
 *_alertInfo：超长后提示信息
 *return boolean
 */
function supLen(value,minLen,maxLen){
    if(typeof(maxLen)=='undefined')return false;
    if(maxLen != 0 && strlen(value) > parseInt(maxLen)) {
        return false;
    } else if(minLen != 0 && strlen(value) < parseInt(minLen)) {
        return false;
    }
    return true;
}

/* 
 * 判断是否为数字，是则返回true,否则返回false
 */
function f_check_number(obj)
{
    if (/^\d+$/.test(obj))
    {
        return true;
    }
    else
    {
        //f_alert(obj,"请输入数字");
        return false;
    }
}

/* 
 用途：检查输入对象的值是否符合E-Mail格式
 输入：str 输入的字符串
 返回：如果通过验证返回true,否则返回false
 */
function f_check_email(obj){
    var myReg = /^([-_A-Za-z0-9\.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
    if(myReg.test( obj )) return true;
    return false;
}

/* 判断是否为邮政编码 */

function f_check_zipcode(obj)
{
    if(!f_check_number(obj))
        return false;
    if(obj.value.length!=6)
    {
        return false;
    }
    return true;
}
/* 
 用途：检查输入字符串是否只由中文、字母、数字、-、@等字符组成
 输入：
 value：字符串
 返回：
 如果通过验证返回true,否则返回false
 */
function f_check_zh_num_sign(value, _title) {
    var myregexp = new RegExp("^[_@0-9a-zA-Z\u4e00-\u9fa5\-]+$");
    if (myregexp.test( value )) {
        return true;
    }
    return false;
}
function isBlank(_value,msgErr){
    if(_value==""||_value==null){
        alert(msgErr);
        return true;
    }
    return false;
}
/* 
 * 验证长度
 * strValue 需要验证的字符串
 * min 下界 
 * max 上界
 * return boolean 符合验证要求返回ture 否则返回 false
 * create by 唐宁霁
 */
function f_check_length(strValue,min,max){
    if(typeof(max)=="number" && typeof(min)=="number"){
        return new RegExp(
            "^\\d{"+min+","+max+"}$").test(
            strValue.replace(/[\u0080-\u07ff]/g,'**').replace(/[\u0800-\uffff]/g,'***').replace(/[\s\S]/g,'0'));
    }
    return false;
}



function f_check_IP(obj,_title)
{
    var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/; //匹配IP地址的正则表达式   
    if(re.test( obj.value ))
    {
        if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) return true;
    }
    return false;
} 