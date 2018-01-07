define(function(require,exports,module){
    var F_backToTop = function(){
        var $backToTopEle = $('<div class="backToTop"></div>');
        $backToTopEle.appendTo($("body"));
        var $backToTop = $(".backToTop");

        var F_backTo_hover = function(){
            $backToTop.hover(function(){
                //选中状态
                $backToTop.css("background-position","0px -185px")
            },
            function(){
                $backToTop.css("background-position","0px -20px")
            })
        }

        F_backTo_hover();

        var F_backTo_click = function(){
            $backToTopEle.click(function() {
                //飞起状态
                $backToTop.css("background-position","0px -385px");
                var native = function(){
                    //初始状态
                    $backToTop.css("background-position","0px -20px");
                }
                $("html, body").animate({scrollTop: 0}, 200, native);
            });
        }

        var F_backTo_click_tip = function(){
            $backToTopEle.click(function() {
                
                $backToTop.css("background-position","0px -385px");
                var native = function(){
                    $backToTopEle.unbind();
                    F_backTo_hover();
                    F_backTo_click();
                    $backToTop.css("background-position","0px -20px");
                }
                $("html, body").animate({ scrollTop: 0 }, 200,native);
            });
        }
        F_backTo_click_tip();

        var $backToTopFun = function() {
            var st_back = $(document).scrollTop(), winh_back = $(window).height(),footh = $("div.foot").height(),
                doch_back = $(document).height();
            
            (st_back > winh_back)? $backToTopEle.fadeIn(): $backToTopEle.hide();
            //IE6下的定位
            if (!window.XMLHttpRequest) {
                $backToTopEle.css("top", st_back + winh_back - 166);    
            }
        };
        $(window).bind("scroll", $backToTopFun);
        $backToTopFun();

    }
    module.exports = {
        F_backToTop: F_backToTop
    }

});