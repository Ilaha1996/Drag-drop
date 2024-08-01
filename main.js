let products = document.getElementsByClassName("products");
let dropZones = document.getElementsByClassName("dropZone");
let draggedElement = null;

Array.from(products).forEach(product =>{
    product.addEventListener("dragstart", function(e){
        draggedElement = e.target;
    });
    product.addEventListener("dragend", function(e){
        draggedElement = null;
    });

});

Array.from(dropZones).forEach(dropZone =>{
    dropZone.addEventListener("dragover", function(e){
        e.preventDefault();
        let dataId= draggedElement.getAttribute("data-target-id");
        if(e.target.id == dataId){
            e.target.style.backgroundcolor = "green";
        }
        else{
            e.target.style.backgroundcolor = "red";
        }
    });

    dropZone.addEventListener("dragleave", function(e){
        e.preventDefault();
        let dataId= draggedElement.getAttribute("data-target-id");
        e.target.style.backgroundcolor = "white"   
    });

    dropZone.addEventListener("drop", function(e){
        e.preventDefault();
        let dataId= draggedElement.getAttribute("data-target-id");
        if(e.target.id == dataId){
            e.target.appendChild(draggedElement);
        }
        else{
            alert("Can not dropped")
        }
    });

});