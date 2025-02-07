import { Router } from "express";
import expensesRoutes from "./expenses";
import incomesRoutes from "./incomes";

const route = Router();

route.use("/expenses", expensesRoutes);
route.use("/incomes", incomesRoutes);

export default route;