import data from './data.json' assert {type: 'json'}
const dataJson = data

document.addEventListener('DOMContentLoaded', () => {
    let graphic = document.querySelector('#graphic')
    function designGraphic() {
        const design = dataJson.designGraphic;
        
        design.map((result) => {
            let output = `
            <div class="w-[350px] h-[350px] bg-gray-700 graphic-img brightness-75 hover:brightness-100"  style='background-image: url("./../assets/images/design/${result.img}")'>
                <p class="text-white p-6 -rotate-90 relative top-[10vw] right-36 graphic-text">${result.name}</p>
            </div>`
            
            if(graphic != null) {
                graphic.innerHTML += output
            }
        })

    }
    designGraphic()
    
    let photo = document.querySelector('#photo')
    function photos() {
        const photograph = dataJson.photography

        photograph.map((result) => {
            let output = `
            <div class="w-[350px] h-[350px] bg-gray-700 graphic-img brightness-75 hover:brightness-100"  style='background-image: url("./../assets/images/photography/${result.img}")'>
                <p class="text-white p-6 -rotate-90 relative top-[10vw] right-36 graphic-text">${result.name}</p>
            </div>`
            
            if(photo != null) {
                photo.innerHTML += output
            }
        })
    }
    photos()

    let brand = document.querySelector('#brand')
    function brands() {
        const brandDesign = dataJson.brand

        brandDesign.map((result) => {
            let output = `
            <div class="w-[350px] h-[350px] bg-gray-700 graphic-img brightness-75 hover:brightness-100"  style='background-image: url("./../assets/images/brand/${result.img}")'>
                <p class="text-white p-6 -rotate-90 relative top-[10vw] right-36 graphic-text">${result.name}</p>
            </div>`
            
            if(brand != null) {
                brand.innerHTML += output
            }
        })
    }
    brands()
})