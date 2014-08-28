function Signup (name, phone) {
    this.name = name;
    this.phone = phone;

}

Signup.find_by = function(dict) {
    var activity = Activity.find_by({"name":Activity.find_current()});
    var signup = _.findWhere(activity.sign_ups,dict);
    if(signup){
        return new Signup(signup.name, signup.phone);
    }
    return false;
};

Signup.prototype.save = function() {
    console.log(Activity.find_current())
    var activity = Activity.find_by({"name":"second activity"});
    console.log(activity)
    activity.sign_ups.unshift(this);
    activity.update();
};






