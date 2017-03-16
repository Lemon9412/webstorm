/**
 * Created by qiqi_ on 2016/9/26.
 */
(function() {
    //加载http模块
    var http = require("http");
    //创建服务对象，并编写创建成功后的回调函数
    //服务对象将不监听对指定ip制定端口的http请求
    var server = http.createServer(function(request,response) {
        //回调函数中的request为客户端请求对象，可以通过该对象获取客户端信息
        //reponse为服务端响应对象，用于对客户端输出数据

        //编写标题头，200为正常响应，响应类型为文本内容
        response.writeHead(200,{"Content-Type":"text/plain"});
        //向客户端输入内容
        response.end("hello world");
    });
    //监听的端口以及ip
    server.listen(8337,"127.0.0.1");
})();