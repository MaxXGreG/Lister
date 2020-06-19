function askName() {
    let name = prompt("What's your name?")
    document.querySelector('#title').insertAdjacentHTML('afterbegin', name + "'s ")
}

function addItem() {
    let itemName = document.querySelector("#item").value
    let item = '<div id="doItem"><h1 id="item-name">'+ itemName +'</h1> <i class="fas fa-check-square"></i> <i class="fas fa-times"></i></div>'
    document.querySelector("#list").insertAdjacentHTML("afterbegin", item)
    document.querySelector("#item").value = ' '
}