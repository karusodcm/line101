function newRegisterFom(form) {
  var urlLine101 = "https://docs.google.com/spreadsheets/d/1QPfqLUCPFCqI_q9UE4R3tihAhU7WX7Snmt02GoXSxoQ/edit?gid=1876753471#gid=1876753471";
  var sheetLine101 = SpreadsheetApp.openByUrl(urlLine101);
  var add = sheetLine101.getSheetByName("registroForm");

  add.appendRow([new Date(),
  form.dniuser,
  form.tipodellamada,
  form.verificacion,
  form.phone,
  form.nameCall,
  form.name,
  form.fullName,
  form.fullNameMo,
  form.genero,
  form.lengua,
  form.region,
  form.provinciasHuanuco,
  form.provinciasLima,
  form.distritosLima,
  form.motivo,
  form.opppss,
  form.opppssse,
  form.opcse,
  form.opcsese,
  form.cseot,
  form.opotros,
  form.opotrosse,
  form.opotrosseo,
  form.atendido,
  form.respuesta,
  form.llnovalido,
  form.llmalintencionada,
  form.cuestiono,
  form.cuestiont,
  form.autorizacion,
  form.sedes

  ]);

}


// function newRegisterAsistencia(form) {
//   var urlLine101 = "https://docs.google.com/spreadsheets/d/1QPfqLUCPFCqI_q9UE4R3tihAhU7WX7Snmt02GoXSxoQ/edit?gid=1876753471#gid=18767534716";
//   var sheetLine101 = SpreadsheetApp.openByUrl(urlLine101);
//   var add = sheetLine101.getSheetByName("asistencia");

//   add.appendRow([new Date(),
//   form.agente,
//   form.tipoderegistro,
//   form.acceso,
//   form.horario,
//   form.modalidad
//   ]);

// }
