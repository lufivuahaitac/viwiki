<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="description" content="VANNO - Premium directory consumer reviews and listings template by Ansonika">
      <meta name="author" content="Ansonika">
      <title>VANNO | Premium directory consumer reviews and listings template by Ansonika.</title>
      <!-- Favicons-->
      <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
      <link rel="apple-touch-icon" type="image/x-icon" href="img/apple-touch-icon-57x57-precomposed.png">
      <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="img/apple-touch-icon-72x72-precomposed.png">
      <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="img/apple-touch-icon-114x114-precomposed.png">
      <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="img/apple-touch-icon-144x144-precomposed.png">
      <!-- GOOGLE WEB FONT -->
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
      <!-- BASE CSS -->
      <link href="css/bootstrap.min.css" rel="stylesheet">
      <link href="css/style.css" rel="stylesheet">
      <link href="css/vendors.css" rel="stylesheet">
      <!-- YOUR CUSTOM CSS -->
      <link href="css/custom.css" rel="stylesheet">
   </head>
   <body id="login_bg">
      <nav id="menu" class="fake_menu"></nav>
      <div id="preloader">
         <div data-loader="circle-side"></div>
      </div>
      <!-- End Preload -->
      <div id="login">
         <aside>
            <figure>
               <a href="index"><img src="img/logo_sticky.svg" width="140" height="35" alt="" class="logo_sticky"></a>
            </figure>
            <form class="form-signin" th:action="/login" method="post">
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
               <div class="access_social">
                  <a href="#" class="social_bt facebook">Login with Facebook</a>
                  <a href="#" class="social_bt google">Login with Google</a>
               </div>
               <div class="divider"><span>Or</span></div>
               <div class="form-group">
                  <input type="text" class="form-control" name="username" id="username" placeholder="Tài khoản">
                  <i class="icon_mail_alt"></i>
               </div>
               <div class="form-group">
                  <input type="password" class="form-control" name="password" id="password" value="" placeholder="Mật khẩu">
                  <i class="icon_lock_alt"></i>
               </div>
               <p id="errMsg">${msg!''}</p>
               <div class="clearfix add_bottom_30">
                  <div class="checkboxes float-left">
                     <label class="container_check">Remember me
                     <input type="checkbox">
                     <span class="checkmark"></span>
                     </label>
                  </div>
                  <div class="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
               </div>
               <button type="submit" class="btn_1 rounded full-width">Login to Vanno</button>
               <div class="text-center add_top_10">New to Vanno? <strong><a href="register">Sign up!</a></strong></div>
            </form>
            <div class="copy">© 2018 Vanno</div>
         </aside>
      </div>
      <!-- /login -->
      <!-- COMMON SCRIPTS -->
      <script src="js/common_scripts.js"></script>
      <script src="js/functions.js"></script>
      <script src="assets/validate.js"></script>
   </body>
</html>