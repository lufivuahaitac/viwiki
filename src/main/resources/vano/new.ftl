<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Thêm thông tin về kinh doanh của bạn. Ví dụ: Cửa hàng, nhà hàng, khách sạn, phòng khám, bệnh viện ...">
    <meta name="author" content="viwiki.org">
    <meta name="publicdate" content="today">
    <title>Thêm thông tin về kinh doanh của bạn</title>

    <!-- Favicons-->
    <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" type="image/x-icon" href="/img/apple-touch-icon-57x57-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="/img/apple-touch-icon-72x72-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="/img/apple-touch-icon-114x114-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="/img/apple-touch-icon-144x144-precomposed.png">

    <!-- GOOGLE WEB FONT -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">

    <!-- BASE CSS -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link href="/css/vendors.css" rel="stylesheet">

    <!-- YOUR CUSTOM CSS -->
    <link href="/css/custom.css" rel="stylesheet">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jodit/3.2.24/jodit.min.css">

</head>

<body ng-app="myApp" ng-controller="myController">

    <div id="page">

        <header class="header_in is_fixed menu_fixed">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-12">
                        <div id="logo">
                            <a href="index">
                                <img src="/img/logo_sticky.png" height="35" alt="" class="logo_sticky">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-9 col-12">
                        <ul id="top_menu">
                            <li><a href="write-review" class="btn_top">Write a Review</a></li>
                            <li><a href="companies-landing" class="btn_top company">For Companies</a></li>
                            <li><a href="#sign-in-dialog" id="sign-in" class="login" title="Sign In">Sign In</a></li>
                        </ul>
                        <!-- /top_menu -->
                        <a href="#menu" class="btn_mobile">
                            <div class="hamburger hamburger--spin" id="hamburger">
                                <div class="hamburger-box">
                                    <div class="hamburger-inner"></div>
                                </div>
                            </div>
                        </a>
                        <nav id="menu" class="main-menu">
                            <ul>
                                <li><span><a href="#0">Home</a></span>
                                    <ul>
                                        <li><a href="index">Home version 1</a></li>
                                        <li><a href="index-2">Home version 2 (GDPR)</a></li>
                                    </ul>
                                </li>
                                <li><span><a href="#0">Reviews</a></span>
                                    <ul>
                                        <li>
                                            <span><a href="#0">Layouts</a></span>
                                            <ul>
                                                <li><a href="grid-listings-filterstop">Grid listings 1</a></li>
                                                <li><a href="grid-listings-filterscol">Grid listings 2</a></li>
                                                <li><a href="row-listings-filterscol">Row listings</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="reviews-page">Reviews page</a></li>
                                        <li><a href="write-review">Write a review</a></li>
                                        <li><a href="confirm">Confirm page</a></li>
                                        <li><a href="user-dashboard">User Dashboard</a></li>
                                        <li><a href="user-settings">User Settings</a></li>
                                    </ul>
                                </li>
                                <li><span><a href="pricing">Pricing</a></span></li>
                                <li><span><a href="#0">Pages</a></span>
                                    <ul>
                                        <li><a href="companies-landing">Compannies Landing Page</a></li>
                                        <li><a href="all-categories">Companies Categories Page</a></li>
                                        <li><a href="category-companies-listings-filterstop">Companies Listing Page</a></li>
                                        <li><a href="blog">Blog</a></li>
                                        <li><a href="login">Login</a></li>
                                        <li><a href="register">Register</a></li>
                                        <li><a href="about">About</a></li>
                                        <li><a href="help">Help Section</a></li>
                                        <li><a href="faq">Faq Section</a></li>
                                        <li><a href="contacts">Contacts</a></li>
                                        <li>
                                            <span><a href="#0">Icon Packs</a></span>
                                            <ul>
                                                <li><a href="icon-pack-1">Icon pack 1</a></li>
                                                <li><a href="icon-pack-2">Icon pack 2</a></li>
                                                <li><a href="icon-pack-3">Icon pack 3</a></li>
                                                <li><a href="icon-pack-4">Icon pack 4</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="404">404 page</a></li>
                                    </ul>
                                </li>
                                <li><span><a href="#0">Buy template</a></span></li>
                                <li class="d-block d-sm-none"><span><a href="#0" class="btn_top">Write a review</a></span></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <!-- /row -->
            </div>
            <!-- /container -->
        </header>
        <!-- /header -->

        <main class="margin_main_container">
            <div class="container margin_60_35">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="box_general write_review">
                            <h1>Thêm thông tin kinh doanh, cơ sở kinh doanh, doanh nghiệp của bạn</h1>
                            <p>Thêm thông tin kinh doanh của bạn vào form bên dưới. Thông tin này sẽ không xuất hiện
                                cho tới khi được xác
                                thực.</p>
                            <form>
                                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
                                <div class="form-group">
                                    <label>Quốc gia (*)</label>
                                    <select ng-model="formData.country" ng-disable="true" id="country" name="country"
                                        class="js-country-selector form-control">
                                        <option value="VN" selected="selected" required>Việt Nam</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Tên đơn vị kinh doanh (*)</label>
                                    <input ng-model="formData.businessName" id="businessName" name="businessName" class="form-control"
                                        type="text" placeholder="Phòng khám Nha Khoa Văn Minh, Bác sĩ Nguyễn Văn Minh ..."
                                        required>
                                </div>
                                <div class="form-group">
                                    <label>Địa chỉ (*)</label>
                                    <input ng-autocomplete options="businessAddressOptions" details="businessAddressDetails"
                                        ng-model="formData.businessAddress" class="form-control" type="text"
                                        placeholder="Địa chỉ" autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <label>Thời gian làm việc</label>
                                    <div class="hours"><span class="weekday">Mon</span><span class="start">8:30 am</span><span>-</span><span
                                            class="end">6:00 pm</span><a class="remove-hours" href="#">Remove</a><input
                                            type="hidden" name="BusinessHours" value="0 8.5 18">
                                    </div>
                                    <div class="row" id="work_hour">
                                        <div class="col-lg-2">
                                            <select class="weekday form-control">
                                                <option value="0">Thứ 2</option>
                                                <option value="1">Thứ 3</option>
                                                <option value="2">Thứ 4</option>
                                                <option value="3">Thứ 5</option>
                                                <option value="4">Thứ 6</option>
                                                <option value="5">Thứ 7</option>
                                                <option value="6">Chủ Nhật</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-4">
                                            <select class="hours-start form-control">
                                                <option value="0 0.0">12:00 am (Đêm)</option>
                                                <option value="0 0.5">12:30 am </option>
                                                <option value="0 1.0">1:00 am </option>
                                                <option value="0 1.5">1:30 am </option>
                                                <option value="0 2.0">2:00 am </option>
                                                <option value="0 2.5">2:30 am </option>
                                                <option value="0 3.0">3:00 am </option>
                                                <option value="0 3.5">3:30 am </option>
                                                <option value="0 4.0">4:00 am </option>
                                                <option value="0 4.5">4:30 am </option>
                                                <option value="0 5.0">5:00 am </option>
                                                <option value="0 5.5">5:30 am </option>
                                                <option value="0 6.0">6:00 am </option>
                                                <option value="0 6.5">6:30 am </option>
                                                <option value="0 7.0">7:00 am </option>
                                                <option value="0 7.5">7:30 am </option>
                                                <option value="0 8.0">8:00 am </option>
                                                <option value="0 8.5">8:30 am </option>
                                                <option value="0 9.0" selected="">9:00 am </option>
                                                <option value="0 9.5">9:30 am </option>
                                                <option value="0 10.0">10:00 am </option>
                                                <option value="0 10.5">10:30 am </option>
                                                <option value="0 11.0">11:00 am </option>
                                                <option value="0 11.5">11:30 am </option>
                                                <option value="0 12.0">12:00 pm (Chiều)</option>
                                                <option value="0 12.5">12:30 pm </option>
                                                <option value="0 13.0">1:00 pm </option>
                                                <option value="0 13.5">1:30 pm </option>
                                                <option value="0 14.0">2:00 pm </option>
                                                <option value="0 14.5">2:30 pm </option>
                                                <option value="0 15.0">3:00 pm </option>
                                                <option value="0 15.5">3:30 pm </option>
                                                <option value="0 16.0">4:00 pm </option>
                                                <option value="0 16.5">4:30 pm </option>
                                                <option value="0 17.0">5:00 pm </option>
                                                <option value="0 17.5">5:30 pm </option>
                                                <option value="0 18.0">6:00 pm </option>
                                                <option value="0 18.5">6:30 pm </option>
                                                <option value="0 19.0">7:00 pm </option>
                                                <option value="0 19.5">7:30 pm </option>
                                                <option value="0 20.0">8:00 pm </option>
                                                <option value="0 20.5">8:30 pm </option>
                                                <option value="0 21.0">9:00 pm </option>
                                                <option value="0 21.5">9:30 pm </option>
                                                <option value="0 22.0">10:00 pm </option>
                                                <option value="0 22.5">10:30 pm </option>
                                                <option value="0 23.0">11:00 pm </option>
                                                <option value="0 23.5">11:30 pm </option>
                                            </select>
                                        </div>
                                        <div class="col-lg-4">
                                            <select class="hours-end form-control">
                                                <option value="0 0.5">12:30 am </option>
                                                <option value="0 1.0">1:00 am </option>
                                                <option value="0 1.5">1:30 am </option>
                                                <option value="0 2.0">2:00 am </option>
                                                <option value="0 2.5">2:30 am </option>
                                                <option value="0 3.0">3:00 am </option>
                                                <option value="0 3.5">3:30 am </option>
                                                <option value="0 4.0">4:00 am </option>
                                                <option value="0 4.5">4:30 am </option>
                                                <option value="0 5.0">5:00 am </option>
                                                <option value="0 5.5">5:30 am </option>
                                                <option value="0 6.0">6:00 am </option>
                                                <option value="0 6.5">6:30 am </option>
                                                <option value="0 7.0">7:00 am </option>
                                                <option value="0 7.5">7:30 am </option>
                                                <option value="0 8.0">8:00 am </option>
                                                <option value="0 8.5">8:30 am </option>
                                                <option value="0 9.0">9:00 am </option>
                                                <option value="0 9.5">9:30 am </option>
                                                <option value="0 10.0">10:00 am </option>
                                                <option value="0 10.5">10:30 am </option>
                                                <option value="0 11.0">11:00 am </option>
                                                <option value="0 11.5">11:30 am </option>
                                                <option value="0 12.0">12:00 pm (Chiều)</option>
                                                <option value="0 12.5">12:30 pm </option>
                                                <option value="0 13.0">1:00 pm </option>
                                                <option value="0 13.5">1:30 pm </option>
                                                <option value="0 14.0">2:00 pm </option>
                                                <option value="0 14.5">2:30 pm </option>
                                                <option value="0 15.0">3:00 pm </option>
                                                <option value="0 15.5">3:30 pm </option>
                                                <option value="0 16.0">4:00 pm </option>
                                                <option value="0 16.5">4:30 pm </option>
                                                <option value="0 17.0" selected="">5:00 pm </option>
                                                <option value="0 17.5">5:30 pm </option>
                                                <option value="0 18.0">6:00 pm </option>
                                                <option value="0 18.5">6:30 pm </option>
                                                <option value="0 19.0">7:00 pm </option>
                                                <option value="0 19.5">7:30 pm </option>
                                                <option value="0 20.0">8:00 pm </option>
                                                <option value="0 20.5">8:30 pm </option>
                                                <option value="0 21.0">9:00 pm </option>
                                                <option value="0 21.5">9:30 pm </option>
                                                <option value="0 22.0">10:00 pm </option>
                                                <option value="0 22.5">10:30 pm </option>
                                                <option value="0 23.0">11:00 pm </option>
                                                <option value="0 23.5">11:30 pm </option>
                                                <option value="1 0.0">12:00 am (Đêm tiếp theo)</option>
                                                <option value="1 0.5">12:30 am (ngày tiếp)</option>
                                                <option value="1 1.0">1:00 am (ngày tiếp)</option>
                                                <option value="1 1.5">1:30 am (ngày tiếp)</option>
                                                <option value="1 2.0">2:00 am (ngày tiếp)</option>
                                                <option value="1 2.5">2:30 am (ngày tiếp)</option>
                                                <option value="1 3.0">3:00 am (ngày tiếp)</option>
                                                <option value="1 3.5">3:30 am (ngày tiếp)</option>
                                                <option value="1 4.0">4:00 am (ngày tiếp)</option>
                                                <option value="1 4.5">4:30 am (ngày tiếp)</option>
                                                <option value="1 5.0">5:00 am (ngày tiếp)</option>
                                                <option value="1 5.5">5:30 am (ngày tiếp)</option>
                                                <option value="1 6.0">6:00 am (ngày tiếp)</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-2">
                                            <button type="button" value="submit" class="button btn_1"><span>Thêm</span></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Giá dịch vụ (*)</label>
                                    <div class="row" id="price_range">
                                        <div class="col-lg-3">
                                            <input ng-model="formData.fromPrice" class="form-control" type="text"
                                                placeholder="Thấp nhất">
                                        </div>
                                        ~
                                        <div class="col-lg-3">
                                            <input ng-model="formData.toPrice" class="form-control" type="text"
                                                placeholder="Cao nhất">
                                        </div>
                                        <div class="col-lg-2">
                                            <input ng-model="formData.toPrice" class="form-control" type="text"
                                                placeholder="Đơn vị">
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="row" id="addressinfo">
                                            <div class="col-lg-4">
                                                    <div class="form-group">
                                                            <label>Tỉnh/Thành Phố (*)</label>
                                                            <input class="form-control" type="text" placeholder="Tỉnh/Thành Phố" required>
                                                    </div>
                                            </div>
                                            <div class="col-lg-4">
                                                    <div class="form-group">
                                                            <label>Quận/Huyện (*)</label>
                                                            <input class="form-control" type="text" placeholder="Quận/Huyện" required>
                                                    </div>
                                            </div>
                                            <div class="col-lg-4">
                                                    <div class="form-group">
                                                            <label>Phường/Xã (*)</label>
                                                            <input class="form-control" type="text" placeholder="Phường/Xã" required>
                                                    </div>
                                            </div>
                                            <div class="col-lg-4">
                                                    <div class="form-group">
                                                            <label>ZipCode (*)</label>
                                                            <input class="form-control" type="text" placeholder="Mã bưu điện" required>
                                                    </div>
                                            </div>
                                    </div> -->
                                <div class="form-group">
                                    <label>Giới thiệu (*)</label>
                                    <textarea name="businessInfo" id="businessInfo" class="form-control" style="height: 180px;"
                                        placeholder="Giới thiệu" required></textarea>
                                </div>
                                <div class="form-group">
                                    <label>Thêm hình ảnh</label>
                                    <div class="fileupload"><input type="file" name="fileupload" accept="image/*"
                                            multiple></div>
                                </div>
                                <div class="row" id="contactInfo">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label>Điện thoại liên hệ (*)</label>
                                            <input class="form-control" placeholder="Số điện thoại" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label>Email (*)</label>
                                            <input class="form-control" placeholder="Email" required>
                                        </div>
                                    </div>

                                </div>
                                <div class="form-group">
                                    <label>Website</label>
                                    <input class="form-control" placeholder="Website">
                                </div>
                                <div class="form-group">
                                    <div class="checkboxes float-left add_bottom_15 add_top_15">
                                        <label class="container_check">Bằng việc sử dụng Dịch vụ của chúng tôi, bạn
                                            đang đồng ý với các điều khoản
                                            này. Vui lòng đọc kỹ các điều khoản này.
                                            <input type="checkbox">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <button href="confirm" type="submit" class="btn_1 button">Submit review</button>
                            </form>
                        </div>
                    </div>
                    <!-- /col -->
                    <div class="col-lg-4">
                        <div class="latest_review">
                            <h4>Recent reviews<br>for Good Electronics</h4>
                            <div class="review_listing">
                                <div class="clearfix add_bottom_10">
                                    <figure><img src="/img/avatar3.jpg" alt=""></figure>
                                    <span class="rating"><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i
                                            class="icon_star"></i><i class="icon_star empty"></i><em>4.50/5.00</em></span>
                                    <small>Shops</small>
                                </div>
                                <h3><strong>Jhon Doe</strong></h3>
                                <h4>"Avesome Experience"</h4>
                                <p>Et nec tantas accusamus salutatus, sit commodo veritus te</p>
                                <ul class="clearfix">
                                    <li><small>26.08.2018</small></li>
                                    <li><a href="reviews-page" class="btn_1 small">Read review</a></li>
                                </ul>
                            </div>
                            <!-- /review_listing -->
                            <div class="review_listing">
                                <div class="clearfix add_bottom_10">
                                    <figure><img src="/img/avatar4.jpg" alt=""></figure>
                                    <span class="rating"><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i
                                            class="icon_star"></i><i class="icon_star empty"></i><em>4.50/5.00</em></span>
                                    <small>Shops</small>
                                </div>
                                <h3><strong>Jhon Doe</strong></h3>
                                <h4>"Avesome Experience"</h4>
                                <p>Et nec tantas accusamus salutatus, sit commodo veritus te</p>
                                <ul class="clearfix">
                                    <li><small>26.08.2018</small></li>
                                    <li><a href="reviews-page" class="btn_1 small">Read review</a></li>
                                </ul>
                            </div>
                            <!-- /review_listing -->
                        </div>
                        <!-- /latest_review -->

                    </div>
                </div>
                <!-- /row -->
            </div>
            <!-- /container -->
        </main>
        <!--/main-->

        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a data-toggle="collapse" data-target="#collapse_ft_1" aria-expanded="false" aria-controls="collapse_ft_1"
                            class="collapse_bt_mobile">
                            <h3>Quick Links</h3>
                            <div class="circle-plus closed">
                                <div class="horizontal"></div>
                                <div class="vertical"></div>
                            </div>
                        </a>
                        <div class="collapse show" id="collapse_ft_1">
                            <ul class="links">
                                <li><a href="#0">About us</a></li>
                                <li><a href="#0">Faq</a></li>
                                <li><a href="#0">Help</a></li>
                                <li><a href="#0">My account</a></li>
                                <li><a href="#0">Create account</a></li>
                                <li><a href="#0">Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a data-toggle="collapse" data-target="#collapse_ft_2" aria-expanded="false" aria-controls="collapse_ft_2"
                            class="collapse_bt_mobile">
                            <h3>Categories</h3>
                            <div class="circle-plus closed">
                                <div class="horizontal"></div>
                                <div class="vertical"></div>
                            </div>
                        </a>
                        <div class="collapse show" id="collapse_ft_2">
                            <ul class="links">
                                <li><a href="#0">Shops</a></li>
                                <li><a href="#0">Hotels</a></li>
                                <li><a href="#0">Restaurants</a></li>
                                <li><a href="#0">Bars</a></li>
                                <li><a href="#0">Events</a></li>
                                <li><a href="#0">View all</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a data-toggle="collapse" data-target="#collapse_ft_3" aria-expanded="false" aria-controls="collapse_ft_3"
                            class="collapse_bt_mobile">
                            <h3>Contacts</h3>
                            <div class="circle-plus closed">
                                <div class="horizontal"></div>
                                <div class="vertical"></div>
                            </div>
                        </a>
                        <div class="collapse show" id="collapse_ft_3">
                            <ul class="contacts">
                                <li><i class="ti-home"></i>97845 Baker st. 567<br>Los Angeles - US</li>
                                <li><i class="ti-headphone-alt"></i>+61 23 8093 3400</li>
                                <li><i class="ti-email"></i><a href="#0">info@domain.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <a data-toggle="collapse" data-target="#collapse_ft_4" aria-expanded="false" aria-controls="collapse_ft_4"
                            class="collapse_bt_mobile">
                            <div class="circle-plus closed">
                                <div class="horizontal"></div>
                                <div class="vertical"></div>
                            </div>
                            <h3>Keep in touch</h3>
                        </a>
                        <div class="collapse show" id="collapse_ft_4">
                            <div id="newsletter">
                                <div id="message-newsletter"></div>
                                <form method="post" action="/assets/newsletter.php" name="newsletter_form" id="newsletter_form">
                                    <div class="form-group">
                                        <input type="email" name="email_newsletter" id="email_newsletter" class="form-control"
                                            placeholder="Your email">
                                        <input type="submit" value="Submit" id="submit-newsletter">
                                    </div>
                                </form>
                            </div>
                            <div class="follow_us">
                                <h5>Follow Us</h5>
                                <ul>
                                    <li><a href="#0"><i class="ti-facebook"></i></a></li>
                                    <li><a href="#0"><i class="ti-twitter-alt"></i></a></li>
                                    <li><a href="#0"><i class="ti-google"></i></a></li>
                                    <li><a href="#0"><i class="ti-pinterest"></i></a></li>
                                    <li><a href="#0"><i class="ti-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /row-->
                <hr>
                <div class="row">
                    <div class="col-lg-6">
                        <ul id="footer-selector">
                            <li>
                                <div class="styled-select" id="lang-selector">
                                    <select>
                                        <option value="English" selected>English</option>
                                        <option value="French">French</option>
                                        <option value="Spanish">Spanish</option>
                                        <option value="Russian">Russian</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <ul id="additional_links">
                            <li><a href="#0">Terms and conditions</a></li>
                            <li><a href="#0">Privacy</a></li>
                            <li><span>© 2018 Vanno</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <!--/footer-->
    </div>
    <!-- page -->

    <div id="toTop"></div><!-- Back to top button -->

    <!-- COMMON SCRIPTS -->
    <script src="/js/common_scripts.js"></script>
    <script src="/js/functions.js"></script>
    <script src="/js/angular.min.js"></script>
    <script src="/js/ngAutocomplete.js"></script>
    <script src="/js/ed.js"></script>
    <!-- <script src="/js/ckeditor.js"></script> -->
    <!-- <script src="//cdnjs.cloudflare.com/ajax/libs/jodit/3.2.24/jodit.min.js"></script> -->
    <script src="/assets/validate.js"></script>
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false"></script>
    <script>
        var editor = new Jodit('#businessInfo', {
            enableDragAndDropFileToEditor: true,
            saveModeInCookie: true,
            autosave: true,
            interval: 20,
            uploader: {
                url: '/uploadImage',
                headers: {
                    'X-CSRF-Token': '${_csrf.token}'
                },
                isSuccess: function (resp) {
                    return !resp.error;
                },
                getMessage: function (resp) {
                    return resp.msg;
                },
                process: function (resp) {
                    return {
                        files: resp.files || [],
                        path: resp.path,
                        baseurl: resp.baseurl,
                        error: resp.error,
                        msg: resp.msg
                    };
                },
                defaultHandlerSuccess: function (data, resp) {
                    var i, field = 'files';
                    if (data[field] && data[field].length) {
                        for (i = 0; i < data[field].length; i += 1) {
                            this.selection.insertImage(data.baseurl + data[field][i]);
                        }
                    }
                },

                // prepareData: function (data) {
                //     return data;
                // },
                // isSuccess: function (resp) {
                //     return !resp.error;
                // },
                // getMessage: function (resp) {
                //     return resp.msg;
                // },
                // process: function (resp) {
                //     return {
                //         files: resp.files || [],
                //         path: resp.path,
                //         baseurl: resp.baseurl,
                //         error: resp.error,
                //         msg: resp.msg
                //     };
                // }
            }
        });
        // var editor = ClassicEditor.create(document.querySelector('#businessInfo'), {
        //         // toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
        //         ckfinder: {
        //             uploadUrl: '/uploadImage?_csrf=${_csrf.token}'
        //         },
        //         heading: {
        //             options: [{
        //                     model: 'paragraph',
        //                     title: 'Paragraph',
        //                     class: 'ck-heading_paragraph'
        //                 },
        //                 {
        //                     model: 'heading1',
        //                     view: 'H1',
        //                     title: 'Heading 1',
        //                     class: 'ck-heading_heading1'
        //                 },
        //                 {
        //                     model: 'heading2',
        //                     view: 'H2',
        //                     title: 'Heading 2',
        //                     class: 'ck-heading_heading2'
        //                 },
        //                 {
        //                     model: 'heading3',
        //                     view: 'H3',
        //                     title: 'Heading 3',
        //                     class: 'ck-heading_heading3'
        //                 },
        //                 {
        //                     model: 'heading42',
        //                     view: 'H4',
        //                     title: 'Heading 4',
        //                     class: 'ck-heading_heading4'
        //                 }
        //             ]
        //         },
        //         language: 'vi'
        //         // autosave: {
        //         // 	save(editor) {
        //         // 		// The saveData() function must return a promise
        //         // 		// which should be resolved when the data is successfully saved.
        //         // 		return saveData(editor.getData());
        //         // 	}
        //         // }
        //     })
        //     .then(editor => {
        //         console.log(editor);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
        var debug = false;
        var app = angular.module("myApp", ['ngAutocomplete']);
        var controller = app.controller("myController", function ($scope, $http) {
            $scope.formData = {};
            $scope.formData.country = 'VN';
            $scope.businessAddressOptions = {
                country: 'vn'
            };
            $scope.businessAddressDetails = {};
            $scope.printAddress = function () {
                console.log($scope.businessAddressDetails);
            }




            $scope.locationList = [];
            $scope.delayTimer;
            $scope._csrf = '${_csrf.token}';
            $scope.delayAddressSuggest = function () {
                clearTimeout($scope.delayTimer);
                $scope.delayTimer = setTimeout(function () {
                    $scope.addressSuggest();
                }, 1000);
            };
            $scope.addressSuggest = function () {
                $.ajax({
                    type: 'POST',
                    url: 'getGeoSuggest',
                    data: 'query=' + $scope.formData.businessAddress + "&_csrf=" + $scope._csrf,
                    success: function (response) {
                        if (response.code === '00') {
                            $scope.locationList = [];
                            var data = JSON.parse(response.message);
                            for (var k in data.suggestions) {
                                $scope.locationList.push(data.suggestions[k]);
                            }
                        }
                    },
                    complete: function (data) {}
                });
            };
        });
    </script>

</body>

</html>