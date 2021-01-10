const addForm = document.querySelector('.add');
const list = document.querySelector('.list-group');

addForm.addEventListener('submit', e => {
    
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if (todo.length) {
        createTodo(todo);
        addForm.reset();
    } 

})

function createTodo(todo) {

    const content = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>
    `;

    list.innerHTML += content;
}

//delete todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})