var Observable = require("FuseJS/Observable")
var Context = require("Modules/Context")

var name = Observable()
var venue = Observable()
var city = Observable()
var time = Observable()
var date = Observable()

function createEvent () {
	Context.postEvent(name.value, venue.value, city.value, date.value, time.value)
	name.clear()
	venue.clear() 
	city.clear()
    date.clear()
    time.clear()
    router.goBack()
}

function goBack() {
	router.goto("home")
}

module.exports = {
	name,
	venue,
	city,
	time,
	date,
	goBack,
	createEvent
}