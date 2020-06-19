function askName() {
    let name = prompt("What's your name?")
    document.querySelector('#title').insertAdjacentHTML('afterbegin', name + "'s ")
}

function addItem() {
    let itemName = ' '
    itemName = document.querySelector("#item").value
    document.querySelector("#item").value = ' '
    let item = '<div id="doItem"><h1 id="item-name">'+ itemName +'</h1> <i onclick="complete(this)" class="fas fa-check-square"></i> <i onclick="remove(this)" class="fas fa-times"></i></div>'
    
    if(itemName == ' ') {
        alert("Musn't be empty!")
        itemName = ' '
    } else if(itemName) {
        document.querySelector("#list").insertAdjacentHTML("afterbegin", item)
    } else {
        alert('Error!')
    }
    document.querySelector("#item").value = ' '
    itemName = ' '
}

function complete(el) {
    el.parentNode.querySelector('h1').style.opacity = '.6'
    el.parentNode.querySelector('h1').style.textDecoration = 'line-through'
    el.parentNode.querySelector('.fa-times').style.opacity = 1
    el.remove()
}

function remove(el) {
    el.parentNode.remove()
}