// Global declared function
function getElementValueById(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}
function getElementsById(id) {
  const elementById = document.getElementById(id);
  return elementById;
}
function getElementInnerTextById(id) {
  const elementInnerText = parseFloat(document.getElementById(id).innerText);
  return elementInnerText;
}

// Global declared function for all value
function allInputField() {
  // input field value
  const donNkhAmount = getElementValueById("donate-nowakhali-amount");
  const donFniAmount = getElementValueById("donate-feni-amount");
  const donQutaAmount = getElementValueById("donate-quta-amount");
  // Inner text value
  const innitialMoney = getElementInnerTextById("innitial-money");
  const donateNkh = getElementInnerTextById("donate-nowakhali");
  const donateFeni = getElementInnerTextById("donate-feni");
  const donateQuta = getElementInnerTextById("donate-quta");
  const remainAmount = getElementsById("innitial-money");
  const popupMassage = getElementsById("popup-massage");
  return {
    donNkhAmount,
    donFniAmount,
    donQutaAmount,

    innitialMoney,
    donateNkh,
    donateFeni,
    donateQuta,
    remainAmount,
    popupMassage,
  };
}
