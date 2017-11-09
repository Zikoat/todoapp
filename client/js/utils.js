var app = app || {};

(function() {
	"use strict";

	app.Utils = {
		uuid: function() {
			/*jshint bitwise:false */
			var i, random;
			var uuid = "";

			for (i = 0; i < 32; i++) {
				random = (Math.random() * 16) | 0;
				if (i === 8 || i === 12 || i === 16 || i === 20) {
					uuid += "-";
				}
				uuid += (i === 12
					? 4
					: i === 16 ? (random & 3) | 8 : random
				).toString(16);
			}

			return uuid;
		},

		pluralize: function(count, word) {
			return count === 1 ? word : word + "s";
		},

		storeTodo: function(namespace, todo) {
			console.log("todo before send",JSON.stringify(todo));
			fetch("http://localhost:3000/tasks", {
				method: "POST",
				headers: {
				  "Content-type": "application/json; charset=utf-8"
				},
				body: JSON.stringify(todo)
			})
				.then(response => response.json())
				.then(data=>{
					console.log("storing data:", data);
				}).catch((err)=>console.err(err));

			//return localStorage.setItem(namespace, JSON.stringify(todo));
		},

		getData: function(namespace) {
			
			return fetch("http://localhost:3000/tasks")
				.then(response => response.json())
		},

		extend: function() {
			var newObj = {};
			for (var i = 0; i < arguments.length; i++) {
				var obj = arguments[i];
				for (var key in obj) {
					if (obj.hasOwnProperty(key)) {
						newObj[key] = obj[key];
					}
				}
			}
			return newObj;
		}
	};
})();
