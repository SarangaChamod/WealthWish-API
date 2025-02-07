import * as cashIncomeSchema from './cashIncomeSchema';
import * as cashExpensesSchema from './cashExpensesSchema';

export default {
  ...cashIncomeSchema,
  ...cashExpensesSchema,
};