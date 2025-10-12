const texto = "RecaiHD";
const velocidade = 300;
const destino = document.getElementById("typewriter");

let i = 0;
function digitar() {
  if (i < texto.length) {
    destino.textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, velocidade);
  }
}

digitar();

const dadosBox = [
  {
    imagem: "img/gato-potkinbt.png",
    titulo: "Lives Porkinbr",
    membros: "+30.000 membros",
    subtitulo: "Ex-administrador",
    corSubtitulo: "#ff0000",
    link: "https://discord.gg/QJVBftSRmV"
  },
  {
    imagem: "img/ferrouk.gif",
    titulo: "Clã dos Ferreiros",
    membros: "+500 membros",
    subtitulo: "Administrador",
    corSubtitulo: "#00ffee",
    link: "https://discord.gg/fnyZ3Rwf6v"
  },
  {
    imagem: "img/recai-server.gif",
    titulo: "RecaiHD",
    membros: "+200 membros",
    subtitulo: "Dono",
    corSubtitulo: "#00ffee",
    link: "https://discord.gg/UNuYBvZREC"
  }
];

// Pré-carrega todas as imagens para evitar atraso
const imagensPrecarregadas = [];
dadosBox.forEach((item) => {
  const img = new Image();
  img.src = item.imagem;
  imagensPrecarregadas.push(img);
});

let boxIndex = 0;

// Aplica os dados iniciais ao carregar
document.getElementById("imagem-box").src = dadosBox[0].imagem;
document.getElementById("titulo-box").innerText = dadosBox[0].titulo;
document.getElementById("membros-box").innerText = dadosBox[0].membros;
document.getElementById("subtitulo-box").innerText = dadosBox[0].subtitulo;
document.getElementById("subtitulo-box").style.color = dadosBox[0].corSubtitulo;
document.getElementById("botao-box").href = dadosBox[0].link;

// Atualiza os dados a cada 5 segundos
setInterval(() => {
  boxIndex = (boxIndex + 1) % dadosBox.length;
  document.getElementById("imagem-box").src = dadosBox[boxIndex].imagem;
  document.getElementById("titulo-box").innerText = dadosBox[boxIndex].titulo;
  document.getElementById("membros-box").innerText = dadosBox[boxIndex].membros;
  document.getElementById("subtitulo-box").innerText = dadosBox[boxIndex].subtitulo;
  document.getElementById("subtitulo-box").style.color = dadosBox[boxIndex].corSubtitulo;
  document.getElementById("botao-box").href = dadosBox[boxIndex].link;
}, 5000);