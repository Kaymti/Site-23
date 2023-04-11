let form = document.forms['my-form'];
spliter();

function spliter(){
    var str = form.innerText;
    console.log(str);
    var res = str.split("");
}