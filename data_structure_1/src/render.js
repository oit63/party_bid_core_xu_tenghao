transform_bids_to_view_model = function(current_activity){
    var activity = Activity.find_by({"name":current_activity});
    return activity.bids
}

transform_biddings_to_view_model = function (current_activity, bid_name){
    var bid =  _(Activity.find_by({"name":current_activity}).bids).findWhere({"name":bid_name});
    var new_biddings = [];
    new_biddings.unshift(bid.biddings[1]);
    return new_biddings
}

render_sign_ups = function (current_activity) {
    var activity = Activity.find_by({"name":current_activity});
    return activity.sign_ups;
}