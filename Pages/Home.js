var Context = require("Modules/Context")

Context.getEvents(Context.user.value)


function updateEvent(args) {
	Context.ev.value = args.data
	router.push("update")
}

function clicked(args) {
	var eve = args.data
	eve.isGoing.value = !eve.isGoing.value
	
}

function createEvent() {
	router.push("create")
}

function deleteEvent(args) {
	var item = args.data
	Context.deleteEvent(item)
}

function logout() {
	Context.logout()
	Context.ev.clear()
	router.goto("login")
}

function goBack() {
	router.goto("login")
}

module.exports = {
	logout,
	updateEvent,
	deleteEvent,
	createEvent,
	goBack,
	events: Context.events,
	clicked
}