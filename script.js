// Classe de Pessoas
class Person {
  constructor(state, plan, cop, dentistry, age) {
    this.state = state;
    this.plan = plan;
    this.cop = cop;
    this.dentistry = dentistry;
    this.age = age;
  }
}

// contador do DOM
let count = 0;
// soma do add()
let sumValue = 0;
// contador de pessoas
let personCount = 0;

// Estrutura JSON de valores.
let jsonValue = {
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
  "54 a 58": "1178.16",
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
  "54 a 58": "1242.76",
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
},
"ceara": {
    "outpatient": {
    "withCoP": {
    "withDentistry": {
      "0 a 18": "85.64",
      "19 a 23": "112.45",
      "24 a 28": "128.04",
      "29 a 33": "142.71",
      "34 a 38": "150.13",
      "39 a 43": "168.42",
      "44 a 48": "205.72",
      "49 a 53": "284.92",
      "54 a 58": "383.71",
      "59+": "498.03",
    },
    "withoutDentistry": {
      "0 a 18": "86.64",
      "19 a 23": "114.62",
      "24 a 28": "130.90",
      "29 a 33": "146.22",
      "34 a 38": "153.97",
      "39 a 43": "173.06",
      "44 a 48": "212.00",
      "49 a 53": "294.68",
      "54 a 58": "397.82",
      "59+": "517.17",	
    }
    },
    "withoutCoP": {
    "withDentistry": {
      "0 a 18": "130.83",
      "19 a 23": "172.23",
      "24 a 28": "196.31",
      "29 a 33": "218.97",
      "34 a 38": "230.43",
      "39 a 43": "258.67",
      "44 a 48": "316.27",
      "49 a 53": "438.58",
      "54 a 58": "591.16",
      "59+": "767.71",
    },
    "withoutDentistry": {
      "0 a 18": "131.83",
      "19 a 23": "174.41",
      "24 a 28": "199.18",
      "29 a 33": "222.48",
      "34 a 38": "234.27",
      "39 a 43": "263.32",
      "44 a 48": "263.32",
      "49 a 53": "322.57",
      "54 a 58": "448.37",
      "59+": "448.37",	
    }
    }
    },
    "nursery": {
    "withCoP": {
    "withDentistry": {
      "0 a 18": "180.61",
      "19 a 23": "232.64",
      "24 a 28": "264.83",
      "29 a 33": "294.45",
      "34 a 38": "308.27",
      "39 a 43": "346.00",
      "44 a 48": "418.16",
      "49 a 53": "570.22",
      "54 a 58": "763.49",
      "59+": "987.13",
    },
    "withoutDentistry": {
      "0 a 18": "181.61",
      "19 a 23": "239.73",
      "24 a 28": "275.69",
      "29 a 33": "308.77",
      "34 a 38": "324.21",
      "39 a 43": "366.36",
      "44 a 48": "446.96",
      "49 a 53": "616.80",
      "54 a 58": "832.68",
      "59+": "1082.48",
    }
    },
    "withoutCoP": {
    "withDentistry": {
      "0 a 18": "235.69",
      "19 a 23": "305.35",
      "24 a 28": "348.45",
      "29 a 33": "388.10",
      "34 a 38": "406.60",
      "39 a 43": "457.12",
      "44 a 48": "553.72",
      "49 a 53": "757.29",
      "54 a 58": "1016.04",
      "59+": "1315.45",
    },
    "withoutDentistry": {
      "0 a 18": "236.69",
      "19 a 23": "312.43",
      "24 a 28": "359.29",
      "29 a 33": "405.40",
      "34 a 38": "422.52",
      "39 a 43": "477.45",
      "44 a 48": "582.49",
      "49 a 53": "803.84",
      "54 a 58": "1085.18",
      "59+": "1410.73",
    }
    }
    },
    "apartment": {
    "withCoP": {
    "withDentistry": {
      "0 a 18": "261.92",
      "19 a 23": "339.97",
      "24 a 28": "388.26",
      "29 a 33": "432.69",
      "34 a 38": "453.42",
      "39 a 43": "510.02",
      "44 a 48": "618.26",
      "49 a 53": "846.36",
      "54 a 58": "1136.28",
      "59+": "1471.76",
    },
    "withoutDentistry": {
      "0 a 18": "262.92",
      "19 a 23": "347.05",
      "24 a 28": "399.11",
      "29 a 33": "447.00",
      "34 a 38": "469.35",
      "39 a 43": "530.37",
      "44 a 48": "647.05",
      "49 a 53": "892.93",
      "54 a 58": "1205.46",
      "59+": "1567.10",	
    }
    },
    "withoutCoP": {
    "withDentistry": {
      "0 a 18": "344.54",
      "19 a 23": "449.03",
      "24 a 28": "513.68",
      "29 a 33": "573.16",
      "34 a 38": "600.92",
      "39 a 43": "676.70",
      "44 a 48": "821.61",
      "49 a 53": "1126.98",
      "54 a 58": "1515.12",
      "59+": "1964.25",
    },
    "withoutDentistry": {
      "0 a 18": "345.54",
      "19 a 23": "456.11",
      "24 a 28": "524.53",
      "29 a 33": "587.47",
      "34 a 38": "616.84",
      "39 a 43": "697.03",
      "44 a 48": "850.38",
      "49 a 53": "1173.52",
      "54 a 58": "1584.25",
      "59+": "2059.53",	
    }
    }
    },
    }
} 

// Estrutura JSON de coberturas.
let jsonCover = { 
  
  // Ceará
  "bahia": {
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
  },
  
  // Ceará
  "ceara": {
    "outpatient": {
      "withDentistry": "• urgências e emergências;<br>• consultas e exames em todas as especialidades;<br>• observação de até 12h;<br>• pequenas cirurgias;<br>• urgência e emergência odontológica.",
      "withoutDentistry": "• urgências e emergências;<br>• consultas e exames em todas as especialidades;<br>• observação de até 12h;<br>• pequenas cirurgias."
    },
    "nursery": {
      "withDentistry": "• urgências e emergências;<br> • consultas e exames em todas as especialidades;<br>• internação com quarto coletivo;<br>• cirurgias de pequeno, médio e grande porte;<br>• odontologia completa.",
      "withoutDentistry": "• urgências e emergências;<br>• consultas e exames em todas as especialidades;<br>• internação com quarto coletivo;<br>• cirurgias de pequeno, médio e grande porte."
    },
    "apartment": {
      "withDentistry": "• urgências e emergências;<br>• consultas e exames em todas as especialidades;<br>• internação com quarto exclusivo;<br>• cirurgias de pequeno, médio e grande porte;<br>• odontologia completa.",
      "withoutDentistry": "• urgências e emergências;<br>• consultas e exames em todas as especialidades;<br>• internação com quarto exclusivo;<br>• cirurgias de pequeno, médio e grande porte."
    }    
  }
  
} 

// Orçamento individual
function send() {
  
  event.preventDefault();

  let state = document.querySelector("select[id='state']").value;
  let plan = document.querySelector("select[id='plan']").value;
  let cop = document.querySelector("select[id=co-p]").value;
  let dentistry = document.querySelector("select[id='dentistry']").value;
  let age = document.querySelector("select[id='age']").value;
  
  let person = new Person(state, plan, cop, dentistry, age);
  
    document.getElementById("totalResult").innerHTML = Number(jsonValue[person.state][person.plan][person.cop][person.dentistry][person.age]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
  coverage();
  
}
  
function add() {
  
  event.preventDefault();
  
  
  let state = document.querySelector("select[id='state']").value;
  let plan = document.querySelector("select[id='plan']").value;
  let cop = document.querySelector("select[id=co-p]").value;
  let dentistry = document.querySelector("select[id='dentistry']").value;
  let age = document.querySelector("select[id='age']").value;
  
    document.getElementById("state").removeAttribute("onchange");
    document.getElementById("plan").removeAttribute("onchange");
    document.getElementById("co-p").removeAttribute("onchange");
    document.getElementById("dentistry").removeAttribute("onchange");
    document.getElementById("age").removeAttribute("onchange");

    document.getElementById("state").disabled = true;
    document.getElementById("plan").disabled = true;
    document.getElementById("co-p").disabled = true;
    document.getElementById("dentistry").disabled = true;
  
  let person = new Person(state, plan, cop, dentistry, age);
    person.value = Number(jsonValue[person.state][person.plan][person.cop][person.dentistry][person.age]);
      sumValue = sumValue + person.value;
      personCount ++;
  
  // first child
  let controlField = document.createElement("div");
    controlField.setAttribute("class", "field has-addons");
    controlField.setAttribute("id", "field" + count++);
    document.getElementById("indexField").appendChild(controlField);
    
    
    let controlLabel = document.createElement("div");
      controlLabel.setAttribute("class", "control");
      controlLabel.setAttribute("id", "controlLabel" + count);
        document.getElementById(controlField.getAttribute("id")).appendChild(controlLabel);

      let resultLabel = document.createElement("button");
        resultLabel.setAttribute("type", "button");
        resultLabel.setAttribute("class", "button is-link has-text-weight-bold");
        resultLabel.setAttribute("style", "width: 87px");
        resultLabel.innerHTML = age;
          document.getElementById(controlLabel.getAttribute("id")).appendChild(resultLabel);

      let controlValue = document.createElement("div");
        controlValue.setAttribute("class", "control is-expanded");
        controlValue.setAttribute("id", "controlValue" + count);
          document.getElementById(controlField.getAttribute("id")).appendChild(controlValue);

        let resultValue = document.createElement("div");
          resultValue.setAttribute("class", "input is-fullwidth is-link");
          resultValue.innerHTML = person.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          document.getElementById(controlValue.getAttribute("id")).appendChild(resultValue);
  


   document.getElementById("totalResult").innerHTML = sumValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
  let controlRemove = document.createElement("div");
      controlRemove.setAttribute("class", "control");
      controlRemove.setAttribute("id", "controlRemove" + count);
        document.getElementById(controlField.getAttribute("id")).appendChild(controlRemove);

      let removeBtnLabel = document.createElement("button");
        removeBtnLabel.setAttribute("type", "button");
        removeBtnLabel.setAttribute("class", "button is-danger has-text-weight-bold");
        removeBtnLabel.setAttribute("style", "width: 50px");
        removeBtnLabel.setAttribute("onclick", `personRemove(this.parentNode, ${person.value})`);
        removeBtnLabel.innerHTML = `<i class="fa-solid fa-trash"></i>`;
          document.getElementById(controlRemove.getAttribute("id")).appendChild(removeBtnLabel);
}

function coverage(){
  
  event.preventDefault();
  
  let state = document.querySelector("select[id='state']").value;
  let plan = document.querySelector("select[id='plan']").value;
  let dentistry = document.querySelector("select[id='dentistry']").value;
  
    document.getElementById('coverage').innerHTML = (jsonCover[state][plan][dentistry]);
}

// Guardado
// function reload() {
  
//   event.preventDefault();
//   document.location.reload(true);
// }

function personRemove(person, value) {
  personCount -= 1;
  sumValue -= value;
  person.parentNode.remove();
  document.getElementById("totalResult").innerHTML = sumValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
   document.getElementById("state").setAttribute("onchange", "send()");
   document.getElementById("plan").setAttribute("onchange", "send()");
   document.getElementById("co-p").setAttribute("onchange", "send()");
   document.getElementById("dentistry").setAttribute("onchange", "send()");
   document.getElementById("age").setAttribute("onchange", "send()");
  
  if(personCount == 0) {
    document.getElementById("state").disabled = false;
    document.getElementById("plan").disabled = false;
    document.getElementById("co-p").disabled = false;
    document.getElementById("dentistry").disabled = false;
    document.getElementById("totalResult").innerHTML = "";
    document.getElementById('coverage').innerHTML = "";
    
  }
}

$( function() {
  $( "#draggable" ).draggable();
} );
