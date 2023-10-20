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

function check() {
    let id = document.querySelector('#isikField').value
    if (id.length() != 11)
        return false;
    else
        return true;
}

// send against vote
$('#submitCredentials').click(function() {
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
