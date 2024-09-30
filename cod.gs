var BD_ID = '1QPfqLUCPFCqI_q9UE4R3tihAhU7WX7Snmt02GoXSxoQ';
var ss = SpreadsheetApp.openById(BD_ID);

function doGet() {

  var contactos = ss.getSheetByName('contactos');
  var directorio = contactos.getRange('A1:E41').getDisplayValues();


  var html = HtmlService.createTemplateFromFile('Data');
  html.pubUrl = "https://script.google.com/a/midis.gob.pe/macros/s/AKfycbxex2bomjnJFvNtb_ToN2HZl6_jrqMerbDU6K6o5Io/dev";

  html.directorio = directorio;

  var output = html.evaluate();
  output.addMetaTag('viewport', 'width=device-width, initial-scale=1'); /*reponsive*/

  return output;
}


function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName)
    .getContent();
}

function obtenerContenidoHTML(pagina) {
  const contenidoHTML = HtmlService.createHtmlOutputFromFile(pagina).getContent();
  return contenidoHTML;
}

function getScriptURL() {
  return ScriptApp.getService().getUrl();
}

function redUsers() {
  const dataUsuarios = r101.getDataRange().getDisplayValues();
  dataUsuarios.shift();
  if (dataUsuarios.length === 0) {
    return "No hay registros"
  }
  return dataUsuarios;

}