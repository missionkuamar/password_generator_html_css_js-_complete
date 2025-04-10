// page load par default password bana do
window.onload = function() {
    generatePassword();
  };
  
  // slider se value sync karna
  function syncLength(val) {
    document.getElementById('lengthValue').innerText = val;
    generatePassword(); // auto update
  }
  
  // password generate karne ka function
  function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
  
    const useLower = document.getElementById('lowercase').checked;
    const useUpper = document.getElementById('uppercase').checked;
    const useNumber = document.getElementById('numbers').checked;
    const useSymbol = document.getElementById('symbols').checked;
  
    const lowers = "abcdefghijklmnopqrstuvwxyz";
    const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}<>?/|";
  
    let allChars = "";
    if (useLower) allChars += lowers;
    if (useUpper) allChars += uppers;
    if (useNumber) allChars += numbers;
    if (useSymbol) allChars += symbols;
  
    let password = "";
  
    if (allChars.length === 0) {
      password = "Please select at least 1 option!";
    } else {
      for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * allChars.length);
        password += allChars[index];
      }
    }
  
    document.getElementById('password').value = password;
  }
  
  // copy password to clipboard
  function copyPassword() {
    const passField = document.getElementById('password');
    navigator.clipboard.writeText(passField.value);
    alert("Password copied!");
  }
  