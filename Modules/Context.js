var Backend = require("./Backend")
var Observable = require("FuseJS/Observable")

var events = Observable()
var user = Observable()
var ev = Observable()
var store = Observable()

function getEvents(poster) {
	Backend.getEvents(poster).
	then(function(data) {
		store.replaceAll(data)
		store.forEach(function(d) {
			d.isGoing = Observable(false)
			events.add(d)
	})
	}).
	catch(function(error) {
		console.log("can not load items :" + error)
	})


}


function postEvent(name, venue, city, date, time) {
var	isGoing = Observable(false)
	events.add({name: name, venue: venue, city: city, date: date, time: time, isGoing: isGoing, poster: user.value})
}

function updateEvent(id, name, venue, city, date, time, isGoing, poster) {
	for (var i = 0; i < events.length; i++) {
		var item = events.getAt(id)
		if (item.id == id) {
			item.name = name
			item.venue = venue
			item.city = city
			item.date = date
			item.time = time
			item.isGoing = isGoing
			item.poster = poster
			events.replaceAt(id, item)
			break;
		}
	}
}

function deleteEvent(item) {
	events.remove(item)
}

function login(username, password) {
return  Backend.login(username, password)
}

function logout() {
	user.clear()
	events.clear()
}

module.exports = {
	login,
	logout,
	events,
	getEvents,
	postEvent,
	updateEvent,
	deleteEvent,
	user,
	ev
}
