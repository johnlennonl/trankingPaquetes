const envios = [
    {
        numeroDeGuia: '123456789',
        estatus: 'En tránsito 🚚',
        fechas: {
            envio: '2024-01-10',
            estimadaEntrega: '2024-01-17'
        }
    },
    {
        numeroDeGuia: '987654321',
        estatus: 'Entregado ✅',
        fechas: {
            envio: '2024-02-15',
            entrega: '2024-02-20'
        }
    },
    {
        numeroDeGuia: '1122334455',
        estatus: 'En espera ⏱️',
        fechas: {
            envio: '2024-03-01',
            estimadaEntrega: '2024-03-10'
        }
    },
    {
        numeroDeGuia: '5566778899',
        estatus: 'Devuelto 🔄',
        fechas: {
            envio: '2024-04-05',
            devolucion: '2024-04-08'
        }
    },
    {
        numeroDeGuia: '6677889900',
        estatus: 'En camino 🚚 ',
        fechas: {
            envio: '2024-05-12',
            estimadaEntrega: '2024-05-19'
        }
    },
    {
        numeroDeGuia: '7788990011',
        estatus: 'En aduana 🏢',
        fechas: {
            envio: '2024-06-20',
            estimadaEntrega: '2024-06-27'
        }
    },
    {
        numeroDeGuia: '8899001122',
        estatus: 'En almacén 📦',
        fechas: {
            envio: '2024-07-01',
            estimadaEntrega: '2024-07-08'
        }
    },
    {
        numeroDeGuia: '9900112233',
        estatus: 'En preparación 📥',
        fechas: {
            envio: '2024-08-15',
            estimadaEntrega: '2024-08-22'
        }
    },
    {
        numeroDeGuia: '1011121314',
        estatus: 'Recogido ✅',
        fechas: {
            envio: '2024-09-10',
            estimadaEntrega: '2024-09-17'
        }
    },
    {
        numeroDeGuia: '1112131415',
        estatus: 'Cancelado ❌',
        fechas: {
            envio: '2024-10-01',
            cancelacion: '2024-10-03'
        }
    }
];

document.getElementById('tracking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const trackingNumber = document.getElementById('tracking-number').value;
    rastrearPaquete(trackingNumber);
});

function rastrearPaquete(numeroDeSeguimiento) {
    const envio = envios.find(envio => envio.numeroDeGuia === numeroDeSeguimiento);
    if (envio) {
        mostrarResultadoSeguimiento(envio);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No hay información de seguimiento disponible.'
        });
    }
}

function mostrarResultadoSeguimiento(envio) {
    Swal.fire({
        title: 'Resultados del Seguimiento',
        html: ` <div class="text-center"> 
            <p>Número de Guía: ${envio.numeroDeGuia}</p>
            <p>Estado: ${envio.estatus}</p>
            <p>Fecha de Envío: ${envio.fechas.envio}</p>
            ${envio.fechas.estimadaEntrega ? `<p>Entrega Estimada: ${envio.fechas.estimadaEntrega}</p>` : ''}
            ${envio.fechas.entrega ? `<p>Fecha de Entrega: ${envio.fechas.entrega}</p>` : ''}
            ${envio.fechas.devolucion ? `<p>Fecha de Devolución: ${envio.fechas.devolucion}</p>` : ''}
            ${envio.fechas.cancelacion ? `<p>Fecha de Cancelación: ${envio.fechas.cancelacion}</p>` : ''}
        </div>`,
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/011/190/268/non_2x/international-shipping-online-delivery-service-concept-logistics-fast-delivery-truck-with-boxes-unloading-courier-flat-illustration-vector.jpg',
        imageWidth: 400,
        imageHeight: 250,
        confirmButtonText: 'OK',
        customClass: {
            confirmButton: 'buttonSweetAlert',
            imageUrl: 'imageSweetAlert'
        }

    });
}
