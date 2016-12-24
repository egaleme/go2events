var events = [
{
	id: 1,
	name: "Two Faithfull To Fail",
	venue: "Rock Of Ages Christain Assembly",
	city: "Sapele Road, Benin City",
	time : "12.00PM",
	date: "Sat Jan 07 2017",
	poster: "egaleme"
	
},
{
	id: 2,
	name: "A Night With The King",
	venue: "Rock Of Ages Christain Assembly",
	city: "Sapele Road, Benin City",
	time: "5.00PM",
	date: "Sun Dec 11 2016",
	poster: "egaleme"
},
{
	id: 3,
	name: "Holy Ghost Congress",
	venue: "Redeem Camp",
	city: "Lagos-Ibadan Express Way",
	time: "6.00PM Daily",
	date: "Sun Dec 04 2016 - Tue Dec 06 2016",
	poster: "egaleme"
},
{
	id: 4,
	name: "Super Eagles vs Indomitable Lion",
	venue: "National Stadium",
	city: "Abuja",
	time: "2.00PM",
	date: "Mon Dec 26 2016",
	poster: "kele2016"
}]

var users = [
{
	id: 1,
	username: "egaleme",
	password: "2016"
},
{
	id: 2,
	username: "kele2016",
	password: "2016"
}]

function getEvents(owner) {
	var data = []
	events.forEach(function(product) {
		if (product.poster === owner) {
			data.push(product)
		}
	})
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(data)
		}, 0)
	})
}


function login(username, password) {
	var data
	users.forEach(function(user) {
		if(user.username === username && user.password === password) {
			data = user
		}
	})
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(data)
		}, 0)
	})
}

module.exports = {
	login,
	getEvents
}