import express from 'express';
import productosRoutes from './routes/productos.routes.js';
import ventasRoutes from './routes/ventas.routes.js';
import userRoutes from './routes/user.routes.js'; // ✅ NUEVO
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/productos', productosRoutes);
app.use('/ventas', ventasRoutes);
app.use('/user', userRoutes); // ✅ NUEVO

app.get('/', (req, res) => {
  res.redirect('/pages/home.html');
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
