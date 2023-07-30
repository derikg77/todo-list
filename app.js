const input = document.getElementById("input-text");
const btnInsert = document.getElementById('button');
const ul = document.querySelector("ul");

let itensDB = [];

input.addEventListener("keypress", e => {
    if (e.key == 'Enter' && input.value != '') {
        setItem();
    }
})

btnInsert.addEventListener("click", () => {
    if (input.value != '') {
        setItem();
    }
})

function setItem() {
        itensDB.push({ 'item': input.value, 'status': '' });
}

function loadItem() {

    itensDB.forEach(() => {
        createItem(item.item, item.status, i);
        
    })
}
function createItem(item, status, i) {
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `
     <li> <input type="checkbox" data-id=${status} data-i${i}><span>${item}</span>
    <i id="remove" class="ri-delete-bin-line" data-i${i}></i>
    </li> 
    `
    ul.appendChild(li);
}

loadItem();