const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const current = document.querySelectorAll(".hours");
const previously = document.querySelectorAll(".description");

async function getDaily(){
    const res = await fetch('./js/data.json');
    const data = await res.json()
    .then(data => {
        current.forEach((element,i) => {
            current[i].innerHTML = `${data[i].timeframes.daily.current}hrs`;
            previously[i].innerHTML = `Last Week - ${data[i].timeframes.daily.previous}hrs`;
        })
    })
    daily.classList.add('active');
    monthly.classList.remove('active');
    weekly.classList.remove('active-default');
}

async function getMonthly(){
    const res = await fetch('./js/data.json');
    const data = await res.json()
    .then(data => {
        current.forEach((element,i) => {
            current[i].innerHTML = `${data[i].timeframes.monthly.current}hrs`;
            previously[i].innerHTML = `Last Week - ${data[i].timeframes.monthly.previous}hrs`;
        })
    })
    daily.classList.remove('active');
    monthly.classList.add('active');
    weekly.classList.remove('active-default');
}    

async function getWeekly(){
    const res = await fetch('./js/data.json');
    const data = await res.json()
    .then(data => {
        current.forEach((element,i) => {
            current[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`;
            previously[i].innerHTML = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
        })
    })
    daily.classList.remove('active');
    monthly.classList.remove('active');
    weekly.classList.add('active-default');
}   

daily.addEventListener('click',getDaily);
weekly.addEventListener('click', getWeekly);
monthly.addEventListener('click',getMonthly);