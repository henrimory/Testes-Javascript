Math.abs () retorna o valor absoluto do número que passamos para ele como parâmetro.

Math.abs (4) //retorna 4
Math.abs (0) //retorna 0
Math.abs (-123) //retorna 123
Math.round () arredonda um número para cima até o número inteiro mais próximo e Math.floor ()
arredonda um número para baixo até o número inteiro mais próximo.

Math.round (4.6) //retorna 5
Math.round (4.3) //retorna 4
Math.floor (4.6) //retorna 4
Math.floor (4.3) //retorna 4
Math.max () pega dois parâmetros e retorna o maior número, enquanto Math.min ()
pega dois parâmetros e retorna o menor.

Math.max (4, 7) //retorna 7
Math.min (4, 7) //retorna 4
==================================================
//verificação de par ou impar
var numeroDaSorte = 18
// escreva seu código aqui
if(numeroDaSorte % 2 == 0){
    console.log('Par');
}else{
    console.log('Ímpar');
}


========================================================
var contador = 0

for (contador; contador < 10; contador++){
  console.log(contador)
}
==========================================================
for (var contador = 1; contador < 8; contador++){
  console.log('Dia' + contador)
========================================================
//tabuada
for(var i=1; i<=10 ; i++){
  console.log("7 x "+i+" = " + (7*i));
}
=======================================================
function tabuadaDoSete(){
  for(var i=1; i<=10 ; i++){
    console.log("7 x "+i+" = " + (7*i));
  }
}
===========================================================

function dobro(numero) {
   return numero*2;
}
dobro(5);   //Isto irá devolver 10
dobro(1.5); //E isto irá devolver 3

function dobroDoProximo (num1) {
   var resultadoDoDobro = (num1+1);
   return resultadoDoDobro * 2;
}
dobroDoProximo(5);
-------------------------------------------
Supondo que essa seja a função triplo:

function triplo(valor) {
   return valor * 3;
}

Seu trabalho seria invoca-la dentro da função triploDaSoma:

function triploDaSoma(a, b) {
   var soma = a + b;
   var resultado = triplo(soma);
   return resultado;
}
==============================================

function  perimetro(raio) {
    return 3.14 * raio * 2;
}
 function area(raio) {
    return 3.14 * raio * raio;    
} 

================================================
function escreverCartao(titulo, nome, sobrenome) {  
return (titulo + " " + nome + " " + sobrenome);
}

escreverCartao ("Dra.", "Ana", "Pérez");



===============================================
/*Vamos testar: Iremos criar uma função chamada tamanhoNomeCompleto,
ue recebe um nome e um sobrenome como parâmetros, 
e que irá devolver o tamanho total, 
contando um espaço extra para separar ambos:
*/

function tamanhoNomeCompleto(nome,sobrenome){
    var nomeCompleto = nome+" "+sobrenome;
    return nomeCompleto.length
}
tamanhoNomeCompleto("Henrique","Oliveira");
====================================================
/*
Declara a variável diaDeSemana que receba uma string "domingo". 
Depois implemente uma condicional usando o if que compare se diaDeSemana é igual a "domingo",
se for verdadeiro imprima uma string "Hoje é dia de futebol!!!".
*/

var diaDeSemana = "domingo";
if (diaDeSemana == "domingo") {
   console.log("Hoje é dia de futebol! ! !");
}

function hojeSeJoga(dia){
	var diaDeSemana = "domingo"
	if(dia == diaDeSemana){
		return("Hoje é dia de Futebol!!!");
	}else{
		return("Hoje não é dia de futebol");
	}
}

function hojeSeJoga(dia){
    var diaJogo = "domingo";
    if(diaJogo == dia){
    	return "Hoje é dia de futebol!!!";
        }else{
        	return "Hoje não é dia de futebol :(";
        	}
}

function hojeSeJoga(dia){ 
  var joga = "domingo";
  if(dia == joga){
    return("Hoje é dia de futebol! ! !");
   }else{
    return("Hoje não é dia de futebol :(");
   }
}

==============================================

function eNumeroDaSorte(numero1) {
  return numero1>=0 && numero1%2 == 0 || numero1%3 == 0 && numero1 != 15;
}
==============================================

function gerarProbabilidade(){
  var probabilidade = Math.random();
  return probabilidade*100;
}
=================================================

var diaDeSemana = "domingo";
if (diaDeSemana) {
    console.log('Hoje é dia de futebol!!!');
}
================================================


================================================
function eMaior(numero1,numero2){
  if (numero1 > numero2){
    return numero1;
  }else{
    return numero2;
  }  
}
============================================
function menorNumero(a,b){
  if (a < b){
    return a;
  }else if(b < a){
    return b;
  }else{
    return a || b;
  }  
}
=============================================

function sinal(num1){  
  if (num1 > 0){
    return 1;
  }else if (num1 == 0){
    return 0;
  }else{
    return -1;
  }
}
============================================
	var seg = "Segunda-feira";
	var ter = "Terça-feira";
	var quar = "Quarta-feira";
	var quin = "Quinta-feira";
	var sex = "Sexta-feira";
/*
function possoIrAoBanco(diaDaSemana, horaAtual) {
	var hora1 = 9;
	var hora2 = 15;
	return(diaDaSemana === "Segunda" && diaDaSemana === "terça-feira" || diaDaSemana === "quarta-feira" && diaDaSemana === "quinta-feira" ||
	diaDaSemana === "sexta-feira" && horaAtual >= hora1 && horaAtual <= hora2);


}*/
function possoIrAoBanco(diaDaSemana, horaAtual) {
	var hora1 = 9;
	var hora2 = 15;
	return horaAtual >= 9 && horaAtual <= 15 && diaDaSemana != "Sábado" && diaDaSemana != "Domingo";
}

console.log(possoIrAoBanco("Segunda", 10));
// true, é um dia da semana e está no horário bancário, 10hs
console.log(possoIrAoBanco("terça-feira", 18));
// false, é dia da semana e NÃO está no horário bancário, 18hs
console.log(possoIrAoBanco("Sábado", 10));
// false, é fim de semana


function possoIrAoBanco( diaDaSemana, horaAtual){
	var diasFuncionamentoBanco = ('segunda-feira', 'terça-feira', 'quarta-feira','quinta-feira', 'sexta-feira');

	return  horaAtual >= 9 && horaAtual <=15 && diaDaSemana == diasFuncionamentoBanco;
}


===============================================

function temAMesmaMae (filhoA,FilhoB){
	var maeDofilho1 = maeDe(filhoA);
	var maeDofilho2 = maeDe(filhoB);
	return maeDofilho1 == maeDofilho2;
}
==============================================
function temOMesmoPai (filhoA,filhoB){
	var paiDofilho1 = paiDe(filhoA);
	var paiDofilho2 = paiDe(filhoB);
	return paiDofilho1 ==	paiDofilho2;
}
===============================================

function saoMeioIrmaos (filhoA,filhoB){
	var mesmoPai = temOMesmoPai(filhoA,filhoB);
	var mesmaMae = temAMesmaMae(filhoA,filhoB);
	return mesmoPai && !mesmaMae ||!mesmoPai && mesmaMae;
}
=================================================

function xor (val1,val2){
	
	return (val1 || val2) && !(val1 && val2);

}
=====================================================

function pagarComCartao
(temJuros, taxasDoCartao, dinheiroDisponivel) {
  return !temJuros && taxasDoCartao >= 3 || dinheiroDisponivel < 100;
}

pagarComCartao(true, 6, 320)
console.log(pagarComCartao);
 pagarComCartao(false, 8, 80);
 console.log(pagarComCartao);
 pagarComCartao(true, 2, 215);
 console.log(pagarComCartao);
  pagarComCartao(true, 1, 32);
 console.log(pagarComCartao);

==============================================================

function podeSeAposentar (idade,sexo,anos){
  var idadeM = 60;
  var idadeH = 65;
  var sexH = "M";
  var sexM = "F"
  var tempo = 30;  
return idade >= idadeM && sexo != sexH && anos>= tempo 
|| idade >= idadeH && sexo != sexM && anos>= tempo;
}
================================================================

function podeSeAposentar(idade, sexo, anosContribuicoes) {
  return cumpreIdadeMinima(idade, sexo) && temContribuicaoSuficiente(anosContribuicao);
}
================================================================

function podeSubir (alturaPessoa,vemComCompania,temProblemaCardiaco){
	var altura1 = 1.5;
	var altura2 = 1.2;
	var tCompania = true;
	var tCoracao = true;
	
	return alturaPessoa == altura1 && temProblemaCardiaco == !tCoracao || alturaPessoa == altura2 && 
	vemComCompania == tCompania && temProblemaCardiaco == !tCoracao;
}
==================================================================

function medalhaSegundoOPosto (posto){

	if (posto == 1){
		return "ouro";
	}else if(posto == 2){
		return "prata";
	}else if (posto == 3){
		return "bronze";
	}else{
    return "Continue participando";
	}
}
=====================================================================

function imprimirAzul4(){
  for(var i = 0; i < 4; i++) {
   console.log("Azul")
  }  
}
================================================================
 function passoAPasso(){
 	for(var i = 0; i < 5; i++) {
   	console.log(i);
	}
 }
 ===========================================================

 function passandoPelosPares(){ 	
 	for (var i = 0; i < 7; i++) {
 		if (i %2 === 0) {
 		console.log("aqui eu tenho o valor de "+ i);
 		}
 	}
 }
 ====================================================

 function imprimirAzul(x) {
  for(var i = 0; i < x; i++) {
   console.log("Azul");
  }
}
=====================================================

var moeda = 0;
function somar5MoedasDe25Centavos(){
	for(var i = 0; i < 4; i++) {
    return moeda+0.25;
}
======================================================

var moeda = 0.25; 
function somar5MoedasDe25Centavos(){
 for(var i = 0; i < 4; i++) {
  moeda = moeda + 0.25;
  }
  return moeda;
}
=======================================================
function somarMoedasDe25(quantidadeDeMoedas){
  var moeda = 0;
  for(var i = 0; i < quantidadeDeMoedas; i++){
   moeda = moeda + 0.25; 
  }
return moeda;
}
===================================================

function somaDosPares(x){
  var somaPares = 0;
  for (var i = 0; i < x; i++) {
    if (i %2 === 0) {
      somaPares = i+=2;
    }
    return somaPares;
  }
}

=================================================

function somatoria (numero){
 var soma = 0;
   for(var i=0; i <= (numero + 1); i++){
   numero -= 1;
   soma += numero;
   }
 return soma;
 }
==========================================


function caloriasDeTrote(x){
  var total = 0;
  for(var i =0; i<=x; i++){
    total = total +i*5;
  }
  return total;
}
=============================================

var xArray = [1, 2, 3];
var yArray = [4, 5];

function mover(xArray, yArray) {
  var pegar = xArray.pop();
  yArray.push(pegar);
}
================================================

var meuArray = ["a", "la", "grande", "le", "puse", "cuca"]
var posicao = meuArray.indexOf("grande"); //devolve 2

var diasDeTrabalho = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"]
var umDia = diasDeTrabalho.indexOf ("segunda-feira"); // retorna 0
=======================================================
function contem(pos1,pos2){
    var posi1 = [];    
    var posi2 = [];
    

    return pos1.indexOf(pos2)!=-1;
}
/*
Se você prestar atenção nos exemplos de consulta, você deve ter notado que os arrays também podem
 ter elementos duplicados: [1, 2, 1], [" hello "," hello "], etc.

Portanto, “indexOf” retorna a posição da primeira aparição do elemento na matriz. Por exemplo:

2  [2, 3, 3, 4] .indexOf (3)
1 // retorna 1 porque embora esteja também na posição 2, aparece primeiro na posição 1.
*/
===========================================================

function medalhaDeAcordoComPosto(numero){
    var premio=["nada","ouro","prata","bronze","nada"];
      if(numero>premio.length) {
        return "nada"; 
      }
    return premio[numero];
}
============================================================
function lucroTotal(umPeriodo) {
  var soma= 0;
  var mes = 0;
  for (var i=0; i<umPeriodo.length; i++) {
    mes = umPeriodo[i];
    soma= soma+ mes;
  }
  return soma;
}
==========================================================

function quantidadeDeMesesComLucro(umPeriodo) {
    let quantidade = 0;
    for (let mes=0; mes< umPeriodo.length; mes++) {
          if(umPeriodo[mes] > 0 ){
            quantidade = quantidade  + 1;
        }
    }
    return quantidade;
}
======================================================
function quantidadeDeMesesComPerda(umPeriodo) {
  let quantidade = 0;
  for(let mes=0; mes < umPeriodo.length; mes++){
    if(umPeriodo[mes] < 0){
      quantidade = quantidade + 1;
    }
  }
  return quantidade;
}
========================================================


function saldoDeMesesComLucro (umPeriodo) {
  var saldo = [];
  for (let mes=0; mes< umPeriodo.length; mes++) {
    if(umPeriodo[mes] > 0){
      saldo.push(umPeriodo[mes]);
    }
  }
  return saldo;
}
======================================================
function somaLucroSemestre(umSemestre) {
  return umSemestre[0] + umSemestre[1] +
        umSemestre[2] + umSemestre[3] +
        umSemestre[4] + umSemestre[5];
}

console.log(somaLucroSemestre[2]);
console.log(somaLucroSemestre[3]);
console.log(somaLucroSemestre[4]);
=================================================

function lucroTotal(umPeriodo) {
  var soma= 0;
  var mes = 0;
  for (var i=0; i<umPeriodo.length; i++) {
    mes = umPeriodo[i];
    soma= soma+ mes;
  }
  return soma;
}
console.log(lucroTotal([2, 3]));
console.log(lucroTotal([2, 3, 1, 8, 8, -1]));
console.log(lucroTotal([]));
 =========================================================


function naipeDeTruco(naipe) {
  return ["1", "2", "3", "4", "5", "6", "7", "10", "11", "12"].map(function(tipo) {
    return [tipo, naipe].join(' de ');
  });
}

=======================================================
Necessitamos uma função produto que receba um array de números e retorne o produto:
 o resultado de multiplicar todos os elementos entre si.
Por exemplo, produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7.

function produto(v){
   var res = 1;
   for(var x = 0; x < v.length; x++) res *= v[x];
   return res;
}

=========================================================
/*
Necessitamos uma função maisMenos que receba um array
 e retorne outro com os seguintes três números:

na primeira posição, a fração de números que são positivos
na segunda posição, a fração de números que são zero
na última posição, a fração de números que são negativos
Por exemplo, maisMenos([1, 2, 0, -1]) deveria retornar
 [0.5, 0.25, 0.25], devido a que há 50% de positivos, 25% de zeros, e 25% de negativos.

var numeros = [1, 2, 0, -1]; //O Array de números fornecido pela questão
maisMenos(numeros); //Enviando o array para a função
*/

function maisMenos(numeros) {
  /* Utilizando a função 'length' para obter a quantidade de elementos
  do array recebido como parâmetro */
  var quantidade = numeros.length;

  //Inicializando os contadores 
  var positivos = 0;
  var zeros = 0;
  var negativos = 0;

  /*Percorrendo cada elemento do array para verificar se é um número
    positivo, negativo ou zero */
  for (i = 0; i < quantidade; i++) {
    if (numeros[i] > 0) {
      positivos = positivos + 1; //Caso seja positivo, some mais 1
    } else if (numeros[i] < 0) {
      negativos = negativos + 1; //Caso seja negativo, some mais 1
    } else {
      zeros = zeros + 1; //Caso seja zero, some mais 1
    }
  }

  //Calculando as frações
  positivos = positivos / quantidade;
  zeros = zeros / quantidade;
  negativos = negativos / quantidade;
  
  //Criando o novo array que exibirá os resultados fracionados
  var array = [positivos, zeros, negativos];

  //Exibindo o array com os resultados no console do navegador
  console.log(array);

  return array;
}

var numeros = [1, 2, 0, -1]; 
maisMenos(numeros); 
function maisMenos(numeros) { 
  var quantidade = numeros.length;
  var positivos = 0;
  var zeros = 0;
  var negativos = 0;

  for (i = 0; i < quantidade; i++) {
    if (numeros[i] > 0) {
      positivos = positivos + 1; 
    } else if (numeros[i] < 0) {
      negativos = negativos + 1; 
    } else {
      zeros = zeros + 1; 
    }
  }
  positivos = positivos / quantidade;
  zeros = zeros / quantidade;
  negativos = negativos / quantidade;  
  
  var array = [positivos, zeros, negativos];

  return array;
}
======================================================================

function acontece (alunosDia, quorum){
    let presentes = 0;
    for (let i = 0; i < alunosDia.length; i++){
      if (alunosDia[i] <= 0) presentes++; // Tem que usar o [i] para acessar o item dentro do array
      if (presentes >= quorum) return true;
    }
    return false; // Estava faltando era esse return
}
function aberturas (alunosDia, quorum){
    let resultadoArray = [];
    for (let i = 0; i < alunosDia.length; i++){
      resultadoArray.push(acontece(alunosDia[i], quorum)); // Tem que usar o [i] para acessar o item dentro do array
    }
    return resultadoArray; // Estava faltando era esse return
}
===================================================================
/*
Uma professora de programação, cansada de que os estudantes cheguem tarde,
decidiu que vai cancelar a aula se há poucos presentes.
Ela representa a entrada dos estudantes como um array de tempos de chegada tarde,
em minutos. Por exemplo, se um estudante chegou 10 minutos atrasado,
outro 5 minutos antes da hora, outro com 3 minutos de atraso, e outro pontual, poderá representar assim:

var alunosDaSegunda = [10, -5, 3, 0];
Com essa informação e a quantidade mínima de estudantes para que suceda o curso,
a professora quer saber se a aula acontecerá. Por exemplo, 
supondo que a quantidade mínima de estudantes para que a aula aconteça é de 2 alunos,
então o curso da segunda-feira se realizará, porque houve um estudante que foi pontual e 
um estudante que chegou cedo.

acontece(alunosDaSegunda, 2)
true
Mas se a quantidade mínima fosse 3, a aula não aconteceria:

acontece(alunosDaSegunda, 3)
false
Escreva as seguintes funções: 1. acontece, que diz se a aula sucederá de acordo
com o array dos estudantes que entraram. 2. aberturas, que utiliza um array com os arrays
dos estudantes que entraram nos outros dias, e a quantidade mínima de estudantes,
 e diga quais os dias em que as aulas aconteceram e quais não. Por exemplo:

aberturas([alunosDaSegunda, alunosDaTerça, alunosDaQuarta], 2)
[true, false, false]
*/
function acontece (alunosDia, quorum){
    let presentes = 0;
    for (let i = 0; i < alunosDia.length; i++){
      if (alunosDia[i] <= 0) presentes++; 
      if (presentes >= quorum) return true;
    }
    return false; 
}
function aberturas (alunosDia, quorum){
    let resultadoArray = [];
    for (let i = 0; i < alunosDia.length; i++){
      resultadoArray.push(acontece(alunosDia[i], quorum)); 
    }
    return resultadoArray; 
}

================================================================

var fatorial=1;
var explicaFator = '';
var num=parseInt(prompt("Digite um número: "));
for(var x=1; x<=num; x++)
{
    fatorial=fatorial*x;
    if(explicaFator != ''){
      explicaFator += 'x';
    }
    explicaFator += x;
    
}
document.write(num+"! = "+explicaFator+" = "+fatorial);
====================================================================


function  fatorial ( valor ) {      
    if (valor == 0 ) {
      return 1;          
    }  
    var resp = n;
    while (n > 2) {
      resp *= --n;
    }
    return resp;
 }
 ======================================================
 //Escreva uma função fatorial, que calcule o fatorial de um número.
 

function fatorial(numero){
var resultado = numero;
 for(var i = 1; i < numero; i++){
   resultado= resultado * i;
 }
 return resultado;
}
console.log (fatorial(5))
=============================================================
/*Queremos representar uma escada com altura variável, utilizando um array de strings.

Por exemplo, uma escada com altura 3, representaremos com o seguinte array:

var escada3 = [
 "  #",
 " ##",
 "###"
]
E uma escada com altura 5, da seguinte forma:

var escada5 = [
 "    #",
 "   ##",
 "  ###",
 " ####",
 "#####"
]
Escreva uma função escada que utilize uma altura (um número) 
e retorne um array que represente a escada correspondente. 
Não esqueça que o espaço " " faz parte da resposta :)
*/

function escada(altura){
  let lista = [];
  for(let i = 1; i <= altura; i++){
    let espaco = altura - i;
    lista.push(" ".repeat(espaco) + "#".repeat(i));
  }
  return lista;
}
===============================================================
/*
As árvores utópicas  crescem de uma forma particular, em dois ciclos:

cada primavera dobram seu tamanho
cada verão crescem um metro
Se Laura planta uma árvore utópica com um metro, no final do outono, qual seria sua altura depois de N ciclos?

Alguns exemplos:

si N = 0, sua altura será 1 metro (não cresceu nada)
si N = 1, sua altura será de 2 metros (dobrou a altura na primavera)
si N = 2, sua altura será de 3 metros (cresceu um metro mais no verão)
si N = 3, sua altura será de 6 metros (dobrou a altura na primavera seguinte)
E assim ...
Escreva a função alturaArvoreUtopica, que utilize uma quantidade de ciclos de crescimento,
e retorne a altura resultante da árvore de Laura.
*/
function alturaArvoreUtopica(ciclos){
	let tamanhoArvore = 1;
	for(let i = 0; i < ciclos; i++){
		if(i & 1){
			tamanhoArvore += 1;
		}else{
			tamanhoArvore *= 2;
		}
	return tamanhoArvore;
	}
}

function alturaArvoreUtopica(ciclos) {

 let tamanhoArvore = 1;

 for(let i = 0; i < ciclos; i++)

   if(i & 1)

     tamanhoArvore += 1;

   else

     tamanhoArvore *= 2;

 return tamanhoArvore;

}


for(let i=0; i<alimento.length; i++){
  console.log('Esse alimento se chama: ' + alimento[i] )
}
================================================================

var listaDeCarros = [ "Fox", "Uno", "Gol", "Astra", "Fiesta"]

// Seu loop aqui:
for(var i = 0;i < listaDeCarros.length;i++){
    console.log('Nome do Carro: ' + listaDeCarros[i])   
}

================================================================
var listaDeGanhos = [10, 30, -10, -5, -1, 40]
var totalNegativos = 0

//seu loop aqui:

for(var i=0;i<listaDeGanhos.length;++i){
    if(listaDeGanhos[i] < 0)
    totalNegativos++
}

console.log(totalNegativos)
==============================================================

var listaDeFrutas = [ "Uva", "Banana", "Manga", "Cajá", "Pinha"]
var busca = "Cajá"

for (var i = 0; i < listaDeFrutas.length; i++){
  if(busca == listaDeFrutas[i]){
  console.log("Sim, temos a fruta " + busca + " disponível")
  }
}

===============================================================
var cartela = [8, 13, 18, 22, 42, 49]
  var numeroSorteado = 42

for (var i = 0; i < cartela.length; i++){
    if(numeroSorteado == cartela[i]){
    console.log("Encontrei o número!")
    break
  }
}

=============================================================

for(var i=0; i<=20; ++i){

  if(i%2===0)

      console.log(i)

  continue

}

==========================================================

var familia = ["Joana", "Felipe", "Gabriela", "Carlos", "Pedro", "Bruno"]

for (var i = 0; i < familia.length; i++) {

if(familia[i] == "Pedro") {

 console.log(familia[i] + " Sousa")

 continue

}

console.log(familia[i] + " Macedo")

}

=======================================================
var baralho = ["Ás", "Dama", "Rei", "Valete"]
  
//Seu código aqui
for (var i = 0; i < baralho.length; i++){
   if(baralho[i] == "Rei"){
   console.log("Encontrei o Rei!")
   break
 }
}
======================================================
function cartaoDeVisitas(){
  var nomeCompleto = 'Henrique Oliveira';
  console.log(nomeCompleto);
}
======================================================
validaCPF("576.524.020-85")

for(var i=0; i<validaCPF.lenght; i++){

  if(validaCPF[i]==true){
    console.log('CPF válido')
  }else{
    consloe.log("CPF inválido")
  }
}
========================================================
// A função a seguir (calculaIdade) não precisa ser alterada
// A sua função deve ser escrita logo abaixo desta
function calcularIdade(dataDeNascimento) {
  var [dia, mes, ano] = dataDeNascimento.split('/');
  var d = new Date();
  var anoAtual = d.getFullYear();
  var mesAtual = d.getMonth() + 1;
  var diaAtual = d.getDate();
  ano = +ano; mes = +mes; dia = +dia;
  var quantosAnos = anoAtual - ano;
  if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
      quantosAnos--;
  }
  return quantosAnos < 0 ? 0 : quantosAnos;
}

// Escreva aqui sua função
function deixaEntrar(dataDeNascimento, censura) {
  return calcularIdade(dataDeNascimento, censura);
}
==========================================================
/*Uma loja virtual permite a seus visitantes filtrar produtos pelo preço. Existe um array com os preços dos produtos.
Um programador já criou uma função maisBaratosQue(valor, precos) que retorna um array com os preços dos produtos mais baratos que o valor passado como parâmetro.
Outro programador já criou uma função maisCarosQue(valor, precos) que retorna um array com os preços mais caros que o valor passado como parâmetro. Chegou sua vez!


Crie uma função precosEntre(valorMenor, valorMaior, precos) que deve utilizar as funções maisBaratosQue e maisCarosQue para retornar os preços que estão entre o valorMenor e o valorMaior.
Sua função deve receber então dois parâmetros:

valorMenor para representar o valor mínimo dos preços a serem listados

valorMaior para representar o valor máximo dos preços a serem listados

precos para representar um array com os preços dos produtos

Ela deve retornar um array com todos os preços entre valorMenor e valorMaior
*/

function maisBaratosQue(valor, precos) {
  return precos.filter(p => p <= valor);
}

function maisCarosQue(valor, precos){
  return precos.filter(p => p >= valor);
}

function precosEntre(valorMenor, valorMaior, precos){
  return maisCarosQue(valorMenor, maisBaratosQue(valorMaior, precos));
}
console.log(precosEntre(5, 10, [1,2,3,4,5,6,7,8,9,10])); // [ 5, 6, 7, 8, 9, 10 ]
/*Explicação
A função maisCarosQue, assim como a função maisBaratosQue, possuem 2 parâmetros (valor e preços).

-Valor seria o valor que você quer que seja mais barato ou mais caro.

-Preços seria todos os valor dos produtos que existem.

ex: se tem produtos de preços 15, 20, 25, 30, 40, 45 e o valor que você quer filtrar é 28, ele vai retornar (30, 40, 45)..

Porém na função precosEntre você possui 3 variáveis, pois você limita o valor superior e também o valor inferior da filtagrem, logo para retornar você usa:

maisCarosQue(valorMenor, maisBaratosQue(valorMaior, precos)


, pois o parametro valor da função maisCarosQue passa a ser o valorMenor, ou seja, o mínimo valor que pode assumir,
e o parâmetro preços passa a ser a função maisBaratosQue, sendo seu parâmetro valor definido como valorMaior,
para que os preços que forem ser usados na função maisCarosQue já sejam os valores limitados de acordo com o máximo que podem assumir.
*/

=====================================

function gerarDezenas(){
  //array que será preenchido com as dezenas
  array = []
  //for para percorrer o vetor
  for(var i = 0; i < 6; i++){
  //push para preencher o vetor com Math.raund que vai puxar valor inteiro, randowm que vai dar um número aleatório e 60 para pegar um número aleatório de 1 a 60
  array.push(Math.round(Math.random()*60))
  }
  //retorna o vetor preenchido
  return array
  }
  =====================================
  function maxmin(a,b,c,d,e){

    var array=[0,0]
 
    array[0]=Math.min(a,b,c,d,e)
 
    array[1]=Math.max(a,b,c,d,e)
 
    return array    
 
 }
 ============================================
 /*No fim de semana o elevador do nosso prédio quebrou, restringindo muito o fluxo de pessoas. Considerando isso, apenas os moradores dos apartamentos com número par poderão usar o elevador.
 Escreva um código que, com base na variável moradores nos informe quais moradores poderão utilizar o elevador. O número do apartamento é a sua posição no array, e o nome do morador é o valor.

Imprima no console a lista a seguinte frase: 'O morador ' + nome do morador + ' pode usar o elevador'
*/
 var moradores = [
  "Fulano de Tal",
  "Beltrano da Cia",
  "Viajante do Tempo",
  "Morador da Lua",
  "Marciano Azul",
  "Et da Eslováquia",
  "Jedi do Lado Cinza da Força",
  "Baby Yoda Amarelo"
]
for(var i = 0; i < moradores.length; i ++){
  if(i%2==0){
  console.log("O morador"+ " " + moradores[i] + " " + "pode usar o elevador" )
  }
}

=======================================================
/*Em uma  academia está acontecendo um cadastro de vários usuários contendo as seguintes informações: nome, idade e altura.
E para realizar um determinado treino, existe alguns requisitos: Ter 18 anos ou mais e ter uma altura igual ou maior a 1,70.

Crie uma função chamada maiorAlto que retorne verdadeiro (true) caso ele atenda os requisitos, e falso (false) para o contrário.
Nessa função você irá receber um parâmetro que será um array, contendo na primeira posição o nome, segunda posição a idade do aluno e na terceira contendo a altura em Centímetros.

Exemplo

maiorAlto(["Aluno incrível", 18, 170]) // retorna true
maiorAlto(["Aluno baixo", 17, 150]) // retorna false
*/
var usuario1 = ['Et da Estônia', 17, 170]
var usuario2 = ['Pessoa do Pântano', 39, 198]
var usuario3 = ['Homem da Lua Virada', 21, 149]
var usuario4 = ['Pequena Paulistana', 18, 171]
var usuario5 = ['Menino da Porteira', 13, 142]
var resultado = maiorAlto(usuario4)

function maiorAlto(usuario) {

   if (usuario[1] >= 18 && usuario[2] >= 170) {

       return true;

   }

   else {

       return false;

   }

}
====================================================================
/*
Uma academia precisa separar grupos de pessoas tendo como base a sua altura para que dessa forma consiga formar grupos para as aulas de zumba.
Temos um array que lista a altura de cada aluno da academia, e outros 3 arrays (Grupo A, B e C) que são classificados da seguinte forma: 

grupoA - Alunos com altura entre 150 a 159
grupoB - Alunos com altura entre 160 a 169
grupoC - Alunos com altura de 1.70 ou mais

Seu trabalho é pegar cada valor do array alunos e colocar o valor correspondente em seu respectivo grupo. Para esse exercício, você precisará usar loops, condicionais e funções de arrays. 
*/
var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = [159, 151, 156, 154 ];

var grupoB = [165, 167, 169, 160 ];

var grupoC = [170, 187, 191, 171, 170 ];

function zumbaClass(alunos) {

  for (var i = 0; i < alunos.length; i++) {

      if (grupoA[i] > 150 && alunos[i] <= 159) {

          grupoA.push(alunos[i])

      } else if (grupoB[i] > 159 && alunos[i] < 170) {

          grupoB.push(alunos[i])

      } else if (grupoC[i] >= 170) {

          grupoC.push(alunos[i])

      }

  }

}
===========================================================================
/*Um estacionamento deseja automatizar a cobrança de mensalistas. Para isso decidiu simplificar a forma de calcular o valor devido pelo seu cliente.
A quantia a ser paga pelos seus usuários depende do número de entradas que o veículo realiza no estacionamento. A cada entrada, a placa do veículo é registrada.
Ao final do mês, conta-se o número de entradas que o veículo realizou e faz-se o seguinte cálculo:


Se o motorista realizou até 20 entradas, ele deve pagar R$ 10,00 por entrada realizada.


Da vigésima primeira entrada em diante, cada entrada custa R$ 5,00 ao cliente.


	Agora, você deve ajudar na automatização da cobrança escrevendo duas funções.


A primeira função se chama calcularNumeroDeEntradas(placa). Ela deve receber um único parâmetro que representa a placa de um carro.
A função deve retornar o número de entradas que esse carro realizou no estacionamento. Em outras palavras, o número de vezes que a placa passada como parâmetro aparece no array placas.


A segunda função se chama calcularValorDevido(placa). Ela deve receber um único parâmetro que representa a placa de um carro.
A função deve calcular o valor que o proprietário do carro tem que pagar segundo a política de preços estabelecida. Naturalmente, será necessário utilizar a primeira função dentro da segunda.
// Esse array é utilizado dentro das funções. Cada placa neste array representa
// uma entrada do respectivo veículo no estacionamento. Não é necessário alterar
// esse array.
*/
var placas = [
  'RXB-2525', 'AKX-3333', 'ORO-7142','RXB-2525', 'AKX-3333', 'ORO-7142',
  'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',   'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
  'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
  'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525',
  'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'ORO-7142', 'ORO-7142',
  'ORO-7142', 'RXB-2525', 'AKX-3333','AKX-3333', 'ORO-7142', 'ORO-7142',
  'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',
  'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
  'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
  'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525'
]

function calcularNumeroDeEntradas(placa){

var numeroEntradas = 0

  for(i = 0; i < placas.length; i++){

    if(placas[i] == placa){

      numeroEntradas ++;

    }else {

    }

  }

  return numeroEntradas;

}

function calcularValorDevido(placa){

  var entradas = calcularNumeroDeEntradas(placa);

  if (entradas < 21){

    return   entradas * 10

  }else if (entradas >= 21){

    return entradas * 20

  }

}

=====================================================
/*
cinema
Em um site sobre cinema, os visitantes cadastrados podem dar notas de 0 a 5 para um filme que ele tenha assistido.
Cada filme tem um grande array de notas atribuídas pelos visitantes. Contudo, além de dar notas para os filmes, os visitantes querem ver o que as outras pessoas acharam do filme!
É aí que você entra com seu código:

Escreva uma função calculaGostos(notas)

Essa função deve ser escrita para receber somente um parâmetro: um array de notas. Ela deve retornar também um array com três elementos:

O primeiro, com a quantidade de notas iguais a 0 ou 1. Seriam os que não gostaram do filme

O segundo, com a quantidade de notas iguais a 2 ou 3. Seriam os que acharam o filme mediano

O terceiro, com a quantidade de notas iguais a 4 ou 5. Seriam os que gostaram do filme.
*/
function calculaGostos(notas){

  var nNaoGostaram = 0;

  var nMediano = 0;

  var nGostaram = 0;

for(var i = 0; i < notas.length; i++){

  if ((notas[i] == 0) || (notas[i] == 1)){

      nNaoGostaram++;

  }else if((notas[i] == 2) || (notas[i] == 3)){

      nMediano++;

  }else{

      nGostaram++;

  }

}      

  return [nNaoGostaram, nMediano, nGostaram];

}
/*
Explicação:

O enunciado é bem claro no que está pedindo. Se clicar em "me dê uma pista" verá que o enunciado já até separou as variáveis que serão enviadas no array.
É só copiá-las! Para separar as notas, repare no enunciado novamente. Ele diz claramente com a quantidade de notas IGUAIS a 0 ou 1 o seriam os que não gostaram do filme.
Repare na palavra IGUAL. Transcrevendo em código é literalmente o sinal de comparação ==.

A segunda condição:  com a quantidade de notas IGUAIS a 2 ou 3. Seriam os que acharam o filme mediano. Não tem segredo! Se a condição do enunciado for verdadeira, guarde na variável.

Se não for a primeira, nem a segunda opção, logicamente será a terceira, Não precisa fazer um outro if novamente. Espero ter ajudado. Se gostou, deixe um coração aí! Boa sorte no processo!
*/
===========================================
/*
Personagens
Programar uma função filme que recebe três arrays com os nomes de personagens, filmes e ano de estréia no cinema. 

A função deve receber também um valor de id escolhido pelo usuário com intervalo de 1 até o tamanho de um dos arrays fornecidos e retornar uma frase com o seguinte modelo: 

"personagem é um personagem do filme filme que estreou no cinema em lançamento." 

Se o valor de id for inválido, a função deve retornar a frase "Essa não é uma opção válida."

Exemplo:
var personagens = ["Hermione", "Trinity", "Leia"]
var filmes = ["Harry Potter", "Matrix", "Star wars"]
var lancamentos = [2001, 1999, 1977]
var id = 3

filme(personagens, filmes, lancamentos, id)  
// retorna a string "Leia é um personagem do filme Star wars que estreou no cinema em 1977."
*/

function filme(personagens, filmes, lancamentos, id)

{

  if((id > 0) && (id <= filmes.length)) { 

    var opt = id -1;
  
    return personagens[opt] + " " + "é um personagem do filme" + " " + filmes[opt] + " " + "que estreou no cinema em" + " " + lancamentos[opt] + "." ;
  
  }else{

    return "Essa não é uma opção válida."

  }       

}
/*
Explicação:

É só seguir o enunciado. Não tem erro! A primeira condição que o programa estabelece é que o id seja válido.
Para que ele seja válido, o seu tamanho mínimo deve ser 1 e também não deve ser maior que o tamanho dos arrays fornecidos.
No código, observe que a primeira condição é essa: tratar o id. Muito bem! Se a condição de tratamento do id for verdadeira.
Ou seja: se ele atender os requisitos, executaremos o restante do código. Senão for, ou seja, o id for inválido, retornaremos a mensagem de erro: "Essa não é uma opção válida!".

O restante do código se limita a construir a mensagem pedida caso o id seja válido. Como os arrays sempre começam pela posição 0(zero),
se o id for 1 não pegará a posição correta. Por isso, devemos subtrair 1 unidade do id para acessar a posição correta dos arrays.
A posição 0 do array é a primeira posição. Então, a campo 1 do array é a segunda. E assim por diante. Para resolver esse problema,
foi criada uma outra variável que guardasse o id já subtraído. Agora assim! Acessando a posição correta é só concatenar todas as informações e retornar o valor.
*/
==================================
/*
Comissão
Crie um sistema para calcular a comissão dos vendedores de uma loja. Crie uma função que tenha dois argumentos: preço e porcentagem de comissão.
*/
function comissao(preco,porcentagem){
  var resultado = (preco * porcentagem)/100
  return resultado
}
=======================================
/*
Programe uma função maiorQueNum que busca em um dado array apenas os números maiores do que o número fornecido no segundo parâmetro da função e retorne um novo array apenas com esses números.

Exemplo:

numeros = [10, 4, 7, 128, 42, -1, 0, 300, -5]
num = 5

maiorQueNum(numeros, num); // retorna [10, 7, 128, 42, 300]
*/

function maiorQueNum(array, num)
{
  // Escreva abaixo o seu código:
  var menoresNum = []

for(var i =0; i < array.length; i ++) {

  if(array[i]>num) {

    menoresNum.push(array[i])

  }

}

return menoresNum

}
===============================================
/*
Busca divisível por
Programe uma função buscarDivisivelPor que recebe dois parâmetros, um array de números e um número de teste,
retornando como resposta o primeiro número do array que seja divisível pelo número dado e também seja diferente de zero.
Caso nenhum número do array passe no teste, retorne o texto "Nenhum número válido encontrado!".
*/


function buscarDivisivelPor(array, num)
{
  // Escreva abaixo o seu código:
  for (var i = 0; i <= array.length; i++) {

  if ((array[i] % num == 0) && (array[i] != 0))

    return array[i];

  else if (i == array.length)

    return 'Nenhum número válido encontrado!';

  }

}

/*
Explicação:

O if vai verificar se dentro dos indices do array, existe algum número com mod em na variavel num que retorne 0, pois sabemos que qualquer numero que seja divisivel por outro,
resto é zero, depois ele vai verificar se existe dentro do array um numero que seja 0, se ambos as declarações forem verdadeiras, ele vai retornar o número do array que foi divísivel.

Em seguida se ele ver que terminou de varrer o array comparando a var i com o tamanho do indice e não houve nenhum número divisível, ele retorna 'Nenhum número válido encontrado'.
*/
=============================
/*Crie uma função que receba dois valores, o primeiro será uma palavra qualquer, e o segundo será a quantidade de vezes que o sistema irá imprimir essa palavra.
*/

function repete(valor,qtd){
  
  for(i = 0; i< qtd; i++)
 
  console.log(valor)
}
====================================================
/*
Programe uma função series que recebe dois parâmetros, um prefixo com o nome da série e um array com a lista de todos os episódios da série.
A função deve retornar um novo array com a lista de episódios iniciando com o nome da série.



Exemplo: Dadas as variáveis abaixo:

harryPotterPrefixo = "Harry Potter";
harryPotterSeries = [
  "e a Pedra Filosofal",
  "e a Câmara Secreta",
  "e o Prisioneiro de Azkaban",
  "e o Cálice de Fogo",
  "e a Ordem da Fênix",
  "e o Enigma do Príncipe",
  "e as Relíquias da Morte"
];


A função deve retornar como resultado o seguinte array:

resultado = [
  "Harry Potter e a Pedra Filosofal",
  "Harry Potter e a Câmara Secreta",
  "Harry Potter e o Prisioneiro de Azkaban",
  "Harry Potter e o Cálice de Fogo",
  "Harry Potter e a Ordem da Fênix",
  "Harry Potter e o Enigma do Príncipe",
  "Harry Potter e as Relíquias da Morte"
];
*/
function series(prefixo, array)
{
   
    var newArray = []

  for(var i =0; i < array.length; i ++){

      newArray.push(prefixo+ ' ' +  array[i])

  }

   return  newArray
    
}
=========================================================
