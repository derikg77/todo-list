const input = document.getElementById("input-text");
const btnInsert = document.getElementById('button');
const ul = document.querySelector("ul");

itens = [];

input.addEventListener('keypress' , (e) => {
    if(e.key == 'Enter' && input.value != '' ){
        setItem();
    }
})
btnInsert.addEventListener('click', () => {
    setItem();
})

function setItem() {
    if (itens.lenght >= 5) {
        return;
    }
    itens.push({'item': input.value, 'status': ''});
    updateValue();
}
function updateValue() {
    ul.innerHTML ='';
    itens.forEach((item,i) => {
        criarItem(item.item,item.status,i)
    });
}
function criarItem(item,status,i) {
    const li = document.createElement('li');
    li.innerHTML = `
     <li class="item" data-id=${status} data-i=${i}> <input onclick="checkbox(this,${i});" type="checkbox" ${status}><span>${item}</span>
    <button onclick="removerItem(${i})"><i class="ri-delete-bin-line"></i></button>
</li>
    `
    ul.appendChild(li);
    input.value = '';
}
function checkbox(check,i) {
   if(check.checked) {
    itens[i].status = 'checked';
   } else {
    itens[i].status = '';
   }
   updateValue();
}

function removerItem(i) {
    itens.splice(i,1);
    updateValue();
}
updateValue();
