const addForm = document.querySelector('.add');
const listContainer = document.querySelector('.list-group');

addForm.addEventListener('submit', e => {
    
    e.preventDefault();

    let todo = addForm.add.value.trim();

    console.log(addForm.add.value.trim());

    if (todo.length) {
        createTodo(todo);
    }
    

})

function createTodo (todo) {

    let content = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>
    `;

    listContainer.innerHTML += content;
}