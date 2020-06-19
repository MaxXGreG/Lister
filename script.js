function askName() {
    let name = prompt("What's your name?")
    document.querySelector('#title').insertAdjacentHTML('afterbegin', name + "'s ")
}

