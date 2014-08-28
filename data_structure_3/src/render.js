render_sign_ups = function (activity_id) {
    var new_sign_ups = Signup.find_all_by({"activity_id":activity_id});
    console.log("fa")
    console.log(new_sign_ups.length)

    return new_sign_ups;
}

render_bids = function (activity_id){
   return new_bids = _(Bid.find()).where({"activity_id":activity_id})

}