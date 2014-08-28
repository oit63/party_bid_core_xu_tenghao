function Message () {

}

Message.cope_activity_bid = function (price,phone){

    var able_bidding;
    if (localStorage.is_bidding === "true") {
        able_bidding = true
    }
    if (!Signup.find_by({"phone":phone})){
        able_bidding = false;
    }
    if (able_bidding) {

        var activities = JSON.parse(localStorage.activities);
        var bidding = new Bidding(phone, price)
        var biddings = [];
        biddings.unshift(bidding)
        console.log(bidding)
        console.log(activities["1"].biddings)
        activities["1"].biddings["竞价1"] = biddings;
        Activity.save(activities);
    }
//        var activity = Activity.find_by({"name":Activity.find_current()});
//        var bidding_name = Signup.find_by({"phone":phone}).name;
//        var biddings = [];
//        biddings.unshift(new Bidding(bidding_name,price,phone));
//        activity.bids[0].biddings = biddings;
//        activity.update(activity)
//    }

}

Message.cope_activity_signup = function(name, phone) {

    var is_signing_up;
    if (localStorage.is_signing_up === 'true') {
        is_signing_up = true
    }
    if( is_signing_up)
    {
    var sign_ups = [];
    var signup = new Signup(name,phone);
    sign_ups.unshift(signup);
    var activities = JSON.parse(localStorage.activities)
    activities["1"].sign_ups = sign_ups;
    Activity.save(activities);

//        var sign_ups = new Signup(name, phone);
//        sign_ups.save();
    }
};

Message.extract = function (sms_json) {

    var useful_sms;
    useful_sms = {
        "text": sms_json.messages[0].message.replace(/\s/g, ''),
        "phone": sms_json.messages[0].phone
    };
    return useful_sms;
}
