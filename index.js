const addTask = document.querySelector(".add")
const tasks = document.querySelector(".tasks")
const clearAll = document.querySelector(".clear")
const Message = document.querySelector(".message span")
const  taskItems = document.querySelectorAll("li");
const searchForm = document.querySelector(".search")

function updateMessage() {
    const textLength = tasks.children.length;
    Message.textContent = `You have ${textLength} pending tasks`
}

updateMessage();

addTask.addEventListener("submit", event => {
    event.preventDefault();
    const value = addTask.task.value.trim()
    if(value.length) {
        console.log(value);
        tasks.innerHTML += `<li>
        <span>${value}</span>
        <i class=" bi bi-trash-fill delete"></i></li>`;
        addTask.reset();
        updateMessage();
    }

    
})

tasks.addEventListener("click", event => {
    if(event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
        updateMessage();
    }
})

clearAll.addEventListener("click", event => {
    const  taskItems = document.querySelectorAll("li");
    
    taskItems.forEach(event => {
        event.remove(); 
    })
    updateMessage();
})

function filterTask(term) {
    const list = Array.from(tasks.children)
    .filter(task => {
        return !task.textContent.toLowerCase().includes(term);
    })
    .forEach(task => {
        task.classList.add("hide");
    });

    Array.from(tasks.children)
    .filter(task => {
        return task.textContent.toLowerCase().includes(term);
    })
    .forEach(task => {
        task.classList.remove("hide");
    })
}

searchForm.addEventListener("keyup", event => {
    const term = searchForm.task.value.trim().toLowerCase();
    console.log(term)

    filterTask(term);
})

searchForm.addEventListener("click", event => {
    if(event.target.classList.contains("reset")) {
        searchForm.reset();
        const term = searchForm.task.value.trim();
        filterTask(term);

    }
})








    
