<#ftl encoding='UTF-8'>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="_csrf" content="${_csrf.token}"/>
        <meta name="_csrf_header" content="${_csrf.headerName}"/>
        <title>Forum :: Home Page</title>
        <!-- Bootstrap -->
        <link href="/css/bootstrap.min.css" rel="stylesheet">
        <!-- Custom -->
        <link href="/css/custom.css" rel="stylesheet">
        <!-- fonts -->
        <link href="/css/google-font.css' rel='stylesheet' type='text/css">
        <link rel="stylesheet" href="/font-awesome-4.0.3/css/font-awesome.min.css">
        <!-- CSS STYLE-->
        <link rel="stylesheet" type="text/css" href="/css/style.css" media="screen" />
        <link rel="stylesheet" type="text/css" href="/css/select2.min.css" media="screen" />\
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css">
        <script src="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js"></script>
    </head>
<body>

    <div class="container-fluid">

        <#include "headernav.ftl">

        <section class="content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 breadcrumbf">
                        <a href="/">Trang chủ</a> <span class="diviver">&gt;</span> 
                        <a href="#">Tạo Topic</a>
                        </div>
                    </div>
                </div>


            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8">
                        <!-- POST -->
                        <div class="post">
                            <form name="post" action="/new/topic" class="form newtopic" method="post">
                                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                                <div class="topwrap">
                                    <div class="userinfo pull-left">
                                        <div class="avatar">
                                            <img src="/images/avatar4.jpg" alt="">
                                            <div class="status red">&nbsp;</div>
                                            </div>

                                        <div class="icons">
                                            <img src="images/icon3.jpg" alt=""><img src="images/icon4.jpg" alt=""><img src="images/icon5.jpg" alt=""><img src="images/icon6.jpg" alt="">
                                            </div>
                                        </div>
                                    <div class="posttext pull-left">

                                        <div>
                                            <input type="text" id="title" name="title" placeholder="Tiêu đề" class="form-control" required>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                                <select name="category" id="category" class="form-control" required>
                                                    <#list taxonomyList as category>
                                                        <#if category.taxonomyType == "category" >
                                                            <option value="${category.id}">${category.taxonomyName}</option>
                                                        </#if>
                                                    </#list>
                                                </select>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <select name="tags[]" id="tags" class="form-control" multiple="multiple">
                                                    <#list taxonomyList as category>
                                                        <#if category.taxonomyType == "tag" >
                                                            <option value="${category.id}">${category.taxonomyName}</option>
                                                        </#if>
                                                    </#list>
                                                    </select>
                                                </div>
                                            </div>

                                        <div>
                                            <textarea name="content" id="content" placeholder="Nội dung" class="form-control" required></textarea>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>                              
                                <div class="postinfobot">
                                    <div class="notechbox pull-left">
                                        <input type="checkbox" name="regnotify" id="regnotify" class="form-control" checked>
                                        </div>

                                    <div class="pull-left">
                                        <label for="note">Thông báo khi có bình luận</label>
                                        </div>

                                    <div class="pull-right postreply">
                                        <div class="pull-left smile"><a href="#"><i class="fa fa-smile-o"></i></a></div>
                                        <div class="pull-left submitbtn"><button type="submit" class="btn btn-primary">Post</button></div>
                                        <div class="clearfix"></div>
                                        </div>


                                    <div class="clearfix"></div>
                                    </div>
                                </form>
                            </div><!-- POST -->

                        <div class="row similarposts">
                            <div class="col-lg-10"><i class="fa fa-info-circle"></i> <p>Bài viết <a href="#">tương tự</a>.</p></div>
                            <div class="col-lg-2 loading"><i class="fa fa-spinner"></i></div>

                            </div>

                        <!-- POST -->
                        <div class="post">
                            <div class="wrap-ut pull-left">
                                <div class="userinfo pull-left">
                                    <div class="avatar">
                                        <img src="images/avatar.jpg" alt="">
                                        <div class="status green">&nbsp;</div>
                                        </div>

                                    <div class="icons">
                                        <img src="images/icon1.jpg" alt=""><img src="images/icon4.jpg" alt="">
                                        </div>
                                    </div>
                                <div class="posttext pull-left">
                                    <h2>10 Kids Unaware of Their Halloween Costume</h2>
                                    <p>It's one thing to subject yourself to a Halloween costume mishap because, hey, that's your prerogative.</p>
                                    </div>
                                <div class="clearfix"></div>
                                </div>
                            <div class="postinfo pull-left">
                                <div class="comments">
                                    <div class="commentbg">
                                        560
                                        <div class="mark"></div>
                                        </div>

                                    </div>
                                <div class="views"><i class="fa fa-eye"></i> 1,568</div>
                                <div class="time"><i class="fa fa-clock-o"></i> 24 min</div>                                    
                                </div>
                            <div class="clearfix"></div>
                        </div><!-- POST -->


                        <!-- POST -->
                        <div class="post">
                            <div class="wrap-ut pull-left">
                                <div class="userinfo pull-left">
                                    <div class="avatar">
                                        <img src="images/avatar2.jpg" alt="">
                                        <div class="status red">&nbsp;</div>
                                        </div>

                                    <div class="icons">
                                        <img src="images/icon3.jpg" alt=""><img src="images/icon4.jpg" alt=""><img src="images/icon5.jpg" alt=""><img src="images/icon6.jpg" alt="">
                                        </div>
                                    </div>
                                <div class="posttext pull-left">
                                    <h2>What Instagram Ads Will Look Like</h2>
                                    <p>Instagram offered a first glimpse at what its ads will look like in a blog post Thursday. The sample ad, which you can see below.</p>
                                    </div>
                                <div class="clearfix"></div>
                                </div>
                            <div class="postinfo pull-left">
                                <div class="comments">
                                    <div class="commentbg">
                                        89
                                        <div class="mark"></div>
                                        </div>

                                    </div>
                                <div class="views"><i class="fa fa-eye"></i> 1,568</div>
                                <div class="time"><i class="fa fa-clock-o"></i> 15 min</div>                                    
                                </div>
                            <div class="clearfix"></div>
                        </div><!-- POST -->


                        <!-- POST -->
                        <div class="post">
                            <div class="wrap-ut pull-left">
                                <div class="userinfo pull-left">
                                    <div class="avatar">
                                        <img src="images/avatar3.jpg" alt="">
                                        <div class="status red">&nbsp;</div>
                                        </div>

                                    <div class="icons">
                                        <img src="images/icon2.jpg" alt=""><img src="images/icon4.jpg" alt="">
                                        </div>
                                    </div>
                                <div class="posttext pull-left">
                                    <h2>The Future of Magazines Is on Tablets</h2>
                                    <p>Eric Schmidt has seen the future of magazines, and it's on the tablet. At a Magazine Publishers Association.</p>
                                    </div>
                                <div class="clearfix"></div>
                                </div>
                            <div class="postinfo pull-left">
                                <div class="comments">
                                    <div class="commentbg">
                                        456
                                        <div class="mark"></div>
                                        </div>

                                    </div>
                                <div class="views"><i class="fa fa-eye"></i> 1,568</div>
                                <div class="time"><i class="fa fa-clock-o"></i> 2 days</div>                                    
                                </div>
                            <div class="clearfix"></div>
                        </div><!-- POST -->\
                    </div>
                    
                    <div class="col-lg-4 col-md-4">

                        <!-- -->
                        <div class="sidebarblock">
                            <h3>Danh mục</h3>
                            <div class="divline"></div>
                            <div class="blocktxt">
                                <ul class="cats">
                                    <#list taxonomyList as category>
                                        <#if category.taxonomyType == "category" >
                                            <li><a href="/${category.taxonomyUrl}">${category.taxonomyName} <span class="badge pull-right">${category.count}</span></a></li>
                                        </#if>
                                    </#list>
                                </ul>
                            </div>
                        </div>

                        <!-- -->
                        <div class="sidebarblock">
                            <h3>Poll of the Week</h3>
                            <div class="divline"></div>
                            <div class="blocktxt">
                                <p>Which game you are playing this week?</p>
                                <form action="#" method="post" class="form">
                                    <table class="poll">
                                        <tbody><tr>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar color1" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 90%">
                                                            Call of Duty Ghosts
                                                            </div>
                                                        </div>
                                                    </td>
                                                <td class="chbox">
                                                    <input id="opt1" type="radio" name="opt" value="1">  
                                                    <label for="opt1"></label>  
                                                    </td>
                                                </tr>
                                            <tr>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar color2" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 63%">
                                                            Titanfall
                                                            </div>
                                                        </div>
                                                    </td>
                                                <td class="chbox">
                                                    <input id="opt2" type="radio" name="opt" value="2" checked="">  
                                                    <label for="opt2"></label>  
                                                    </td>
                                                </tr>
                                            <tr>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar color3" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 75%">
                                                            Battlefield 4
                                                            </div>
                                                        </div>
                                                    </td>
                                                <td class="chbox">
                                                    <input id="opt3" type="radio" name="opt" value="3">  
                                                    <label for="opt3"></label>  
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                    </form>
                                <p class="smal">Voting ends on 19th of October</p>
                                </div>
                            </div>

                        <!-- -->
                        <div class="sidebarblock">
                            <h3>My Active Threads</h3>
                            <div class="divline"></div>
                            <div class="blocktxt">
                                <a href="#">This Dock Turns Your iPhone Into a Bedside Lamp</a>
                                </div>
                            <div class="divline"></div>
                            <div class="blocktxt">
                                <a href="#">Who Wins in the Battle for Power on the Internet?</a>
                                </div>
                            <div class="divline"></div>
                            <div class="blocktxt">
                                <a href="#">Sony QX10: A Funky, Overpriced Lens Camera for Your Smartphone</a>
                                </div>
                            <div class="divline"></div>
                            <div class="blocktxt">
                                <a href="#">FedEx Simplifies Shipping for Small Businesses</a>
                                </div>
                            <div class="divline"></div>
                            <div class="blocktxt">
                                <a href="#">Loud and Brave: Saudi Women Set to Protest Driving Ban</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-xs-12">
                        <div class="pull-left"><a href="#" class="prevnext"><i class="fa fa-angle-left"></i></a></div>
                        <div class="pull-left">
                            <ul class="paginationforum">
                                <li class="hidden-xs"><a href="#">1</a></li>
                                <li class="hidden-xs"><a href="#">2</a></li>
                                <li class="hidden-xs"><a href="#">3</a></li>
                                <li class="hidden-xs"><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">6</a></li>
                                <li><a href="#" class="active">7</a></li>
                                <li><a href="#">8</a></li>
                                <li class="hidden-xs"><a href="#">9</a></li>
                                <li class="hidden-xs"><a href="#">10</a></li>
                                <li class="hidden-xs hidden-md"><a href="#">11</a></li>
                                <li class="hidden-xs hidden-md"><a href="#">12</a></li>
                                <li class="hidden-xs hidden-sm hidden-md"><a href="#">13</a></li>
                                <li><a href="#">1586</a></li>
                                </ul>
                            </div>
                        <div class="pull-left"><a href="#" class="prevnext last"><i class="fa fa-angle-right"></i></a></div>
                        <div class="clearfix"></div>
                        </div>
                    </div>
                </div>


            </section>
        <#include "footer.ftl">

        </div>

    <!-- get jQuery from the google apis -->
             <!-- get jQuery from the google apis -->
    <script type="text/javascript" src="/js/jquery.min.js"></script>

    <script src="/js/bootstrap.min.js"></script>

    <script src="/js/select2.min.js"></script>
    <script>
        $(document).ready(function() {
            //$('#tags').select2();
            //$('#category').select2();
            $('#tags').select2({
                placeholder: "Tags",
                tags: true,
                tokenSeparators: [","],
                createTag: function (tag) {
                    return {
                        id: tag.term,
                        text: tag.term,
                        isNew : true
                    };
                }
            }).on("select2:select", function(e) {
                if(e.params.data.isNew){
                   newTAG(e);
                }
            });
        });
        var token = $("meta[name='_csrf']").attr("content");
        $.ajaxSetup({
            beforeSend: function(xhr) {
                xhr.setRequestHeader('X-CSRF-TOKEN', token);
            }
        });
        function newTAG(e){
            $.ajax({
                type: 'POST',
                url:  '/newTag',
                data: {tag:e.params.data.text},
                success: function (response) {
                    if(response===''){
                        $("#tags").next(".select2").find("li[title='" + e.params.data.text +"']").remove();
                        // Remove option
                        $("#tags").find("option[value='" + e.params.data.text +"']").prop("selected",false);
                        $("#tags").find("option[value='" + e.params.data.text +"']").replaceWith('');
                        return;
                    }
                    try {
                        var tag = JSON.parse(response);
                        $("#tags").find('[value="'+e.params.data.text+'"]').replaceWith('<option selected value="'+ tag.id +'">'+tag.taxonomyName+'</option>');
                    } catch ( ex){
                        console.log(ex);
                        $("#tags").next(".select2").find("li[title='" + e.params.data.text +"']").remove();
                        // Remove option
                        $("#tags").find("option[value='" + e.params.data.text +"']").prop("selected",false);
                        $("#tags").find("option[value='" + e.params.data.text +"']").replaceWith('');
                    }
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            });
        }
        var simplemde = new SimpleMDE({
            autosave: {
		enabled: true,
		uniqueId: "newPost",
		delay: 1000,
            },
            element: document.getElementById("content"),
            placeholder: "Nội dung",
            spellChecker: false,
            toolbarTips: true
        });
        var title = $("#title");
        var category = $("#category");
        var tags = $("#tags");
        var regnotify = $("#regnotify");
        function submit(){
            var fdt = {
                        title: title.val(),
                        category: category.val(),
                        tags: tags.val(),
                        regnotify: regnotify.val(),
                        content: simplemde.value() 
                      };
            $.ajax({
                type: 'POST',
                url:  '/new/topic',
                contentType : 'application/json; charset=utf-8',
                data: JSON.stringify(fdt),
                success: function (response) {
                    console.log(response);
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                },
                complete: function(){
                    
                }
            });
        }
        </script>
    </body>
</html>