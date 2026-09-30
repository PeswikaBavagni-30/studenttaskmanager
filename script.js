function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    li.textContent = taskText;

    li.onclick = function () {
        li.classList.toggle("completed");
    };

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}


// Dark Mode
const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});