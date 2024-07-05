const depositAmount = document.getElementById("deposit-amount");
const errorMessage = document.getElementById("deposit-error");
const depositButton = document.getElementById("deposit-button");
const depositValue = document.getElementById("amount");
const expenseValue = document.getElementById("expenses-value");
const balanceAmount = document.getElementById("balance-amount");

let tempAmount = 0;
depositButton.addEventListener("click", function () {
  tempAmount = depositAmount.value;
  if (depositAmount.value === "") {
    errorMessage.innerText = `Deposit amount can't be empty...`;
    errorMessage.classList.remove("hide");
  } else if (depositAmount.value <= 0) {
    errorMessage.innerText = "Invalid deposit amount ...";
    errorMessage.classList.remove("hide");
  } else {
    errorMessage.classList.add("hide");
    depositValue.innerText = tempAmount;
    balanceAmount.innerText = tempAmount - expenseValue.innerText;
    depositAmount.value = "";
  }
});
const expensesError = document.getElementById("product-title-error");
const productTitle = document.getElementById("product-title");
const userAmount = document.getElementById("user-amount");
const expenseButton = document.getElementById("expense-amount-button");
const list = document.getElementById("list");

// ------------function modifyElement------------///
const  modifyElement = (element)=>{
  let currentBalance = balanceAmount.innerText;
  let currentexpense = expenseValue.innerText; 
  let parentdiv = element.parentElement;
  let parentAmount  = parentdiv.queryselector(".amount").innerText;
  let parentText = parentdiv.queryselector(".product").innerText;
  userAmount.value = parentAmount;
  productTitle.value = parentText;
  parentdiv.remove();
};
// ------------function------------///
const listCreator = (expenseName, expenseValue) => {
  let sublistContent = document.createElement("div");
  sublistContent.classList.add("sublist-content", "flex-space");
  sublistContent.innerHTML = `<p class="product">${expenseName}</p>
 <p class="amount">${expenseValue}</p>`;
  let editButton = document.createElement("button");
  editButton.classList.add("edit", "fa-solid", "fa-pen-to-square");
  // editButton.setAttribute("id",`edit_${Date.now()}`);
  editButton.addEventListener("click",(e) => {
    e.preventDefault();
    modifyElement(editButton);
  });
  sublistContent.appendChild(editButton);
 
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete", "fa-solid", "fa-trash-can");
  sublistContent.appendChild(deleteButton);
  list.appendChild(sublistContent);

};


expenseButton.addEventListener("click", () => {
  let expenditure = parseInt(userAmount.value);
  let sum = parseInt(expenseValue.innerText) + expenditure;
  let totalBalance = tempAmount - sum;

  if (!userAmount.value || !productTitle.value) {
    expensesError.classList.remove("hide");
    expensesError.innerText = "Expense value can't be empty..";
    return;
  } else if (productTitle.value.trim().length <= 0 || userAmount.value <= 0) {
    expensesError.classList.remove("hide");
    expensesError.innerText = "Invalid input field";
    return;
  } else {
    expenseValue.innerText = sum;
    balanceAmount.innerText = totalBalance;
    expensesError.classList.add("hide");
    listCreator(productTitle.value, userAmount.value);
  }

  productTitle.value = "";
  userAmount.value = "";
});
