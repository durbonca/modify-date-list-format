boton = document.getElementById('boton')
boton.addEventListener('click', formato)
text_box = document.getElementById('texto')
text_box_output = document.getElementById('output')

function formato() {
    //fill array 
    var text = text_box.value
    var arr = text.split("\n")
    var lineas = arr.length

    //modify array
    for (i = 0; i < lineas; i++) {
        var date = arr[i]
        arr[i] = date.replace(/^(\d{2})-(\d{2})-(\d{4})$/g, '$2-$1-$3')

    }
    //print array
    text_box_output.value = arr.join("\n");
}