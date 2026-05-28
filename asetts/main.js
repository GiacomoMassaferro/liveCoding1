const login = "admin";
const password = "1234";
let imputLogin = prompt("inserisci login");
let imputPassword = prompt("inserisci password");

if (login === imputLogin && password === imputPassword) {
    console.log("Login effettuato");
} else {
    console.log("Credenziali errate");
}