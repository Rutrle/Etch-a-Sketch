function fillGrids(rows, columns){
    let gridzone = document.querySelector("#gridzone")
    let rowDiv
    let singleDiv
    for (let i=0;i<rows;i++){
        rowDiv =  document.createElement("div")
        rowDiv.classList.add("rowdiv")
        gridzone.appendChild(rowDiv)

        for (let j=0;j<columns;j++){
            singleDiv = document.createElement("div")
            singleDiv.classList.add("singlediv")
            
            rowDiv.appendChild(singleDiv)
            singleDiv.addEventListener("mouseover", (e)=>{e.target.classList.add("onHower")})

        }

    }
}

let recreateButton = document.querySelector("#recreate")

recreateButton.addEventListener("click", function(){
    let gridzone = document.querySelector("#gridzone")
    gridzone.innerHTML=""
    let rows = prompt("number of rows")
    let columns = prompt("number of columns")

    fillGrids(rows, columns)

})




fillGrids(100,100)