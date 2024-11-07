document.getElementById('teamForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado (enviar el formulario)

    // Obtener los valores de los campos
    const teamName = document.getElementById('teamName').value;
    const players = document.getElementById('players').value;
    const fieldType = document.getElementById('fieldType').value;

    // Crear un objeto para el equipo
    const newTeam = {
        name: teamName,
        players: players,
        fieldType: fieldType,
        date: new Date().toLocaleString() // Fecha y hora actual
    };

    // Obtener los equipos almacenados previamente o crear una lista nueva
    const teams = JSON.parse(localStorage.getItem('teams')) || [];

    // Agregar el nuevo equipo al arreglo
    teams.push(newTeam);

    // Guardar el arreglo de equipos en el almacenamiento local
    localStorage.setItem('teams', JSON.stringify(teams));

    // Limpiar los campos del formulario
    document.getElementById('teamForm').reset();

    // Verificar si la redirección funciona
    console.log("Equipo guardado y redirigiendo...");

    // Redirigir a publicaciones.html
    window.location.href = 'mostrarEquipos.html'; // Verifica que la ruta sea correcta
});
