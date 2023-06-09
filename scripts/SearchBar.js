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
  const specialCharacters = {
    "á": "a",
    "â": "a",
    "ã": "a",
    "à": "a",
    "é": "e",
    "ê": "e",
    "í": "i",
    "ó": "o",
    "ô": "o",
    "õ": "o",
    "ú": "u",
    "ü": "u",
    "ç": "c",
    "ñ": "n",
    "^": "",
    "´": "",
    "~": ""
  };

  inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray1 = [];
    let emptyArray2 = [];
    if (userData) {
      emptyArray1 = suggestions.filter((data) => {
        return data.toLowerCase().startsWith(userData.toLowerCase());
      });
      emptyArray1 = emptyArray1.map((data) => {
        const sanitizedCityName = [...data]
            .map(char => specialCharacters[char] || char)
            .join("")
            .replace(/[^\w\s-]/g, "")
            .replace(/-/g, "_")
            .toLowerCase();
        return '<li><a href="cidades/' + encodeURIComponent(sanitizedCityName).replace(/%20/g, '-') + '.html">' + data + '</a></li>';
      });
      searchWrapper.classList.add("active");
      showSuggestions(emptyArray1);

    } else {
      searchWrapper.classList.remove("active");
    }
  };

  function showSuggestions(list) {
    let listData;
    if (!list.length) {
      userValue = inputBox.value;
      const sanitizedUserValue = userValue
        .replace(/[~^´ç]/g, "")
        .toLowerCase()
        .replace(/-/g, "_");
      listData = '<li><a href="cidades/' + encodeURIComponent(sanitizedUserValue).replace(/%20/g, '-') + '.html">' + userValue + '</a></li>';
    } else {
      listData = list.join('');
    }
    suggBox.innerHTML = listData;

    // Add event listeners to the generated li elements
    const liElements = suggBox.querySelectorAll("li");
    liElements.forEach((li) => {
      li.addEventListener("click", redirectToPage);
    });
  }

  function redirectToPage(e) {
    const cityName = e.target.textContent;
    const sanitizedCityName = cityName
      .replace(/[~^´ç]/g, "")
      .toLowerCase()
      .replace(/-/g, "_");
    const encodedCityName = encodeURIComponent(sanitizedCityName).replace(/%20/g, '-');
    const pageURL = `cidades/${encodedCityName}.html`;
    window.location.href = pageURL;
  }
  });
  