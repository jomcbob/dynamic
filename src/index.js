// index.js
import "./styles.css"
import slide1 from "./img/slide1.jpg"
import slide2 from "./img/slide2.jpg"
import slide3 from "./img/slide3.jpg"
import slide4 from "./img/slide4.jpg"
import slide5 from "./img/slide5.jpg"
import slide6 from "./img/slide6.jpg"


let revealPopDown = (click, show, hidden) => {
  document.querySelector(click).classList.toggle(show)
  document.querySelector(click).classList.toggle(hidden)
}

let clickMe = document.querySelector(".buttonForClick")
clickMe.addEventListener("click", () => {
  revealPopDown("#click", "hidden", "show")
})

// Photo by <a href="https://unsplash.com/@tkargin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Turhan Can Kargin</a> on <a href="https://unsplash.com/photos/a-body-of-water-with-boats-in-it-and-a-castle-in-the-background-aF-U_vtXRkU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@linamh?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Lina Mahrouch</a> on <a href="https://unsplash.com/photos/a-view-of-a-body-of-water-with-mountains-in-the-background-LJzWpwjOe_w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@kalenemsley?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kalen Emsley</a> on <a href="https://unsplash.com/photos/body-of-water-surrounding-with-trees-_LuLiJc1cdo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@baileyzindel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Bailey Zindel</a> on <a href="https://unsplash.com/photos/body-of-water-surrounded-by-trees-NRQV-hBF10M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@luckybeanz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mark Harpur</a> on <a href="https://unsplash.com/photos/brown-wooden-dock-between-lavender-flower-field-near-body-of-water-during-golden-hour-K2s_YE031CA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@tokeller?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tobias Keller</a> on <a href="https://unsplash.com/photos/landscape-photography-of-lake-and-mountain-73F4pKoUkM0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      

let valueOfSlide = 0;
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')
let five = document.querySelector('.five')
let six = document.querySelector('.six')
one.click()
let slides = [ slide1, slide2, slide3, slide4, slide5, slide6 ]

const refresh = () => {
    let slideShow = document.querySelector('.imgs')
    slideShow.innerHTML = `
        <img src='${slides[valueOfSlide]}' class='currentImg'>
    `
}

const changeRadioButton = () => {
    if (valueOfSlide === 0 ){
        one.click()
    } else if (valueOfSlide === 1){
        two.click()
    } else if (valueOfSlide === 2){
        three.click()
    } else if (valueOfSlide === 3){
        four.click()
    } else if (valueOfSlide === 4){
        five.click()
    } else if (valueOfSlide === 5){
        six.click()
    }
}

function playSlide() {
    if (valueOfSlide < 5){
        valueOfSlide++
        } else {
            valueOfSlide = 0
        }
    refresh()
    changeRadioButton()
}
setInterval(playSlide, 5000)

let rightButton = document.querySelector('.rightButton')
rightButton.addEventListener('click', () => {
    if (valueOfSlide < 5){
    valueOfSlide++
    } else {
        valueOfSlide = 0
    }
    refresh()
    changeRadioButton()
})

let leftButton = document.querySelector('.LeftButton')
leftButton.addEventListener('click', () => {
    if (valueOfSlide === 0){
        valueOfSlide = 5
    } else {
        valueOfSlide--
    }
    refresh()
    changeRadioButton()
})

one.addEventListener('click', () => {
    valueOfSlide = 0
    refresh()
    changeRadioButton()
})

two.addEventListener('click', () => {
    valueOfSlide = 1
    refresh()
    changeRadioButton()
})

three.addEventListener('click', () => {
    valueOfSlide = 2
    refresh()
    changeRadioButton()
})

four.addEventListener('click', () => {
    valueOfSlide = 3
    refresh()
    changeRadioButton()
})

five.addEventListener('click', () => {
    valueOfSlide = 4
    refresh()
    changeRadioButton()
})

six.addEventListener('click', () => {
    valueOfSlide = 5
    refresh()
    changeRadioButton()
})

refresh()
