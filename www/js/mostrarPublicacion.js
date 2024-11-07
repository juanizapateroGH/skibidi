document.addEventListener('DOMContentLoaded', function() {
    // Obtener los equipos almacenados en localStorage
    const teams = JSON.parse(localStorage.getItem('teams')) || [];

    // Seleccionar el elemento <tbody> que contendrá las filas de los equipos
    const tableBody = document.querySelector('table tbody');

    // Verificar si hay equipos guardados
    if (teams.length === 0) {
        // Si no hay equipos, mostrar un mensaje indicando que no hay datos
        const emptyRow = document.createElement('tr');
        emptyRow.innerHTML = `
            <td colspan="5" class="py-4 text-center text-gray-700">No hay equipos guardados.</td>
        `;
        tableBody.appendChild(emptyRow);
        return;
    }

    // Crear y agregar las filas para cada equipo
    teams.forEach(team => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td class="py-2 pl-6 border-b border-gray-200">${team.players}</td>
            <td class="py-2 pl-6 border-b border-gray-200">${team.name}</td>
            <td class="py-2 pl-6 border-b border-gray-200">${team.fieldType}</td>
            <td class="py-2 pl-6 border-b border-gray-200">0</td> <!-- Puedes cambiar "0" por puntos reales si los tienes -->
            <td class="py-2 border-b border-gray-200 text-center">
                <button class="py-2 px-4 bg-green-400 text-white font-bold uppercase text-sm">DESAFIAR</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
});
