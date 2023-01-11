const url = 'https://economia.awesomeapi.com.br/last/'
const coins = 'USD-BRL,EUR-BRL,BTC-BRL'

async function cotas() {
 const cotacoes = await fetch(url + coins)
  .then(function(response){
    return response.json()
  })
  .then(function(date){
    const dolarReal = date.USDBRL
    const euroReal = date.EURBRL
    const btcReal = date.BTCBRL
    let thisData = new Date()

    //DOLAR
    document.getElementById('title').innerText = dolarReal.name
    document.getElementById('thisdate').innerText = thisData.toLocaleString()
    //valor Maximo 
    document.getElementById('maxvalue').innerText = parseFloat(dolarReal.high).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
    //valor Minimo 
    document.getElementById('minvalue').innerText = parseFloat(dolarReal.low).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })


    //EURO
    document.getElementById('title-eur').innerText = euroReal.name
    document.getElementById('thisdate-eur').innerText = thisData.toLocaleString()
    //valor Maximo 
    document.getElementById('maxvalue-eur').innerText = parseFloat(euroReal.high).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
    //valor Minimo 
    document.getElementById('minvalue-eur').innerText = parseFloat(euroReal.low).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })


    //BITCOIN
    document.getElementById('title-btc').innerText = btcReal.name
    document.getElementById('thisdate-btc').innerText = thisData.toLocaleString()
    //valor Maximo 
    document.getElementById('maxvaluebtc').innerText = parseFloat(btcReal.high).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
    //valor Minimo 
    document.getElementById('minvaluebtc').innerText = parseFloat(btcReal.low).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  })
  return cotacoes
}
  



  export default cotas