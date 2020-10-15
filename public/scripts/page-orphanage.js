//Tirando o zoom e deixando fixo
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-27.2201829,-49.64607], 15);

//creat and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popuAnchor: [170,2]
})

//create and add marker
L
.marker([-27.2201829,-49.64607] , { icon})
.addTo(map)



//image gallery //
function selectImage(event){
   const button = event.currentTarget

   //remover todas as classes .active
   const buttons = document.querySelectorAll(".images button")
   buttons.forEach(removeActiveClass) 

   function removeActiveClass(button){
    button.classList.remove("active")
   }

   //sellecionar a image clicada 
   const image = button.children[0]
   const imageContainer = document.querySelector(".orphanage-details > img")


   //atualizar oo cuntainer de image 
   imageContainer.src = image.src

   
   //adicionar a classe .active para este botao
   button.classList.add('active')
}

