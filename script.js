// BASE DE DATOS DE PROCEDIMIENTOS DE EMERGENCIA
const procedures = {
    'SISMO': {
        title: '🌋 PROCEDIMIENTO ANTE SISMO',
        time: '3:00 minutos',
        steps: [
            'DIRECTOR ACTIVA LA ALARMA Y EL CEGR',
            'DOCENTE DA INSTRUCCIÓN DE CUBRIRSE LA CABEZA CON LAS MANOS',
            'AGACHARSE Y CUBRIRSE BAJO ESCRITORIOS O MESAS CERCANAS',
            'ALEJARSE DE VENTANAS, ESTANTERÍAS Y OBJETOS QUE PUEDAN CAER',
            'PERMANECER AGACHADOS Y SUJETADOS MIENTRAS PASA EL SISMO',
            'ATENDER A ESTUDIANTES CON DISCAPACIDAD O NECESIDADES ESPECIALES',
            'ESPERAR QUE TERMINE COMPLETAMENTE EL MOVIMIENTO',
            'EVACUAR USANDO LAS RUTAS ESTABLECIDAS Y SEÑALIZADAS',
            'DURANTE LA EVACUACIÓN EVITAR CORRER, EMPUJARSE O GRITAR',
            'DIRIGIRSE AL PUNTO DE REUNIÓN ESTABLECIDO (CANCHA DEPORTIVA)',
            'DOCENTE REALIZA CONTEO DE ESTUDIANTES EN EL PUNTO DE REUNIÓN',
            'VERIFICAR Y REPORTAR AL DIRECTOR SI HAY HERIDOS O AUSENTES',
            'ESPERAR INSTRUCCIONES DEL DIRECTOR DEL CEGR'
        ]
    },
    'INCENDIO': {
        title: '🔥 PROCEDIMIENTO ANTE INCENDIO',
        time: '2:30 minutos',
        steps: [
            'EVACUAR INMEDIATAMENTE LAS INSTALACIONES',
            'ACTIVAR Y RECONOCER LA ALARMA DE INCENDIO',
            'LLAMAR INMEDIATAMENTE A LOS BOMBEROS (122/123)',
            'SI EL FUEGO ES PEQUEÑO, USAR EXTINTOR APROPIADO',
            'SI HAY HUMO EN EL SALÓN, AGACHARSE Y CUBRIRSE NARIZ Y BOCA',
            'IDENTIFICAR LA RUTA DE EVACUACIÓN MÁS CERCANA',
            'CERRAR PUERTAS AL SALIR PARA CONTENER EL FUEGO',
            'ATENDER A ESTUDIANTES CON DISCAPACIDAD PARA EVACUACIÓN SEGURA',
            'MANTENERSE LEJOS DE CABLES EXPUESTOS O MATERIALES INFLAMABLES',
            'DIRIGIRSE AL PUNTO DE REUNIÓN ESTABLECIDO',
            'REALIZAR CONTEO DE ESTUDIANTES Y PERSONAL',
            'DESIGNAR PERSONA RESPONSABLE DE LLAVES Y CANDADOS',
            'NO REGRESAR HASTA QUE BOMBEROS AUTORICE EL RETORNO'
        ]
    },
    'INUNDACIÓN': {
        title: '💧 PROCEDIMIENTO ANTE INUNDACIÓN',
        time: '4:00 minutos',
        steps: [
            'BAJAR LOS BREAKERS DE LA CAJA DE ELECTRICIDAD (PERSONAL CAPACITADO)',
            'DESCONECTAR EL CILINDRO DE GAS ANTES DE EVACUAR',
            'MONITOREAR ALERTAS DEL INSIVUMEH Y CONRED',
            'EVACUAR HACIA EL PUNTO DE REUNIÓN ESTABLECIDO',
            'USAR RUTA ALTERNA SI LA RUTA PRINCIPAL ESTÁ OBSTRUIDA',
            'PROPORCIONAR ATENCIÓN ESPECÍFICA A PERSONAS CON DISCAPACIDAD',
            'EN CASO DE SER NECESARIO, TRASLADARSE A UNA ZONA ALTA SEGURA',
            'NO CRUZAR CORRIENTES DE AGUA, AUNQUE PARESCAN POCO PROFUNDAS',
            'REALIZAR VERIFICACIÓN DEL CONTEO DE ESTUDIANTES EVACUADOS',
            'REPORTAR AUSENTES INMEDIATAMENTE AL DIRECTOR DEL CEGR',
            'MANTENER AL GRUPO UNIDO Y EN ZONA SEGURA',
            'INFORMAR A AUTORIDADES LOCALES (COMRED/COLRED)',
            'ACTIVAR PROCEDIMIENTO DE ENTREGA DE ESTUDIANTES SI ES NECESARIO'
        ]
    },
    'CENIZA_VOLCÁNICA': {
        title: '🌫️ PROCEDIMIENTO ANTE CENIZA VOLCÁNICA',
        time: '2:00 minutos',
        steps: [
            'INDICAR A ESTUDIANTES QUE PERMANEZCAN EN SUS AULAS',
            'SUSPENDER ACTIVIDADES AL AIRE LIBRE INMEDIATAMENTE',
            'REGRESAR A LAS AULAS SI SE ESTABA EN ÁREAS EXTERIORES',
            'CERRAR VENTANAS Y PUERTAS PARA EVITAR CONTACTO CON LA CENIZA',
            'INSTRUIR A ESTUDIANTES Y PERSONAL SOBRE MEDIDAS DE PROTECCIÓN',
            'CUBRIRSE BOCA Y NARIZ CON PAÑUELOS O PRENDAS DE VESTIR',
            'NO FROTARSE LOS OJOS PARA EVITAR IRRITACIONES',
            'EL CEGR EVALÚA CONDICIONES DEL TECHO E INFORMA AL DIRECTOR',
            'VERIFICAR QUE LAS ÁREAS DE VENTILACIÓN ESTÉN CUBIERTAS',
            'EN CASO DE CAÍDA EXCESIVA DE CENIZA, INFORMAR A AUTORIDADES LOCALES',
            'COORDINAR CON ALCALDÍA AUXILIAR, COLRED Y CUERPOS DE SOCORRO',
            'INFORMAR CUÁNTOS ESTUDIANTES Y PERSONAL HAY EN EL CENTRO EDUCATIVO',
            'ESPERAR INSTRUCCIONES DE AUTORIDADES PARA EVACUACIÓN SI ES NECESARIO'
        ]
    },
    'EVACUACIÓN': {
        title: '🚶 PROCEDIMIENTO DE EVACUACIÓN GENERAL',
        time: '5:00 minutos',
        steps: [
            'ESCUCHAR INSTRUCCIONES DEL DOCENTE O PERSONAL DEL CEGR',
            'ACTIVAR ALARMA (TIMBRE, CAMPANA, SILBATO) O MÉTODO ALTERNO',
            'EVACUAR AULAS Y OFICINAS DE MANERA CALMADA Y ORDENADA',
            'USAR EXCLUSIVAMENTE LAS RUTAS DE EVACUACIÓN SEÑALIZADAS',
            'UTILIZAR RUTA ALTERNA SI LA DESIGNADA ESTÁ BLOQUEADA',
            'LLEVAR LISTADOS DE ASISTENCIA ACTUALIZADOS',
            'ASEGURAR ASISTENCIA APROPIADA A ESTUDIANTES CON DISCAPACIDAD',
            'VERIFICAR QUE TODAS LAS ÁREAS HAYAN SIDO EVACUADAS COMPLETAMENTE',
            'REALIZAR CONTEO EN EL PUNTO DE REUNIÓN ESTABLECIDO',
            'NO REGRESAR POR PERTENENCIAS PERSONALES',
            'REPORTAR AL DIRECTOR SI HAY HERIDOS O AUSENTES',
            'INDICAR SI HAY ESTUDIANTES DE OTROS GRADOS EN EL GRUPO',
            'MANTENER A ESTUDIANTES REUNIDOS Y EN CALMA',
            'ESPERAR INSTRUCCIONES DEL DIRECTOR DEL CEGR'
        ]
    },
    'RESGUARDO': {
        title: '🛡️ PROCEDIMIENTO DE RESGUARDO EN AULA',
        time: '3:30 minutos',
        steps: [
            'UTILIZAR MEGÁFONO, SILBATO O TIMBRE PARA ACTIVAR PROCEDIMIENTO',
            'LLEVAR A LAS AULAS A ESTUDIANTES QUE ESTÉN AFUERA',
            'CERRAR INMEDIATAMENTE VENTANAS Y PUERTAS',
            'CERRAR CORTINAS O PERSIANAS SI LA SITUACIÓN LO AMERITA',
            'APAGAR LAS LUCES DEL AULA PARA NO LLAMAR LA ATENCIÓN',
            'AGACHARSE Y UBICARSE LEJOS DE VENTANAS Y/O PUERTAS',
            'PERMANECER EN SILENCIO PARA ESCUCHAR INSTRUCCIONES',
            'ASEGURAR ASISTENCIA A PERSONAS CON DISCAPACIDAD',
            'DOCENTE TOMA LISTA DE ESTUDIANTES PRESENTES',
            'MANTENER EL RESGUARDO HASTA INDICACIÓN DEL DIRECTOR',
            'NO SALIR DEL AULA HASTA QUE AUTORIDADES LO AUTORICEN',
            'EN CASO DE AMENAZA EXTERNA, MANTENER PERFIL BAJO',
            'COMUNICAR CUALQUIER INCIDENTE AL DIRECTOR DEL CEGR',
            'ESPERAR INSTRUCCIONES DE SEGURIDAD O EVACUACIÓN'
        ]
    }
};

// BASE DE DATOS DE PROTOCOLOS DE SALUD
const healthProtocols = {
    'PRIMEROS_AUXILIOS': {
        title: '🩹 Protocolo de Primeros Auxilios',
        time: '5:00 minutos',
        steps: [
            'EVALUAR ESCENA: Verificar seguridad del área',
            'LLAMAR A EMERGENCIAS: 125 Cruz Roja / 122 Bomberos',
            'EVALUAR VÍCTIMA: Nivel de conciencia, respiración, sangrados',
            'APLICAR RCP: Solo si está capacitado (30 compresiones : 2 respiraciones)',
            'CONTROLAR HEMORRAGIAS: Presión directa con gasa estéril',
            'INMOVILIZAR FRACTURAS: No mover si hay sospecha de lesión vertebral',
            'TRATAR QUEMADURAS: Enfriar con agua a temperatura ambiente 10-15 min',
            'MANEJAR CONVULSIONES: Proteger cabeza, no introducir objetos en boca',
            'REGISTRO: Documentar hora, procedimientos aplicados y signos vitales',
            'ESPERAR AYUDA: Mantener calma hasta llegada de profesionales'
        ],
        resources: ['Botiquín', 'Guantes', 'Teléfono', 'Lista de contactos']
    },

    'COVID_GRIPE': {
        title: '🦠 Protocolo ante Enfermedades Respiratorias',
        time: '3:00 minutos',
        steps: [
            'AISLAMIENTO INMEDIATO: Llevar a área designada con ventilación',
            'PROTECCIÓN: Personal debe usar mascarilla N95 y guantes',
            'EVALUAR SÍNTOMAS: Fiebre, tos, dificultad respiratoria',
            'CONTACTAR PADRES: Informar situación y recomendar centro de salud',
            'DESINFECCIÓN: Limpiar áreas de contacto del estudiante',
            'VENTILACIÓN: Abrir ventanas para circulación de aire',
            'REGISTRO: Documentar caso para seguimiento epidemiológico',
            'COMUNICACIÓN: Informar a autoridades de salud locales',
            'SEGUIMIENTO: Monitorear otros estudiantes por síntomas similares'
        ],
        resources: ['Mascarillas', 'Guantes', 'Termómetro', 'Gel antibacterial']
    },

    'ALERGIA_ANAFILAXIA': {
        title: '⚠️ Protocolo ante Reacciones Alérgicas Severas',
        time: '2:00 minutos',
        steps: [
            'IDENTIFICAR SÍNTOMAS: Dificultad respiratoria, hinchazón, urticaria',
            'ADMINISTRAR EPINEFRINA: Si está disponible y autorizada',
            'LLAMAR EMERGENCIA: 125 Cruz Roja inmediatamente',
            'POSICIÓN: Acostar con piernas elevadas si hay mareo',
            'NO DAR ALIMENTOS: Evitar ingesta de líquidos o sólidos',
            'CONTACTAR PADRES: Informar emergencia y centro de traslado',
            'BUSCAR HISTORIAL: Verificar si tiene alergias conocidas',
            'ACOMPAÑAMIENTO: No dejar solo hasta llegada de ayuda',
            'DOCUMENTAR: Registrar hora, síntomas y acciones tomadas'
        ],
        resources: ['Epinefrina autoinyectable', 'Antihistamínicos', 'Teléfono']
    },

    'CRISIS_ASMATICA': {
        title: '🌬️ Protocolo ante Crisis Asmática',
        time: '3:00 minutos',
        steps: [
            'MANTENER LA CALMA: Tranquilizar al estudiante',
            'POSICIÓN: Sentado inclinado hacia adelante',
            'ADMINISTRAR INHALADOR: Según prescripción médica conocida',
            'AIRE FRESCO: Asegurar buena ventilación',
            'MONITOREAR RESPIRACIÓN: Contar frecuencia respiratoria',
            'LLAMAR EMERGENCIA: Si no mejora en 5-10 minutos',
            'CONTACTAR PADRES: Informar situación y acciones tomadas',
            'EVITAR DESENCADENANTES: Polvo, humo, olores fuertes',
            'REGISTRO: Documentar para informe médico'
        ],
        resources: ['Inhalador de rescate', 'Espaciador', 'Oxímetro (si disponible)']
    },

    'GOLPE_CALOR': {
        title: '🌡️ Protocolo ante Golpe de Calor',
        time: '4:00 minutos',
        steps: [
            'TRASLADAR A SOMBRA: Lugar fresco y ventilado',
            'AFLOJAR ROPA: Facilitar circulación y ventilación',
            'HIDRATACIÓN: Ofrecer agua fresca (si está consciente)',
            'ENFRIAMIENTO: Paños húmedos en frente, cuello, axilas',
            'VENTILACIÓN: Abanico o aire directo suave',
            'MONITOREAR SIGNOS: Temperatura, conciencia, respiración',
            'LLAMAR EMERGENCIA: Si hay confusión o vómitos',
            'NO ADMINISTRAR MEDICAMENTOS: Sin autorización médica',
            'PREVENCIÓN: Recordar hidratación en actividades exteriores'
        ],
        resources: ['Agua', 'Toallas', 'Termómetro', 'Ventilador']
    },

    'CRISIS_EMOCIONAL': {
        title: '🧠 Protocolo ante Crisis Emocional',
        time: '8:00 minutos',
        steps: [
            'ESPACIO SEGURO: Llevar a área tranquila y privada',
            'ESCUCHA ACTIVA: Validar emociones sin juzgar',
            'RESPIRACIÓN: Guiar ejercicios de respiración profunda',
            'CONTENCIÓN: Mantener presencia calmada y segura',
            'EVITAR SOBRESTIMULACIÓN: Reducir ruido y personas alrededor',
            'CONTACTAR ORIENTACIÓN: Psicólogo escolar o personal capacitado',
            'COMUNICAR A PADRES: Informar situación con sensibilidad',
            'SEGUIMIENTO: Programar cita de seguimiento',
            'DERIVACIÓN: Si es necesario, recomendar ayuda profesional externa'
        ],
        resources: ['Espacio privado', 'Agua', 'Contactos de apoyo psicológico']
    }
};

// VARIABLES GLOBALES
let currentProcedure = null;
let currentHealthProtocol = null;
let practiceHistory = JSON.parse(localStorage.getItem('practiceHistory')) || [];

// ELEMENTOS DOM
const mainMenu = document.getElementById('mainMenu');
const procedureDetail = document.getElementById('procedureDetail');
const contactsSection = document.getElementById('contactsSection');
const historySection = document.getElementById('historySection');

// FUNCIONES DE PROCEDIMIENTOS DE EMERGENCIA
function selectProcedure(procedureKey) {
    currentProcedure = procedureKey;
    currentHealthProtocol = null;
    const procedure = procedures[procedureKey];
    showProtocolDetail(procedure);
}

// FUNCIONES DE PROTOCOLOS DE SALUD
function selectHealthProtocol(protocolKey) {
    currentHealthProtocol = protocolKey;
    currentProcedure = null;
    const protocol = healthProtocols[protocolKey];
    showProtocolDetail(protocol);
}

// FUNCIÓN UNIFICADA PARA MOSTRAR DETALLES
function showProtocolDetail(item) {
    // Actualizar interfaz
    document.getElementById('procedureTitle').textContent = item.title;
    document.getElementById('procedureTime').textContent = `⏱️ ${item.time}`;
    
    // Crear pasos
    const stepsContainer = document.getElementById('stepsContainer');
    stepsContainer.innerHTML = '';
    
    // Agregar pasos
    item.steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'step-card';
        stepElement.innerHTML = `
            <span class="step-number">${index + 1}</span>
            <span class="step-text">${step}</span>
        `;
        stepsContainer.appendChild(stepElement);
    });
    
    // Agregar recursos si existen (para protocolos de salud)
    if (item.resources && item.resources.length > 0) {
        const resourcesElement = document.createElement('div');
        resourcesElement.className = 'resources-card';
        resourcesElement.innerHTML = `
            <div class="resources-title">🛠️ Recursos Necesarios:</div>
            ${item.resources.map(resource => 
                `<span class="resource-item">${resource}</span>`
            ).join('')}
        `;
        stepsContainer.appendChild(resourcesElement);
    }
    
    // Mostrar detalle y ocultar menú
    mainMenu.style.display = 'none';
    procedureDetail.style.display = 'block';
    contactsSection.style.display = 'none';
    historySection.style.display = 'none';
}

// FUNCIÓN PARA INICIAR PRÁCTICA
function startPractice() {
    let record;
    
    if (currentProcedure) {
        // Es un procedimiento de emergencia
        const procedure = procedures[currentProcedure];
        record = {
            type: 'emergencia',
            procedure: currentProcedure,
            title: procedure.title,
            date: new Date().toLocaleString('es-GT'),
            time: procedure.time,
            completed: true
        };
    } else if (currentHealthProtocol) {
        // Es un protocolo de salud
        const protocol = healthProtocols[currentHealthProtocol];
        record = {
            type: 'salud',
            protocol: currentHealthProtocol,
            title: protocol.title,
            date: new Date().toLocaleString('es-GT'),
            time: protocol.time,
            completed: true
        };
    } else {
        return;
    }
    
    // Agregar al historial
    practiceHistory.unshift(record);
    localStorage.setItem('practiceHistory', JSON.stringify(practiceHistory));
    
    // Simular práctica
    alert(`🏁 PRÁCTICA INICIADA\n\n${record.title}\n\nTiempo estimado: ${record.time}\n\nSigue cada paso cuidadosamente.`);
    
    setTimeout(() => {
        alert(`✅ PRÁCTICA COMPLETADA\n\n¡Excelente trabajo! La práctica se ha completado exitosamente.\n\nEl registro se ha guardado en el historial.`);
    }, 2000);
}

// FUNCIÓN PARA MOSTRAR CONTACTOS
function showContacts() {
    mainMenu.style.display = 'none';
    procedureDetail.style.display = 'none';
    contactsSection.style.display = 'block';
    historySection.style.display = 'none';
}

// FUNCIÓN PARA MOSTRAR HISTORIAL
function showHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    
    if (practiceHistory.length === 0) {
        historyList.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">No hay prácticas registradas todavía.</p>';
    } else {
        practiceHistory.forEach(record => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            const typeIcon = record.type === 'emergencia' ? '🚨' : '🏥';
            historyItem.innerHTML = `
                <strong>${typeIcon} ${record.title}</strong>
                <div style="margin-top: 5px;">
                    <small>📅 ${record.date}</small><br>
                    <small>⏱️ ${record.time}</small>
                </div>
            `;
            historyList.appendChild(historyItem);
        });
    }
    
    mainMenu.style.display = 'none';
    procedureDetail.style.display = 'none';
    historySection.style.display = 'block';
}

// FUNCIONES DE NAVEGACIÓN
function backToMenu() {
    mainMenu.style.display = 'block';
    procedureDetail.style.display = 'none';
    contactsSection.style.display = 'none';
    historySection.style.display = 'none';
    currentProcedure = null;
    currentHealthProtocol = null;
}

function backToProcedure() {
    if (currentProcedure || currentHealthProtocol) {
        procedureDetail.style.display = 'block';
        contactsSection.style.display = 'none';
        historySection.style.display = 'none';
    } else {
        backToMenu();
    }
}

// FUNCIÓN PARA CONTACTOS DE EMERGENCIA
function callEmergency(number) {
    if (confirm(`¿Deseas llamar al ${number}?\n\nNota: En un entorno real, esto marcaría el número de emergencia.`)) {
        alert(`📞 LLAMANDO AL ${number}...\n\nEn una aplicación real, se abriría el marcador telefónico automáticamente.`);
        // En app real: window.location.href = `tel:${number}`;
    }
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', function() {
    console.log('📱 App Integrada de Emergencia y Salud Escolar cargada');
    console.log('Procedimientos de emergencia:', Object.keys(procedures).length);
    console.log('Protocolos de salud:', Object.keys(healthProtocols).length);
    console.log('Prácticas en historial:', practiceHistory.length);
});