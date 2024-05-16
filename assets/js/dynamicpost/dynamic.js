let navLeft, navRight, file;

let selected = 0
let fileStorage = []
let limit = 0

navLeft = document.querySelector('.navLeft')
navRight = document.querySelector('.navRight')
collector = document.querySelector('.collector')
navigation = document.querySelector('.navigation')
var paginator = document.querySelector('.paginator')
var pagButton = document.querySelector('.paginator > div')




function pushNod(params) {


    for (let index = 0; index < params; index++) {
        let input = document.createElement('input')
        input.type = 'radio'
        input.value = index
        let div = document.createElement('div');
        div.role = 'button'

        if (index == 0) {
            div.classList = 'checked'
        }

        div.appendChild(input)
        paginator.appendChild(div) 
    }
    return paginator
    
}


function checkDiv(index) {

    for (let k = 0; k < paginator.children.length; k++) {
        paginator.children[k].classList.remove('checked')
    }
    
    if (paginator.children[index].childNodes[0].value == index) {
        paginator.children[index].classList = 'checked';
    }

}


// decrease
navLeft.addEventListener('click', function(){
    if (selected <= 0) {
        selected = limit
    }
    else {
        selected -= 1
    }
    console.log('dec: ', selected);
    return selectedImage(selected, fileStorage)
})


// increase
navRight.addEventListener('click', function(){
    if (selected >= limit) {
        selected = 0
    }
    else {
        selected += 1
    }
    console.log('inc: ', selected);
    return selectedImage(selected, fileStorage)
})


function selectedImage(index){
    if (fileStorage.length > 0) {
        // page(fileStorage)
        paginator.style.display = 'flex'
        navigation.style.display = 'flex'
        limit = fileStorage.length -1
        checkDiv(index)
        // show navigator and paginator
        // peform selection and return processed information
        let processed = URL.createObjectURL(fileStorage[index])
        collector.style.backgroundImage = `url(${processed})`
    }
}

// get filea from File dialog after selection
inputFile = document.querySelector('#fileselector')

document.querySelector('#opener').addEventListener('click', function(){

    // clear initial cache
    clearCache()
    inputFile.click()

})

inputFile.addEventListener('change', function(file){
    var files = file.target.files;
    if (files.length > 0) {
        for (let index = 0; index < files.length; index++) {
            if (true) {     // just keep push, edit this space if you want to perform storage caching

                limit += 1
                fileStorage[index] = files[index]
            }
            
        }        

        // clear initial cache
        file = new Object()
        pushNod(limit)
        selectedImage(0, fileStorage)
    }
    
})

function clearCache(){
    limit = limit > 0? limit = 0: limit = 0
    fileStorage = []
    selectedImage(0)
    if (paginator.children.length > 0) {
        paginator.innerHTML = ''
    }
}