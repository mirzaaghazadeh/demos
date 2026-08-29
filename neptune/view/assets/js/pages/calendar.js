document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialDate: '2020-09-12',
        editable: true,
        selectable: true,
        businessHours: true,
        dayMaxEvents: true, // allow "more" link when too many events
        events: [{
                title: 'رویداد یک روز کامل',
                start: '2020-09-01'
            },
            {
                title: 'رویداد طولانی',
                start: '2020-09-07',
                end: '2020-09-10'
            },
            {
                groupId: 999,
                title: 'تکرار رویداد',
                start: '2020-09-09T16:00:00'
            },
            {
                groupId: 999,
                title: 'تکرار رویداد',
                start: '2020-09-16T16:00:00'
            },
            {
                title: 'کنفرانس',
                start: '2020-09-11',
                end: '2020-09-13'
            },
            {
                title: 'ملاقات',
                start: '2020-09-12T10:30:00',
                end: '2020-09-12T12:30:00'
            },
            {
                title: 'نهار',
                start: '2020-09-12T12:00:00'
            },
            {
                title: 'ملاقات',
                start: '2020-09-12T14:30:00'
            },
            {
                title: 'ساعت مبارک',
                start: '2020-09-12T17:30:00'
            },
            {
                title: 'شام',
                start: '2020-09-12T20:00:00'
            },
            {
                title: 'جشن تولد',
                start: '2020-09-13T07:00:00'
            },
            {
                title: 'برای گوگل کلیک کنید',
                url: 'http://google.com/',
                start: '2020-09-28'
            }
        ]
    });

    calendar.render();
});