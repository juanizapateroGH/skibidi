const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3000;

// Configuración de la sesión
app.use(session({
    secret: 'mi_secreto',
    resave: false,
    saveUninitialized: true,
}));

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users_db'
});

// Conectar a la base de datos
db.connect(err => {
    if (err) {
        console.error('Conexión fallida:', err);
        return;
    }
    console.log('Conectado a la base de datos');
});

// Middleware para verificar la sesión
app.use((req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login');
    }
    next();
});

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
