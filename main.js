

function clicou(){
    document.getElementById("agradecimeno").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!")
}

function redirecionar(){
    //window.open("https://www.ifood.com.br/delivery/salvador-ba/pizzaria-bella-massa-jardim-santo-inacio/bcfdc9ac-29a1-4a76-ba1d-df531325f10a/");
    window.location.host ="https://www.ifood.com.br/delivery/salvador-ba/pizzaria-bella-massa-jardim-santo-inacio/bcfdc9ac-29a1-4a76-ba1d-df531325f10a/"
}
    
function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigado por passa o mouse";
   elemento.innerHTML = "Obrigado por passa o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        var validar = true 
    }else{
        validar = false
    }
   return validar;
}
var idade = prompt("Qual a sua idade");
console.log(validaIdade(idade));
*/

//function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome);
//}

//alert(soma(5, 10));
//alert(setReplace("Vai Japão","Japão" , "Brasil"));


/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count = 0;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count ++;
};
*/

/*
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*
var fruta = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(fruta);
alert(fruta[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["marçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join("-"));

//var nome = "William";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLocaleLowerCase());
//alert(frase.replace("Japão","Brasil"));