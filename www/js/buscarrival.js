fetch('/api/equipos') // Asegúrate de definir esta ruta en tu servidor
    .then(response => response.json())
    .then(data => {
        const tbody = document.querySelector('tbody');
        data.forEach(equipo => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${equipo.nombre}</td>
                <td>${equipo.numero_participante}</td>
                <td>${equipo.tipo_cancha}</td>
                <td><button class="py-2 px-4 bg-green-400 text-white font-bold uppercase text-sm">DESAFIAR</button></td>
            `;
            tbody.appendChild(row);
        });
    })
    .catch(error => console.error('Error:', error));
