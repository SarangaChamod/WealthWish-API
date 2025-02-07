import { Request, Response } from 'express';

export function expensesList(req: Request, res: Response){
    res.send('Hello, expensesList');
}
export function getExpensesId(req: Request, res: Response){
    res.send('Hello, getExpenses');
}
export function createExpenses(req: Request, res: Response){
    res.send('Hello, createExpenses');
}
export function updateExpenses(req: Request, res: Response){
    res.send('Hello, updateExpenses');
}
export function deleteExpenses(req: Request, res: Response){
    res.send('Hello, deleteExpenses');
}