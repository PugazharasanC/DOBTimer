function getTimer() {
    var timer = setInterval(function () {
        var dob = new Date(document.getElementById('dob').value);
        var currentDate = new Date().getTime();
        var diff = currentDate - dob + 19800000;
        console.log(diff);
        if (diff > 0) {
            var days = Math.floor(diff / (3600000 * 24));
            var year = new Date().getFullYear() - dob.getFullYear();
            var month = new Date().getMonth() - dob.getMonth();
            var hrs = Math.floor((diff) / (3600000));
            var mins = Math.floor(diff / (60000));
            var secs = Math.floor(diff / 1000);
            if(month<=0){
                year-=1;
                month = 12*year + 12+month;
            }
            document.getElementById('year').innerHTML = year + 'Years';
            document.getElementById('month').innerHTML = month + 'Months'
            document.getElementById('days').innerHTML = days + 'Days';
            document.getElementById('hours').innerHTML = hrs + 'Hrs';
            document.getElementById('mins').innerHTML = mins + 'Mins';
            document.getElementById('secs').innerHTML = secs + ' Secs';
        } else {
            document.getElementById('year').innerHTML = 'You\'re not yet born';
            document.getElementById('month').innerHTML = '';
            document.getElementById('days').innerHTML = '';
            document.getElementById('hours').innerHTML = '';
            document.getElementById('mins').innerHTML = '';
            document.getElementById('secs').innerHTML = '';
        }
    }, 1000)
}
