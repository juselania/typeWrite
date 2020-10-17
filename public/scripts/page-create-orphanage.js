//create map
const map = L.map('mapid').setView([-27.2201829,-49.64607], 15);

//creat and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    //remove icon
    marker && map.removelayer(marker)

    //add icon layer
    marker = L.marker([let, lng], {icon})
    .addTo(map)
})

// Adicionar cmapo de fotos
function addPhotoField() {
   // Pegar o container de fotos #images
    const container = document.querySelector('#images')

   //pegar container para duplicar .new-image
   const fieldsContainer = document.querySelectorAll('.new-upload')

   //realizar o clone da última imagem adicionada.
   const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo esta vázio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]
    
    if(input.value == "" ){
        return
    }

    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""

   //add o clone container de #image
    container.appendChild(newFieldContainer)
}

// Excluir imagem 
function deleteField(){
    const span = event.currentTarget

   const fieldsContainer = document.querySelectorAll('.new-upload')

   if(fieldsContainer.length < 2){
       //limpar o valor do campo
       span.parentNode.children[0].value = ''
       return
   }
//deletar campo inteiro 
   span.parentNode.remove();



}

function toggletSelect(event){

    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })

    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[nome="open_on_weekends"]')
    input.value = button.dateset.value
}

