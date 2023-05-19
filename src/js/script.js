import data from './data.json' assert {type: 'json'}
const dataJson = data
console.log(data.designGraphic)
console.log(Object.keys(dataJson.designGraphic).length)

let graphicImage = document.querySelectorAll('.graphic-img')
let graphicText = document.querySelectorAll('.graphic-text')
let graphic = document.querySelector('#graphic')
const design = dataJson.designGraphic

for(let i = 0; i <= Object.keys(design).length; i++) {
    let output = `
    <div class="w-[350px] h-[350px] bg-gray-700 graphic-img"  style="background-image: url('${design[i].img}')">
        <p class="text-white p-6 -rotate-90 relative top-[10vw] right-36 graphic-text">${design[i].name}</p>
    </div>`

    graphic.innerHTML += output
}