/**
 * Created by qiqi_ on 2016/10/10.
 */
(function() {
    BUS_register = {
        /*{
         state:0/数据访问错误1/用户名重复/2正常注册后登录
         }*/
        afterSub:function(data) {
            if (data.state==SERVER_ERROR_TYPE) {
                alert(SERVER_ERROR_MESSAGE);
            } else if (data.state == USER_ERROR_TYPE) {
                alert(SANE_USER_MESSAGE);
                ET_register.showError($("#userName")[0]);
            }  else if(data.state == REG_SUCCESS_TYPE) {
                window.location.href = "register.html";
            }
        }
    }
})();