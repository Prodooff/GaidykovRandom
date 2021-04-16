start = new Date(2001, 0, 1)
end = new Date()

function getRandomDate() {
    let randDate = document.getElementById("test3")
    let randDateResult = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    // let randDateCompileResult = randDateResult.toLocaleDateString()
    let randDateCompileResult = "Год: " + randDateResult.getFullYear() + " Месяц: " + randDateResult.getMonth() + " День: " + randDateResult.getDate()
    randDate.innerHTML = randDateCompileResult
}