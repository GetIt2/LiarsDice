class BoardView {
    constructor(gridElements) {
        this.gridElements = gridElements;
    }

    createGrid() {
        var gridDiv = document.createElement("div");
        gridDiv.className = 'grid-container';
        gridDiv.style.display = "grid";
        gridDiv.style.gridTemplateColumns = "25% 25% 25% 25%";
        gridDiv.style.backgroundColor = "black";
        gridDiv.style.gap = "8px";
        gridDiv.style.padding = "10px";
        gridDiv.style.paddingRight = "34px";
        gridDiv.style.width = "82%";
        gridDiv.style.margin = "auto";
        gridDiv.style.marginTop = "3%";
        document.body.appendChild(gridDiv);

        for (let i = 0; i < gridElements; i++) {
            var gridItems = document.createElement("div");
            gridItems.innerHTML = "Hello";
            gridItems.className = "grid-item";
            gridItems.id = `item${i + 1}`;
            gridItems.style.backgroundColor = "green";
            gridItems.style.fontSize = "175%";
            gridItems.style.textAlign = "center";
            gridItems.style.color = "whitesmoke";
            document.getElementsByClassName("grid-container")[0].appendChild(gridItems);
        }
    }
}