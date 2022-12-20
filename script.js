// Add your answer here

$(".text-contents").hide();

$(".lesson-icon").hover(
    function(){
        $(this).parent().find(".text-contents").show();
    },

    function(){
        $(this).parent().find(".text-contents").hide();

    }
);