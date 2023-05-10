function grafico(){
    var e1 = document.getElementById("lista1").getElementsByClassName("active");
    var e2 = document.getElementById("lista2").getElementsByClassName("active");
    var e3 = document.getElementById("lista3").getElementsByClassName("active");

    var cid1 = e1.value;
    var cid2 = e2.value;
    var tipo = e3.value;

    console.log(cid1);
    console.log(cid2);
    console.log(tipo);
      
}