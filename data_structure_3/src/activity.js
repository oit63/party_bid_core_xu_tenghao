function Activity(name) {
    this.id = String(Activity.generate_id());
    this.name = name
}

Activity.prototype.create = function() {

    var activities = JSON.parse(localStorage.activities);
    activities.unshift(this);
    Activity.save(activities);
    Activity.update();
};

Activity.prototype.update=function () {
    var self=this;
    var activities = _.collect(Activity.find_all(), function(activity){
        if(activity.name === self.name) {return activity = self;} return activity });
    Activity.save(activities);
};

Activity.find_by = function(dict) {
    var activity = Activity.find_current()
    if(activity){
        var new_activity = new Activity(activity.name, activity.sign_ups, activity.bids);
        return new_activity;
    }
    return false;
};

Activity.find_current_id = function() {
    return localStorage.current_activity_id;
};

Activity.find_current = function() {
    return find_all()[Activity.find_current_id()]
};

Activity.find_all = function() {
    return JSON.parse(localStorage.getItem('activities'));
};

Activity.generate_id =function (){
    return JSON.parse(localStorage.activity_id_generator);
}
Activity.update = function () {
    Activity.update_current_activity();
    Activity.update_id_generator();
    Activity.update_ids();
}
Activity.update_ids =function (){
    var ids =[];
    ids = _.range(0, Activity.generate_id());
    ids = _.map(ids, function(num){ return String(num); });
    localStorage.activity_ids = JSON.stringify(ids)
}
Activity.update_current_activity =function (){
    localStorage.current_activity = String(Activity.generate_id())
}
Activity.update_id_generator =function (){
    localStorage.activity_id_generator = JSON.parse(localStorage.activity_id_generator) + 1;
}

Activity.save = function(activities) {

    localStorage.setItem('activities', JSON.stringify(activities));
};
