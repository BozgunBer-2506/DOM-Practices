// ============ ELEMENTE SELEKTIEREN ============
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const statsDisplay = document.querySelector('#stats');
const filterBtns = document.querySelectorAll('.filter-btn');

// ============ STATE ============
let todos = [];
let activeFilter = 'all';
let todoIdCounter = 1;

// ============ FUNKTIONEN ============

// Todo hinzufügen
function addTodo(text) {
    const newTodo = {
        id: todoIdCounter++,
        text: text,
        done: false,
        createdAt: Date.now()
    };

    // 1. Füge newTodo zum todos-Array hinzu
    todos.push(newTodo);

    // 2. Rendere die Liste neu
    renderTodoList();
}

// Todo löschen
function deleteTodo(id) {
    // 3. Filtere das todo mit der id aus dem Array
    todos = todos.filter(todo => todo.id !== id);
    renderTodoList();
}

// Todo als erledigt markieren
function toggleTodo(id) {
    // 4. Finde das todo und toggle dessen done-Status
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, done: !todo.done };
        }
        return todo;
    });

    renderTodoList();
}

// Gefilterte Todos zurückgeben
function getFilteredTodos() {
    // 5. Gib je nach activeFilter die richtigen Todos zurück
    if (activeFilter === 'active') {
        return todos.filter(todo => !todo.done);
    } else if (activeFilter === 'done') {
        return todos.filter(todo => todo.done);
    }
    return todos; 
}

// Einzelnes Todo-Element erstellen (XSS-sicher!)
function createTodoElement(todo) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    if (todo.done) {
        li.classList.add('done');
    }
    li.dataset.id = todo.id;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('todo-checkbox');
    checkbox.checked = todo.done;

    const textSpan = document.createElement('span');
    textSpan.classList.add('todo-text');
    textSpan.textContent = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.textContent = 'Löschen';

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);

    return li;
}

// Todos rendern
function renderTodoList() {
    const filteredTodos = getFilteredTodos();
    todoList.innerHTML = '';

    if (filteredTodos.length === 0) {
        const emptyLi = document.createElement('li');
        emptyLi.classList.add('empty-state');
        emptyLi.textContent = 'Keine Aufgaben vorhanden';
        todoList.appendChild(emptyLi);
    } else {
        filteredTodos.forEach(todo => {
            const todoElement = createTodoElement(todo);
            todoList.appendChild(todoElement);
        });
    }

    updateStats();
}

// Statistiken aktualisieren
function updateStats() {
    const totalCount = todos.length;
    const doneCount = todos.filter(t => t.done).length;

    // 9. Aktualisiere den statsDisplay-Text
    statsDisplay.textContent = `${totalCount} Aufgaben, ${doneCount} erledigt`;
}

// Filter setzen
function setActiveFilter(filter) {
    activeFilter = filter;

    // 10. Active-Klasse bei Filter-Buttons aktualisieren
    filterBtns.forEach(btn => {
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderTodoList();
}

// ============ EVENT LISTENERS ============

// 11. Form Submit Handler
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (text) {
        addTodo(text);
        todoInput.value = '';
    }
});

// 12. Event Delegation für Todo-Liste
todoList.addEventListener('click', (e) => {
    const todoItem = e.target.closest('.todo-item');
    if (!todoItem) return;

    const todoId = Number(todoItem.dataset.id);

    // 13. Checkbox geklickt → Toggle todo
    if (e.target.classList.contains('todo-checkbox')) {
        toggleTodo(todoId);
    }

    // 14. Delete-Button geklickt → Lösche todo
    if (e.target.classList.contains('todo-delete-btn')) {
        deleteTodo(todoId);
    }
});

// 15. Filter-Buttons Event Delegation
document.querySelector('#filter-buttons').addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        const selectedFilter = e.target.dataset.filter;
        setActiveFilter(selectedFilter);
    }
});

// ============ INITIALISIERUNG ============
addTodo('DOM Manipulation lernen');
addTodo('Event Listener verstehen');
addTodo('Todo-App fertig bauen');