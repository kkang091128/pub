$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown();
        $(".nav_back").stop().slideDown();
    },
    function(){
        $(".sub").stop().slideUp();
        $(".nav_back").stop().slideUp();
    }
);

// $(".gnb").mouseover(
    
//     function(){
//         $(".sub").stop().slideDown();
//         $(".nav_back").stop().slideDown();
//     }
// );
// $(".gnb").mouseout(
//     function(){
//         $(".sub").stop().slideUp();
//         $(".nav_back").stop().slideUp();
//     }
// );