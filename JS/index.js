// For blog button
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "../B10-A5-Mehedi-Zaman/Sub-pages/blog.html";
});

// For home button
document.getElementById("history-btn").addEventListener("click", function () {
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
      popupMassage,
    } = allInputField();

    const inputValue = document.getElementById("donate-nowakhali-amount");

    if (innitialMoney <= 0 || innitialMoney < donNkhAmount) {
      alert("You Don't have enough balance.");
      inputValue.value = "";
      return;
    }

    const isNumber = inputValue.value.trim() !== "" && !isNaN(inputValue.value);
    if (!isNumber || donQutaAmount <= 0) {
      alert("Invalid input");
      inputValue.value = "";
      return;
    }

    const amountAfterDonate = innitialMoney - donNkhAmount;
    remainAmount.innerText = amountAfterDonate;
    const newAmount = donateNkh + donNkhAmount;
    document.getElementById("donate-nowakhali").innerText = newAmount;
    inputValue.value = "";

    // history added
    const historyCard = document.createElement("div");
    historyCard.classList.add(
      "border-2",
      "solid",
      "border-gray-300",
      "rounded-xl",
      "p-6",
      "space-y-5"
    );

    historyCard.innerHTML = `              
                    <h1 class="text-xl font-semibold">${donNkhAmount} Taka is Donate for Flood at Noakhali, Bangladesh</h1>
                    <p class="mb-4 p-2 bg-slate-100 rounded-lg">Time: ${new Date().toLocaleTimeString()}, Date: ${new Date().toLocaleDateString()} </p>
                `;

    document.getElementById("history-card").appendChild(historyCard);
    popupMassage.classList.remove("hidden");
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
      popupMassage,
    } = allInputField();

    const inputValue = document.getElementById("donate-feni-amount");

    if (innitialMoney <= 0 || innitialMoney < donFniAmount) {
      alert("You Don't have enough balance.");
      document.getElementById("donate-feni-amount").value = "";
      return;
    }

    const isNumber = inputValue.value.trim() !== "" && !isNaN(inputValue.value);
    if (!isNumber || donQutaAmount <= 0) {
      alert("Invalid input");
      inputValue.value = "";
      return;
    }

    const amountAfterDonate = innitialMoney - donFniAmount;
    remainAmount.innerText = amountAfterDonate;
    const newAmount = donateFeni + donFniAmount;
    document.getElementById("donate-feni").innerText = newAmount;
    document.getElementById("donate-feni-amount").value = "";

    // history added
    const historyCard = document.createElement("div");
    historyCard.classList.add(
      "border-2",
      "solid",
      "border-gray-300",
      "rounded-xl",
      "p-6",
      "space-y-5"
    );

    historyCard.innerHTML = `              
                    <h1 class="text-xl font-semibold">${donFniAmount} Taka is Donate for Flood Relief in Feni, Bangladesh</h1>
                    <p class="mb-4 p-2 bg-slate-100 rounded-lg">Time: ${new Date().toLocaleTimeString()}, Date: ${new Date().toLocaleDateString()} </p>
                `;

    document.getElementById("history-card").appendChild(historyCard);

    popupMassage.classList.remove("hidden");
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
      popupMassage,
    } = allInputField();
    const inputValue = document.getElementById("donate-quta-amount");

    if (innitialMoney <= 0 || innitialMoney < donQutaAmount) {
      alert("You Don't have enough balance.");
      document.getElementById("donate-quta-amount").value = "";
      return;
    }

    const isNumber = inputValue.value.trim() !== "" && !isNaN(inputValue.value);
    if (!isNumber || donQutaAmount <= 0) {
      alert("Invalid input");
      inputValue.value = "";
      return;
    }

    const amountAfterDonate = innitialMoney - donQutaAmount;
    remainAmount.innerText = amountAfterDonate;
    const newAmount = donateQuta + donQutaAmount;
    document.getElementById("donate-quta").innerText = newAmount;

    document.getElementById("donate-quta-amount").value = "";

    // history added
    const historyCard = document.createElement("div");
    historyCard.classList.add(
      "border-2",
      "solid",
      "border-gray-300",
      "rounded-xl",
      "p-6",
      "space-y-5"
    );

    historyCard.innerHTML = `              
                    <h1 class="text-xl font-semibold">${donQutaAmount} Taka is Donate for Injured in the Quota Movement</h1>
                    <p class="mb-4 p-2 bg-slate-100 rounded-lg">Time: ${new Date().toLocaleTimeString()}, Date: ${new Date().toLocaleDateString()} </p>
                `;

    document.getElementById("history-card").appendChild(historyCard);

    popupMassage.classList.remove("hidden");
  });

// For close popup massage
document.getElementById("close-popup").addEventListener("click", function () {
  document.getElementById("popup-massage").classList.add("hidden");
});
