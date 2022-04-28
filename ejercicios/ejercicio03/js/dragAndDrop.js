var dragSrcEl = null;

const addDragEventsToElement = (element)=>{
    element.draggable = true

    element.ondragstart = (event)=>{
        dragSrcEl = element;
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData("id",event.target.id)
    }

    element.ondrag = ()=>{
        element.style.opacity = 0
    }
    element.ondragend = ()=>{
        element.style.opacity=1
    }
}
const addDragEventsToDropzone = (dropzone)=>{

    dropzone.ondragover = (event)=>{
        if (event.preventDefault) {
            event.preventDefault();
          }
       // event.preventDefault()
       event.dataTransfer.dropEffect = 'move';
    
        return false;
    }
      dropzone.ondrop = (event)=>{
        let id = event.dataTransfer.getData("id")
        let element = document.getElementById(id).innerHTML
       /* dropzone.appendChild(element)*/

       /* if (event.stopPropagation) {
            event.stopPropagation(); // stops the browser from redirecting.
          }*/

          if (dragSrcEl != event.toElement) {
              let valorNuevo = event.toElement.innerHTML;
              let idNuevo = event.toElement.id;
             dragSrcEl.innerHTML  = valorNuevo
             dragSrcEl.id = idNuevo;
               event.toElement.id = id;
               event.toElement.innerHTML = element;
          }
          
          return false;

    }

}
export {addDragEventsToElement,addDragEventsToDropzone}