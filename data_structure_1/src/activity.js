function Activity (activity_name,sign_ups,bids) {
    this.name = activity_name;
    this.sign_ups = sign_ups || [];
    this.bids = bids || [];
}

Activity.prototype.create = function() {
    var activities = JSON.parse(localStorage.activities);
    activities.unshift(this);
    localStorage.activities = JSON.stringify(activities);
};

Activity.prototype.active = function() {
    localStorage.current_activity = this.name;
};

Activity.prototype.update=function () {
    var self=this;
    var activities = _.collect(Activity.find_all(), function(activity){
        if(activity.name === self.name) {return activity = self;} return activity });
    Activity.save_all(activities);
};

Activity.find_by = function(dict) {
    var activity = _.findWhere(Activity.find_all(),dict);
    if(activity){
        var new_activity = new Activity(activity.name, activity.sign_ups, activity.bids);
        return new_activity
    }
    return false;
};

Activity.find_current = function() {
    return localStorage.current_activity;
};

Activity.find_all = function() {
    return JSON.parse(localStorage.getItem('activities'));
};

Activity.save_all = function(activities) {
    console.log()
    localStorage.setItem('activities', JSON.stringify(activities));
};