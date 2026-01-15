// TEIL 10: Todo App - Komplettes Projekt

console.log('=== TEIL 10 TODO APP START ===');

// ============ ELEMENTE SELEKTIEREN ============
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const statsDisplay = document.querySelector('#stats');
const filterBtns = document.querySelectorAll('.filter-btn');

// ============ STATE (Daten speichern) ============
let todos = [];
let activeFilter = 'all';
let todoIdCounter = 1;

console.log('1. Elemente selektiert');

// ============ FUNKTIONEN ============

// Todo hinzufügen
function addTodo(text) {
    const newTodo = {
        id: todoIdCounter++,
        text: text,
        done: false,
        createdAt: Date.now()
    };
    
    todos.push(newTodo);
    renderTodoList();
    console.log('Todo hinzugefügt:', text);
}

// Todo löschen
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodoList();
    console.log('Todo gelöscht mit ID:', id);
}

// Todo als erledigt markieren
function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, done: !todo.done };
        }
        return todo;
    });
    renderTodoList();
    console.log('Todo toggled mit ID:', id);
}

// Gefilterte Todos zurückgeben
function getFilteredTodos() {
    switch (activeFilter) {
        case 'active':
            return todos.filter(todo => !todo.done);
        case 'done':
            return todos.filter(todo => todo.done);
        default:
            return todos;
    }
}

// Einzelnes Todo-Element erstellen
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
    deleteBtn.type = 'button';

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
    statsDisplay.textContent = `${totalCount} Aufgaben, ${doneCount} erledigt`;
    console.log(`Stats: ${totalCount} gesamt, ${doneCount} erledigt`);
}

// Filter setzen
function setActiveFilter(filter) {
    activeFilter = filter;

    filterBtns.forEach(btn => {
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderTodoList();
    console.log('Filter gesetzt zu:', filter);
}

console.log('2. Alle Funktionen definiert');

// ============ EVENT LISTENERS ============

// Form Submit
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = todoInput.value.trim();
    if (!text) return;

    addTodo(text);
    todoInput.value = '';
    todoInput.focus();
});

console.log('3. Form submit listener hinzugefügt');

// Event Delegation für Todo-Liste
todoList.addEventListener('click', (e) => {
    const todoItem = e.target.closest('.todo-item');
    if (!todoItem) return;

    const todoId = Number(todoItem.dataset.id);

    if (e.target.classList.contains('todo-checkbox')) {
        toggleTodo(todoId);
    }

    if (e.target.classList.contains('todo-delete-btn')) {
        deleteTodo(todoId);
    }
});

console.log('4. Todo-Liste click listener (Event Delegation) hinzugefügt');

// Filter-Buttons
document.querySelector('#filter-buttons').addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        const selectedFilter = e.target.dataset.filter;
        setActiveFilter(selectedFilter);
    }
});

console.log('5. Filter-Buttons click listener hinzugefügt');

// ============ INITIALISIERUNG ============

// Vordefinierte Todos zum Testen
addTodo('JavaScript lernen');
addTodo('DOM Manipulation verstehen');
addTodo('Todo-App fertig bauen');

console.log('');
console.log('=== TEIL 10 TODO APP FERTIG ===');
console.log('Teste die App: Todos hinzufügen, markieren, filtern, löschen!');