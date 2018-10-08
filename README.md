# Warp Exchange Gateway

Antes de mais nada, leia a documentação completa:
https://github.com/warp-exchange/rest-api
 
 Agora vamos lá:
 
# Instalação:

#### NPM
```sh
npm i warpexchange --save
```

#### YARN
```sh
yarn add warpexchange
```

(Abra o arquivo index.js - já tem tudo lá)

 # Importe da Biblioteca
```sh
var WarpExchange = require('warpexchange');
```

 # Configure o arquivo WarpExchange.js
```sh

let config = {
    apiKey: '.....eyuUWirZI5P02pePz.....',
};
```

Pronto. Lembre-se que cada método tem um conjunto de parâmetros obrigatórios, conforme a documentação da API.

## /getnewaddress
Exemplo:
  ```sh
var paramsNewAddress = {
    network: 'BTC',//'TESTNET' - para testes
    valueInLocalCurrency: 302.13,// Valor em reais Trezentos e dois reais e treze centavos. 
    merchantSystemID: 'YourSystemID',//id DO SEU SISTEMA
    //Caso seja um Market Place, remova os comentários abaixo alterando o valor do MarketPlaceToken para cada parte envolvida.
    //split: [
    //                  { "MarketPlaceToken": 'xxx1', "PercentOf": 10.00 },
    //                  { "MarketPlaceToken": 'xxx3', "PercentOf": 20.00 },
    //                  { "MarketPlaceToken": 'xxx2', "PercentOf": 70.00 }
    //]
}

WarpExchange.getnewaddress(paramsNewAddress, function (err, response) {
    if (!err) {
        console.log(response);
        if (response.statusCode === 200) {
            console.log(response.body.walletAddress);
            console.log('Valor em Satoshis: ' + response.body.valueInSatoshi);
            console.log('Valor em BTC: ' + WarpExchange.ToBTC(response.body.valueInSatoshi));
        }
        else {
            console.log(response);
        }
    }
    else {
            console.log(err);
        }
});
```

## /gettransactioninformation
Exemplo:
  ```sh
var paramTID = {
    merchantSystemID: 'YourSystemID'//O identificador do seu sistema, enviado como parâmetro quando solicitado no método "getnewaddress".
}

WarpExchange.gettransactioninformation(paramTID, function (err, response) {
    if (!err) {        
        //console.log(response);
        console.log(response.statusCode);
        console.log(response.body.TipoMoeda);
        console.log(response.body.MerchantSystemID);
        console.log(response.body.EnderecoDoCliente);
        console.log(response.body.DataRecebimento);
        console.log(response.body.ValorSolicitadoEmMoedaLocal);
        console.log(response.body.Notificado);
        console.log(response.body.TarifaMineracaoEnviada);
        console.log(response.body.HashDaTransacao);
        console.log(response.body.ValorRecebidoEmDigital);
        console.log(response.body.ValorSolicitadoEmDigital);
        console.log(response.body.StatusID);
        console.log(response.body.Status);//Mensagem
    }
});
```

## /gettransactions
Exemplo:
  ```sh

WarpExchange.gettransactions(function (err, response) {
    if (!err) {
        console.log(response.statusCode);
        if (response.statusCode === 200) {
            for (var i = 0; i < response.body.length; i++) {

                console.log(response.body[i].TipoMoeda);
                console.log(response.body[i].MerchantSystemID);
                console.log(response.body[i].EnderecoDoCliente);
                console.log(response.body[i].DataRecebimento);
                console.log(response.body[i].ValorSolicitadoEmMoedaLocal);
                console.log(response.body[i].Notificado);
                console.log(response.body[i].TarifaMineracaoEnviada);
                console.log(response.body[i].HashDaTransacao);
                console.log(response.body[i].ValorRecebidoEmDigital);
                console.log(response.body[i].ValorSolicitadoEmDigital);
                console.log(response.body[i].StatusID);
                console.log(response.body[i].Status);//Mensagem
            }
        }
        else {
            console.log(response);
        }
    }
    else {
        console.log(err);
    }
});
```


