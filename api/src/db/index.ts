import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { cashExpenses } from "./cashExpensesSchema";
import { cashIncome } from "./cashIncomeSchema";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});
export const db = drizzle(pool);

export { cashExpenses, cashIncome };
