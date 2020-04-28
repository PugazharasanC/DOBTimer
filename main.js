function getTimer() {
    var timer = setInterval(function () {
        var dob = new Date(document.getElementById('dob').value);
        var currentDate = new Date().getTime();
        var diff = currentDate - dob + 19800000;
        console.log(diff);
        if (diff > 0) {
            var days = Math.floor(diff / (3600000 * 24));
            var hrs = Math.floor((diff % (3600000 * 24)) / (3600000));
            var mins = Math.floor((diff % (3600000)) / (60000));
            var secs = Math.floor((diff % (60000)) / 1000);
            document.getElementById('timer').innerHTML = days + ' Days ' + hrs + ' Hours ' + mins + ' Mins ' + secs + ' Secs';
        } else {
            document.getElementById('timer').innerHTML = 'You\'re not yet born';
        }
    }, 1000)
}