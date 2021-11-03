const button = document.querySelector("#getList");
const list = document.querySelector("ul");
const status = document.querySelector("p");
const clear = document.querySelector("#clear")

const geraNumeroAleatoreo = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const geraArrayTamanhoAleatoreo = () => {
  const tamanho = geraNumeroAleatoreo(1, 15);

  let array = [];

  for (let x = 0; x < tamanho; x++) {
    array = [...array, geraNumeroAleatoreo(1, 50)];
  }
  return array;
};

const geraHash = (fn) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fn());
    }, geraNumeroAleatoreo(1, 10) * 1000);
  }).then((item) => {
    addItem(item);
    return item;
  });

const addItem = (item) => {
  const items = document.createElement("li");
  items.innerHTML = item;
  list.appendChild(items);
};

button.onclick = async () => {
  
  const promessas = [
    geraHash(geraArrayTamanhoAleatoreo),
    geraHash(geraArrayTamanhoAleatoreo),
    geraHash(geraArrayTamanhoAleatoreo),
  ];
  status.innerText = 'Gerando Chave Aleatória...'
  const result = await Promise.allSettled(promessas);
  status.innerText = "Gerada";
};

clear.onclick = () =>{
  while(list.firstChild){
    list.removeChild(list.lastChild)
  }
}