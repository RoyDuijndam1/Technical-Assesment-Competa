const page = 'https://en.wikipedia.org/wiki/Van_Halen'

function scanPage() {
    const promise = fetch(page, {
        mode: "no-cors"
    }).then(response => console.log(response.text()))
    console.log(promise)
}

function getAllImages() {
    const array = [];
    document.getElementsByTagName('img').forEach(image => {
        array.push({
            'url': image.src,
            'title': image.alt
        })
    })
    console.log(array)
}

scanPage()