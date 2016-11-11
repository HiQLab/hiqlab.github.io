var backgroundColor = ['rgb(210,120,14)',
						'rgb(25,210,0)',
						'rgb(215,120,210)',
						'rgb(103,109,30)',
						'rgb(210,8,14)']
var backgroundColorIndex = 0
var backgroundOpacityMultiplier = 1
var colorChange = true

$( document ).ready(function() {
    timeToFriday()
    cycleBackground()
});

function timeToFriday() {
	var today = new Date()
	var daysToFriday = 5-today.getDay() < 0 ? 6 : 5-today.getDay();

	if (daysToFriday == 0) {
		displayCheckeredShirt(true)
	} else {
		displayCheckeredShirt(false)
		changeSizeOfCenterDiv()
		var days = daysToFriday - 1
		var hours = 23-today.getHours()
		var minutes = 59-today.getMinutes()
		var seconds = 59-today.getSeconds()
		var string = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds"
		// cycleBackground(string);
		$("div.center").html("<p>"+string+"</p>")
	}

	setTimeout('timeToFriday()', 1000)
}

function changeSizeOfCenterDiv() {
	$("div.center").animate({height:'120px', width:'700px', fontSize:'35px'},100);
	$("div.center").animate({height:'100px', width:'600px', fontSize:'30px'},850);
}

function displayCheckeredShirt(value) {
	if (value) {
		$("div.cshirtLogo").css("opacity", 1.0)
		$("div.center").css("opacity", 1.0)
		$("div.center").html("<p>It's Checkered Shirt Friday!</p>");
		$("div.center").css("top", "-500px")
	} else {
		$("div.cshirtLogo").css("opacity", 0.0)
		$("div.center").css("opacity", 1.0)
		$("div.center").css("top", "0px")
	}
}

function cycleBackground() {
	$("div.color-layer-under").css('background-color',backgroundColor[backgroundColorIndex])
	$("div.color-layer-over").animate({opacity: 1-backgroundOpacityMultiplier/30 }, function() {
		if ($("div.color-layer-over").css("opacity") <= 0.02) {
			$("div.color-layer-over").css('background-color',backgroundColor[backgroundColorIndex])
			$("div.color-layer-over").css('opacity', '1')
			backgroundOpacityMultiplier = 1
			colorChange = false
		} else {
			backgroundOpacityMultiplier = backgroundOpacityMultiplier+1
		}
	})

	if (colorChange == false){
		if (backgroundColorIndex == (backgroundColor.length-1)) {
			backgroundColorIndex = 0
		} else {
			backgroundColorIndex = Math.min(backgroundColorIndex + 1, backgroundColor.length-1)
		}
		colorChange = true
	}
	setTimeout('cycleBackground()', 1000)
}
