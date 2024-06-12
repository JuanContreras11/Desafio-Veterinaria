const fs = require('fs');

// Función para registrar una nueva cita
function registrar(nombre, edad, tipo, color, enfermedad) {
    // Leer el archivo citas.json
    fs.readFile('citas.json', 'utf-8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo', err);
            return;
        }
        
        let citas;
        try {
            citas = JSON.parse(data);
        } catch (error) {
            // Si hay un error en el parseo, inicializar citas como un arreglo vacío
            citas = [];
        }

        // Crear una nueva cita
        const nuevaCita = { nombre, edad, tipo, color, enfermedad };

        // Agregar la nueva cita al arreglo
        citas.push(nuevaCita);

        // Guardar el nuevo arreglo en citas.json
        fs.writeFile('citas.json', JSON.stringify(citas, null, 2), (err) => {
            if (err) {
                console.error('Error al escribir en el archivo', err);
                return;
            }
            console.log('Cita registrada exitosamente');
        });
    });
}

// Función para leer todas las citas
function leer() {
    // Leer el archivo citas.json
    fs.readFile('citas.json', 'utf-8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo', err);
            return;
        }

        let citas;
        try {
            citas = JSON.parse(data);
        } catch (error) {
            // Si hay un error en el parseo, inicializar citas como un arreglo vacío
            citas = [];
        }

        // Mostrar las citas en la consola
        console.log('Citas registradas:');
        console.log(citas);
    });
}

// Exportar las funciones
module.exports = { registrar, leer };
