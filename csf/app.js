$( document ).ready(function() {
    timeToFriday()
});

function timeToFriday() {
	var today = new Date()
	var daysToFriday = 5-today.getDay() < 0 ? 6 : 5-today.getDay();

	if (daysToFriday == 0) {
		$("div.center").html("<p>It's Checkered Shirt Friday!</p>");
	} else {
		var days = daysToFriday - 1
		var hours = 23-today.getHours()
		var minutes = 59-today.getMinutes()
		var seconds = 59-today.getSeconds()
		var string = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
		$("div.center").html("<p>"+string+"</p>");
	}
	setTimeout('timeToFriday()', 1000)
}