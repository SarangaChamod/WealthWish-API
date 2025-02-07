import { Router } from "express";
import {
  expensesList,
  getExpensesId,
  createExpenses,
  updateExpenses,
  deleteExpenses,
} from "../../../controllers/cashTransaction/expenses";

const route = Router();

route.get("/", expensesList);
route.get("/:id", getExpensesId);
route.post("/", createExpenses);
route.put("/", updateExpenses);
route.delete("/", deleteExpenses);


export default route;
