const exchangeRates = {
  USD: {
    EUR: 0.94,
    COP: 4238.85
  },
  EUR: {
    USD: 1.07,
    COP: 4498.58
  },
  COP: {
    USD: 0.00024,
    EUR: 0.00022
  }
};

document.getElementById("convert").addEventListener("click", function () {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const result = convertCurrency(amount, fromCurrency, toCurrency);
  document.getElementById("result").textContent = result;
  alert("El resultado es " + result);
});

function convertCurrency(amount, fromCurrency, toCurrency) {
  if (fromCurrency === toCurrency) {
    return amount;
  }

  const rate = exchangeRates[fromCurrency][toCurrency];
  if (rate) {
    return (amount * rate).toFixed(2);
  } else {
    return "Tasa de cambio no encontrada";
  }
}
