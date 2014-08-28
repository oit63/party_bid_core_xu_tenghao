function Bid(name ){
    this.name = name;
}

create_new_bid = function  (current_id){
    var bid = new Bid(name);
    bid.name = "竞价1";
    var activities = JSON.parse(localStorage.activities);
    activities[current_id].bids.unshift(bid);
    activities[current_id].biddings["竞价1"] = [];
    Activity.save(activities);
};
