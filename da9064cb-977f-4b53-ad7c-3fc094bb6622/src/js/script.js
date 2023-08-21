const stack = [];
const MAX_STACK_SIZE = 5;

const inputValue = document.getElementById("input");
const pushButton = document.getElementById("pushButton");
const emptyButton = document.getElementById("emptyButton");
const peekButton = document.getElementById("peekButton");
const stackItems = document.querySelectorAll(".stack-item");

pushButton.addEventListener("click", () => {
    const value = inputValue.value.trim();
    
    if (value === "") {
        alert("Please enter a value!");
    } else if (stack.length === MAX_STACK_SIZE) {
        alert("Stack was already full!");
    } else {
        stack.push(value);
        updateStackUI();
        inputValue.value = "";
    }
});

emptyButton.addEventListener("click", () => {
    if (stack.length === 0) {
        alert("Yes, Stack is empty");
    } else {
        alert("No, Stack is not empty");
    }
});

peekButton.addEventListener("click", () => {
    if (stack.length === 0) {
        alert("Operation not allowed!");
    } else {
        alert(`Top item: ${stack[stack.length - 1]}`);
    }
});

function updateStackUI() {
    stackItems.forEach((item, index) => {
        item.textContent = stack[index] || "";
    });
}
