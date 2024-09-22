// For nowakhali Donate button
document
  .getElementById("donet-nowakhali-btn")
  .addEventListener("click", function () {
    const {
      donNkhAmount,
      donFniAmount,
      donQutaAmount,
      innitialMoney,
      donateNkh,
      donateFeni,
      donateQuta,
      remainAmount,
    } = allInputField();

    if (innitialMoney <= 0 || innitialMoney < donNkhAmount) {
      alert("You Don't have enough balance.");
      document.getElementById("donate-nowakhali-amount").value = "";
      return;
    }
    const amountAfterDonate = innitialMoney - donNkhAmount;
    remainAmount.innerText = amountAfterDonate;
    console.log(remainAmount);
    const newAmount = donateNkh + donNkhAmount;
    console.log(newAmount);
    document.getElementById("donate-nowakhali").innerText = newAmount;
    document.getElementById("donate-nowakhali-amount").value = "";
  });

// For Feni Donate button
document
  .getElementById("donet-feni-btn")
  .addEventListener("click", function () {
    const {
      donNkhAmount,
      donFniAmount,
      donQutaAmount,
      innitialMoney,
      donateNkh,
      donateFeni,
      donateQuta,
      remainAmount,
    } = allInputField();

    if (innitialMoney <= 0 || innitialMoney < donFniAmount) {
      alert("You Don't have enough balance.");
      document.getElementById("donate-feni-amount").value = "";
      return;
    }
    const amountAfterDonate = innitialMoney - donFniAmount;
    remainAmount.innerText = amountAfterDonate;
    console.log(remainAmount);
    const newAmount = donateFeni + donFniAmount;
    console.log(newAmount);
    document.getElementById("donate-feni").innerText = newAmount;
    document.getElementById("donate-feni-amount").value = "";
  });

// For quta Donate button
document
  .getElementById("donet-quta-btn")
  .addEventListener("click", function () {
    const {
      donNkhAmount,
      donFniAmount,
      donQutaAmount,
      innitialMoney,
      donateNkh,
      donateFeni,
      donateQuta,
      remainAmount,
    } = allInputField();

    if (innitialMoney <= 0 || innitialMoney < donQutaAmount) {
      alert("You Don't have enough balance.");
      document.getElementById("donate-quta-amount").value = "";
      return;
    }
    const amountAfterDonate = innitialMoney - donQutaAmount;
    remainAmount.innerText = amountAfterDonate;
    console.log(remainAmount);
    const newAmount = donateQuta + donQutaAmount;
    console.log(newAmount);
    document.getElementById("donate-quta").innerText = newAmount;
    document.getElementById("ddonate-quta-amount").value = "";
  });
