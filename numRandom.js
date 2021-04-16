function genRandomNum(){
    let randBlockNum1 = document.getElementById("randblock1")
    let randNumMin = Number(randBlockNum1.value)
    let randBlockNum2 = document.getElementById("randblock2")
    let randNumMax = Number(randBlockNum2.value)

    if(randNumMin>randNumMax){
        alert("Первое число не может быть больше второго ")     // Проверка на то, что второй атрибут больше первого
    }

    if(randNumMax>randNumMin){
        let test = document.getElementById("test")
        test.innerHTML = Math.floor(randNumMin + Math.random() * (randNumMax + 1 - randNumMin))
    }
    
}