function Signup (name, phone) {
    this.name = name;
    this.phone = phone;
}


Signup.find_by = function(dict){
    var activities = JSON.parse(localStorage.activities);
    var sign_ups = activities["1"].sign_ups;
    var signup = _(sign_ups).findWhere(dict);
    if(signup){
        return new Signup(signup.name, signup.phone)
    }
    return false
}