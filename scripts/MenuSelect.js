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
    "Caçapava", "Igaratá", "Jacareí", "Jambeiro", "Monteiro Lobato","Paraibuna", "Santa Branca", 
    "São José dos Campos","Campos do Jordão","Lagoinha", "Natividade da Serra", "Pindamonhangaba",
    "Redenção da Serra", "Santo Antônio do Pinhal", "São Bento do Sapucaí","São Luiz do Paraitinga",
    "Taubaté", "Tremembé","Aparecida","Cachoeira Paulista","Canas","Cunha","Guaratinguetá","Lorena",
    "Piquete","Potim","Roseira","Arapeí", "Areias", "Bananal","Cruzeiro","Lavrinhas","Queluz",
    "São José do Barreiro","Silveiras","Caraguatatuba", "Ilhabela","São Sebastião","Ubatuba"
];

let tipo = [
    "Poluicao", "Natalidade", "Mortalidade", "Criminalidade"
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

  if (value1 == "Lorena")
    console.log("azul");
}