// Add Mask

$(document).ready(function () {
  $("#phone").inputmask({ mask: "+7 (999) 999-9999" });
  $("#date").inputmask("99.99.9999", { placeholder: "__.__.____" });
  $("#snils").inputmask({ mask: "999-999-99" });
});

//Add Tab

const signIn = document.querySelectorAll(".sign-in");
const signUp = document.querySelectorAll(".sign-up");
const authorization = document.querySelector(".wrapper-authorization");
const registration = document.querySelector(".wrapper-registration");

signIn.forEach((item) => {
  item.addEventListener("click", () => {
    registration.classList.add("hide");
    authorization.classList.remove("hide");
  });
});

signUp.forEach((item, i) => {
  item.addEventListener("click", () => {
    authorization.classList.add("hide");
    registration.classList.remove("hide");
  });
});

// Add error and success

const formAuthorization = document.querySelector("#formAuthorization"),
  emailAuthorization = document.querySelector("#email"),
  password = document.querySelector("#password");

const formRegistration = document.querySelector("#formRegistration"),
  name = document.querySelector("#name"),
  emailRegistration = document.querySelector("#emailRegistration"),
  snils = document.querySelector("#snils"),
  phone = document.querySelector("#phone"),
  date = document.querySelector("#date");

formAuthorization.addEventListener("submit", (e) => {
	e.preventDefault();
	checkInputs(emailAuthorization);
});

formRegistration.addEventListener("submit", (e) => {
	e.preventDefault();
	checkInputs(emailRegistration);
});

function checkInputs(email) {

	if(email.value === '') {
		setErrorFor(email, 'Должно быть не менее 6 символов')
	} else {
		setSuccessFor(email);
	}

	if(password.value === '' || password.value.length < 6 ){
		setErrorFor(password, 'Пароль должен содержать не менее 6 символов')
	} else {
		setSuccessFor(password);
	}

	if(name.value === ''){
		setErrorFor(name, 'Заполните ФИО');
	} else {
		setSuccessFor(name);
	}

	if(snils.value === ''){
		setErrorFor(snils, 'СНИЛС должен содержать 8 цифр');
	} else {
		setSuccessFor(snils);
	}

	if(phone.value === '') {
		setErrorFor(phone, 'Телефон должен содержать 10 цифр');
	} else {
		setSuccessFor(phone);
	}

	if(date.value === ''){
		setErrorFor(date, 'Введите дату');
	} else {
		setSuccessFor(date);
	}
}

function setErrorFor(input, message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}