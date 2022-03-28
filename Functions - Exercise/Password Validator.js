function passwordValidator(password) {
  let pass = password;

  let checkIfLenghtIsCorrect = (password) => {
    if (password.length >= 6 && password.length <= 10) {
      return true;
    } else {
      return false;
    }
  };

  let checkIfOnlyLettersAndDigits = (password) => {
    for (let chars of password) {
      let charsAsNumber = chars.charCodeAt(0);

      if (
        !(charsAsNumber >= 48 && charsAsNumber <= 57) &&
        !(charsAsNumber >= 65 && charsAsNumber <= 90) &&
        !(charsAsNumber >= 97 && charsAsNumber <= 122)
      ) {
        return false;
      }
    }
    return true;
  };
  let checkIfTwoDigits = (password) => {
    let holder = 0;

    for (let chars of password) {
      let charsAsNumber = chars.charCodeAt(0);
      if (charsAsNumber >= 48 && charsAsNumber <= 57) {
        holder++;
      }
    }
    if (holder >= 2) {
      return true;
    } else {
      return false;
    }
  };

  if (!checkIfLenghtIsCorrect(pass)) {
    console.log("Password must be between 6 and 10 characters");
  }

  if (!checkIfOnlyLettersAndDigits(pass)) {
    console.log("Password must consist only of letters and digits");
  }

  if (!checkIfTwoDigits(pass)) {
    console.log("Password must have at least 2 digits");
  }

  if (
    checkIfLenghtIsCorrect(pass) &&
    checkIfOnlyLettersAndDigits(pass) &&
    checkIfTwoDigits(pass)
  ) {
    console.log("Password is valid");
  }
}
