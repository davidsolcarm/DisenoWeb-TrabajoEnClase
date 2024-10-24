//ajaxEjercicio en clase
function peticionAjax(metodo, recurso, ctrlInput, informacion) {
    //log de lo pasado
    console.log("ajax.js: ", metodo, recurso, ctrlInput, informacion)
    
    var ajax = new XMLHttpRequest();
    ajax.open(metodo, recurso, true);
    ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    ajax.onreadystatechange = function() {
        console.log(ajax.responseText)
        if(this.readyState == 4 && this.status == 200){
        }

        ctrlInput.innerHTML = ajax.responseText
    };
    ajax.send('info=' + JSON.stringify(informacion));
}


/*
function respuestaAjax(ajax, ctrlInput, informacion) {
    var html = ajax.responseText;
    ctrlInput.value = html;
}

*/