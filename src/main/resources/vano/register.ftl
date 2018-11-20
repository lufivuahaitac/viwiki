<!DOCTYPE html>
<html lang="en">

<body id="register_bg">

    <nav id="menu" class="fake_menu"></nav>

    <div id="login">
        <aside>
            <figure>
                <a href="index"><img src="img/logo_sticky.svg" width="140" height="35" alt="" class="logo_sticky"></a>
            </figure>
            <div class="access_social">
                <a href="#0" class="social_bt facebook">Register with Facebook</a>
                <a href="#0" class="social_bt google">Register with Google</a>
            </div>
            <div class="divider"><span>Or</span></div>
            <form autocomplete="off">
                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Name">
                    <i class="ti-user"></i>
                </div>
                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Last Name">
                    <i class="ti-user"></i>
                </div>
                <div class="form-group">
                    <input class="form-control" type="email" placeholder="Email">
                    <i class="icon_mail_alt"></i>
                </div>
                <div class="form-group">
                    <input class="form-control" type="password" id="password1" placeholder="Password">
                    <i class="icon_lock_alt"></i>
                </div>
                <div class="form-group">
                    <input class="form-control" type="password" id="password2" placeholder="Confirm Password">
                    <i class="icon_lock_alt"></i>
                </div>
                <div id="pass-info" class="clearfix"></div>
                <a href="#0" class="btn_1 rounded full-width">Register Now!</a>
                <div class="text-center add_top_10">Already have an acccount? <strong><a href="login">Sign In</a></strong></div>
            </form>
            <div class="copy">© 2018 Vanno</div>
        </aside>
    </div>
    <!-- /login -->

    <!-- COMMON SCRIPTS -->
    <script src="js/common_scripts.js"></script>
    <script src="js/functions.js"></script>
    <script src="assets/validate.js"></script>

    <!-- SPECIFIC SCRIPTS -->
    <script src="js/pw_strenght.js"></script>

</body>

</html>