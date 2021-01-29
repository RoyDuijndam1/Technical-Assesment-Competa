//Save the element Array
const elementsArray = ['element 1', 'element 2', 'element 3', 'element 4'];

//html template
function htmlTemplate(element, index) {
    return `<button class="link" data-link='${index}'>${element}</button> `
}

//function to generate HTML with elements
function generateHTML() {
    elementsArray.forEach((element, index) => {
       document.querySelector('.main').insertAdjacentHTML("beforeend", htmlTemplate(element, index));
    })
}

function addEventListeners() {
    document.querySelectorAll('.link').forEach(node => {
        node.addEventListener('click', function(){
            window.alert(node.dataset.link)
        })
    })
}

generateHTML()
addEventListeners()