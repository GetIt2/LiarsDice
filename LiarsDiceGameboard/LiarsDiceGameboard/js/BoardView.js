class BoardView {
    constructor(gridElements) {
        this.gridElements = gridElements;
    }

    createGrid() {
        var gridDiv = document.createElement("div");
        gridDiv.className = "grid-container";
        gridDiv.style.display = "grid";
        gridDiv.style.gridTemplateColumns = "21vw 21vw 21vw 21vw";
        gridDiv.style.gridTemplateRows = "24vh 24vh 24vh 24vh";
        gridDiv.style.backgroundColor = "#222233";
        gridDiv.style.gap = "0.3vw";
        gridDiv.style.padding = "0.5vw";
        //gridDiv.style.width = "42.1vw";
        gridDiv.style.margin = "auto";
        gridDiv.style.marginLeft = "6.5vw";
        document.getElementById("mainContainer").appendChild(gridDiv);

        for (let i = 0; i < this.gridElements; i++) {
            var gridItems = document.createElement("div");
            gridItems.className = "grid-item";
            gridItems.id = `item${i + 1}`;
            gridItems.style.backgroundColor = "green";
            gridItems.style.fontSize = "150%";
            gridItems.style.textAlign = "center";
            gridItems.style.color = "whitesmoke";
            document.getElementsByClassName("grid-container")[0].appendChild(gridItems);
            gridItems.style.borderRadius = "100px";
            for (let y = 1; y > 6 + 1; y++) {
                gridItems.style.backgroundImage = "url('images/dice-face-'" + y + "'.png')";
            }
        }
    }
}