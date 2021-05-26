function myclickEvent (){
    alert('The button was pressed');
}

function myLoadFunction () {
    var element = document.getElementById('circle');
    element.addEventListener('click', myclickEvent);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);