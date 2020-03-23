document.addEventListener("DOMContentLoaded", () => {
  let listOfTodo = document.querySelector(".items-list");
  let addItem = document.querySelector(".add-icon");
  let todoItems = [];
  let count = 0;

  addItem.addEventListener("click", () => {
    let value = document.getElementById("to-do-item").value;
    if (value != "") {
      let listItem = document.createElement("li");
      let pItem = document.createElement("p");
      let delItem = document.createElement("div");
      listItem.classList.add("item");
      delItem.classList.add("delete-icon");
      function deleteItem() {
        listItem.classList.add("delete");
      }
      delItem.addEventListener("click", deleteItem);
      delItem.innerHTML = '<span class="material-icons">delete</span>';
      pItem.innerHTML = value;
      listItem.appendChild(pItem);
      listItem.appendChild(delItem);
      listOfTodo.appendChild(listItem);
      document.getElementById("to-do-item").value = "";
    } else {
      alert("Item Cannot Be Empty");
    }
  });
});
