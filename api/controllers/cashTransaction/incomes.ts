import { Request, Response } from 'express';

export function incomeList(req: Request, res: Response){
    res.send('Hello, incomeList');
}
export function getIcomeId(req: Request, res: Response){
    res.send('Hello, getIcome');
}
export function createIncome(req: Request, res: Response){
    res.send('Hello, createIncome');
}
export function updateIncome(req: Request, res: Response){
    res.send('Hello, updateIncome');
}
export function deleteIncome(req: Request, res: Response){
    res.send('Hello, deleteIncome');
}