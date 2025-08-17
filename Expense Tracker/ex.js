const addBtn = document.querySelector(".btn-add");
const list = document.getElementById("expense-list");
const totalText = document.getElementById("total");

let expenses = [];
let total = 0;

addBtn.addEventListener("click", function () {
  const name = prompt("What did you spend on?");
  const amount = parseFloat(prompt("How much?"));

  if (name && !isNaN(amount)) {
    expenses.push({ name, amount });
    total += amount;
    showExpenses();
  }
});

function showExpenses() {
  list.innerHTML = ""; // clear old items

  if (expenses.length === 0) {
    list.innerHTML = '<p class="empty">No expenses yet</p>';
  } else {
    expenses.forEach((expense, index) => {
      const item = document.createElement("div");
      item.className = "expense-item";
      item.innerHTML = `
        <span>${expense.name}: $${expense.amount}</span>
        <button class="delete-btn" onclick="deleteExpense(${index})">&times;</button>
      `;
      list.appendChild(item);
    });
  }

  totalText.textContent = "$" + total.toFixed(2);
}

function deleteExpense(index) {
    if(confirm("Are you sure?")){
         total -= expenses[index].amount;
  expenses.splice(index, 1);
  showExpenses();
}
}
 
