var secretPassword = "DOMCONTENTLOADED";
var form = document.querySelector("form");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var adminPassword = document.querySelector("#adminPassword");
var admin = document.querySelector("#admin");
var button = document.querySelector("button");

admin.addEventListener("click", () => {
  adminPassword.classList.toggle("hide");
});

const checkPassword = password => {
  return password.length > 8 ? true : false;
};
const checkAdmin = adminPassword => {
  if (!admin.classList.contains("hide")) {
    return adminPassword === secretPassword ? true : false;
  }
};

button.addEventListener("click", e => {
  e.preventDefault();
  if (
    email &&
    checkPassword(password.value) &&
    adminPassword.classList.contains("hide")
  ) {
    alert("Success");
  } else if (
    email &&
    checkPassword(password.value) &&
    checkAdmin(adminPassword.value)
  ) {
    alert("Success");
  } else {
    alert("ERROR!");
  }
});
