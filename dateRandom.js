function getRandomDate() {
    let getStartYear = document.getElementById("InpStartYear").value
    let getStartMonth = document.getElementById("InpStartMonth").value
    let getStartDay = document.getElementById("InpStartDay").value
    let getEndYear = document.getElementById("InpEndYear").value
    let getEndMonth = document.getElementById("InpEndMonth").value
    let getEndDay = document.getElementById("InpEndDay").value
    start = new Date(getStartYear,getStartMonth,getStartDay)
    end = new Date(getEndYear,getEndMonth,getEndDay)
    let randDate = document.getElementById("date")
    let randDateResult = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    let randDateMonth = randDateResult.getMonth()  
    switch (randDateMonth) {
        case 0:
            a =( 'Январь' );
            break;
        case 1:
            a =( 'Февраль' );
            break;
        case 2:
            a =( 'Март' );
            break;
        case 3:
            a =( 'Апрель' );
            break;
        case 4:
            a =( 'Май' );
            break;
        case 5:
            a =( 'Июнь' );
            break;
        case 6:
            a =( 'Июль' );
            break;
        case 7:
            a =( 'Август' );
            break;
        case 8:
            a =( 'Сентябрь' );
            break;
        case 9:
            a =( 'Октябрь' );
            break;
        case 10:
            a =( 'Ноябрь' );
            break;    
        case 11:
            a =( 'Декабрь' );
            break;                     
    }
    // let randDateCompileResult = randDateResult.toLocaleDateString()
    let randDateCompileResult = "Год: " + randDateResult.getFullYear() + " Месяц: " + a + " День: " + randDateResult.getDate()
    randDate.innerHTML = randDateCompileResult
}