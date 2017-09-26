CountDownTimer('06/24/2018 11:59:59 PM', 'countdown');

function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = '0';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = ("00" + Math.floor((distance % _hour) / _minute)).substr(-2);
        var seconds = ("00" +Math.floor((distance % _minute) / _second)).substr(-2);

        document.getElementById(id).innerHTML = days + ' jours ';
        document.getElementById(id).innerHTML += hours + ':';
        document.getElementById(id).innerHTML += minutes + ':';
        document.getElementById(id).innerHTML += seconds;
    }

    timer = setInterval(showRemaining, 1000);
}
