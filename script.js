const dateInput = document.querySelector("#date__input");
const noInput = document.querySelector("#no__input");
const checkBtn = document.querySelector("#check__btn");
const checkAns = document.querySelector("#check__ans");

const calLuck = () => {
  let arr = dateInput.value.replaceAll("-", "");
  let luckyNo = noInput.value;
  if (!(arr && luckyNo)) {
    checkAns.textContent = "Please provide Inputs";
    return;
  }

  let sum = 0;
  let message = "";
  for (dob of arr) {
    dob = Number(dob);
    sum += dob;
  }
  if (sum % luckyNo == 0) {
    message = "Yess";
  } else {
    message = "Noo";
  }

  checkAns.textContent = message;
};
checkBtn.addEventListener("click", calLuck);
