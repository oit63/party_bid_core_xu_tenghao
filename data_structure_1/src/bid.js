
function Bid(name ){
    this.name = name;
    this.biddings = [];
}

Bid.prototype.save = function() {
    var activity = Activity.find_by({"name":Activity.find_current()});
    activity.bids.unshift(this);
    activity.update();
};

create_new_bid = function  (current_activity){
    var activity = Activity.find_by({"name":current_activity});
    var bids = new Bid(name)
    bids.name = "竞价1"
    activity.bids.unshift(bids);
    activity.update(activity);
};
