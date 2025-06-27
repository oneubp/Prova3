import { Request, Response } from 'express';
import Reserva from '../models/Reserva';

export const criarReserva = async (req: Request, res: Response) => {
  try {
    const novaReserva = await Reserva.create(req.body);
    res.redirect('/');
  } catch (error) {
    console.error("Erro ao criar reserva:", error);
    res.status(500).send('Erro ao criar reserva');
  }
};

export const listarReservas = async (req: Request, res: Response) => {
  try {
    const reservas = await Reserva.find();
    console.log("Reservas encontradas:", reservas);
    res.render('index', { reservas });
  } catch (error) {
    console.error("Erro ao listar reservas:", error);
    res.status(500).send('Erro ao listar reservas');
  }
};

export const atualizarReserva = async (req: Request, res: Response) => {
  try {
    await Reserva.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
  } catch (error) {
    console.error("Erro ao atualizar reserva:", error);
    res.status(500).send('Erro ao atualizar reserva');
  }
};

export const deletarReserva = async (req: Request, res: Response) => {
  try {
    await Reserva.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (error) {
    console.error("Erro ao deletar reserva:", error);
    res.status(500).send('Erro ao deletar reserva');
  }
};