function peticionAjax (metodo, recurso, ctrlInput) {
    var ajax = new XMLHttpRequest ();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            respuestaAjax (this, ctrlInput);
        }
    };
    ajax.open (metodo, recurso, true);
    ajax.send ();
}

function respuestaAjax(ajax, ctrlInput) {
    var html = ajax.responseText;
    ctrlInput.value = html;
}