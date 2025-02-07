import { Router } from "express";
import {
  incomeList,
  getIcomeId,
  createIncome,
  updateIncome,
  deleteIncome,
} from "../../../controllers/cashTransaction/incomes";

const route = Router();

route.get("/", incomeList);
route.get("/:id", getIcomeId);
route.post("/", createIncome);
route.put("/", updateIncome);
route.delete("/", deleteIncome);

export default route;