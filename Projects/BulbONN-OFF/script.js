function light(value) {
    var pic;
    if (value == 0) {
        pic = "bulboff.png";
    }
    else {
        pic = "bulbonn.png";
    }
    document.getElementById('bulb') .src=pic;
}