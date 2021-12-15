let name = prompt("Qual seu nome piloto?") /* nome */

var vel = 0; /* velocidade */

alert(name + ", nossa nave está a " + vel + " Ly/s.")

var vel = prompt("A que velocidade devemos decolar?")

if (vel < 0) {
    alert(name + ", a nave está parada. Considere partir e aumentar a velocidade.")
} else if (vel < 40) {
    alert(name + ", estamos devagar, podemos aumentar.")
} else if (vel >= 40 && vel < 80) {
    alert(name + ", parece uma boa velocidade para manter.")
} else if (vel >= 80 && vel < 100) {
    alert(name + ", velocidade alta. Considere diminuir.")
} else if (vel >= 100) {
    if (confirm("Tem certeza disso, " + name + "?")) {
        alert("... velocidade perigosa. Controle automático forçado!")
    } else {
        alert("PESSOAL, DECOLAGEM ABORTADA!")
    }
}