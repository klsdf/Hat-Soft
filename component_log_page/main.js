
//登录时的表单验证
function formValidation(type) {
    if (!type) {
        console.error("未输入类型！")
        return false
    }
    let regist_username = $("#regist_username").val()
    let regist_password = $("#regist_password").val()
    let regist_password_confirm = $("#regist_password_confirm").val()
    let regist_email = $("#regist_email").val()
    let regist_email_verification_code = $("#regist_email_verification_code").val()


    let login_username = $("#login_username").val()
    let login_password = $("#login_password").val()


    if (type == "login") {
         //前端表单校验
         if (login_username == "") {
            alert("用户名不可以为空！")
            return false
        }

        if (login_password == "") {
            alert("密码不可以为空！")
            return false
        }
    }
    if (type == "regist") {
        //前端表单校验
        if (regist_username == "") {
            alert("用户名不可以为空！")
            return false
        }

        if (regist_password == "") {
            alert("密码不可以为空！")
            return false
        }
        if (regist_password !== regist_password_confirm) {
            alert("请确保密码一致！")
            return false
        }

        if(regist_email_verification_code=="")
        {
            alert("请输入邮箱验证码！")
            return false
        }
    }

}


function isValidEmail(email) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(regex)) {
        return true;
    } else {
        return false;
    }
}


function get_verification_code() {
    let regist_email = $("#regist_email").val()
    if (regist_email == "") {
        alert("请输入邮箱链接")
        return
    }

    if(isValidEmail(regist_email)==false)
    {
        alert("请输入正确的邮箱格式！")
        return
    }

    
    fetch(serverUrl+'/youjian', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({regist_email:regist_email}),
    })
        .then(response => response.text())
        .then(data => {
            alert(data);

        })
        .catch((error) => console.error('Error:', error));

}



function register() {
    if(formValidation("regist") == false)
    {
        return
    }
    

    let regist_username = $("#regist_username").val()
    let regist_password = $("#regist_password").val()
    let regist_email = $("#regist_email").val()
    let regist_email_verification_code = $("#regist_email_verification_code").val()





    fetch(serverUrl+'/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            user_name: regist_username, 
            user_password: regist_password ,
            user_email:regist_email,
            regist_email_verification_code:regist_email_verification_code
        }),
    })
        .then(response => response.text())
        .then(data => {
            alert(data);

        })
        .catch((error) => console.error('Error:', error));
}

function login() {

    if(formValidation("login") == false)
    {
        return
    }
    
    
    let login_username = $("#login_username").val()
    let login_password = $("#login_password").val()

    fetch(serverUrl+'/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_name: login_username, user_password: login_password }),
    })
        .then(response => response.text())
        .then(data => {

            if (data) {
                alert(data)
                window.location.href = './personalPage.html';
            
            } else {
                alert('登录失败！请查看用户名密码是否正确');
            }
        })
        .catch((error) => console.error('Error:', error));
}


function switchView(view) {
    var loginContainer = document.getElementById("login-container");
    var registrationContainer = document.getElementById("registration-container");
    switch (view) {
        case "login":
            loginContainer.style.display = "block";
            registrationContainer.style.display = "none";
            break;

        case "register":
            loginContainer.style.display = "none";
            registrationContainer.style.display = "block";
            break;
    }
}