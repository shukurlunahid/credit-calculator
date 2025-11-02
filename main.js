const sellAmountEl = document.getElementById("sellAmount");
const firstPaymentEl = document.getElementById("firstPayment");
const monthlyPaymentEl = document.getElementById("monthlyPayment");
const totalAmountEl = document.getElementById("totalAmount");
const firstPaymentRadios = document.querySelectorAll('input[type="radio"]');
const firstPaymentWithRateEl = document.getElementById("firstPaymentWithRate");
const firstPaymentWithCashEl = document.getElementById("firstPaymentWithCash");

var previousChecked = null;
for (var i = 0; i < firstPaymentRadios.length; i++) {
  firstPaymentRadios[i].onclick = function () {
    if (this.value === "cash") {
      firstPaymentWithRateEl.classList.add("d-none");
      firstPaymentWithRateEl.value = "";
      firstPaymentWithCashEl.classList.remove("d-none");
    } else if (this.value === "withRate") {
      firstPaymentWithCashEl.classList.add("d-none");
      firstPaymentWithCashEl.value = "";
      firstPaymentWithRateEl.classList.remove("d-none");
    }
  };
}

function handleChange(val) {
  sellAmountEl.textContent = thousandSeparator(+val);
}

function handleSubmit() {
  const amount = document.getElementById("amount").value;
  const rate = document.getElementById("rate").value;
  const years = document.getElementById("years").value;
  const firstPaymentWithCash = firstPaymentWithCashEl.value;
  const firstPaymentWithRate = firstPaymentWithRateEl.value;

  let firstPayment = 0;

  if (firstPaymentWithRate) {
    firstPayment = (amount * firstPaymentWithRate) / 100;
  } else {
    firstPayment = firstPaymentWithCash;
  }

  if (!amount || !rate || !firstPayment || !years) {
    alert("Xanaları düzgün doldurun");
    clearResults();
    return;
  }

  const months = years * 12;
  const monthlyPayment = calculateAnnuity(amount - firstPayment, rate, months);
  const totalAmount = calculatoTotalAmount(monthlyPayment, months);
  firstPaymentEl.textContent = thousandSeparator(firstPayment);
  monthlyPaymentEl.textContent = thousandSeparator(monthlyPayment);
  totalAmountEl.textContent = thousandSeparator(totalAmount);
}

function clearResults() {
  firstPaymentEl.textContent = "";
  monthlyPaymentEl.textContent = "";
  totalAmountEl.textContent = "";
}
