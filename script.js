const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strengthText");
const lengthReq = document.getElementById("lengthReq");
const uppercaseReq = document.getElementById("uppercaseReq");
const lowercaseReq = document.getElementById("lowercaseReq");
const numberReq = document.getElementById("numberReq");
const specialReq = document.getElementById("specialReq");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;

  // Requirements checks
  const lengthValid = password.length >= 8;
  const uppercaseValid = /[A-Z]/.test(password);
  const lowercaseValid = /[a-z]/.test(password);
  const numberValid = /[0-9]/.test(password);
  const specialValid = /[!@#$%^&*]/.test(password);

  // Update list colors
  lengthReq.className = lengthValid ? "valid" : "invalid";
  uppercaseReq.className = uppercaseValid ? "valid" : "invalid";
  lowercaseReq.className = lowercaseValid ? "valid" : "invalid";
  numberReq.className = numberValid ? "valid" : "invalid";
  specialReq.className = specialValid ? "valid" : "invalid";

  // Calculate strength
  const passed = [lengthValid, uppercaseValid, lowercaseValid, numberValid, specialValid].filter(Boolean).length;
  let strength = "";
  if(passed <= 2) strength = "Weak";
  else if(passed === 3 || passed === 4) strength = "Moderate";
  else if(passed === 5) strength = "Strong";

  strengthText.textContent = `Strength: ${strength}`;
});
