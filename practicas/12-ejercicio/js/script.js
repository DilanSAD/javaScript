'use strict';

// Cajero 

const INITIAL_BALANCE = 1000;
const VALID_USER = "user";
const VALID_PASSWORD = "admin";

function isValidAmount(amount) {
    return !isNaN(amount) && amount > 0;
}

function promptForNumber(message) {
    const input = prompt(message);
    return input === null ? null : parseFloat(input);
}

function withdraw(balance) {
    const amount = promptForNumber("Ingrese la cantidad a retirar");
    if (amount === null) return balance;
    
    if (!isValidAmount(amount) || amount > balance) {
        alert("Cantidad no válida o saldo insuficiente");
        return balance;
    }
    
    balance -= amount;
    alert(`Retiro exitoso. Tu saldo actual es: ${balance}`);
    return balance;
}

function deposit(balance) {
    const amount = promptForNumber("Ingrese la cantidad a depositar");
    if (amount === null) return balance;
    
    if (!isValidAmount(amount)) {
        alert("Cantidad no válida");
        return balance;
    }
    
    balance += amount;
    alert(`Depósito exitoso. Tu saldo actual es: ${balance}`);
    return balance;
}

function showBalance(balance) {
    alert(`Tu balance actual es: ${balance}`);
}

function runATM() {
    const user = prompt("Ingrese el user", "");
    const password = prompt("Ingrese la password", "");

    if (user !== VALID_USER || password !== VALID_PASSWORD) {
        alert("Usuario o contraseña incorrectos.");
        return;
    }

    alert("Login exitoso");
    let balance = INITIAL_BALANCE;

    while (true) {
        const option = promptForNumber("Seleccione una opción:\n1. Retirar dinero\n2. Depositar dinero\n3. Ver balance\n4. Salir");
        
        switch(option) {
            case 1:
                balance = withdraw(balance);
                break;
            case 2:
                balance = deposit(balance);
                break;
            case 3:
                showBalance(balance);
                break;
            case 4:
                alert("Gracias por usar el cajero. ¡Hasta luego!");
                return;
            default:
                alert("Opción no válida, por favor intente de nuevo.");
        }
    }
}

runATM();
