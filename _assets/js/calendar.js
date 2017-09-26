var eventmodal = document.getElementById('eventModal');

var eventinfosmodal = document.getElementById('eventModalInfosContainer');

var close_button = document.getElementsByClassName("close")[0];

close_button.onclick = function() {
    eventmodal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == eventmodal) {
        eventmodal.style.display = "none";
    }
} 

$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            center: 'month,list' // buttons for switching between views
        },

        views: {
            list: {
                duration: { days: 90 },
                listDayAltFormat: 'dddd',
                buttonText: 'Liste'
            }
        },
        googleCalendarApiKey: 'AIzaSyAwOiVAPASqUo4jKdY3xpKm8Jze-1eklno',
        eventSources: [
            {
                googleCalendarId: '65hmp3c160c0lj70esb2c6oels@group.calendar.google.com',
                eventColor: 'red',
                color:'red',
                textColor: 'black',
                className: 'Pionniers'
            },
            {
                googleCalendarId: 'rrcrlqlslb2oscpml79uug37gs@group.calendar.google.com',
                eventColor: 'grey',
                color:'grey',
                textColor: 'black',
                className: 'Groupe'
            }
        ],
        eventClick: function(event) {
            if (event.url) {
                var eventinfos = "<div class=\"modal-header\"><h2>" + event.title + "</h2></div><div class=\"modal-subheader\">Calendrier:  " + event.source.className + "</div><div class=\"modal-body\">";
                if (event.location) {
                    eventinfos += "<p>Lieux: " + event.location + "</p>";
                }
                if (event.description) {
                    eventinfos += "<p>Description de l'évènement: " + event.description +"</p>";
                }
                eventinfos += "<p>Début: " + new Date(event.start._i).toLocaleString() +"</p>";
                eventinfos += "<p>Fin: " + new Date(event.end._i).toLocaleString() +"</p>";
                eventinfos += ("</div>");
                eventinfosmodal.innerHTML = eventinfos;
                eventmodal.style.display = "block";
                return false;
            }
        }
    })

});
