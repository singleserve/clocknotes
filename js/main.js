function zeroPad(t) {
    return (t < 10) ? "0" + t : t;
}

function initTimer(clockID) {
    var now = new Date();

    var h = now.getHours();
    var m = zeroPad(now.getMinutes());
    var s = zeroPad(now.getSeconds());

    document.getElementById(clockID).innerHTML = h + ":" + m + ":" + s;
    var t = window.setTimeout(function() {
        initTimer(clockID);
    }, 500);
}

function autoSaveRunner(editor) {
    window.localStorage.setItem('editor', editor.getData());
    window.setTimeout(function() {
        autoSaveRunner(editor);
    }, 500);
}

function createEditor() {
    InlineEditor
    .create(document.querySelector('#notes'))
    .then(editor => {
        var data = window.localStorage.getItem('editor');
        if (data != null) {
            editor.setData(data);
        }
        autoSaveRunner(editor);
    })
    .catch(error => {
        console.error( error );
    });
}

initTimer("clock");
createEditor();
