const button = document.getElementById("convert-button")
const select = document.getElementById("select")

const dolar = 5.48
const euro = 5.78
const bitcoin = 91329.20

const ConvertValues = () => {
  const inputReal = document.getElementById("input-real").value 
  const realText = document.getElementById("real-text")
  const currencyValueText = document.getElementById("currency-value-text")

  realText.innerText = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency:"BRL"
  }).format(inputReal)

  if (select.value === "US$ Dólar americano"){
    currencyValueText.innerText = new Intl.NumberFormat("en-US", {
      style:"currency",
      currency:"USD",
   }).format(inputReal/dolar) 
  }

  if (select.value=== "€ Euro"){
    currencyValueText.innerText = new Intl.NumberFormat("de-DE", {
      style:"currency",
      currency:"EUR",
    }).format(inputReal/euro)
  }

  if (select.value=== "Bitcoin"){
    currencyValueText.innerText = new Intl.NumberFormat("de-DE", {
      style:"decimal",
      currency:"BTC",
    }).format(inputReal/bitcoin)
  }
}
    

const changeCurrency = () =>{
  const currencyName = document.getElementById("currency-name")
  const img = document.getElementById("currency-img")

    if (select.value === "€ Euro" ){
      currencyName.innerText = "Euro"
      img.src="./assets/euro.png"
    }

    if (select.value === "US$ Dólar americano" ){
      currencyName.innerText = "Dólar Americano"
      img.src="./assets/eua.png"
    }

    if (select.value === "€ Euro" ){
      currencyName.innerText = "Euro"
      img.src="./assets/euro.png"
    }

    if (select.value === "Bitcoin" ){
      currencyName.innerText = "Bitcoin"
      img.src="./assets/bitcoin.png"
    }

    ConvertValues()   
}

button.addEventListener("click", ConvertValues)
select.addEventListener("change", changeCurrency)


export default ConvertValues