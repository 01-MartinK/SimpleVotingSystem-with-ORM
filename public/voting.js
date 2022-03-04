const timeLabel = document.querySelector('#timerBox');
var dt = new Date();
let last_time = Date.parse(timeLabel.textContent);
let cur_date = new Date();
let timeSeconds = 0;

console.log(last_time)

// timer for checking if can still vote
if ((cur_date.getDay() - last_time) < 1) {
    if ((cur_date.getMinutes - last_time) < 5) {
        timeLabel.innerHTML = 'Time' + '\n' + toString(timeSeconds)
    }
}

// send against vote
$('#againstBtn').click(function() {
    $.ajax({
        url: '/answer',
        method: 'post',
        dataType: 'json',
        data: { 'with': false },
    });
    setTimeout(function() {
        alert('redirecting with vote')
        window.location.href = "/result";
    }, 1000);
});


// send with vote
$('#withBtn').click(function() {
    $.ajax({
        url: '/answer',
        method: 'post',
        dataType: 'json',
        data: { 'with': true },
    });
    setTimeout(function() {
        alert('redirecting with vote')
        window.location.href = "/result";
    }, 1000);
});