
const countDown = () => {
    const TODAY = new Date();
    const HOLLIDAYS = new Date ("December 25, 2020")
    const secondsDay = 86400
    const secondsHour = 3600
    const secondsMinute = 60
    const minutesDay = 1440
    const minutesHour = 60
    const hoursDay = 24
    const second = 1000
    const $DAYS = document.querySelector(".days")
    const $HOURS = document.querySelector(".hours")
    const $MINUTES = document.querySelector(".minutes")
    const $SECONDS = document.querySelector(".seconds")
    let timeRemaining = Math.floor((HOLLIDAYS-TODAY)/second)
    let daysLeft = Math.floor(timeRemaining / secondsDay )
    let hoursLeft = Math.floor((timeRemaining/secondsHour) - daysLeft*hoursDay)  
    let minutesLeft = Math.floor((timeRemaining/secondsMinute) - daysLeft*minutesDay - hoursLeft*minutesHour)
    let secondsLeft = Math.floor(timeRemaining - daysLeft*secondsDay - hoursLeft*secondsHour- minutesLeft*secondsMinute)
    $DAYS.innerText = `${daysLeft}`
    $HOURS.innerText = `${hoursLeft}`
    $MINUTES.innerText = `${minutesLeft}`
    $SECONDS.innerText = `${secondsLeft}`
    console.log($DAYS)
    console.log(`Days:${daysLeft}`)
    console.log(`Hours:${hoursLeft}`)
    console.log(`Minutes:${minutesLeft}`)
    console.log(`Seconds:${secondsLeft}`)
}

setInterval(countDown,1000)