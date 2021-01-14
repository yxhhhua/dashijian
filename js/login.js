//登录功能
//找到表单，注册submit事件--> 阻止默认行为——>收集表单数据——>Ajax提交
$('.login form').on('submit', function(e) {
    e.preventDefault();
    var data = $(this).serializeArray();
    $.ajax({
        type: "POST",
        url: 'http://www.itcbc.com:8080/api/login',
        data: data,
        //请求成功后，触发下面的success
        success: function(res) {
            //提示
            layer.msg(res.message);
            if (res.status === 0) {
                //登录成功后，把token保存到本地存储中
                localStorage.setItem('token', res.token);
                //跳转到category.html
                location.href = './category.html';
            }
        },
        //失败后触发
        error: function(xhr) {
            var res = xhr.responseJSON; //表示响应的结果
            if (res && res.status === 1) {
                layer.msg(res.message);
            }
        },
        // beforeSend: function () {
        //     //请求发送之前触发
        // },
        // complete: function (xhr) {
        //     //请求完成（成功、失败）后触发
        // }
    })
})