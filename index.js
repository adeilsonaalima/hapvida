// contador do DOM
let count = 0;
// soma do add()
let sumValue = [];

let jsonVar = {
"bahia": {
"outpatient": {
"withCoP": {
"withDentistry": {
  "0 a 18": "90.50",
  "19 a 23": "118.94",
  "24 a 28": "135.48",
  "29 a 33": "151.04",
  "34 a 38": "158.91",
  "39 a 43": "178.31",
  "44 a 48": "217.88",
  "49 a 53": "301.89",
  "54 a 58": "406.69",
  "59+": "527.96",
},
"withoutDentistry": {
  "0 a 18": "91.50",
  "19 a 23": "121.05",
  "24 a 28": "138.24",
  "29 a 33": "154.41",
  "34 a 38": "162.59",
  "39 a 43": "182.75",
  "44 a 48": "223.87",
  "49 a 53": "311.18",
  "54 a 58": "420.09",
  "59+": "546.12",	
}
},
"withoutCoP": {
"withDentistry": {
  "0 a 18": "138.47",
  "19 a 23": "182.40",
  "24 a 28": "207.95",
  "29 a 33": "231.99",
  "34 a 38": "244.16",
  "39 a 43": "274.13",
  "44 a 48": "335.26",
  "49 a 53": "465.05",
  "54 a 58": "626.96",
  "59+": "814.31",
},
"withoutDentistry": {
  "0 a 18": "139.47",
  "19 a 23": "184.52",
  "24 a 28": "210.72",
  "29 a 33": "235.37",
  "34 a 38": "247.84",
  "39 a 43": "278.57",
  "44 a 48": "341.25",
  "49 a 53": "474.34",
  "54 a 58": "640.36",
  "59+": "832.47",	
}
}
},
"nursery": {
"withCoP": {
"withDentistry": {
  "0 a 18": "185.61",
  "19 a 23": "239.65",
  "24 a 28": "273.09",
  "29 a 33": "303.85",
  "34 a 38": "318.21",
  "39 a 43": "357.40",
  "44 a 48": "432.35",
  "49 a 53": "590.28",
  "54 a 58": "791.02",
  "59+": "1023.30",
},
"withoutDentistry": {
  "0 a 18": "186.61",
  "19 a 23": "246.33",
  "24 a 28": "283.28",
  "29 a 33": "317.27",
  "34 a 38": "333.13",
  "39 a 43": "376.44",
  "44 a 48": "459.26",
  "49 a 53": "633.78",
  "54 a 58": "855.60",
  "59+": "1112.28",	
}
},
"withoutCoP": {
"withDentistry": {
  "0 a 18": "228.81",
  "19 a 23": "296.67",
  "24 a 28": "338.66",
  "29 a 33": "377.29",
  "34 a 38": "395.32",
  "39 a 43": "444.54",
  "44 a 48": "538.66",
  "49 a 53": "736.99",
  "54 a 58": "989.08",
  "59+": "1280.78",
},
"withoutDentistry": {
  "0 a 18": "229.81",
  "19 a 23": "303.35",
  "24 a 28": "348.85",
  "29 a 33": "390.71",
  "34 a 38": "410.25",
  "39 a 43": "463.58",
  "44 a 48": "565.57",
  "49 a 53": "780.49",
  "54 a 58": "1053.66",
  "59+": "1369.76",	
}
}
},
"apartment": {
"withCoP": {
"withDentistry": {
  "0 a 18": "270.05",
  "19 a 23": "351.11",
  "24 a 28": "401.27",
  "29 a 33": "447.41",
  "34 a 38": "468.94",
  "39 a 43": "527.73",
  "44 a 48": "640.15",
  "49 a 53": "877.05",
  "54 a 58": "1.178.16",
  "59+": "1526.59",
},
"withoutDentistry": {
  "0 a 18": "271.05",
  "19 a 23": "357.79",
  "24 a 28": "411.46",
  "29 a 33": "460.84",
  "34 a 38": "483.88",
  "39 a 43": "546.78",
  "44 a 48": "667.07",
  "49 a 53": "920.56",
  "54 a 58": "1.242.76",
  "59+": "1615.59",	
}
},
"withoutCoP": {
"withDentistry": {
  "0 a 18": "334.85",
  "19 a 23": "436.65",
  "24 a 28": "499.64",
  "29 a 33": "557.59",
  "34 a 38": "584.63",
  "39 a 43": "658.46",
  "44 a 48": "799.64",
  "49 a 53": "1097.14",
  "54 a 58": "1475.28",
  "59+": "1912.84",
},
"withoutDentistry": {
  "0 a 18": "335.85",
  "19 a 23": "443.32",
  "24 a 28": "509.82",
  "29 a 33": "571.00",
  "34 a 38": "599.55",
  "39 a 43": "677.49",
  "44 a 48": "826.54",
  "49 a 53": "1140.63",
  "54 a 58": "1539.85",
  "59+": "2001.81",	
}
}
},
}
}

let jsonCover = {
  "outpatient": {
    "withDentistry": "• urgências e emergências;<br>• consultas e exames em todas as especialidades;<br>• observação de até 12h;<br>• pequenas cirurgias;<br>• urgência e emergência odontológica.",
    "withoutDentistry": "• urgências e emergências;<br>• consultas e exames em todas as especialidades;<br>• observação de até 12h;<br>• pequenas cirurgias."
},
  "nursery": {
    "withDentistry": "• urgências e emergências;<br> • consultas e exames em todas as especialidades;<br>• internação com quarto coletivo mediante franquia;<br>• cirurgias de pequeno, médio e grande porte;<br>• odontologia completa.",
    "withoutDentistry": "• urgências e emergências;<br>• consultas e exames em todas as especialidades;<br>• internação com quarto coletivo mediante franquia;<br>• cirurgias de pequeno, médio e grande porte."
},
  "apartment": {
    "withDentistry": "• urgências e emergências;<br>• consultas e exames em todas as especialidades;<br>• internação com quarto exclusivo mediante franquia;<br>• cirurgias de pequeno, médio e grande porte;<br>• odontologia completa.",
    "withoutDentistry": "• urgências e emergências;<br>• consultas e exames em todas as especialidades;<br>• internação com quarto exclusivo mediante franquia;<br>• cirurgias de pequeno, médio e grande porte."
  }
}

function send() {
  
  event.preventDefault();

  let state = document.querySelector("select[id='state']").value;
  let plan = document.querySelector("select[id='plan']").value;
  let cop = document.querySelector("select[id=co-p]").value;
  let dentistry = document.querySelector("select[id='dentistry']").value;
  let age = document.querySelector("select[id='age']").value;
  
    document.getElementById("totalResult").innerHTML = Number((jsonVar[state][plan][cop][dentistry][age])).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    document.getElementById("add").disabled = true;
  
}
  
function add() {
  
  event.preventDefault();
  
  let state = document.querySelector("select[id='state']").value
  let plan = document.querySelector("select[id='plan']").value
  let cop = document.querySelector("select[id=co-p]").value
  let dentistry = document.querySelector("select[id='dentistry']").value
  let age = document.querySelector("select[id='age']").value

    document.getElementById("state").disabled = true;
    document.getElementById("plan").disabled = true;
    document.getElementById("co-p").disabled = true;
    document.getElementById("dentistry").disabled = true;
    document.getElementById("send").disabled = true;  

  let controlField = document.createElement("div")
    controlField.setAttribute("class", "field has-addons")
    controlField.setAttribute("id", "field" + count++)
    document.getElementById("indexField").appendChild(controlField)

  let controlLabel = document.createElement("div")
    controlLabel.setAttribute("class", "control")
    controlLabel.setAttribute("id", "controlLabel" + count)
    document.getElementById(controlField.getAttribute("id")).appendChild(controlLabel)

  let resultLabel = document.createElement("button")
    resultLabel.setAttribute("type", "button")
    resultLabel.setAttribute("class", "button is-link has-text-weight-bold")
    resultLabel.setAttribute("style", "width: 87px")
    resultLabel.innerHTML = age
      document.getElementById(controlLabel.getAttribute("id")).appendChild(resultLabel)

  let controlValue = document.createElement("div")
    controlValue.setAttribute("class", "control is-expanded")
    controlValue.setAttribute("id", "controlValue" + count)
    document.getElementById(controlField.getAttribute("id")).appendChild(controlValue)  

  let resultValue = document.createElement("div")
    resultValue.setAttribute("class", "input is-fullwidth is-link")
    resultValue.innerHTML = Number((jsonVar[state][plan][cop][dentistry][age])).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById(controlValue.getAttribute("id")).appendChild(resultValue)

    sumValue.push(Number(jsonVar[state][plan][cop][dentistry][age]))
  
    if(sumValue.length >= 1) {
      let sum = sumValue.reduce((acc, res) => acc + res)
      document.getElementById("totalResult").innerHTML = sum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
}

function coverage(){
  
  event.preventDefault();
  
  let plan = document.querySelector("select[id='plan']").value
  let dentistry = document.querySelector("select[id='dentistry']").value
  
    document.getElementById('coverage').innerHTML = (jsonCover[plan][dentistry]);
}

function cancel() {
  
  event.preventDefault();
  
  document.location.reload(true);
}

$( function() {
  $( "#draggable" ).draggable();
} );
