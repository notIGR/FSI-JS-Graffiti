let myHeader = document.querySelector('#page-header')
myHeader.style.backgroundColor = 'purple'
let images = document.querySelectorAll('img')
for(let x= 0; x< images.length; x++) {
    images[x].style.border = '5px solid purple'
    images[x].style.borderRadius = '20px'
}

// Select some elements...