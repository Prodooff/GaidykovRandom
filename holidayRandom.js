function getRandHoliday(){
    let holidayName = document.getElementById("holiday")
    let randHoliday = Math.floor(Math.random() * 22)
    console.log(randHoliday)

            switch(randHoliday){
            case 1:
            holidayName.innerHTML = "Тунис"
            break;
            case 2:
            holidayName.innerHTML = "Объединенные Арабские Эмираты(ОАЭ)"
            break;
            case 3:
            holidayName.innerHTML = "Египет"
            break;
            case 4:
            holidayName.innerHTML = "Марокко"
            break;
            case 5:
            holidayName.innerHTML = "Мальдивы"
            break;
            case 6:
            holidayName.innerHTML = "Доминикана"
            break;
            case 7:
            holidayName.innerHTML = "Куба"
            break;
            case 8:
            holidayName.innerHTML = "Кипр"
            break;
            case 9:
            holidayName.innerHTML = "остров Крит (Греция)"
            break;
            case 10:
            holidayName.innerHTML = "Хорватия"
            break;
            case 11:
            holidayName.innerHTML = "Абхазия"
            break;
            case 12:
            holidayName.innerHTML = "Крым"
            break;
            case 13:
            holidayName.innerHTML = "Грузия"
            break;
            case 14:
            holidayName.innerHTML = "Армения"
            break;
            case 15:
            holidayName.innerHTML = "Сочи"
            break;
            case 16:
            holidayName.innerHTML = "Санкт-Петербург"
            break;
            case 17:
            holidayName.innerHTML = "Париж"
            break;
            case 18:
            holidayName.innerHTML = "Франкфурт"
            break;
            case 19:
            holidayName.innerHTML = "Берлин"
            break;
            case 20:
            holidayName.innerHTML = "Швейцария"
            break;
            case 21:
            holidayName.innerHTML = "Италия"
            break;
            case 22:
            holidayName.innerHTML = "Испания"
            break;
    }
}