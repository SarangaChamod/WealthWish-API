import { doublePrecision, integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const cashExpenses = pgTable("cashExpenses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  amount: doublePrecision().notNull(),
  category: varchar({ length: 255 }).notNull(),
  note: varchar({ length: 255 }).notNull(),
  type: varchar({ length: 255 }),
  date: timestamp("event_date_time").defaultNow().notNull(),
});
