$(".collapse").on("show.bs.collapse", function(){
    $(this).parent().find(".glyphicon-triangle-right").removeClass("glyphicon-triangle-right").addClass("glyphicon-triangle-bottom");
}).on("hidden.bs.collapse", function(){
    $(this).parent().find(".glyphicon-triangle-bottom").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-right");
});

function trackEvent(action, category, label){
    if (typeof ga !== "undefined"){
        ga("send", {
            "hitType": "event",
            "eventCategory": category,
            "eventAction": action,
            "eventLabel": label,
        });
    }
}

$("[data-track]").on("click", function(){
    var trackValue = $(this).data("track"),
        trackingFields = null,
        trackingCategory = null,
        trackingLabel = null;
    
    if (trackValue.match(/([\w ]+):([\w ]+)/)){
        trackingFields = trackValue.split(":");
        trackingCategory = trackingFields[0];
        trackingLabel = trackingFields[1];
        trackEvent("click", trackingCategory, trackingLabel);
    }

});
