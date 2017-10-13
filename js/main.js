function zeroPad(t) {
    return (t < 10) ? "0" + t : t;
}

function initTimer(clockID) {
    var now = new Date();

    var h = now.getHours();
    var m = zeroPad(now.getMinutes());
    var s = zeroPad(now.getSeconds());

    document.getElementById(clockID).innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(function() {
        initTimer(clockID);
    }, 500);
}

initTimer("clock");

InlineEditor
.create( document.querySelector('#notes'))
.catch( error => {
    console.error( error );
} );
