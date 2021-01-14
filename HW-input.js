
const btnSubmit = document.querySelector('#btnSubmit')
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content')
const form = document.querySelector('#form')

function getUserNameValue(){
    const userName = document.querySelector('#userName')
    const userNameValue = userName.value;
    return userNameValue
}

function getUserAgeValue(){
    const userAge = document.querySelector('#userAge')
    const userAgeValue = userAge.value;
    return userAgeValue
}

function getUserBirthdayValue(){
    const userBirthday = document.querySelector('#userBirthday')
    const userBirthdayValue = userBirthday.value;
    return userBirthdayValue
}

function getUserAductionValue(){
  const userAducation = document.querySelector('#userAducation')
  const userAducationValue = userAducation.value;
  return userAducationValue;
}

function getUserGenderValue(){
    const userGender = document.querySelector('input[name = "gender"]:checked')
    const userGenderValue = userGender.value;
    return userGenderValue;
}

function isValid(userNameValue){
    if (userNameValue === NaN || userNameValue  === false || userNameValue  === '' || userNameValue  == +(userNameValue ) || userNameValue  === null){
        return false;
    } else {
        return true;
    }
}

function openModal(){
    modal.style.display = "block"
}
function closeModal(){
    modal.style.display = "none"
}
function showInfo(name, age, birthday, aducation, gender){
    modalContent.innerHTML = `<p>Ваше Имя:  ${name}</p> 
    <p>Ваш возраст:  ${age} лет(год)</p> 
    <p>Ваша дата рождения:  ${birthday}</p>
    <p>Ваше образование:  ${aducation}</p>
    <p>Ваш пол:  ${gender}</p>`
}


btnSubmit.addEventListener('click', () =>{
    event.preventDefault()
    const userAgeValue = getUserAgeValue();
    const userBirthdayValue = getUserBirthdayValue();
    const userAducationValue = getUserAductionValue();
    const userGenderValue = getUserGenderValue();
    const userNameValue = getUserNameValue();
    isUserNameValueValid = isValid(userNameValue);  
    if (isUserNameValueValid){
        const userName = document.querySelector('#userName')
        userName.style.outline= 'none'
        const errorText = document.querySelector('.error-text')
        errorText.style.display = 'none'
        openModal();
        showInfo(userNameValue, userAgeValue, userBirthdayValue, userAducationValue, userGenderValue)
    } else {
        const userName = document.querySelector('#userName')
        userName.style.outline= '3px solid red'
        const errorText = document.querySelector('.error-text')
        errorText.style.display = 'block'
    }
})

modal.addEventListener('click', (event =>{
    if(!event.target.closest('.modal__wrapper')){ 
        form.reset();
        modal.style.display = 'none'
    }
}))
