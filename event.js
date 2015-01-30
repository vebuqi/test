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
	},

	getRelatedTarget: function(event) {
		if (event.relatedTarget) {
			return event.relatedTarget;
		} else if (event.fromrElement) {
			return event.fromElement;
		} else if (event.toElement) {
			return event.toElement;
		}
	},

	getButton: function(event) {
		if (document.implementation.hasFeature("MouseEvents", 2.0)) {
			return event.button;
		} else {
			switch(event.button) {
				case: 0
				case: 1
				case: 3
				case: 5
				case: 7 return 0;

				case: 2
				case: 6 return 1;

				case: 4 return 2;
			}
		}
	},

	getWheelDelta: function(event) {
		if (event.wheelDelta) {
			return event.wheelDelta;
		} else {
			return -event.detail * 40;
		}
	}
};
