const datos = {
    nombre: '',
    apellido: '',
    mail: '',
    cantidad: '',
    categoria: '',
    total: 0
};

const precio = 200;

const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const mail = document.querySelector('#mail');
const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria');
const formulario = document.querySelector('.formulario');
const monto = document.querySelector("#monto");

nombre.addEventListener('focusout', function (event) {
    datos.nombre = event.target.value;
    console.log(event.target.value);
});

apellido.addEventListener('focusout', function (event) {
    datos.apellido = event.target.value;
    console.log(event.target.value);
});

mail.addEventListener('focusout', function (event) {
    datos.mail = event.target.value;
    console.log(event.target.value)
});

cantidad.addEventListener('focusout', function (event) {
    datos.cantidad = event.target.value;
    console.log(event.target.value);
    if (datos.categoria != "" && datos.cantidad > 0) {
        let descuento;
        switch (datos.categoria) {
            case "estudiante":
                descuento = 0.2;
                break;
            case "trainee":
                descuento = 0.5;
                break;
            case "junior":
                descuento = 0.85;
                break;
            default:
                descuento = 1;
                break;
        }
        datos.total = precio * descuento * datos.cantidad * 1.00
        monto.textContent = `Total a pagar: $${datos.total},00`;
    }

});

categoria.addEventListener('focusout', function (event) {
    datos.categoria = event.target.value;
    console.log(event.target.value);
    if (cantidad.value > 0) {
        let descuento;
        switch (datos.categoria) {
            case "estudiante":
                descuento = 0.2;
                break;
            case "trainee":
                descuento = 0.5;
                break;
            case "junior":
                descuento = 0.85;
                break;
            default:
                descuento = 1;
                break;
        }
        datos.total = precio * descuento * datos.cantidad * 1.00
        monto.textContent = `Total a pagar: $${datos.total},00`;
    }
});


formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const msjP1 = `Muchas gracias ${datos.nombre} ${datos.apellido}! Se le enviará a:
${datos.mail} `
    const msjUna = `la factura por su entrada.`
    const msjVarias = `la factura por sus ${datos.cantidad} entradas.`
    const msjCond = `\nRecuerde presentar la documentación que avale su condición de ${datos.categoria}.`
    if (datos.categoria == "otro") {
        if (datos.cantidad == 1) {
            alert(msjP1 + msjUna)
        }
        else {
            alert(msjP1 + msjVarias)
        }
    }
    else {
        if (datos.cantidad == 1) {
            alert(msjP1 + msjUna + msjCond)
        }
        else {
            alert(msjP1 + msjVarias + msjCond)
        }
    }
    window.location.href = "/index.html";
})