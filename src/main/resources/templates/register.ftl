<!DOCTYPE html>
<head>
  <meta charset="UTF-8">
  <meta name="_csrf" content="${_csrf.token}"/>
  <meta name="_csrf_header" content="${_csrf.headerName}"/>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Material Login Form</title>
  <link rel="stylesheet" href="/css/login.css">
  <link href="/css/bootstrap.min.css" rel="stylesheet">
  
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-4 col-md-offset-4">
                <h1 class="text-center login-title">Đăng ký</h1>
                <div class="account-wall">
                    <img class="profile-img" src="/images/user.jpg"
                        alt="">
                    <form name="user" class="form-signin" action="/register" method="post">
                        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                        <input type="text" name="name" class="form-control" placeholder="Họ và tên" required autofocus>
                        <input type="email" name="userName" class="form-control" placeholder="Email" required>
                        <label class="checkbox pull-left">
                            <input type="checkbox" name="term" required>
                            Đồng ý với <a href="">điều khoản và nội quy</a>.
                        </label>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Đăng ký</button>
                        <p class="error-msg">
                        </p>
                    </form>
                </div>
                <a href="/login" class="text-center  new-account">Đăng nhập nếu đã có tài khoản</a>
            </div>
        </div>
    </div>
</body>
</html>
