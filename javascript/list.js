let my_input = document.getElementById("myInput").value;
console.log(my_input);

function addItemToList(input) {
    const li = document.createElement("li");
    li.appendChild(input);
}

addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', addItemToList(my_input))