function calculateAnnuity(amount, rate, month = 300) {
  rate = rate / 100;
  const monthlyRate = rate / 12;
  const fraction = amount * monthlyRate;
  const denominator = 1 - Math.pow(1 + monthlyRate, -1 * month);
  const annuity = fraction / denominator;

  return annuity;
}

function calculatoTotalAmount(monthlyPayment, month = 300) {
  let totalAmount = monthlyPayment * month;
  totalAmount = Number(totalAmount.toFixed(2));
  return totalAmount;
}

function thousandSeparator(number, fixedNumber = 2) {
  if (!number) {
    return;
  }

  let result = "";

  if (fixedNumber) {
    number = Number(number.toFixed(fixedNumber));
  }
  result = number.toLocaleString("en-US").replace(",", " ");

  return result;
}
