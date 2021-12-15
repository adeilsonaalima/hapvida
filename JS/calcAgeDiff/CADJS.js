let nam_o = prompt("Digite o NOME da pessoa mais velha...");
let age_o = prompt("Digite a IDADE da pessoa mais velha...");

let nam_n = prompt("Digite o NOME da pessoa mais nova...");
let age_n = prompt("Digite a IDADE da pessoa mais nova...");

let age_diff = age_o - age_n;

alert(nam_o + " têm " + age_o + " anos de idade.\n" + nam_n + " têm " + age_n + " anos de idade.");
alert("A diferença de idade entre vocês é de " + age_diff + " anos.")

// alert("A diferença de idade entre vocês é de " + [age_o - age_n] + " anos.")
// foi uma primeiro tentativa, bem rudimentar, funcionou... mas não seria a melhor forma.