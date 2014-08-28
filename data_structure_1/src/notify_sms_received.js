function notify_sms_received(sms_json) {
console.log(sms_json)
    var message = Message.extract(sms_json);
    var name = message.text.slice(2);
    var phone = message.phone;
    var type = message.text.substring(0,2);
    if (type === "BM") {
        Message.cope_activity_signup(name, phone);
    }
    if (type === "JJ") {
        var price = name;
        Message.cope_activity_bid(price, phone);
    }
}

