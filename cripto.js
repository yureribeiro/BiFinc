import dotenv from 'dotenv'

dotenv.config()
const apiKey = process.env.CRIPTO_API_SECRET

const url = 'https://api.coinranking.com/v2/coins'

const queryString = new URLSearchParams({
  'x-access-token': apiKey
});

const formater = Intl.NumberFormat('pt-br', {
  notation: 'compact',
})


async function coinRank() {
  
  const rank = await fetch(`${url}?${queryString}`, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'API-key': apiKey,
      'Access-Control-Allow-Origin': 'https://bifinc.vercel.app/'
    }
  })
.then((response) => {
  if (response.ok) {
    response.json().then((json) => {
      console.log(json.data.coins)
      let coinsData = json.data.coins

      if (coinsData.length > 0) {
        var cryptoCoin = ''
      }
      //For Loop Starts
      coinsData.forEach((coin) => {
        cryptoCoin += '<tr>'
        cryptoCoin += `<td id='img'> <img id='logo' src='${coin.iconUrl}'></td>`
        cryptoCoin += `<td id='rank'> ${coin.rank}</td>`
        cryptoCoin += `<td id='name'> ${coin.name}</td>`
        cryptoCoin += `<td id='price'> $${formater.format(coin.price)}</td>`
        cryptoCoin += `<td id='symbol'> ${coin.symbol}</td>`,'</tr>'
      })
      //For Loop Ends
      document.getElementById('data').innerHTML = cryptoCoin
      })
    }
  })
  .catch((error) => {
    console.log(error)
  })

 return rank
} 


export default coinRank
