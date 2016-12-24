var Context = require("Modules/Context")
var Observable = require("FuseJS/Observable")

var username = Observable()
var password = Observable()
var err = Observable()

function login() {
	Context.login(username.value, password.value).
	then(function(data) {
		Context.user.value = data.username
		username.value = ""
		password.value = ""
		err.value = ""
		router.push("home")
	})
}

function goBack() {
	router.goBack()
}
var video = "Assets/jack.flv"
module.exports = {
	goBack,
	login,
	username,
	password,
	err,
	video
}