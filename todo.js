alert('Welcome to Todo List App!')
alert('Click on the + icon to add new todo')
const plusIcon = document.querySelector('#add-icon');
const todoList = document.querySelector('#todo-list');
let clickCount = 0;

// click on the plusIcon just once
plusIcon.addEventListener('click', () => {
    clickCount++;
   if (clickCount % 2 != 0) {
        const createInput = document.createElement('input');
        createInput.setAttribute('type', 'text');
        createInput.setAttribute('placeholder', 'Add New Todo...');
        createInput.classList.add('input-box');
        document.querySelector('.input-container').appendChild(createInput);
   }else{
        document.querySelector('.input-container').removeChild(document.querySelector('.input-box'));  
    }
});

// add new todo when we press enter key
this.document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.querySelector('input').value.trim() !== '') {
        const createList = document.createElement('li');
        const createSpan = document.createElement('span');
        createSpan.classList.add('li-text');
        createSpan.innerText = document.querySelector('input').value;
        createList.appendChild(createSpan);
        todoList.appendChild(createList);
        document.querySelector('input').value = '';
    }
});

// delete todo and toggle checked class when we click on the todo item
this.document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        if (!e.target.querySelector('.delete-btn')) {
            const deleteBtn = document.createElement('span');
            deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
            deleteBtn.classList.add('delete-btn');
            e.target.prepend(deleteBtn);
            
            e.target.addEventListener('click', () => {
                e.target.classList.toggle('checked');
            });
            deleteBtn.addEventListener('click', () => {
                todoList.removeChild(e.target);
            });
        }
    }
});

this.document.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'LI' && !e.target.contains(e.relatedTarget)) {
        const deleteBtn = e.target.querySelector('.delete-btn');
        if (deleteBtn) {
            e.target.removeChild(deleteBtn);
        }
    }
});