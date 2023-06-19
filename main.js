$("#content").on("click", ".tabs a", function(e) {
    e.preventDefault(),
    $(this)
        .parents(".tab-container")
        .find(".tab-content > div")
        .each(function() {
            $(this).hide();
        });
    
    $(this)
        .parents(".tabs")
        .find("a")
        .removeClass("active"),
        $(this).toggleClass("active"), $("#" + $(this).attr("src")).show();
});