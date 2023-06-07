/* Abrir e fechar ao clicar na caixa*/
const wrapper1 = document.querySelector(".wrapper.cid1");
const wrapper2 = document.querySelector(".wrapper.cid2");
const wrapper3 = document.querySelector(".wrapper.tipo");
options1 = wrapper1.querySelector(".options.cid1");
options2 = wrapper2.querySelector(".options.cid2");
options3 = wrapper3.querySelector(".options.tipo");
var searchInp1 = wrapper1.querySelector("input");
var searchInp2 = wrapper2.querySelector("input");
var searchInp3 = wrapper3.querySelector("input");
selectBtn1 = document.querySelector(".select-btn.cid1");
selectBtn2 = document.querySelector(".select-btn.cid2");
selectBtn3 = document.querySelector(".select-btn.tipo");
Graf = document.querySelector(".Grafico");

selectBtn1.addEventListener("click", () => {
    wrapper1.classList.toggle("active");
});

selectBtn2.addEventListener("click", () => {
    wrapper2.classList.toggle("active");
});

selectBtn3.addEventListener("click", () => {
    wrapper3.classList.toggle("active");
});

/* */

let Sugestao = [
    "Aparecida","Arapeí","Areias","Bananal","Caçapava","Cachoeira Paulista","Campos do Jordão",
    "Canas","Caraguatatuba","Cruzeiro","Cunha","Guaratinguetá","Igaratá","Ilhabela",
    "Jacareí","Jambeiro","Lagoinha","Lavrinhas","Lorena","Monteiro Lobato","Natividade da Serra",
    "Paraibuna","Pindamonhangaba","Piquete","Potim","Queluz","Redenção da Serra","Roseira",
    "Santa Branca","Santo Antônio do Pinhal","São Bento do Sapucaí",
    "São José do Barreiro","São José dos Campos","São Luiz do Paraitinga","São Sebastião",
    "Silveiras","Taubaté","Tremembé","Ubatuba"
];

let tipo = [
    "Populacão","IDH","Escolaridade","PIB","Área Territorial","Mortalidade Infantil",
    "Poluicao (AQI)"
];

let populacao = [
    "36.211","2.452","3.906","11.039","95.752","33.827","52.713","5.268","125.194","82.895","21.373",
    "123.192","9631","36.194","237.119","6.828","4.882","7.361","89.532","4.739","6.624","18.302",
    "171.885","13495","25.603","13.788","3.827","10.888","14.925","6.843","10.907","4.141",
    "737.310","10.693","91.637","6.375","320.820","48.228","92.819"
];

let IDH = [
    "0.755", "0.697", "0.680", "0.733", "0.788", "0.764", "0.749", "0.704", "0.759","0.788",
    "0.684", "0.798", "0.711", "0.756", "0.777", "0.756", "0.693", "0.729", "0.766", "0.710",
    "0.655", "0.719", "0.773", "0.757", "0.697", "0.722", "0.657", "0.737", "0.735", "0.706",
    "0.720", "0.684", "0.807", "0.697", "0.772", "0.678", "0.800", "0.785", "0.751"
]

let Escolaridade = [
    "98.4", "96.8", "98.7", "97.1", "98", "98", "97.1", "98.3", "97.7", "97.6", "98", "97.8",
    "99.1", "98.3", "98.3", "97.7", "99", "98.5", "97.2", "96.5", "98.8", "97.2", "98.2",
    "98.8", "99.3", "98", "95.2", "98.7", "98.8", "98.3", "98.5", "95.5", "97.4", "100",
    "98.2", "98.2", "98.1", "97.8", "97.7"
];

let PIB = [
    "27206.69", "14580.15", "16212.51", "18548.14", "48021.97", "18937.50", "24355.76",
    "21705.39", "31526.24", "32357.47", "13857.37", "55935.11", "23415.10", "302099.40",
    "59957.57", "40166.87", "14199.91", "16506.35", "34835.94", "15520.44", "12955.03",
    "17820.53", "53100.44", "14751.03", "10395.45", "25405.90", "16260.01", "31343.26",
    "19156.30", "19014.90", "21921.97", "14539.84", "53646.74", "17791.25", "37830.81",
    "14132.69", "46886.82", "17013.04", "26111.17"
];

let ATerri = [
    "120.890", "305.227", "156.903", "616.429", "368.990", "287.990", "289.981", "53.261",
    "484.947", "305.699", "1407.250", "752.636", "292.953", "356.389", "464.272", "184.413",
    "255.472", "167.067", "414.160", "332.742", "833.372", "809.576", "731.355", "175.996",
    "44.643", "249.399", "309.441", "129.847", "272.238", "133.008", "252.579", "570.685",
    "1099.409", "617.315", "402.395", "414.782", "625.003", "191.094", "708.105"
];

let Mortalidade = [
    "14.2", "21", "63", "11", "5.29", "20.64", "5.93", "27.4", "11.27", "7.98", "4.33",
    "12.85", "7.04", "6.15", "9.73", "30", "27.03", "24", "11.54", "26.4", "18.87", "5.13",
    "10.71", "7.81", "11.49", "38", "22.22", "16.26", "6.85", "34", "9", "46.51", "944",
    "10", "15.28", "30", "9.54", "10.29", "7.45"
];

let Poluicao = [
    "31", "27", "22", "42", "26", "24", "22", "24", "27", "24", "26", "24", "34", "28",
    "34", "31", "25", "24", "24", "26", "27", "31", "25", "23", "24", "26", "27", "25",
    "29", "24", "22", "25", "28", "27", "28", "37", "27", "41", "27"
];

function addSugestao1(selectedCid) {
    value1 = selectedCid;
    options1.innerHTML = "";
    Sugestao.forEach(Sugestao => {
        let isSelected = Sugestao == selectedCid ? "selected" : "";
        let li = `<li onclick="updateNameCid(this)" class="${isSelected}">${Sugestao}</li>`;
        options1.insertAdjacentHTML("beforeend", li);
    });
}

function addSugestao2(selectedCid) {
    value2 = selectedCid;
    options2.innerHTML = "";
    Sugestao.forEach(Sugestao => {
        let isSelected = Sugestao == selectedCid ? "selected" : "";
        let li = `<li onclick="updateNameCid(this)" class="${isSelected}">${Sugestao}</li>`;
        options2.insertAdjacentHTML("beforeend", li);
    });
}

function addTipo(selectedTipo) {
    value3 = selectedTipo;
    options3.innerHTML =  "";
    tipo.forEach(tipo => {
        let isSelected = tipo == selectedTipo ? "selected" : "";
        let li = `<li onclick="updateNameTipo(this)" class="${isSelected}">${tipo}</li>`;
        options3.insertAdjacentHTML("beforeend", li);
    });
}

function updateNameCid(selectedLi){
  if(wrapper1.classList.contains("active")){
   searchInp1.value = "";
   addSugestao1(selectedLi.innerText);
   wrapper1.classList.remove("active");
   selectBtn1.firstElementChild.innerText = selectedLi.innerText;
  }
  else{
    searchInp2.value = "";
    addSugestao2(selectedLi.innerText);
    wrapper2.classList.remove("active");
    selectBtn2.firstElementChild.innerText = selectedLi.innerText;
  }
}

function updateNameTipo(selectedLi){
   searchInp3.value = "";
   addTipo(selectedLi.innerText);
   wrapper3.classList.remove("active");
   selectBtn3.firstElementChild.innerText = selectedLi.innerText;
}

addSugestao1();
addSugestao2();
addTipo();

searchInp1.addEventListener("keyup", () => {
    let arr = [];
    let searchedVal = searchInp1.value.toLowerCase();
    arr = Sugestao.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li onclick="updateNameCid(this)">${data}</li>`).join("");
    options1.innerHTML = arr ? arr : `<p>Nenhuma cidade encontrada!<p>`;
});

searchInp2.addEventListener("keyup", () => {
    let arr = [];
    let searchedVal = searchInp2.value.toLowerCase();
    arr = Sugestao.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li onclick="updateNameCid(this)">${data}</li>`).join("");
    options2.innerHTML = arr ? arr : `<p>Nenhuma cidade encontrada!<p>`;
});

searchInp3.addEventListener("keyup", () => {
    let arr = [];
    let searchedVal = searchInp3.value.toLowerCase();
    arr = tipo.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li onclick="updateNameTipo(this)">${data}</li>`).join("");
    options3.innerHTML = arr ? arr : `<p>Nenhum tipo encontrado!<p>`;
});

var value1;  /* cidade 1 */
var value2;  /* cidade 2 */
var value3;  /* tipo de dado*/

function grafico(){ 

    let arr1;
    let arr2;
    let i;
    let j;
    var c;
    let value10 = encodeURIComponent(value1)
    let value20 = encodeURIComponent(value2)

  for(j = 0; j < Sugestao.length; j++){
    if (Sugestao[j] == value1){
        break;
    }
  }
  for(i = 0; i < Sugestao.length; i++){
    if (Sugestao[i] == value2 ){
        break;
    }
  }

  if(value3 == "IDH"){
    arr1 = IDH[j];
    arr2 = IDH[i];
    c  = "https://quickchart.io/chart?width=250&height=200&chart={type:'bar',data:{labels:['" + value10 + "','" + value20 + "'],datasets:[{label:'IDH',data:[" + arr1 + "," + arr2 + "]}]}}";
    document.getElementById('Garf').src = c
    document.getElementById('titulo').innerHTML = '<h1> Indice de Desenvolvimento Humano </h1>';
    document.getElementById('info1').innerHTML = '<h2>'+value1+' : '+arr1+'</h2>';
    document.getElementById('info2').innerHTML = '<h2>'+value2+' : '+arr2+'</h2>';
  }
  else if(value3 == "Mortalidade Infantil"){
    arr1 = Mortalidade[j];
    arr2 = Mortalidade[i];
    c = "https://quickchart.io/chart?width=250&height=200&chart={type:'bar',data:{labels:['" + value10 + "','" + value20 + "'],datasets:[{label:'Mortalidade',data:[" + arr1 + "," + arr2 + "]}]}}";
    document.getElementById('Garf').src = c
    document.getElementById('titulo').innerHTML = '<h1> Taxa de Mortalidade Infantil </h1>';
    document.getElementById('info1').innerHTML = '<h2>'+value1+' : '+arr1+' óbitos por mil nascidos vivos</h2>';
    document.getElementById('info2').innerHTML = '<h2>'+value2+' : '+arr2+' óbitos por mil nascidos vivos</h2>';
  }
  else if(value3 == "Populacao"){
    arr1 = populacao[j];
    arr2 = populacao[i];
    c = "https://quickchart.io/chart?width=250&height=200&chart={type:'bar',data:{labels:['" + value10 + "','" + value20 + "'],datasets:[{label:'Populacao',data:[" + arr1 + "," + arr2 + "]}]}}";
    document.getElementById('Garf').src = c
    document.getElementById('titulo').innerHTML = '<h1> População Total </h1>';
    document.getElementById('info1').innerHTML = '<h2>'+value1+' : '+arr1+' pessoas</h2>';
    document.getElementById('info2').innerHTML = '<h2>'+value2+' : '+arr2+' pessoas</h2>';
  }
  else if(value3 == "Escolaridade"){
    arr1 = Escolaridade[j];
    arr2 = Escolaridade[i];
    c = "https://quickchart.io/chart?width=250&height=200&chart={type:'bar',data:{labels:['" + value10 + "','" + value20 + "'],datasets:[{label:'Escolaridade',data:[" + arr1 + "," + arr2 + "]}]}}";
    document.getElementById('Garf').src = c
    document.getElementById('titulo').innerHTML = '<h1> Taxa de Escolaridade </h1>';
    document.getElementById('info1').innerHTML = '<h2>'+value1+' : '+arr1+'%</h2>';
    document.getElementById('info2').innerHTML = '<h2>'+value2+' : '+arr2+'%</h2>';
  }
  else if(value3 == "PIB"){
    arr1 = PIB[j];
    arr2 = PIB[i];
    c = "https://quickchart.io/chart?width=250&height=200&chart={type:'bar',data:{labels:['" + value10 + "','" + value20 + "'],datasets:[{label:'PIB',data:[" + arr1 + "," + arr2 + "]}]}}";
    document.getElementById('Garf').src = c
    document.getElementById('titulo').innerHTML = '<h1> Produto Interno Bruto </h1>';
    document.getElementById('info1').innerHTML = '<h2>'+value1+' : '+arr1+' R$</h2>';
    document.getElementById('info2').innerHTML = '<h2>'+value2+' : '+arr2+' R$</h2>';
  }
  else if(value3 == "Área Territorial"){
    arr1 = ATerri[j];
    arr2 = ATerri[i];
    c = "https://quickchart.io/chart?width=250&height=200&chart={type:'bar',data:{labels:['" + value10 + "','" + value20 + "'],datasets:[{label:'Área Territorial',data:[" + arr1 + "," + arr2 + "]}]}}";
    document.getElementById('Garf').src = c
    document.getElementById('titulo').innerHTML = '<h1> Área Territorial </h1>';
    document.getElementById('info1').innerHTML = '<h2>'+value1+' : '+arr1+' km²</h2>';
    document.getElementById('info2').innerHTML = '<h2>'+value2+' : '+arr2+' km²</h2>';
  }
  else if(value3 == "Poluicao (AQI)"){
    arr1 = Poluicao[j];
    arr2 = Poluicao[i];
    c = "https://quickchart.io/chart?width=250&height=200&chart={type:'bar',data:{labels:['" + value10 + "','" + value20 + "'],datasets:[{label:'Poluicao',data:[" + arr1 + "," + arr2 + "]}]}}";
    document.getElementById('Garf').src = c
    document.getElementById('info1').innerHTML = '<h2>'+value1+' : Média anual de '+arr1+' AQI </h2>';
    document.getElementById('info2').innerHTML = '<h2>'+value2+' : Média anual de '+arr2+' AQI</h2>';
  }

}