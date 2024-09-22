document.getElementById("history-btn").addEventListener("click", function () {
  console.log("hjdgsf");
  getElementsById("history-card").classList.remove("hidden");
  getElementsById("donate-cards").classList.add("hidden");
  document
    .getElementById("donate-btn")
    .classList.remove("text-black", "bg-[#B4F461]");
  document
    .getElementById("donate-btn")
    .classList.add(
      "text-gray-600",
      "border-2",
      "solid",
      "border-gray-300",
      "bg-white"
    );
  document
    .getElementById("history-btn")
    .classList.add("text-black", "bg-[#B4F461]");
  document
    .getElementById("history-btn")
    .classList.remove(
      "text-gray-600",
      "border-2",
      "solid",
      "border-gray-300",
      "bg-white"
    );
});

// for blog button
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "../Sub-pages/blog.html";
});

document.getElementById("donate-btn").addEventListener("click", function () {
  console.log("hjdgsf");
  getElementsById("donate-cards").classList.remove("hidden");
  getElementsById("history-card").classList.add("hidden");
  document
    .getElementById("donate-btn")
    .classList.add("text-black", "bg-[#B4F461]");
  document
    .getElementById("donate-btn")
    .classList.remove(
      "text-gray-600",
      "border-2",
      "solid",
      "border-gray-300",
      "bg-white"
    );
  document
    .getElementById("history-btn")
    .classList.remove("text-black", "bg-[#B4F461]");
  document
    .getElementById("history-btn")
    .classList.add(
      "text-gray-600",
      "border-2",
      "solid",
      "border-gray-300",
      "bg-white"
    );
});

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

    const inputValue = document.getElementById("donate-nowakhali-amount");

    if (innitialMoney <= 0 || innitialMoney < donNkhAmount) {
      alert("You Don't have enough balance.");
      inputValue.value = "";
      return;
    }

    const isNumber = inputValue.value.trim() !== "" && !isNaN(inputValue.value);
    if (!isNumber) {
      alert("Invalid input");
      inputValue.value = "";
      return;
    }

    const amountAfterDonate = innitialMoney - donNkhAmount;
    remainAmount.innerText = amountAfterDonate;
    const newAmount = donateNkh + donNkhAmount;
    document.getElementById("donate-nowakhali").innerText = newAmount;
    inputValue.value = "";
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
    const inputValue = document.getElementById("donate-feni-amount");

    if (innitialMoney <= 0 || innitialMoney < donFniAmount) {
      alert("You Don't have enough balance.");
      document.getElementById("donate-feni-amount").value = "";
      return;
    }

    const isNumber = inputValue.value.trim() !== "" && !isNaN(inputValue.value);
    if (!isNumber) {
      alert("Invalid input");
      inputValue.value = "";
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
    const inputValue = document.getElementById("donate-quta-amount");

    if (innitialMoney <= 0 || innitialMoney < donQutaAmount) {
      alert("You Don't have enough balance.");
      document.getElementById("donate-quta-amount").value = "";
      return;
    }

    const isNumber = inputValue.value.trim() !== "" && !isNaN(inputValue.value);
    if (!isNumber) {
      alert("Invalid input");
      inputValue.value = "";
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
