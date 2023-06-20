function createListItems() {
    var list = document.getElementById("myList");
    list.innerHTML = "";
    for (var i = 1; i <= 5; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
    }
    }
   
    createListItems();



