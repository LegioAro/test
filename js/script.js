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

    $( ".lang_selector" ).click(function(){
        if($(this).hasClass("active")){
            $( ".lang_selector_list" ).slideUp(200);
            $( ".lang_selector" ).removeClass("active");
        }else{
            $( ".lang_selector_list" ).slideDown(200);
            $( ".lang_selector" ).addClass("active");
        }
        
    });

    $(document).click(function (e){
        var div = $( ".lang_selector" );
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $( ".lang_selector_list" ).slideUp(200);
            $( ".lang_selector" ).removeClass("active");
        }
    })

    

    Fancybox.bind(".fancybox", {
        // Your custom options
    });


});