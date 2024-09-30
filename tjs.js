const clogin = document.getElementById("login")
const dniagent = document.getElementById("dniagent")
const password = document.getElementById("password")
const cverify = document.getElementById("verify")
const load = document.getElementById("load")
const alertGeneral = document.getElementById("alertGeneral")
let dniuser = document.getElementById("dniuser")
let asignardni = document.getElementById('asignardni')
const registerForm = document.getElementById("registerForm")

let dnisave = []

cverify.addEventListener('click', verificarUser)

function verificarUser(){

  const agentes = [
  {
  dni : 72231242,
  na : 'karls',
  pass : 1242,
  },
  {
  dni : 19917757,
  na : 'Jose',
  pass : 7757,
  },
  {
  dni : '05338732',
  na : 'Lidia L.',
  pass : 8732,
  },
  {
  dni : 48299683,
  na : 'Juanita',
  pass : 9683,
  },
  {
  dni : 44567494,
  na : 'Lidia R.',
  pass : 7494,
  },
  {
  dni : 10728310,
  na : 'Dennis',
  pass : 8310,
  },
  {
  dni : 73674345,
  na : 'Ruth',
  pass : 4345,
  },
  {
  dni : 72183278,
  na : 'Rolando',
  pass : 3278,
  },
  {
  dni : '09526848',
  na : 'Renzo',
  pass : 6848,
  },
  {
  dni : 74364407,
  na : 'Jhon',
  pass : 4407,
  },
  {
  dni : '02866093',
  na : 'Paulina',
  pass : 6093,
  },
  {
  dni : '09393291',
  na : 'Carlos F.',
  pass : 3291,
  },
  {
  dni : 41599697,
  na : 'Liz',
  pass : 9697,
  },
  {
  dni : '08463102',
  na : 'Enrique',
  pass : 3102,
  },
  {
  dni : 42109497,
  na : 'Carlos',
  pass : 9497,
  },
  {
  dni : 42958333,
  na : 'Mario',
  pass : 8333,
  },
  {
  dni : 47385326,
  na : 'Carmen',
  pass : 5326,
  },
  {
  dni : 41028342,
  na : 'Zulma',
  pass : 8342,
  },
  {
  dni : 46564905,
  na : 'Jasmin',
  pass : 4905,
  },
  {
  dni : 43642484,
  na : 'Miguel',
  pass : 2484,
  },
  {
  dni : 70397535,
  na : 'Ariana',
  pass : 7535,
  },
  {
  dni : 73135521,
  na : 'Ayde',
  pass : 5521,
  },
  {
  dni : 47645532,
  na : 'Angelica',
  pass : 5532,
  },
  {
  dni : 72152451,
  na : 'Jean',
  pass : 2451,
  },
  {
  dni : 72099011,
  na : 'Leslie',
  pass : 9011,
  },
   {
  dni : '07294384',
  na : 'Anibal',
  pass : 4384,
  },
  ]

  const validarD = agentes.find((objetos) => {
  if( objetos.dni == dniagent.value && objetos.pass == password.value){dnisave = objetos.dni;clogin.style.display = 'none';dniuser.value = objetos.dni;asignardni.value = objetos.dni;registerForm.disabled = false}else{clogin.style.background = 'red';} ;
  
  })

}

let tipodellamada = document.getElementById("tipodellamada")
let verificacion = document.getElementById("verificacion")
let sedes = document.getElementById("sedes")
const vCalidad = document.getElementById('vCalidad')
let phone = document.getElementById('phone')
let nameCall = document.getElementById('nameCall')

tipodellamada.addEventListener("change", () => {
    switch (tipodellamada.value) {
        case 'Presencial':
            (verificacion.style.display = "none"); (sedes.style.display = "flex");(verificacion.value ="");(llnovalido.style.display = "none");(llnovalido.value = "");(malintencionada.style.display = "none");(malintencionada.value = "");(vCalidad.style.display = "none");(atendido.style.display = "flex");(respuesta.style.display = "flex");(phone.value = "0")
            break
            break
        default:
            (verificacion.style.display = "flex"); (sedes.style.display = "none");(sedes.value = "");(vCalidad.style.display = "flex")
    }
});


let llnovalido = document.getElementById("llnovalido")
let malintencionada = document.getElementById("malintencionada")

verificacion.addEventListener("change", () => {
    switch (verificacion.value) {
        case 'No válido':
            (llnovalido.style.display = "flex");(atendido.value = "Atendido");(atendido.style.display = "none");(respuesta.value = ".");(respuesta.style.display = "none");(nameCall.value = ".");(phone.value = "0")
            break
        default:
            (llnovalido.style.display = "none");(llnovalido.value = "");(malintencionada.style.display = "none");(malintencionada.value = "");(respuesta.style.display = "flex");(atendido.style.display = "flex")
    }
});


llnovalido.addEventListener("change", () => {
    switch (llnovalido.value) {
        case 'Llamada Malintencionada':
            (malintencionada.style.display = "flex")
            break
        default:
            (malintencionada.style.display = "none")
    }
});

let region = document.getElementById("region")
let lima = document.getElementById("lima")
let limametro = document.getElementById("limametro")
let huanuco = document.getElementById("huanuco")
let loreto = document.getElementById("loreto")

let provinciasLima = document.getElementById("provinciasLima")
let metropolitanoLima = document.getElementById("metropolitanoLima")
let provinciasHuanuco = document.getElementById("provinciasHuanuco")

region.addEventListener("change", () => {
    switch (region.value) {
        case 'Lima Provincia':
            (lima.style.display = "flex");(limametro.style.display = "none");(huanuco.style.display = "none");(metropolitanoLima.value = "");(provinciasHuanuco.value = "")
            break
            case 'Lima Metropolitana':
            (lima.style.display = "none");(limametro.style.display = "flex");(huanuco.style.display = "none");(provinciasLima.value = "");(provinciasHuanuco.value = "")
            break
            case 'Huanuco':
            (lima.style.display = "none");(limametro.style.display = "none");(huanuco.style.display = "flex");(provinciasLima.value = "");(metropolitanoLima.value = "")
            break
        default:
            (lima.style.display = "none");(limametro.style.display = "none");(huanuco.style.display = "none");(provinciasLima.value = "");(metropolitanoLima.value = "");(provinciasHuanuco.value = "")
    }
});


let motivo = document.getElementById('motivo');
let ppss = document.getElementById('ppss');
let cse = document.getElementById('cse');
let otros = document.getElementById('otros');

const oppsss = document.getElementById("oppsss");
const opppssse = document.getElementById("opppssse");

const opcse = document.getElementById("opcse");
const opcsese = document.getElementById("opcsese");
const empadronarDificulat = document.getElementById("empadronarDificulat");
const empadronarOtros = document.getElementById("empadronarOtros");
const cseot = document.getElementById("cseot");

const opotros = document.getElementById("opotros");
const bonustype = document.getElementById("bonustype");
const consultbonds = document.getElementById("consultbonds");
const opotrosse = document.getElementById("opotrosse");
const opotrosseo = document.getElementById("opotrosseo");

motivo.addEventListener("change", ()=>{
    switch(motivo.value){
      case 'Programas Sociales':
      (ppss.style.display = "flex");(cse.style.display = "none");(otros.style.display = "none");(opcse.value = "");(opcsese.value = "");(cseot.value = "");(opotros.value = "");(opotrosse.value = "");(opotrosseo.value = "");(bonustype.style.display = "none");(consultbonds.style.display = "none");(empadronarOtros.style.display = "none");(empadronarDificulat.style.display = "none")
      break
      case 'Clasificación Socioeconómica':
      (cse.style.display = "flex");(ppss.style.display = "none");(otros.style.display = "none");(oppsss.value = "");(opppssse.value = "");(opotros.value = "");(opotrosse.value = "");(opotrosseo.value = "");(bonustype.style.display = "none");(consultbonds.style.display = "none")
      break
      case 'Otros':
      (otros.style.display = "flex");(ppss.style.display = "none");(cse.style.display = "none");(oppsss.value = "");(opppssse.value = "");(opcse.value = "");(opcsese.value = "");(cseot.value = "");(empadronarOtros.style.display = "none");(empadronarDificulat.style.display = "none")
      break
      default:
      (ppss.style.display = "none");(cse.style.display = "none");(otros.style.display = "none");(oppsss.value = "");(opppssse.value = "");(opcse.value = "");(opcsese.value = "");(cseot.value = "");(opotros.value = "");(opotrosse.value = "");(opotrosseo.value = "")
    }
  });



  opcse.addEventListener("change", ()=>{
    switch(opcse.value){
      case 'Empadronamiento masivo focalizado':
      (empadronarDificulat.style.display = "block");(empadronarOtros.style.display = "none")
      break
      case 'Otros':
      (empadronarOtros.style.display = "block");(empadronarDificulat.style.display = "none")
      break
      default:
      (empadronarDificulat.style.display = "none");(opcsese.value = "");(empadronarOtros.style.display = "none");(cseot.value = "")
    }
  });

opcsese.addEventListener("change", ()=>{
    switch(opcsese.value){
      case 'Otros':
      (empadronarOtros.style.display = "block")
      break
      default:
      (empadronarOtros.style.display = "none");(cseot.value = "")
    }
  });

  opotros.addEventListener("change", ()=>{
    switch(opotros.value){
      case 'Bonos otorgados':
      (bonustype.style.display = "block");(consultbonds.style.display = "block")
      break
      default:
      (bonustype.style.display = "none");(consultbonds.style.display = "none");(opotrosse.value = "");(opotrosseo.value = "")
    }
  });

  
  const atendido = document.getElementById("atendido")
  const respuesta = document.getElementById("respuesta")
  const alertred = document.getElementById("alertred")
  


   registerForm.addEventListener("click",()=>{
  
  if(dniuser.value !== '' && tipodellamada.value !== '' && phone.value !== '' && nameCall.value !== '' && atendido.value !== ''&& respuesta.value !== '')
  {validarV();}
  else
  {alertred.style.display="flex";setTimeout(function(){
  alertred.style.display="none";},2000)};
  
  })

   let ggDNI = [];

  function informar (){

    let guardarDNI = document.getElementById("dniuser").value;
    ggDNI = guardarDNI


  }
 

  function validarV(){
  event.preventDefault();
  const form = document.getElementById('rF');
  regsendf();
  google.script.run
  .withSuccessHandler(result =>{
  form.reset();
  })
  .newRegisterFom(form)
  onNoValido();
}

  function regsendf (){
  load.style.display ="flex",informar();setTimeout(() => {
  load.style.display ="none",agree()},3000);
  }

  


  function agree(){
  let ttdd = document.getElementById("dniuser");
  ttdd.value = ggDNI
  }



function onNoValido(){
  ppss.style.display = "none";
  cse.style.display = "none";
  otros.style.display = "none";

  verificacion.style.display = "none";
  llnovalido.style.display = "none";
  malintencionada.style.display = "none";
  sedes.style.display = "none";

  huanuco.style.display = "none";
  lima.style.display = "none";
  limametro.style.display = "none";

  empadronarDificulat.style.display = "none";
  empadronarOtros.style.display = "none";
  bonustype.style.display = "none";
  consultbonds.style.display = "none";

  respuesta.textContent = "";
}



