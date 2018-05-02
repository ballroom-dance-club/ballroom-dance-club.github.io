function trackEvent(action, category, label){
    if (typeof ga !== "undefined"){
        ga("send", {
            hitType: "event",
            eventCategory: category,
            eventAction: action,
            eventLabel: label,
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
