let isDOBOpen = false;
let dateOfBirth;
const settingCogEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");
const initialTextEl = document.getElementById("initialText");
const afterDobButtonEl = document.getElementById("afterDobButton");
const dobButttonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");
const yearEl = document.getElementById("year");
const monthEl=document.getElementById('month');
const dayEl=document.getElementById('day');
const hourEl=document.getElementById('hour');
const minuteEl=document.getElementById('minute');
const secondEl=document.getElementById('second');


const makeTwoDigitNumber = (number) => {
    if(number>9){
        return number;
    }
    else{
        return `0${number}`;
    }

}
// const toggleDateOfBirthSelector = () =>{

//     if(isDOBOpen){
//         settingContentEl.classList.add('hide');
//     }
//     else{
//         settingContentEl.classList.remove('hide');
//     }
//     isDOBOpen =! isDOBOpen;
// };
// // settingCogEl.addEventListener('click',toggleDateOfBirthSelector);
function hello() {
  if (isDOBOpen) {
    settingContentEl.classList.add("hide");
  } else {
    settingContentEl.classList.remove("hide");
  }
  isDOBOpen = !isDOBOpen;
}
const updateAge = () => {
    const currentDate = new Date();
    const dateDiff = Math.abs(currentDate - dateOfBirth);
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)) %12;
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
    const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
    const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
    const second = Math.floor(dateDiff / 1000) % 60;
    yearEl.innerHTML = makeTwoDigitNumber(year);
    monthEl.innerHTML =makeTwoDigitNumber( month);
    dayEl.innerHTML = makeTwoDigitNumber(day);
    hourEl.innerHTML =makeTwoDigitNumber(hour);
    minuteEl.innerHTML =makeTwoDigitNumber(minute);
    secondEl.innerHTML = makeTwoDigitNumber(second);
  };

const setDOBHandler = () => {
  const dateString = dobInputEl.value;

  dateOfBirth=dateString ? new Date(dateString) : null;

  
  if (dateOfBirth) {
    localStorage.setItem("year",dateOfBirth.getFullYear());
    localStorage.setItem('month',dateOfBirth.getMonth());
    localStorage.setItem('date',dateOfBirth.getDate());

    initialTextEl.classList.add("hide");
    afterDobButtonEl.classList.remove("hide");
    updateAge();
    setInterval(()=> updateAge(),1000);
  } else {
    initialTextEl.classList.remove("hide");
    afterDobButtonEl.classList.add("hide");
  }
};
setDOBHandler();


