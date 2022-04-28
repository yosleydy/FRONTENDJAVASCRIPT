import { addDragEventsToElement,addDragEventsToDropzone } from "./dragAndDrop.js"

function createDropzones(dropzones,container){
    dropzones.forEach(id=>{
    const div = document.createElement('div')
    div.className = 'dropzoe'
    div.setAttribute('id','contenedor'+id)
    container.appendChild(div)
    addDragEventsToDropzone(div)
})
}

function createElements(elements,container){
    elements.forEach(id=>{
    const firstdiv = container.firstChild
    const p = document.createElement('p')
    p.innerText = id
    p.className = 'element'
    p.setAttribute('id','texto'+id)
    firstdiv.appendChild(p)
    addDragEventsToElement(p)
})
}

export {createDropzones,createElements}