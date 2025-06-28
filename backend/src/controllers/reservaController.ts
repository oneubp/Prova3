import { Request, Response } from 'express';
import Reserva from '../models/Reserva';

// Criação da reserva (ignora id caso venha do formulário)
export const criarReserva = async (req: Request, res: Response) => {
  try {
    const { id, ...dados } = req.body;
    const novaReserva = await Reserva.create(dados);
    res.redirect('/?mensagem=Reserva criada com sucesso');
  } catch (error) {
    console.error("Erro ao criar reserva:", error);
    res.status(500).send('Erro ao criar reserva');
  }
};

// Listagem das reservas
export const listarReservas = async (req: Request, res: Response) => {
  try {
    const reservas = await Reserva.find();
    const mensagem = req.query.mensagem as string | undefined;
    res.render('index', { reservas, mensagem });
  } catch (error) {
    console.error("Erro ao listar reservas:", error);
    res.status(500).send('Erro ao listar reservas');
  }
};

// Atualização da reserva
export const atualizarReserva = async (req: Request, res: Response) => {
  try {
    await Reserva.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/?mensagem=Reserva atualizada com sucesso');
  } catch (error) {
    console.error("Erro ao atualizar reserva:", error);
    res.status(500).send('Erro ao atualizar reserva');
  }
};

// Exclusão da reserva
export const deletarReserva = async (req: Request, res: Response) => {
  try {
    await Reserva.findByIdAndDelete(req.params.id);
    res.redirect('/?mensagem=Reserva excluída com sucesso');
  } catch (error) {
    console.error("Erro ao deletar reserva:", error);
    res.status(500).send('Erro ao deletar reserva');
  }
};
