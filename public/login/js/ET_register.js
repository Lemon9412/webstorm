/**
 * Created by qiqi_ on 2016/10/10.
 */
(function() {

    ET_register = {
        register:function() {
            var option = {
                type:"post",
                url:"/sysUser/register",
                beforeSubmit:ET_register.checkInfor,
                dataType:"json",
                success:BUS_register.afterSub
            };
            $("#login").ajaxForm(option);
        },
        checkInfor:function() {
            var userName = $("#userName").val().trim();
            var password = $("#password").val().trim();
            var checkPass = $("#checkPass").val().trim();
            if ((!f_check_NumOrLett(userName))||(!supLen(userName,6,10))) {
                alert("用户名由6-10位字母、数字、_、-等字符组成，请输入合法信息");
                ET_login.showError($("#userName")[0]);
                return false;
            }
            if ((!f_check_NumOrLett(password))||(!supLen(password,6,10))) {
                alert("密码由6-10位字母、数字、_、-等字符组成，请输入合法信息");
                ET_login.showError($("#password")[0]);
                return false;
            }
            if (password != checkPass) {
                alert("两次密码输入的信息不吻合");
                $("#password").val("");
                $("#checkPass").val("");
                return false;
            }
            return true;

        },
        showError:function(domObj) {
            domObj.select();
            domObj.focus();
        }
    };
    ET_register.register();
})();