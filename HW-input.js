// console.log(document.body.firstElementChild);

// let x = document.body.children.length-2;
// console.log(document.body.children[x]);
// console.log(document.body.children[x].lastElementChild)




const btnSubmit = document.querySelector('#btnSubmit')
btnSubmit.addEventListener('click', () =>{
    const userNameValue = getUserNameValue();
    const userAgeValue = getUserAgeValue();
    const userBirthdayValue = getUserBirthdayValue();
    const userAducationValue = getUserAductionValue();
    const userGenderValue = getUserGenderValue();
    isUserNameValueValid = isValid(userNameValue);
    
    if (isUserNameValueValid){
        activateModalWindow()
    }
})

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
    const userGender = document.querySelector('#Male')
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

function activateModalWindow(){
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
          modal.style.display = "none";
        }
  
    window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  let modalName = document.querySelector('#modal-name')
  modalName.innerHTML = 'Ваше имя: ' +   userNameValue
}






