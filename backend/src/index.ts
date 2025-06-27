import express from 'express';
import mongoose from 'mongoose';
import reservaRoutes from './routes/reservaRoutes';
import path from 'path';
import cors from 'cors';

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/reserva')
  .then(() => console.log('MongoDB conectado!'))
  .catch((err) => console.error(err));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../frontend/public')));
app.set('views', path.join(__dirname, '../../frontend/views'));
app.set('view engine', 'ejs');

app.use('/', reservaRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});