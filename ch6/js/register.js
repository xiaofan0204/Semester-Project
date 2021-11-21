$(function() {
    $('#myForm').validate({
        rules: {
            username: {
                required: true,
                rangelength: [3, 6]
            },
            password: {
                required: true,
                isPassword: true
            }
        },
        messages: {
            username: {
                required: "<img src='img/警告.png' style='vertical-align:middle'>用户名不能为空",
                rangelength: "<img src='img/警告.png' style='vertical-align:middle'>长度在3~6位哦"
            },
            password: {
                required: "<img src='img/警告.png' style='vertical-align:middle'>密码不能为空",
            }
        }
    })
    jQuery.validate.addMethod("isPassword", function(value, element) {
        var pwd = /^[a-zA-z]{1}([a-zA-Z0-9]|[._]){4,9}$/;
        return this.optional(element) || (pwd.test(valu));
    }, "请输入5-10个以字母开头，可带数字、“_”,“.”的字符串哦");
})