var eventUtil = {
    addHander: function (ele, type, func) {
        if (ele.addEventListener) {
            ele.addEventListener(type, func, false);
        }
        else if (ele.attachEvent) {
            attachEvent('on' + type, func)
        }
        else {
            ele['on' + type] = func;
        }
    },
    removeHander: function (ele, type, func) {
        if (ele.removeEventListener) {
            ele.addEventListener(type, func, false);
        }
        else if (ele.detachEvent) {
            detachEvent('on' + type, func)
        }
        else {
            ele['on' + type] = null;
        }
    },
    getEvent: function (e) {
        return e ? e : window.event
    },
    getType: function (e) {
        return e.type;
    },
    getElement: function (e) {
        return e.target || e.srcElement;
    },
    preventDefault: function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
    },
    stopPropagation: function (e) {
        if (e.stopPropagation) {
            e.stopPropagation()
        }
        else {
            e.cancelBubble = true;
        }
    }
}