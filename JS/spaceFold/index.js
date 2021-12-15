let travelCounter = 0
let spaceFold = ""

let shipName = prompt("Qual é o nome da nave?")

spaceFold = prompt("Deseja entrar em dobra espacial? \n\n1. Y \n2. N")

while(spaceFold == "1") {
    travelCounter += 1
    spaceFold = prompt("Deseja realizar a próxima dobra? \n\n1. Y \n2. N")
}

alert("Nave: " + shipName + "\nQuantidade de dobras: " + travelCounter)