ko.bindingHandlers.slideGreen = {
    update: function (element, valueGetter, bindings) {
        // First get the latest data that we're bound to
        var tick = valueGetter();
        // Next, whether or not the supplied model property is observable, get its current value
        var tickUnobservable = ko.unwrap(tick);
        // Grab some more data from another binding property
        var duration = bindings.get('slideSpeed'); // 400ms is default duration unless otherwise specified

        // Now manipulate the DOM element
            $(element).effect("explode", duration); // Make the element visible
    }
};

ko.bindingHandlers.slideOrange = {
    update: function (element, valueGetter, bindings, view, trafficBindingContext) {
        $(element).css("visibility", "visible"); // Make the element visible
        // First get the latest data that we're bound to
        var tick = valueGetter();
        // Next, whether or not the supplied model property is observable, get its current value
        var tickUnobservable = ko.unwrap(tick);
        // Grab some more data from another binding property
        var duration = bindings.get('slideSpeed'); // 400ms is default duration unless otherwise specified

        // Now manipulate the DOM element
        setTimeout(function () {
            $(element).effect("pulsate", duration); // Make the element visible
            if (trafficBindingContext.$data.unlockGates()) {
                setTimeout(function () {
                    $(element).css("visibility", "hidden"); // Make the element visible
                    trafficBindingContext.$data.unlockGates(false);
                }, 1000);
            }
            else {
                setTimeout(function () {
                    $(element).css("visibility", "hidden"); // Make the element visible
                    trafficBindingContext.$data.unlockGates(true);
                }, 10000);
            }


        }, 200);
    }
};


ko.bindingHandlers.slideRed = {
    update: function (element, valueGetter, bindings) {
        // First get the latest data that we're bound to
        var tick = valueGetter();
        // Next, whether or not the supplied model property is observable, get its current value
        var tickUnobservable = ko.unwrap(tick);
        // Grab some more data from another binding property
        var duration = bindings.get('slideSpeed'); // 400ms is default duration unless otherwise specified

        // Now manipulate the DOM element
            $(element).effect("explode", duration); // Make the element visible
    }
};



ko.bindingHandlers.tickMessageChecker = {
    update: function (element, valueGetter, bindings, view, trafficBindingContext) {

        if (trafficBindingContext.$data.isMessageVisible()) {
            $(element).css("visibility", "visible"); // Make the element visible
        }

        // First get the latest data that we're bound to
        var tick = valueGetter();
        // Next, whether or not the supplied model property is observable, get its current value
        var tickUnobservable = ko.unwrap(tick);
        // Grab some more data from another binding property
        var duration = bindings.get('slideSpeed'); // 400ms is default duration unless otherwise specified

        if (tickUnobservable < 30) {
            $(element).css("color", "lightblue"); // Make the element visible
            $(element).effect("shake", duration); // Make the element visible
        }

        if (tickUnobservable < 15) {
            $(element).css("background-color", "cyan"); // Make the element visible
            $(element).css("color", "red"); // Make the element visible
            $(element).css("font-size", "40px"); // Make the element visible
            $(element).effect("pulsate", duration); // Make the element visible
        }

        if (tickUnobservable < 10) {
            $(element).prop("innerHTML", "Time is up :("); // Make the element visible
            $(element).css("border-width", "0"); // Make the element visible
            $(element).effect("explode", 3000); // Make the element visible
            setTimeout(function () {
                $(element).css("visibility", "hidden");
                        trafficBindingContext.$data.isMessageVisible(false);
                        }, 3000);
        }


        if (tickUnobservable < -15) {
            $(element).css("visibility", "visible");
            trafficBindingContext.$data.isMessageVisible(true);
            $(element).prop("innerHTML", ""); // Make the element visible
        }
    }
};
