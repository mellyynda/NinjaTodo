const addForm = document.querySelector('.add');
const list = document.querySelector('.list-group');
const search = document.querySelector('.search input');

addForm.addEventListener('submit', e => {
    
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if (todo.length) {
        createTodo(todo);
        addForm.reset();
    } 

})

function createTodo(todo) {

    const content = document.createElement('li');

    content.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    
    content.innerHTML = `
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
         `;

    list.insertBefore(content, list.firstChild);
    
}

//delete todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

//search todos
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    renderSearched(term);
})

const renderSearched = (term) => {

    Array.from(list.children)
        .filter( child => !child.textContent.toLowerCase().includes(term))
        .forEach( child => child.classList.add('hide'));

    Array.from(list.children)
        .filter( child => child.textContent.toLowerCase().includes(term))
        .forEach( child => child.classList.remove('hide'));
        
}