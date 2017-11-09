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

		storeData: function(namespace, data) {
			console.log("storing data:", data);
			return localStorage.setItem(namespace, JSON.stringify(data));

		},

		getData: function(namespace) {
			console.log("requested data");
			
			fetch("http://localhost:3000/tasks")
				.then(response => response.json())
				.then(json => console.log("in mongo:",json));

			var data = localStorage.getItem(namespace);
			console.log("in localStorage", JSON.parse(data));

			return data ? JSON.parse(data) : [];

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
