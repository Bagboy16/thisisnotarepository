const curp = 'AOPJ060723HCLCDSA';
let genero;
let algoritmoFecha;
genero = curp.charAt(10);
if (genero === 'H') {
  console.log('Genero Masculino');
  algoritmoFecha = true;
} else if (genero === 'M') {
  console.log('Genero Femenino');
  algoritmoFecha = true;
} else {
  console.log('CURP INCORRECTO');
  algoritmoFecha = false;
}
if (algoritmoFecha) {
  let year;
  year = curp.charAt(4) + curp.charAt(5);
  let day;
  day = curp.charAt(8) + curp.charAt(9);
  let month;
  month = curp.charAt(6) + (7);
  let sigloxx;
  sigloxx = curp.charAt(16) >= 0;
  let siglo;
  if (sigloxx) {
  siglo = '19';
  } else {
  siglo = '20'
  }
  console.log(`Fecha de Nacimiento: ${day}/${month}/${siglo}${year}`)
} 
