$(".gnb li").hover(
    function(){
        $(this).children(".sub").stop().slideDown();
    },
    function(){
        $(this).children(".sub").stop().slideUp();
    }
);

// $(".gnb li").click(
//     function(){
//         $(".sub").stop().slideUp();
//         $(this).children(".sub").stop().slideToggle();
//     }
// );