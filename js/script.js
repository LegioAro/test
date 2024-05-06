$(document).ready(function(){
    $(".wrp_faq_item_caption").click(function(){
        $(this).closest(".faq_item").toggleClass("active")
    });
    $("._js_scroll").click(function(e){
        e.preventDefault();
        var item_id = $(this).prop("href").split('#').pop();;
        if (item_id) {
            var item = $("#" + item_id);
            if (item.length) {
                e.preventDefault();
                var tp = item.offset().top
                $("html,body").animate({ "scrollTop": tp }, 600);
            }
        }
    });
    Fancybox.bind(".fancybox", {
        // Your custom options
    });


});