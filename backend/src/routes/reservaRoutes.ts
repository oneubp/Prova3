import express from 'express';
import { criarReserva, listarReservas, atualizarReserva, deletarReserva } from '../controllers/reservaController';

const router = express.Router();

router.get('/', listarReservas);
router.post('/reserva', criarReserva);
router.post('/reserva/:id', atualizarReserva);
router.post('/reserva/delete/:id', deletarReserva);
router.post('/reserva/update/:id', atualizarReserva);

export default router;