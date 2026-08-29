$(document).ready(function() {

    "use strict";


    new Chart(document.getElementById("chartjs1"), { "type": "line", "data": { "labels": ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر"], "datasets": [{ "label": "اولین مجموعه داده من", "data": [65, 59, 80, 81, 56, 55, 40], "fill": false, "borderColor": "rgb(75, 192, 192)", "lineTension": 0.1 }] }, "options": {} });

    new Chart(document.getElementById("chartjs2"), { "type": "bar", "data": { "labels": ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر"], "datasets": [{ "label": "اولین مجموعه داده من", "data": [65, 59, 80, 81, 56, 55, 40], "fill": false, "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"], "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"], "borderWidth": 1 }] }, "options": { "scales": { "yAxes": [{ "ticks": { "beginAtZero": true } }] } } });

    new Chart(document.getElementById("chartjs3"), { "type": "radar", "data": { "labels": ["Eating", "نوشیدن", "خوابیدن", "طراحی", "کدنویسی", "دوچرخه سواری", "دویدن"], "datasets": [{ "label": "اولین مجموعه داده من", "data": [65, 59, 90, 81, 56, 55, 40], "fill": true, "backgroundColor": "rgba(255, 99, 132, 0.2)", "borderColor": "rgb(255, 99, 132)", "pointBackgroundColor": "rgb(255, 99, 132)", "pointBorderColor": "#fff", "pointHoverBackgroundColor": "#fff", "pointHoverBorderColor": "rgb(255, 99, 132)" }, { "label": "دومین مجموعه داده من", "data": [28, 48, 40, 19, 96, 27, 100], "fill": true, "backgroundColor": "rgba(54, 162, 235, 0.2)", "borderColor": "rgb(54, 162, 235)", "pointBackgroundColor": "rgb(54, 162, 235)", "pointBorderColor": "#fff", "pointHoverBackgroundColor": "#fff", "pointHoverBorderColor": "rgb(54, 162, 235)" }] }, "options": { "elements": { "line": { "tension": 0, "borderWidth": 3 } } } });

    new Chart(document.getElementById("chartjs4"), { "type": "doughnut", "data": { "labels": ["قرمز", "آبی", "زرد"], "datasets": [{ "label": "اولین مجموعه داده من", "data": [300, 50, 100], "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"] }] } });

});