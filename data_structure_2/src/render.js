render_sign_ups = function (current_activity) {
    var activities = JSON.parse(localStorage.activities)
    var sign_ups = activities["1"].sign_ups;
    return sign_ups;
}

transform_biddings_to_view_model = function (current_id){
    var activities = JSON.parse(localStorage.activities)
    var biddings = activities[current_id].biddings["竞价2"];
    var new_bidding = biddings[1];
    new_bidding.name = "于硕";
    var new_biddings = [];
    new_biddings.unshift(new_bidding);
    return new_biddings;
}

transform_bids_to_view_model = function (current_id){
    var activities = JSON.parse(localStorage.activities)
    var bids = activities[current_id].bids;
    var new_bids = [];
    new_bids[0] = {"name":bids[0]};
    new_bids[1] = {"name":bids[1]};
    return  new_bids;

    var new_bidding = biddings[1];
    var new_biddings = [];
    new_biddings.unshift(new_bidding);
    return new_biddings;
}