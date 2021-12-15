let departureDateEntry = prompt("Digite a data de partida (DD/MM/YYYY)");

let departureDate = moment(departureDateEntry, "DD/MM/YYYY"); /* Transforma a data em milissegundos */

let today = moment();

let dateDiff = today - departureDate

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if(chosenOption == "1") {
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de vôo: " + secondsOfDeparture + " segundos.")
} else if(chosenOption == "2") {
    let minutesOfDeparture = Math.round(dateDiff /1000 / 60)
    alert("Tempo de vôo: " + minutesOfDeparture + " minutos.")
} else if(chosenOption == "3") {
    let hoursOfDeparture = Math.round(dateDiff /1000 / 3600)
    alert("Tempo de vôo: " + hoursOfDeparture + " horas.")
} else if(chosenOption == "4") {
    let daysOfDeparture = Math.round(dateDiff /1000 / 3600 / 24)
    alert("Tempo de vô: " + daysOfDeparture + " dias.")
} else {
    alert("Opção inválida.")
}