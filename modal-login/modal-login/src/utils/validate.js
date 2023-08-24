export const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

/*validate a password that includes
between 8 and 15 characters,
at least one uppercase letter,
one lowercase letter, one number,
and one especial character */
export const validatePassword = (password) => {
  //validar que incluye minusculas
  if (/[a-z]/.test(password)) {
    console.log("LoweCase");
  }
  if (/[A-Z]/.test(password)) {
    console.log("UpperCase");
  }
  if (/[0-9]/.test(password)) {
    console.log("Numbers");
  }
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)){
//   if (/(!|"|#|[$]|%|&|'|[(]|[)]|[*]|[+]|'|-|.|[/])+/.text(password)) {
    console.log("Specials");
  }

  if (
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
  ) {
    console.log("password is valid");

    return true;
  }
  console.log("password is invalid");
  return false;
};
