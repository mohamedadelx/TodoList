const theme = document.getElementById("theme");

theme.addEventListener('click', () => {

    if(theme.checked)
    {
        document.querySelector('body').classList = ('light-mode');
    }
    else
    {
        document.querySelector('body').classList = ('dark-mode');
    }
});

document.getElementById('todoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    addItemToDo();
});


const list = document.getElementById("toDoList");
const spanCount = document.getElementById("listCount");

function addItemToDo(){

    const item = document.getElementById("addtodo");
    if(item.value == ""){
        return alert("empty value");
    }

    const element = document.createElement("li");

    element.className = "common";
    element.innerHTML = `
        <label class="list-item">
            <input type="checkbox" name="todoItem">
            <span class="checkmark"></span>
            <span class="text">${item.value}</span>
        </label>
        <span class="remove"></span>`;

    list.appendChild(element);
    
    item.value = "";

    spanCount.innerText = list.getElementsByTagName("li").length;


    element.querySelector('.remove').addEventListener('click', function() {
        list.removeChild(element);
        spanCount.innerText = list.getElementsByTagName("li").length;
    }); 
}
/// 
document.getElementById("all").addEventListener('click', updateFilter);
document.getElementById("active").addEventListener('click', updateFilter);
document.getElementById("completed").addEventListener('click', updateFilter);
function updateFilter() {
    const filter = document.querySelector('input[name="on"]:checked').id;
    const items = list.getElementsByTagName("li");

    for (let item of items) {
        const checkbox = item.querySelector('input[type="checkbox"]');
        switch (filter) {
            case "all":
                item.style.display = "";
                break;
            case "active":
                item.style.display = checkbox.checked ? "none" : "";
                break;
            case "completed":
                item.style.display = checkbox.checked ? "" : "none";
                break;
        }
    }
}
updateFilter();
///
document.querySelector('.clear').addEventListener('click', function() {
    const items = list.getElementsByTagName("li");
    for (let i = items.length - 1; i >= 0; i--) {
        const checkbox = items[i].querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            list.removeChild(items[i]);
        }
    }
    spanCount.innerText = list.getElementsByTagName("li").length;
});