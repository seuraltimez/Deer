$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked"); 
});
$(".overlay li a").click(function() {
    $("#navToggle").removeClass("active");
    $(".overlay").removeClass("open");
    $("body").removeClass("locked"); 
});