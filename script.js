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
   "bahia":{
      "outpatient":{
         "withCoP":{
            "withDentistry":{
               "0 a 18":"100.45",
               "19 a 23":"132.01",
               "24 a 28":"150.37",
               "29 a 33":"167.64",
               "34 a 38":"176.38",
               "39 a 43":"197.91",
               "44 a 48":"241.83",
               "49 a 53":"335.08",
               "54 a 58":"451.40",
               "59+":"586.00"
            },
            "withoutDentistry":{
               "0 a 18":"101.45",
               "19 a 23":"134.22",
               "24 a 28":"153.28",
               "29 a 33":"171.21",
               "34 a 38":"180.28",
               "39 a 43":"202.63",
               "44 a 48":"248.22",
               "49 a 53":"345.03",
               "54 a 58":"465.79",
               "59+":"605.53"
            }
         },
         "withoutCoP":{
            "withDentistry":{
               "0 a 18":"153.70",
               "19 a 23":"202.46",
               "24 a 28":"230.82",
               "29 a 33":"257.51",
               "34 a 38":"271.01",
               "39 a 43":"304.28",
               "44 a 48":"372.13",
               "49 a 53":"516.20",
               "54 a 58":"695.91",
               "59+":"903.86"
            },
            "withoutDentistry":{
               "0 a 18":"154.70",
               "19 a 23":"204.67",
               "24 a 28":"233.73",
               "29 a 33":"261.08",
               "34 a 38":"274.92",
               "39 a 43":"309.01",
               "44 a 48":"378.54",
               "49 a 53":"526.17",
               "54 a 58":"710.33",
               "59+":"923.43"
            }
         }
      },
      "nursery":{
         "withCoP":{
            "withDentistry":{
               "0 a 18":"206.03",
               "19 a 23":"266.01",
               "24 a 28":"303.12",
               "29 a 33":"337.26",
               "34 a 38":"353.19",
               "39 a 43":"396.69",
               "44 a 48":"479.87",
               "49 a 53":"655.16",
               "54 a 58":"877.96",
               "59+":"1135.77"
            },
            "withoutDentistry":{
               "0 a 18":"207.03",
               "19 a 23":"273.28",
               "24 a 28":"314.27",
               "29 a 33":"351.98",
               "34 a 38":"369.58",
               "39 a 43":"417.63",
               "44 a 48":"509.51",
               "49 a 53":"703.12",
               "54 a 58":"949.21",
               "59+":"1233.97"
            }
         },
         "withoutCoP":{
            "withDentistry":{
               "0 a 18":"253.98",
               "19 a 23":"329.31",
               "24 a 28":"375.92",
               "29 a 33":"418.80",
               "34 a 38":"438.81",
               "39 a 43":"493.44",
               "44 a 48":"597.91",
               "49 a 53":"818.06",
               "54 a 58":"1097.88",
               "59+":"1421.67"
            },
            "withoutDentistry":{
               "0 a 18":"254.98",
               "19 a 23":"336.57",
               "24 a 28":"387.06",
               "29 a 33":"433.51",
               "34 a 38":"455.19",
               "39 a 43":"514.36",
               "44 a 48":"627.52",
               "49 a 53":"865.98",
               "54 a 58":"1169.07",
               "59+":"1519.79"
            }
         }
      },
      "apartment":{
         "withCoP":{
            "withDentistry":{
               "0 a 18":"299.75",
               "19 a 23":"389.72",
               "24 a 28":"445.39",
               "29 a 33":"496.61",
               "34 a 38":"520.51",
               "39 a 43":"585.76",
               "44 a 48":"710.54",
               "49 a 53":"973.48",
               "54 a 58":"1307.70",
               "59+":"1694.44"
            },
            "withoutDentistry":{
               "0 a 18":"300.75",
               "19 a 23":"396.99",
               "24 a 28":"456.54",
               "29 a 33":"511.32",
               "34 a 38":"536.89",
               "39 a 43":"606.69",
               "44 a 48":"740.16",
               "49 a 53":"1021.42",
               "54 a 58":"1378.92",
               "59+":"1792.609"
            }
         },
         "withoutCoP":{
            "withDentistry":{
               "0 a 18":"371.68",
               "19 a 23":"484.67",
               "24 a 28":"554.58",
               "29 a 33":"618.90",
               "34 a 38":"648.92",
               "39 a 43":"730.86",
               "44 a 48":"887.56",
               "49 a 53":"1217.77",
               "54 a 58":"1637.49",
               "59+":"2123.16"
            },
            "withoutDentistry":{
               "0 a 18":"372.68",
               "19 a 23":"491.94",
               "24 a 28":"565.73",
               "29 a 33":"633.62",
               "34 a 38":"665.30",
               "39 a 43":"751.79",
               "44 a 48":"917.18",
               "49 a 53":"1265.71",
               "54 a 58":"1708.71",
               "59+":"2221.32"
            }
         }
      }
   },
   "ceara":{
      "outpatient":{
         "withCoP":{
            "withDentistry":{
               "0 a 18":"95.06",
               "19 a 23":"124.81",
               "24 a 28":"142.12",
               "29 a 33":"158.40",
               "34 a 38":"166.64",
               "39 a 43":"186.94",
               "44 a 48":"228.34",
               "49 a 53":"316.25",
               "54 a 58":"425.91",
               "59+":"552.80"
            },
            "withoutDentistry":{
               "0 a 18":"96.06",
               "19 a 23":"127.09",
               "24 a 28":"145.14",
               "29 a 33":"162.12",
               "34 a 38":"170.71",
               "39 a 43":"191.88",
               "44 a 48":"235.05",
               "49 a 53":"326.72",
               "54 a 58":"441.07",
               "59+":"573.39"
            }
         },
         "withoutCoP":{
            "withDentistry":{
               "0 a 18":"145.22",
               "19 a 23":"191.18",
               "24 a 28":"217.91",
               "29 a 33":"243.06",
               "34 a 38":"255.79",
               "39 a 43":"287.14",
               "44 a 48":"351.09",
               "49 a 53":"486.87",
               "54 a 58":"656.25",
               "59+":"852.24"
            },
            "withoutDentistry":{
               "0 a 18":"146.22",
               "19 a 23":"193.45",
               "24 a 28":"220.92",
               "29 a 33":"246.77",
               "34 a 38":"259.85",
               "39 a 43":"292.07",
               "44 a 48":"357.79",
               "49 a 53":"497.33",
               "54 a 58":"671.40",
               "59+":"872.82"
            }
         }
      },
      "nursery":{
         "withCoP":{
            "withDentistry":{
               "0 a 18":"200.48",
               "19 a 23":"258.24",
               "24 a 28":"293.98",
               "29 a 33":"326.86",
               "34 a 38":"379.66",
               "39 a 43":"384.09",
               "44 a 48":"464.19",
               "49 a 53":"632.99",
               "54 a 58":"847.54",
               "59+":"1095.81"
            },
            "withoutDentistry":{
               "0 a 18":"201.48",
               "19 a 23":"265.95",
               "24 a 28":"305.84",
               "29 a 33":"342.54",
               "34 a 38":"359.67",
               "39 a 43":"406.43",
               "44 a 48":"495.84",
               "49 a 53":"684.26",
               "54 a 58":"923.75",
               "59+":"1200.88"
            }
         },
         "withoutCoP":{
            "withDentistry":{
               "0 a 18":"261.61",
               "19 a 23":"338.93",
               "24 a 28":"386.77",
               "29 a 33":"430.78",
               "34 a 38":"451.32",
               "39 a 43":"507.39",
               "44 a 48":"614.62",
               "49 a 53":"840.58",
               "54 a 58":"1127.79",
               "59+":"1460.13"
            },
            "withoutDentistry":{
               "0 a 18":"262.61",
               "19 a 23":"346.65",
               "24 a 28":"398.65",
               "29 a 33":"446.49",
               "34 a 38":"468.81",
               "39 a 43":"529.76",
               "44 a 48":"646.31",
               "49 a 53":"891.91",
               "54 a 58":"1204.08",
               "59+":"1565.30"
            }
         }
      },
      "apartment":{
         "withCoP":{
            "withDentistry":{
               "0 a 18":"290.73",
               "19 a 23":"377.37",
               "24 a 28":"430.98",
               "29 a 33":"480.30",
               "34 a 38":"503.32",
               "39 a 43":"566.15",
               "44 a 48":"686.31",
               "49 a 53":"939.51",
               "54 a 58":"1261.34",
               "59+":"1633.75"
            },
            "withoutDentistry":{
               "0 a 18":"291.73",
               "19 a 23":"385.08",
               "24 a 28":"442.84",
               "29 a 33":"495.98",
               "34 a 38":"520.78",
               "39 a 43":"588.48",
               "44 a 48":"717.95",
               "49 a 53":"990.77",
               "54 a 58":"1337.54",
               "59+":"1738.80"
            }
         },
         "withoutCoP":{
            "withDentistry":{
               "0 a 18":"382.44",
               "19 a 23":"498.42",
               "24 a 28":"570.18",
               "29 a 33":"636.20",
               "34 a 38":"667.01",
               "39 a 43":"751.12",
               "44 a 48":"911.97",
               "49 a 53":"1250.92",
               "54 a 58":"1681.75",
               "59+":"2180.28"
            },
            "withoutDentistry":{
               "0 a 18":"383.44",
               "19 a 23":"506.14",
               "24 a 28":"582.06",
               "29 a 33":"651.91",
               "34 a 38":"684.51",
               "39 a 43":"773.50",
               "44 a 48":"943.67",
               "49 a 53":"1302.26",
               "54 a 58":"1758.05",
               "59+":"2285.47"
            }
         }
      }
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
