
nota_tempo = '';




nota_tempo = 'Cordial saludo, estimado cliente.\n';
nota_tempo+='Le informamos que su reporte de falla fue escalado a nuestro personal en campo. \n'
nota_tempo+='\nEn este momento nos encontramos coordinándolo, tan pronto se cuente con disponibilidad ' 
nota_tempo+='en la agenda del personal técnico le estaremos informando. En su correo y en el Portal podrá visualizar nuevas actualizaciones de avance.';




nota1a = nota_tempo;  //indisponibilidadpersonalcampo
//--------------------------------------------------
nota_tempo =   'En  el  momento  no  se  cuenta  con  capacidad  del  personal  en  campo  para  atención,  se  ';
nota_tempo+='estará programando lo más pronto posible apenas haya disponibilidad.';


nota1a = nota_tempo;  //indisponibilidadpersonalcampo
//--------------------------------------------------

nota1b = nota_tempo; //indisponibilidadpersonalcampo
//--------------------------------------------------
nota_tempo =   'La agenda del personal en campo asignado presenta un retraso para la atención en sitio, le estaremos notificando la nueva hora de atención.\n';
nota_tempo+='En su correo y en el Portal podrá visualizar nuevas actualizaciones de avance.';



nota2a = nota_tempo;// modificacionagenda







//--------------------------------------------------
nota_tempo =   'Cordial saludo2b, estimado cliente.\n';
nota_tempo+='\nLe informamos que su reporte de falla tuvo un cambio en el nombre de la persona que efectuará el soporte en sitio, estos son los datos actuales:\n\n';

nota_tempo+='Nombre: NOMBRE DEL PERSONAL DE CAMPO ASIGNADO\n';
nota_tempo+='Cédula: CÉDULA DEL PERSONAL DE CAMPO ASIGNADO\n';
nota_tempo+='Fecha: AAAAMMDD\n';
nota_tempo+='Hora: Hora fija / Franja Horaria\n\n';
nota_tempo+='Nota: Le solicitamos, en caso que nuestro personal requiera permisos de ingreso, por favor gestionarlos. ';
nota2b = nota_tempo; //modificacionagenda
//--------------------------------------------------


nota_tempo='La agenda del personal en campo asignado presenta retraso en el cumplimiento de la cita del día hoy, ';
nota_tempo+='por esta razón será gestionada de manera prioritaria el día de mañana.\n\nEn su correo y en el Portal podrá visualizar nuevas actualizaciones de avance.';
nota3a = nota_tempo;  //incumplimientoagenda



  


//--------------------------------------------------

nota3b =   'El reporte de falla se encuentra en estado Pendiente, ya que no fue gestionado dentro de la agenda del personal en campo o por modificación en la ruta de trabajo, se dará atención prioritaria el día de mañana según disponibilidad del cliente.';

//incumplimientoagenda
//------------------------------------------------------------------------------------------------------------

nota_tempo =   'Cordial saludo, estimado cliente.\n';
nota_tempo+='\nLe  informamos  que  su  reporte  de  falla  se  encuentra  en  gestión  de  equipos  indispensables  para  la solución de ésta. \n\nA su correo/Portal le estarán llegando nuevas actualizaciones de avance.';





nota4a = nota_tempo;



//gestioninventario

//--------------------------------------------------

nota4b = 'Se crea Tarea en  BMC #<> al área encargada de inventarios para que se valide la existencia del material o equipo requerido, se espera respuesta para programar la visita.';

nota_tempo = 'Observación: Se requiere (cantidad en letra y número) \n';
nota_tempo+='Equipo/ material:\n';
nota_tempo+='Referencia:\n';
nota_tempo+='Para la bodega reparaciones de contrato - ciudad\n';
nota_tempo+='Se autoriza al siguiente personal para la recogida:\n';
nota_tempo+='Nombre: \n';
nota_tempo+='Cedula:\n';
nota_tempo+='Contrato: \n';
nota_tempo+='Celular:';


nota_tempo= 'Su reporte de falla se encuentra en gestión de equipos indispensables para la solución de esta.\n';
nota_tempo+= 'En su correo y en el Portal podrá visualizar nuevas actualizaciones de avance.';



nota4a = nota_tempo;







//gestioninventario ------------------------------------------




notaviatia ="Cordial saludo, estimado Cliente. \n\nLe informamos que en este momento nos encontramos coordinando el desplazamiento del personal en campo al lugar de la falla.\n\nEn su correo y en el Portal podrá visualizar nuevas actualizaciones de avance."

notaviatia = "En este momento nos encontramos coordinando el desplazamiento del personal en campo al lugar de la falla.\n"
notaviatia +="En su correo y en el Portal podrá visualizar nuevas actualizaciones de avance.";









//----

//------------------------------------------------------------------
//nota_tempo =   'Cordial saludo5a, estimado cliente.\n';


cuerpo1 =  '\El personal en campo asignado, nos indica que debido a , impiden se lleve a cabo la reparación, por lo tanto, reagendaremos su caso para nueva visita el día de mañana.\n\n';
despedida1 = 'En su correo y en el Portal podrá visualizar nuevas actualizaciones de avance.';



nota5a =  cuerpo1 +despedida1;
//--------------------------------------------------



nota_tempo = 'Fecha y hora: Fecha y hora de la llamada al contacto en sitio.\n' ;
nota_tempo+='Teléfono 1: Teléfono de contacto quese encuentra en el incidente de BMC, en la casilla "Contacto", en el campo "Teléfono".\n';
nota_tempo+='Teléfono 2: Segundo teléfono de contacto en caso tal de que se encuentre en el incidente de BMC, en la casilla "Contacto"';
nota_tempo+=', en el campo "Teléfono".\nObservación: El personal en campo indica que no se puede atender el incidente debido';
nota_tempo+=' a:(Problemas de orden público/factores climáticos).Se adjunta evidencia fotográfica. El personal en campo informa la ';
nota_tempo+='novedad al contacto en sitio. Se reagendará nueva visita.';








nota5b = nota_tempo; // nota_tempo;

//------------------------------------------------------------------


cuerpo2 = 'El personal en campo asignado, nos indica que se debe reagendar la visita por motivo de :\n';
cuerpo2c = 'Contacto en sitio: \n';
cuerpo2d = 'Personal en campo: \n';
cuerpo2e = 'Por lo tanto, reagendaremos su caso para nueva visita el día: \n\n';


despedida2 = 'En su correo y en el Portal podrá visualizar nuevas actualizaciones de avance.';



nota6a =  cuerpo2 +cuerpo2c+cuerpo2d +cuerpo2e+despedida2;






//--------------------------------------------------
nota_tempo =   'Cordial saludo6b, estimado cliente.\n';


nota_tempo = 'Fecha y hora: Fecha y hora de la llamada al contacto en sitio.\n' ;
nota_tempo+='Personal en campo: Nombre del personal en campo que realiza la visita.\n';
nota_tempo+='Contacto en sitio: Nombre de la persona que recibió al personal en el sitio.\n';
nota_tempo+='Observación: Cliente solicita reagendamiento de la visita por:';
nota_tempo+=' (orden del suscriptor/cliente no autoriza/seguimiento del servicio). Se reagenda nueva visita para el día (fecha que haya indicado el cliente), indicado por el cliente.';




nota6b = nota_tempo;
//------------------------------------------------------------------



cuerpo3  = 'El personal en campo asignado, nos indica que el lugar de atención se encuentra .\n\nTratamos  de  ubicarlo  en  los  números  de  contacto  registrados  y  no  fue  posible. Por  lo  tanto, reagendaremos su caso para nueva visita el día de mañana.\n\n';

despedida3 = 'En su correo y en el Portal podrá visualizar nuevas actualizaciones de avance.';



nota7a = cuerpo3 +despedida3;
//--------------------------------------------------




nota_tempo = 'Fecha y hora: Fecha y hora de la llamada al contacto en sitio.\n' ;
nota_tempo+='Teléfono 1: Teléfono de contacto que se encuentra en el incidente de BMC, en la casilla "Contacto", en el campo "Teléfono".\n';
nota_tempo+='Teléfono 2: Segundo teléfono de contacto en caso tal de que se encuentre en el incidente de BMC, en la casilla "Contacto"';
nota_tempo+=', en el campo "Teléfono".\nObservación: El personal en campo asignado indica que (el lugar de atención se encuentra cerrado/no logra ubicar la dirección).';
nota_tempo+='\nSe adjunta evidencia fotográfica.\nSe intentó establecer comunicación con el cliente a los teléfonos de contacto registrados, sin éxito.';
nota_tempo+='\nSe reagendaránueva visita.';

nota7b = nota_tempo;




//

//El personal en campo asignado, nos indica que se deben realizar configuraciones del servicio en los sistemas de información, por lo tanto, reagendaremos su caso para nueva visita una vez se hayan realizado dichas configuraciones

nota_tempo = 'El personal en campo asignado, nos indica que se deben realizar configuraciones del servicio en los sistemas de información, por lo tanto, reagendaremos su caso para nueva visita una vez se hayan realizado dichas configuraciones.';

//Fecha y hora: Fecha y hora de la llamada al contacto en sitio.\n' ;
//nota_tempo+='Teléfono 1: Teléfono de contacto que se encuentra en el incidente de BMC, en la casilla "Contacto", en el campo "Teléfono".\n';
//nota_tempo+='Teléfono 2: Segundo teléfono de contacto en caso tal de que se encuentre en el incidente de BMC, en la casilla "Contacto"';
//nota_tempo+=', en el campo "Teléfono".\nObservación: El personal en campo asignado indica que (el lugar de atención se encuentra cerrado/no logra ubicar la dirección).';
//nota_tempo+='\nSe adjunta evidencia fotográfica.\nSe intentó establecer comunicación con el cliente a los teléfonos de contacto registrados, sin éxito.';
//nota_tempo+='\nSe reagendaránueva visita.';

nota8 = nota_tempo;










//-------------------------------------

nota_tempo = 'Fecha y hora: Fecha y hora de la llamada al contacto en sitio.\n';
nota_tempo +=  'Contacto en sitio: Nombre de la persona con la que se tuvo contacto telefónico.\n';
nota_tempo += 'Teléfono: Número del teléfono al cual se realizó la llamada.\n';
nota_tempo += 'Dirección:Dirección que confirme la persona de contacto.\n'
nota_tempo += 'Disponibilidad: Disponibilidad horaria que confirme la persona de contacto.\n';
nota_tempo += 'Observación: Si el cliente tiene disponibilidad para atender la visita: Cliente confirma disponibilidad para atender la visita en el horario indicado.\n';
nota_tempo += 'Si el cliente no tiene disponibilidad de atender la visita:Cliente no tiene disponibilidad para atender la visita, se reagenda para el día (fecha)en el horario de (hora fija o franja horaria)indicado por el Cliente.\n';


nota_confir_v = 'nota_tempo';
//nota7b = nota_tempo;
//-------------------------------------------------------------------------------------------------------------

nota_tempo = 'Fecha y hora: Fecha y hora de la comunicación con el personal en campo.\n';
nota_tempo += 'Personal en campo: Nombre del personal en campo que realiza la visita.\n';
nota_tempo +='Contacto en sitio:Nombre de la persona que recibió al personal en el sitio.\n'
nota_tempo += 'Observación:El personal en campo indica quese encuentra en sitio.(Breve descripción de lo que está haciendo en el momento).\n';




nota_avances_i = nota_tempo;

//nota7a = nota_tempo;








