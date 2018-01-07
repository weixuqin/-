function getStyle(obj, attr) {
    return obj.currentStyle?obj.currentStyle[attr]:window.getComputedStyle(obj, false)[attr];
}

function getByClassName(parent, name) {
    var aResult = [];
    var arr = parent.getElementsByTagName('*');
    for (var i=0,len=arr.length; i<len;i++) {
        if (arr[i].className===name) {
            aResult.push(arr[i]);
        }
    }
    return aResult;
}

function startMove(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var bStop = true;
        for(var attr in json) {
            var icur = 0;
            if (attr==='opacity') {
                icur = parseInt(parseFloat(getStyle(obj, attr))*100);
            } else {
                icur = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr] - icur)/8;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);

            if (icur!==json[attr]) {
                bStop = false;
            }
            if (attr==='opacity') {
                obj.style.opacity = (icur + speed) /100;
                obj.style.filter = "alpha(opacity="+(icur+speed)+")";
            } else {
                obj.style[attr] = icur + speed + 'px';
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    },30);
}