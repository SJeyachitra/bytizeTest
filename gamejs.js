const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.getElementById("drop-zone");
const elements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart); 
  });

function dragStart(event) {
   event.dataTransfer.setData("text", event.target.id);   
 }

droppableElements.addEventListener('dragover', function(event) {
	event.preventDefault()
})
droppableElements.addEventListener('drop', function(event) {
  
  event.preventDefault(); 
  const draggableElementData = event.dataTransfer.getData("text");
  console.log(draggableElementData);
  const draggableElement = document.getElementById(draggableElementData);
  const First =  document.getElementById("drop-zone").innerHTML;
  console.log(First);
  if(First == "Dropzone")
  {
    event.target.classList.add("dropped");
    draggableElement.classList.add("dragged");  
    draggableElement.classList.add("droppable"); 
      
   droppableElements.prepend(draggableElement);
  }
  else if(First.includes("evenDropZone") & draggableElementData%2 ==0)
  {
    event.target.classList.add("dropped");
    draggableElement.classList.add("dragged");  
    draggableElement.classList.add("droppable"); 
      
   droppableElements.prepend(draggableElement);
  }
  else if(First.includes("oddDropZone") & draggableElementData%2 !=0)
  {
    event.target.classList.add("dropped");
    draggableElement.classList.add("dragged");  
    draggableElement.classList.add("droppable"); 
      
   droppableElements.prepend(draggableElement);
  }
   else{
    alert("Please,Add Respective Zone Value")
   }

  if(draggableElementData %2 ==0 && First == "Dropzone")
  {
     document.getElementById("drop-zone").innerHTML = "evenDropZone";
     event.target.classList.add("dropped");
     draggableElement.classList.add("dragged"); 
     draggableElement.classList.add("droppable"); 
       
      
   
    droppableElements.prepend(draggableElement);
}
 else if(draggableElementData %2 !=0 && First == "Dropzone")
 {
  document.getElementById("drop-zone").innerHTML = "oddDropZone";
   event.target.classList.add("dropped");
   draggableElement.classList.add("dragged");  
   draggableElement.classList.add("droppable"); 
     
    
 
	droppableElements.prepend(draggableElement);

 }
  
})
