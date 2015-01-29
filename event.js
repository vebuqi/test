var EventUtil = {
	addHandler: function(element, type, handler) {
		//To do something
	},

	getEvent:function(event) {
		return event? event : window.event;
	},

	getTarget:function(event) {
		return event.target || event.srcElement;
	},

	preventDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnVaule = false;
		}
	},

	removeHandler:function(element, type, handler) {
		//To do something
	},

	stopPropagation: function(event) {
		if (event.stopPropagation) {
			event.stopProgation();
		} else {
			event.cancelBubble = true;
		}
	}
};
