document.addEventListener('DOMContentLoaded', () => {

let suggestos = [
    "aparecida","arapei","areias","bananal","cacapava","cachoeira-paulista","campos-do-jordao",
    "canas","caraguatatuba","cruzeiro","cunha","guaratingueta","igarata","ilhabela",
    "jacarei","jambeiro","lagoinha","lavrinhas","lorena","monteiro-lobato","natividade-da-serra",
    "paraibuna","pindamonhangaba","piquete","potim","queluz","redencaoo-da-serra","roseira",
    "santa-branca","santo-antonio-do-pinhal","sao-bento-do-sapucai",
    "sao-jose-do-barreiro","sao-jose-dos-campos","sao-luiz-do-paraitinga","sao-sebastiao",
    "silveiras","taubate","tremembe","ubatuba"
];

let suggestions = [
    "Aparecida","Arapeí","Areias","Bananal","Caçapava","Cachoeira Paulista","Campos do Jordão",
    "Canas","Caraguatatuba","Cruzeiro","Cunha","Guaratinguetá","Igaratá","Ilhabela",
    "Jacareí","Jambeiro","Lagoinha","Lavrinhas","Lorena","Monteiro Lobato","Natividade da Serra",
    "Paraibuna","Pindamonhangaba","Piquete","Potim","Queluz","Redenção da Serra","Roseira",
    "Santa Branca","Santo Antônio do Pinhal","São Bento do Sapucaí",
    "São José do Barreiro","São José dos Campos","São Luiz do Paraitinga","São Sebastião",
    "Silveiras","Taubaté","Tremembé","Ubatuba"
];

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
  
inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = "<li>"+data+"</li>";
        });
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);

        let listItems = suggBox.getElementsByTagName("li");
        for (let i = 0; i < listItems.length; i++) {
          listItems[i].addEventListener("click", function () {
            select(this);
          });
        }
    }else{
        searchWrapper.classList.remove("active");
    }
};

function select(element){
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+userValue+'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
});