// Array de paradas de transporte público

const puntosTransportePublico = [
    {
        nombre: 'Estación Camaño',
        latitud: 18.486001,
        longitud: -69.857238,
        horaSalida: '8:00 AM',
        tipoTransporte: 'Autobús'
    },
    {
        nombre: 'Estación Pedro Mir',
        latitud: 18.479166,
        longitud: -69.886257,
        horaSalida: '9:30 AM',
        tipoTransporte: 'Metro'
    },
    {
        nombre: 'Estación Minerba',
        latitud: 18.482709,
        longitud: -69.838294,
        horaSalida: '10:45 AM',
        tipoTransporte: 'Autobús'
    },
    {
        nombre: 'Estación Duarte',
        latitud: 18.481813,
        longitud: -69.933070,
        horaSalida: '12:00 PM',
        tipoTransporte: 'Autobús'
    },
    {
        nombre: 'Estación Sanchez',
        latitud: 18.483647,
        longitud: -69.919324,
        horaSalida: '1:15 PM',
        tipoTransporte: 'Metro'
    },
    {
        nombre: 'Estación Mella',
        latitud: 18.481029,
        longitud: -69.887706,
        horaSalida: '2:30 PM',
        tipoTransporte: 'Autobús'
    },
    {
        nombre: 'Estación Luperon',
        latitud: 18.492790,
        longitud: -69.899994,
        horaSalida: '3:45 PM',
        tipoTransporte: 'Metro'
    },
    {
        nombre: 'Estación Miranda',
        latitud: 18.474891,
        longitud: -69.883505,
        horaSalida: '5:00 PM',
        tipoTransporte: 'Autobús'
    },
    {
        nombre: 'Estación Padre Abreu',
        latitud: 18.441731,
        longitud: -68.960319,
        horaSalida: '7:00 AM',
        tipoTransporte: 'Autobús'
    },
    {
        nombre: 'Estación Santa Rosa',
        latitud: 18.428049,
        longitud: -68.968139,
        horaSalida: '8:30 AM',
        tipoTransporte: 'Metro'
    },
    {
        nombre: 'Estación Villa Hermosa',
        latitud: 18.433089,
        longitud: -68.967035,
        horaSalida: '10:00 AM',
        tipoTransporte: 'Autobús'
    },
    {
        nombre: 'Estación La Aviación',
        latitud: 18.430680,
        longitud: -68.965500,
        horaSalida: '11:15 AM',
        tipoTransporte: 'Metro'
    },
    {
        nombre: 'Estación Central Romana',
        latitud: 18.427604,
        longitud: -68.972537,
        horaSalida: '12:30 PM',
        tipoTransporte: 'Autobús'
    }
];

let map;

function initMap() {
    // Inicializar el mapa de Google
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 18.486001, lng: -69.857238 },
        zoom: 13
    });

    // Agregar marcadores en el mapa
    puntosTransportePublico.forEach((punto) => {
        const marker = new google.maps.Marker({
            position: { lat: punto.latitud, lng: punto.longitud },
            map: map,
            title: punto.nombre
        });

        // Agregar evento click a los marcadores
        marker.addListener('click', () => {
            mostrarInformacion(punto);
        });
    });

    // Mostrar la lista de puntos en el sidebar
    const pointListElement = document.getElementById('point-list');
    puntosTransportePublico.forEach((punto) => {
        const listItem = document.createElement('li');
        listItem.textContent = punto.nombre;
        listItem.addEventListener('click', () => {
            mostrarInformacion(punto);
        });
        pointListElement.appendChild(listItem);
    });
}

// Función para mostrar la información del punto seleccionado
function mostrarInformacion(punto) {
    const infoElement = document.getElementById('info');
    infoElement.style.display = "flex"
    infoElement.innerHTML = `
    <div class="cartaInfo">
      <h3 class="stopName">${punto.nombre}</h3>
      <p class="stopHour"><strong>Hora de Salida:</strong> ${punto.horaSalida}</p>
      <p class="stopType"><strong>Tipo de Transporte:</strong> ${punto.tipoTransporte}</p>
      <button id= "botonCierre" >cerrar</button>
      </div>
    `;
    
    const botonCierre = document.getElementById('botonCierre');
    botonCierre.addEventListener('click', () => {
        infoElement.style.display = "none"
    });
}

