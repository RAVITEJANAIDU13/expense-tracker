import { useState } from "react";
import "./App.css";

function ExpenseCard({ name, category, amount, onDelete }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Category: {category}</p>
      <p>Amount: ₹{amount}</p>
      <button onClick={onDelete}>Delete</button>
      <hr />
    </div>
  );
}

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Groceries", category: "Food", amount: 2500 },
    { id: 2, name: "Electricity Bill", category: "Utilities", amount: 1800 },
    { id: 3, name: "Bus Pass", category: "Transport", amount: 950 },
    { id: 4, name: "Netflix", category: "Entertainment", amount: 649 },
    { id: 5, name: "Mobile Recharge", category: "Bills", amount: 299 },
  ]);

  function deleteExpense(id) {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }

  return (
    <div>
      <h1>Personal Expense Tracker</h1>

      {expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          name={expense.name}
          category={expense.category}
          amount={expense.amount}
          onDelete={() => deleteExpense(expense.id)}
        />
      ))}
    </div>
  );
}

export default App;