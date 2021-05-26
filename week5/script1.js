function myclickEvent (){
   var element = document.getElementById('circle');
   element.style.backgroundColor = 'blue'
}

function myLoadFunction () {
    var element = document.getElementById('circle');
    element.addEventListener('click', myclickEvent);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);