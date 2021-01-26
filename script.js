 // Login button event handler
 const loginBtn = document.getElementById("login");
 loginBtn.addEventListener("click", function () {
     const loginArea = document.getElementById("login-area");
     loginArea.style.display = "none";
     const transactionArea = document.getElementById("transaction-area");
     transactionArea.style.display = "block"
 })

 // Deposit button event handler
 const depositBtn = document.getElementById("add-deposit");
 depositBtn.addEventListener("click", function () {
     const depositNumber = inputNumber("deposit-amount")
     updateSpanText("current-deposit", depositNumber);
     updateSpanText("current-balance", depositNumber);
     document.getElementById("deposit-amount").value = "";
 })

 // Deposit button event handler
 const withdrawBtn = document.getElementById("add-withdraw");
 withdrawBtn.addEventListener("click", function () {
     const withdrawNumber = inputNumber("withdraw-amount")
     updateSpanText("current-withdraw", withdrawNumber);
     updateSpanText("current-balance", -1 * withdrawNumber);
     document.getElementById("withdraw-amount").value = "";
 })

 function inputNumber(inputId) {
     const inputAmount = document.getElementById(inputId).value;
     const inputAmountNumber = parseFloat(inputAmount);
     return inputAmountNumber;
 }

 function updateSpanText(id, inputAmountNumber) {
     const current = document.getElementById(id).innerText;
     const currentNumber = parseFloat(current);
     const totalAmount = inputAmountNumber + currentNumber;
     document.getElementById(id).innerText = totalAmount;
 }