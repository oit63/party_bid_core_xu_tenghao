
function Bid(id, name ){
    this.name = name
    this.activity_id = id || String(loacalStorage.current_activity)
    this.biddings = []
}

Bid.save = function (bids){
    localStorage.bids = JSON.stringify(bids);
};

Bid.find = function (){
    return JSON.parse(localStorage.bids);
};

create_new_bid = function  (current_id){
    var bid = new Bid(current_id);
    var bids = Bid.find();
    bids.unshift(bid);
    Bid.save(bids);
};
