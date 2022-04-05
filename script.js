console.clear();

//OBS: Copa Rio é torneio amistoso
var cartaInternacional = {
  nome: "Internacional",
  imagem:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Escudo_do_Sport_Club_Internacional.svg",
  apelido: "Colorado",
  ranking: "8º",
  atributos: {
    brasileiro: 3,
    copaDoBrasil: 1,
    libertadores: 2,
    sulAmericana: 1,
    recopa: 2,
    mundial: 1
  }
};
var cartaGremio = {
  nome: "Gremio",
  imagem:"https://upload.wikimedia.org/wikipedia/commons/2/2e/Gremio-Logo.png",
  apelido: "Tricolor Gaúcho",
  ranking: "4º",
  atributos: {
    brasileiro: 2,
    copaDoBrasil: 5,
    libertadores: 3,
    sulAmericana: 0,
    recopa: 2,
    mundial: 1
  }
};
var cartaSaoPaulo = {
  nome: "Sao Paulo",
  imagem:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg/1027px-Brasao_do_Sao_Paulo_Futebol_Clube.svg.png",
  apelido: "Soberano",
  ranking: "7º",
  atributos: {
    brasileiro: 6,
    copaDoBrasil: 0,
    libertadores: 3,
    sulAmericana: 1,
    recopa: 2,
    mundial: 3
  }
};
var cartaPalmeiras = {
  nome: "Palmeiras",
  imagem:"https://1.bp.blogspot.com/-Nx6njToEWvc/YPiBMefe9nI/AAAAAAAACBQ/uG3sEUx4otMN1omm1S6HkTnbtMMKbpHAgCLcBGAsYHQ/s512/Sociedade%2BEsportiva%2BPalmeiras.png",
  apelido: "Porco",
  ranking: "2º",
  atributos: {
    brasileiro: 10,
    copaDoBrasil: 4,
    libertadores: 3,
    sulAmericana: 0,
    recopa: 1,
    mundial: 0
  }
};
var cartaSantos = {
  nome: "Santos",
  imagem:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Santos_logo.svg/1864px-Santos_logo.svg.png",
  apelido: "Peixe",
  ranking: "6º",
  atributos: {
    brasileiro: 8,
    copaDoBrasil: 1,
    libertadores: 3,
    sulAmericana: 0,
    recopa: 1,
    mundial: 2
  }
};
var cartaCorinthians = {
  nome: "Corinthians",
  imagem:"https://i1.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/2016/11/escudo-Corinthians.png?resize=512%2C512&ssl=1",
  apelido: "Timão",
  ranking: "10º",
  atributos: {
    brasileiro: 7,
    copaDoBrasil: 3,
    libertadores: 1,
    sulAmericana: 0,
    recopa: 1,
    mundial: 2
  }
};
var cartaFlamengo = {
  nome: "Flamengo",
  imagem:"https://seeklogo.com/images/F/flamengo-remo-novo-logo-9B6DE052DB-seeklogo.com.png",
  apelido: "Mengo",
  ranking: "1º",
  atributos: {
    brasileiro: 7,
    copaDoBrasil: 3,
    libertadores: 2,
    sulAmericana: 0,
    recopa: 1,
    mundial: 1
  }
};
var cartaVasco = {
  nome: "Vasco",
  imagem:"https://upload.wikimedia.org/wikipedia/pt/a/ac/CRVascodaGama.png",
  apelido: "Gigante da Colina",
  ranking: "19º",
  atributos: {
    brasileiro: 4,
    copaDoBrasil: 1,
    libertadores: 1,
    sulAmericana: 0,
    recopa: 0,
    mundial: 0
  }
};
var cartaBotafogo = {
  nome: "Botafogo",
  imagem:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/1200px-Botafogo_de_Futebol_e_Regatas_logo.svg.png",
  apelido: "Glorioso",
  ranking: "48º",
  atributos: {
    brasileiro: 2,
    copaDoBrasil: 0,
    libertadores: 0,
    sulAmericana: 0,
    recopa: 0,
    mundial: 0
  }
};
var cartaFluminense = {
  nome: "Fluminense",
  imagem:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Fluminense_FC_escudo.png",
  apelido: "Tricolor Carioca",
  ranking: "9º",
  atributos: {
    brasileiro: 4,
    copaDoBrasil: 1,
    libertadores: 0,
    sulAmericana: 0,
    recopa: 0,
    mundial: 0
  }
};
var cartaCruzeiro = {
  nome: "Cruzeiro",
  imagem:"https://upload.wikimedia.org/wikipedia/pt/e/e4/CruzeiroEC2016.png",
  apelido: "Cabuloso",
  ranking: "14º",
  atributos: {
    brasileiro: 4,
    copaDoBrasil: 6,
    libertadores: 2,
    sulAmericana: 0,
    recopa: 1,
    mundial: 0
  }
};
var cartaAtleticoMineiro = {
  nome: "Atlético Mineiro",
  imagem:"https://upload.wikimedia.org/wikipedia/commons/5/5f/Atletico_mineiro_galo.png",
  apelido: "Galo",
  ranking: "3º",
  atributos: {
    brasileiro: 2,
    copaDoBrasil: 2,
    libertadores: 1,
    sulAmericana: 0,
    recopa: 1,
    mundial: 0
  }
};

var cartas = [cartaInternacional, cartaGremio, cartaSaoPaulo, cartaPalmeiras, cartaSantos, cartaCorinthians, cartaFlamengo, cartaVasco, cartaBotafogo, cartaFluminense, cartaCruzeiro, cartaAtleticoMineiro];

var cartaJogador;
var cartaMaquina;

function sortearCarta(){
  var indiceCartaJogador = parseInt(Math.random() * cartas.length);
  var indiceCartaMaquina = parseInt(Math.random() * cartas.length);
  
  while (indiceCartaMaquina == indiceCartaJogador){
    indiceCartaJogador = parseInt(Math.random() * cartas.length);
  }
  
  cartaJogador = cartas[indiceCartaJogador];
  cartaMaquina = cartas[indiceCartaMaquina];
  
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  //exibirAtributos();
  exibirCartaJogador();

}

function jogar(){
  var atributoSelecionado = obterAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
  if(valorCartaJogador > valorCartaMaquina){
    
    divResultado.innerHTML = "<p class='resultado-final'>VOCÊ GANHOU!! </p><br><p class='resultado-final'>" + atributoSelecionado + " do " + cartaJogador.nome + " = "+ cartaJogador.atributos[atributoSelecionado] + "</p><br><p class='resultado-final'>" + atributoSelecionado + " do " + cartaMaquina.nome + " = " + cartaMaquina.atributos[atributoSelecionado] + "</p>";
    
  }else if(valorCartaJogador < valorCartaMaquina){
    
    divResultado.innerHTML = "<p class='resultado-final'>VOCÊ PERDEU!! </p><br><p class='resultado-final'>" + atributoSelecionado + " do " + cartaJogador.nome + " = "+ cartaJogador.atributos[atributoSelecionado] + "</p><br><p class='resultado-final'>" + atributoSelecionado + " do " + cartaMaquina.nome + " = " + cartaMaquina.atributos[atributoSelecionado] + "</p>";
    
  }else{
    divResultado.innerHTML = "<p class='resultado-final'>EMPATOU!! </p><br><p class='resultado-final'>" + atributoSelecionado + " do " + cartaJogador.nome + " = "+ cartaJogador.atributos[atributoSelecionado] + "</p><br><p class='resultado-final'>" + atributoSelecionado + " do " + cartaMaquina.nome + " = " + cartaMaquina.atributos[atributoSelecionado] + "</p>";
  }
  
  divResultado.innerHTML += "<p class='aviso-reset-jogo'>Clique F5 para jogar uma nova rodada</p>"
  exibirCartaMaquina();
  document.getElementById("btnJogar").disabled = false;
  //document.getElementById("btnResetar").disabled = false;
}

function obterAtributoSelecionado(){
  var atributos = document.getElementsByName("atributo");
  
  for(var i=0;i<atributos.length;i++){
    if(atributos[i].checked){
      return atributos[i].value;
    }  
  }
  
}

function exibirCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador");
  
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id ='opcoes' class = 'carta-status'>";
  var opcoesTexto = ""; 
  var nome =  `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var apelido = `<p class="carta-apelido">${cartaJogador.apelido}</p>`;
  var ranking = `<p class="carta-ranking">${cartaJogador.ranking}</p>`
  
  for(var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='";
    opcoesTexto += atributo;
    opcoesTexto += "'>";
    opcoesTexto += atributo;
    opcoesTexto += ": ";
    opcoesTexto += cartaJogador.atributos[atributo];
    opcoesTexto += "<br>";
  }
  
  divCartaJogador.innerHTML = moldura + nome + apelido + tagHTML + opcoesTexto + ranking + "</div>";
}

function exibirCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina");
  var opcoesTexto = "";
  
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id ='opcoes' class = 'carta-status'>";
  var nome =  `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  var apelido = `<p class="carta-apelido">${cartaMaquina.apelido}</p>`;
  var ranking = `<p class="carta-ranking">${cartaMaquina.ranking}</p>`
  
  for(var atributo in cartaMaquina.atributos){
    opcoesTexto += "<spam class='carta-status-atributos'>";
    opcoesTexto += atributo;
    opcoesTexto += ": ";
    opcoesTexto += cartaMaquina.atributos[atributo];
    opcoesTexto += "</spam><br>";
  }
  
  divCartaMaquina.innerHTML = moldura + nome + apelido + tagHTML + opcoesTexto + ranking + "</div>";
}

/*function resetarJogo(){
  
  document.getElementById("opcoes").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnResetar").disabled = true;
  
}*/