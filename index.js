// arthur frank
// 1. sera impresso 10, 50, e na b nada pois a funçao so foi declarada
// 2. ela deixa todas as letras minusculas e se a palavra cenoura esta na frase. b. eu gosto de cenoura, true, cenoura é bom pra vista, true, cenouras crescem na terra, true
// 3. 
//a. 
function exercicio () {
    const linhas = "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.";
    console.log(linhas);
}

//b 
function retornaTextoComParamatros(nome, idade, cidade, profissao) {
    return `eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`;
}
console.log(retornaTextoComParamatros("arthur", 16, "portao", "estudante"));
//4, 
function soma(valor, valor2) {
    return valor + valor2;
}
console.log(soma(5, 10));


function somar(valores, valores2) {
    const somar2 = valores + valores2;
    console.log(somar2);
}

function dividir(valores, valores2) {
    const dividir2 = valores / valores2;
    console.log(dividir2);
}

function subtrair(valores, valores2) {
    const subtrair2 = valores - valores2;
    console.log(subtrair2);
}

function multiplicar(valores, valores2) {
    const vezes2 = valores * valores2;
    console.log(vezes2);
}
multiplicar(20, 2);
subtrair(20, 2);
somar(20, 2);
dividir(20, 2);
