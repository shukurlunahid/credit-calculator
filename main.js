const sellAmountEl = document.getElementById("sellAmount");
const firstPaymentEl = document.getElementById("firstPayment");
const monthlyPaymentEl = document.getElementById("monthlyPayment");
const totalAmountEl = document.getElementById("totalAmount");

function handleChange(val) {
  sellAmountEl.textContent = thousandSeparator(+val);
}

function handleSubmit() {
  const amount = document.getElementById("amount").value;
  const rate = document.getElementById("rate").value;

  if (!amount || !rate) {
    alert("Xanaları düzgün doldurun");
    clearResults();
    return;
  }
  const firstPayment = (amount * 15) / 100;
  const monthlyPayment = calculateAnnuity(amount - firstPayment, rate);
  const totalAmount = calculatoTotalAmount(monthlyPayment);
  firstPaymentEl.textContent = thousandSeparator(firstPayment);
  monthlyPaymentEl.textContent = thousandSeparator(monthlyPayment);
  totalAmountEl.textContent = thousandSeparator(totalAmount);
}

function clearResults() {
  firstPaymentEl.textContent = "";
  monthlyPaymentEl.textContent = "";
  totalAmountEl.textContent = "";
}
