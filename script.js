
document.addEventListener("DOMContentLoaded", function () {

    var converter = document.getElementById('btnconv'); // botão
    var valor = document.getElementById('val'); // [valor digitado: valor.value]
    var resposta = document.getElementById('resp'); // div p/ mostrar resultado

    var moedaOrigem = document.getElementById('origem'); // [moeda selecionada.: moedaOrigem.value]


    var moedaDest = document.getElementById('destino'); // [moeda selecionada.: moedaDest.value]



// arrays das moedas (tendo como referência a de origem)
moeda1Real = [
    { m: "dolar", cot: 0.19 }, { m: "euro", cot: 0.18 }, { m: "libra", cot: 0.15 }, { m: "iene", cot: 30.33 }
]

moeda1Dolar = [
    { m: "real", cot: 5.20 }, { m: "euro", cot: 0.93 }, { m: "libra", cot: 0.80 }, { m: "iene", cot: 153.66 }
]

moeda1Euro = [
    { m: "real", cot: 5.48 }, { m: "dolar", cot: 1.07 }, { m: "libra", cot: 0.86 }, { m: "iene", cot: 164.86 }
]

moeda1Libra = [
    { m: "real", cot: 6.40 }, { m: "euro", cot: 1.17 }, { m: "dolar", cot: 1.25 }, { m: "iene", cot: 192.60 }
]

moeda1Iene = [
    { m: "real", cot: 0.033 }, { m: "euro", cot: 0.0061 }, { m: "libra", cot: 0.0052 }, { m: "dolar", cot: 0.0065 }
]
//



    function converterVal() {

        //se número for digitado com vírgula, transformá-lo em número decimal para o cálculo
        var valorReal = parseFloat(valor.value.replace(',', '.'));

        if (moedaOrigem.value == 'real'){
            if(moedaDest.value == 'real'){
                resposta.innerHTML = "Conversão inválida!";
            }
            else if(moedaDest.value == 'dolar'){
                var resp = moeda1Real[0].cot * valorReal;
                resposta.innerHTML =`Resultado: ${resp.toLocaleString('en-US', {style:"currency", currency:"USD"})} <br> Cotação entre as moedas: 0,19`;
            }
            else if(moedaDest.value == 'euro'){
                var resp = moeda1Real[1].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('pt-PT', {style:"currency", currency:"EUR"})}<br> Cotação entre as moedas: 0,18 `;
            }
            else if(moedaDest.value == 'libra'){
                var resp = moeda1Real[2].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('en-GB', {style:"currency", currency:"GBP"})}<br> Cotação entre as moedas: 0,15 `;
            }
            else if(moedaDest.value == 'iene'){
                var resp = moeda1Real[3].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('ja-JP', {style:"currency", currency:"JPY"})}<br> Cotação entre as moedas: 30,33 `;
            }
        }
        else if(moedaOrigem.value == 'dolar'){
            if(moedaDest.value == 'dolar'){
                resposta.innerHTML = "Conversão inválida!";
            }
            else if(moedaDest.value == 'real'){
                var resp = moeda1Dolar[0].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('pt-BR', {style:"currency", currency:"BRL"})} <br> Cotação entre as moedas: 5,20`;
            }
            else if(moedaDest.value == 'euro'){
                var resp = moeda1Dolar[1].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('pt-PT', {style:"currency", currency:"EUR"})} <br> Cotação entre as moedas: 0,93`;
            }
            else if(moedaDest.value == 'libra'){
                var resp = moeda1Dolar[2].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('en-GB', {style:"currency", currency:"GBP"})} <br> Cotação entre as moedas: 0,80`;
            }
            else if(moedaDest.value == 'iene'){
                var resp = moeda1Dolar[3].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('ja-JP', {style:"currency", currency:"JPY"})} <br> Cotação entre as moedas: 153,66`;
            }
        }
        else if(moedaOrigem.value == 'euro'){
            if(moedaDest.value == 'euro'){
                resposta.innerHTML = "Conversão inválida!";
            }
            else if(moedaDest.value == 'real'){
                var resp = moeda1Euro[0].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('pt-BR', {style:"currency", currency:"BRL"})} <br> Cotação entre as moedas: 5,48`;
            }
            else if(moedaDest.value == 'dolar'){
                var resp = moeda1Euro[1].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('en-US', {style:"currency", currency:"USD"})} <br> Cotação entre as moedas: 1,07`;
            }
            else if(moedaDest.value == 'libra'){
                var resp = moeda1Euro[2].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('en-GB', {style:"currency", currency:"GBP"})} <br> Cotação entre as moedas: 0,86`;
            }
            else if(moedaDest.value == 'iene'){
                var resp = moeda1Euro[3].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('ja-JP', {style:"currency", currency:"JPY"})} <br> Cotação entre as moedas: 164,86`;
            }
        }
        else if(moedaOrigem.value == 'libra'){
            if(moedaDest.value == 'libra'){
                resposta.innerHTML = "Conversão inválida!";
            }
            else if(moedaDest.value == 'real'){
                var resp = moeda1Libra[0].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('pt-BR', {style:"currency", currency:"BRL"})} <br> Cotação entre as moedas: 6,40`;
            }
            else if(moedaDest.value == 'euro'){
                var resp = moeda1Libra[1].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('pt-PT', {style:"currency", currency:"EUR"})} <br> Cotação entre as moedas: 1,17`;
            }
            else if(moedaDest.value == 'dolar'){
                var resp = moeda1Libra[2].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('en-US', {style:"currency", currency:"USD"})} <br> Cotação entre as moedas: 1,25`;
            }
            else if(moedaDest.value == 'iene'){
                var resp = moeda1Libra[3].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('ja-JP', {style:"currency", currency:"JPY"})} <br> Cotação entre as moedas: 192,60`;
            }
        }
        else if(moedaOrigem.value == 'iene'){
            if(moedaDest.value == 'iene'){
                resposta.innerHTML = "Conversão inválida!";
            }
            else if(moedaDest.value == 'real'){
                var resp = moeda1Iene[0].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('pt-BR', {style:"currency", currency:"BRL"})} <br> Cotação entre as moedas: 0,033`;
            }
            else if(moedaDest.value == 'euro'){
                var resp = moeda1Iene[1].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('pt-PT', {style:"currency", currency:"EUR"})} <br> Cotação entre as moedas: 0.0061`;
            }
            else if(moedaDest.value == 'libra'){
                var resp = moeda1Iene[2].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('en-GB', {style:"currency", currency:"GBP"})} <br> Cotação entre as moedas: 0.0052`;
            }
            else if(moedaDest.value =='dolar'){
                var resp = moeda1Iene[3].cot * valorReal;
                resposta.innerHTML = `Resultado: ${resp.toLocaleString('en-US', {style:"currency", currency:"USD"})} <br> Cotação entre as moedas: 0,065`;
            }
        }

        // se o usuário digitar letras e outros caracteres inválidos
        if(isNaN(valorReal) == true){
            resposta.innerHTML = "Digite apenas números!"
         }
        
        
    }


     
   
    //  evento CLIQUE BOTÃO CONVERTER
    converter.addEventListener('click', function () {
        
         converterVal();

         // se usuário digita o valor 0 ou deixa o campo vazio
         if (valor.value == 0 || valor.value == null){
            resposta.innerHTML = "Digite um valor válido!"
         }
        

    })

    

})


