function Signup (name, phone,activity_id) {
    this.name = name;
    this.phone = phone;
    this.activity_id = String(localStorage.current_activity);
}


Signup.find_by = function(dict){

    var sign_ups = JSON.parse(localStorage.sign_ups);
    var signup = _(sign_ups).findWhere(dict);

    if(signup){
        return new Signup(signup.name, signup.phone)
    }
    return false
}
Signup.find_all_by = function(dict){

    var sign_ups = JSON.parse(localStorage.sign_ups);
    return _(sign_ups).where(dict);
}

Signup.save = function(sign_ups) {
    localStorage.setItem('sign_ups', JSON.stringify(sign_ups));
};
