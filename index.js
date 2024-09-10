document.getElementById("hoverButton").addEventListener("mouseover", function() {
    document.getElementById("hiddenMessage").classList.remove("hidden");
    document.getElementById("hiddenMessage").classList.add("visible");
});

document.getElementById("hoverButton").addEventListener("mouseout", function() {
    document.getElementById("hiddenMessage").classList.remove("visible");
    document.getElementById("hiddenMessage").classList.add("hidden");
});




const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodoButton');
const todoList = document.getElementById('todoList');


function addTodo() {
    const todoText = todoInput.value;

    if (todoText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = todoText;

    li.addEventListener('click', function() {
        console.log(li);
        todoList.removeChild(li);
    });
  
    todoList.appendChild(li);

    todoInput.value = '';
}

addTodoButton.addEventListener('click', addTodo);

let selectCars = document.getElementById("cars");

const values = [];
selectCars.addEventListener('change', function(){

    const selectedValue = this.value;
    const index = values.indexOf(selectedValue);

    if (index == -1){
        values.push(selectedValue);
    }else{
        values.splice(index,1);
    }
    console.log(values)
    updateSelectedItemList();
    document.getElementById('cars').selectedIndex = 0;
});

function updateSelectedItemList(){
    const carList = document.getElementById("carList");

    carList.innerHTML = '';
    values.forEach(item => {
        const carListItem = document.createElement('li');
        carListItem.textContent = item;
        carList.appendChild(carListItem);
    });
}