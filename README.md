# Chiedi username e password. Se sono rispettivamente "admin" e "1234", stampa "Login effettuato", altrimenti stampa "Credenziali errate".

## Procedimento

- imposto username
- imposto password
- chiedo l'username all'utente
- chiedo la password all'utente
- SE l'username è uguale all'username del sistema e se la password è uguale alla passowrd del sistema
    - stapmpa "login effettuato"
- ALTRIMENTI 
    - stampa "credenziali errate"

## Struttura del If

if (imputLogin=login & imputPassword=passoword ){
    console.log("Login effettuato");
} else {
    console.log("Credenziali errate");
}