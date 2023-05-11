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

function addSugestao() {
    Sugestao.forEach(Sugestao => {
        let li = `<li onclick="updateNameCid(this)">${Sugestao}</li>`;
        options1.insertAdjacentHTML("beforeend", li);
        options2.insertAdjacentHTML("beforeend", li);
    });
}

function addTipo() {
    tipo.forEach(tipo => {
        let li = `<li onclick="updateNameTipo(this)">${tipo}</li>`;
        options3.insertAdjacentHTML("beforeend", li);
    });
}

function updateNameCid(selectedLi){
  if(wrapper1.classList.contains("active")){
   wrapper1.classList.remove("active");
   selectBtn1.firstElementChild.innerText = selectedLi.innerText;
  }
  else{
    wrapper2.classList.remove("active");
    selectBtn2.firstElementChild.innerText = selectedLi.innerText;
  }
}

function updateNameTipo(selectedLi){
   wrapper3.classList.remove("active");
   selectBtn3.firstElementChild.innerText = selectedLi.innerText;
}

addSugestao();
addTipo();

searchInp1.addEventListener("keyup", () => {
    let arr = [];
    let searchedVal = searchInp1.value.toLowerCase();
    arr = Sugestao.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li>${data}</li>`).join("");
    options1.innerHTML = arr;
});

searchInp2.addEventListener("keyup", () => {
    let arr = [];
    let searchedVal = searchInp2.value.toLowerCase();
    arr = Sugestao.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li>${data}</li>`).join("");
    options2.innerHTML = arr;
});

searchInp3.addEventListener("keyup", () => {
    let arr = [];
    let searchedVal = searchInp3.value.toLowerCase();
    arr = tipo.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li>${data}</li>`).join("");
    options3.innerHTML = arr;
});