<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Material Login Form</title>
  <link rel="stylesheet" href="/css/login.css">
  <link href="/css/bootstrap.min.css" rel="stylesheet">
  
</head>

<body onload='document.form-signin.username.focus();'>
  
<!-- Mixins-->
<!-- Pen Title-->
<div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
            <h1 class="text-center login-title">Đăng nhập</h1>
            <div class="account-wall">
                <img class="profile-img" src="/images/user.jpg"
                    alt="">
                <form class="form-signin" th:action="/login" method="post">
                    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                    <input type="email" name="username" class="form-control" placeholder="Email" required autofocus>
                    <input type="password" name="password" class="form-control" placeholder="Password" required>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Đăng nhập</button>
                <#if RequestParameters.error??>
                <p class="error-msg" >
                    Sai tên đăng nhập hoặc mật khẩu
                </p>
                </#if>
                <label class="checkbox pull-left">
                    <input type="checkbox" value="remember-me"> Ghi nhớ
                </label>
                <a href="#" class="pull-right forgot-pasword">Quên mật khẩu </a><span class="clearfix"></span>
                </form>
            </div>
            <a href="/register" class="text-center new-account">Tạo tài khoản </a>
        </div>
    </div>
</div>

</body>
</html>
