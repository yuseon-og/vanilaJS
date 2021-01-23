const clockContainer = document.querySelector(".nomalclock")
const clockTitle = document.querySelector(".clock-h1")
const clockDate = document.querySelector(".dates-h1")


function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();
    clockTitle.innerText=`${hours<10?`0${hours}시`:`${hours}시`} ${minutes<10?`0${minutes}분`:`${minutes}분`} ${secondes<10?`0${secondes}초`:`${secondes}초`}`
    
}

function getYoil(day){
    let yoil;
    switch(day){
        case 1:
            yoil = "월"
            break;
        case 2:
            yoil = "화"
            break;
        case 3:
            yoil = "수"
            break;
        case 4:
            yoil = "목"
            break;
        case 5:
            yoil = "금"
            break;
        case 6:
            yoil = "토"
            break;
        case 0:
            yoil = "일"
            break;
    }
    return yoil;
}

function getDate(){
    const date = new Date();
    const years= date.getFullYear();
    const months=date.getMonth();
    const dates = date.getDate();
    const days=  getYoil(date.getDay());
    clockDate.innerText=`${years}년 ${months+1}월 ${dates}일 ${days}요일`
    console.log(date.getDay())
}


function init(){
    setInterval(getTime,1000);
    getDate();

}

init();