document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    // Load tasks from localStorage or initialize empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Render existing tasks
    tasks.forEach(task => renderTask(task));

    // Add new task on button click
    addTaskButton.addEventListener("click", function() {
        const taskText = todoInput.value.trim();
        if (taskText === "") return; // Ignore empty input

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        tasks.push(newTask); // Add to tasks array
        renderTask(newTask); // Render the new task
        saveTasks(); // Save to localStorage
        todoInput.value = ""; // Clear input
        console.log(newTask.text); // Log the new task’s text
    });

    // Render a task as an <li> with a delete button
    function renderTask(task) {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id); // Fixed: task.id, not task-id
        if(task.completed) li.classList.add('completed')
        li.innerHTML = `
            <span>${task.text}</span>
            <button class="delete-btn">Delete</button>
        `;


        li.addEventListener('click', (e)=>{
            if(e.target.tagName === 'BUTTON')  {
                e.stopPropagation();    //prevent toggle from fireing- bubbling
            tasks = tasks.filter(t => t.id !== task.id);
            li.remove();
            saveTasks();
        
            }   //to find where we clicked
            task.completed = !task.completed; 
            li.classList.toggle('completed')
            saveTasks();
        });

        // li.querySelector('button').addEventListener('click', (e)=>{
        //     e.stopPropagation();    //prevent toggle from fireing- bubbling
        //     tasks = tasks.filter(t => t.id !== task.id);
        //     li.remove();
        //     saveTasks();
        // })

        todoList.appendChild(li);
    }

    // Save tasks to localStorage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});