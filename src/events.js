const events = (() => {
    const events = {};

    function on(eventName, callBack) {
        events[eventName] = events[eventName] || [];
        events[eventName].push(callBack);
    }

    function trigger(eventName, data) {
        if (events[eventName]) {
            events[eventName].forEach(func => {
                func(data);
            });
        }
        console.log(events);
    }

    return {
        on,
        trigger
    }
})();

export default events;
