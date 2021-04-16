    let getRandomColor = () => {
        let getColorDiv = document.getElementById("colorBlock")
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        getColorDiv.style.backgroundColor = "#" + randomColor;
        color.innerHTML = "#" + randomColor;
    }