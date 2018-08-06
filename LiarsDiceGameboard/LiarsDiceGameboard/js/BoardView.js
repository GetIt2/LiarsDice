class BoardView {
    constructor(gridElements) {
        this.gridElements = gridElements;
    }

    createGrid() {
        var gridDiv = document.createElement("div");
        gridDiv.className = "grid-container";
        gridDiv.style.display = "grid";
        gridDiv.style.gridTemplateColumns = "21vw 21vw 21vw 21vw";
        gridDiv.style.gridTemplateRows = "20vh 20vh 20vh 20vh";
        gridDiv.style.backgroundColor = "black";
        gridDiv.style.gap = "8px";
        gridDiv.style.padding = "10px";
        gridDiv.style.paddingRight = "5%";
        gridDiv.style.width = "82%";
        gridDiv.style.margin = "auto";
        gridDiv.style.marginTop = "3%";
        document.body.appendChild(gridDiv);

        for (let i = 0; i < this.gridElements; i++) {
            var gridItems = document.createElement("div");
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