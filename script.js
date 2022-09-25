let formBtn = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let tasks = document.getElementById('tasks');

formBtn.addEventListener('submit', (f) => {
    f.preventDefault();
    if (input.value !== '') {
        msg.innerHTML = "";
        tasks.innerHTML += `
                <div class="task">
                <span id="title">${input.value}</span>
                <i class='fas fa-edit'onClick="editTask(this)"></i>
                <i class='fas fa-trash-alt'onClick="deleteTask(this)"></i>
                </div>
                `
        input.value = ''
    } else {
        msg.innerHTML = "Please Enter input"
    }
})

let deleteTask = (f) => {
    f.parentElement.remove();
};

let editTask = (f) => {
    input.value = f.previousElementSibling.innerHTML;
    f.parentElement.remove();
}
