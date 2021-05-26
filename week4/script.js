function clickfunction(){
    var element = document.getElementById('myinput');
    alert(element.value);
}
function myLoadFunction(){
    var element = document.getElementById('mybutton');
    element.addEventListener('click', clickfunction);

}

document.addEventListener('DOMContentLoaded', myLoadFunction);
