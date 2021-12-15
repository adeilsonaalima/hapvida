let distanceLy = prompt("# CONVERSOR DE MEDIDAS # \n\nQual distância em anos-luz devemos converter?")

let optionMeasurementConverter = prompt("Converteremos em:\n\n1. Parsec (pc) \n2. Unidade astronônima (au) \n3. Quilômetros (km) \n\n[digite o número da opção desejada abaixo]")

switch(optionMeasurementConverter) {
    case "1":
        let distancePc = distanceLy * 0.306601
        alert("Distância em Anos-Luz: " + distanceLy + " l.y. \nDistância em Parsec: " + distancePc + " pc.")
        break
    case "2":
        let distanceAu = distanceLy * 63241.1
        alert("Distância em Anos-Luz: " + distanceLy + " l.y. \nDistância em Unidade astronônima: " + distanceAu + " a.u.")
        break
    case "3":
        let distanceKm = distanceLy * 9.5 * (Math.pow(10, 12))
        alert("Distância em Anos-Luz: " + distanceLy + " l.y. \nDistância em Parsec: " + distanceKm + " km.")
        break
    default:
        alert("Distância em Anos-Luz: " + distanceLy + " l.y. \nUnidade não identificada: conversão fora do escopo.")
}