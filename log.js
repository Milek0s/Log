const log__input = document.querySelector('#log__input')
const log__button = document.querySelector('#log__button')
const log__out = document.querySelector('#log__out')

let log__tab = []

const logAdd = () => {
    let toAdd = '';
    if (log__tab.length <= 6) {
        for (let i = 0;
             i < log__tab.length;
             i++) {
            toAdd += `<li>${log__tab[i]}</li>`
        }
    } else {
        for (let i = log__tab.length - 6;
             i < log__tab.length;
             i++) {
            toAdd += `<li>${log__tab[i]}</li>`
        }
    }

    log__out.innerHTML = toAdd;
    //log__input.value = '';
    console.log(toAdd)
    console.log(log__tab.length)
}

log__button.addEventListener('click', () => {
    if (log__input.value) {
        log__tab.push(log__input.value)
        logAdd()
    }
});