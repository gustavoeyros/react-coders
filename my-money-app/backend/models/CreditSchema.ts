import { Schema, model } from "mongoose";

interface ICreditSchema {
  name: String;
  value: Number;
}

interface IDebtSchema {
    name: String;
    value: Number;
    status: String
}

interface IBillingCycleSchema {
    name: String,
    month: Number,
    year: Number,
    credits: ICreditSchema[],
    debts: IDebtSchema[],
}

const creditSchema = new Schema<ICreditSchema>({
  name: {type: String, required: true},
  value: {type: Number, min:0, required: true}
});

const debtSchema = new Schema<IDebtSchema>({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true},
    status: {type: String, require: false, enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

const billingCycleSchema = new Schema<IBillingCycleSchema>({
    name: {type: String, required: true},
    month: {type: Number, min: 1, max: 12, required: true},
    year: {type: Number, min: 1970, max: 2100, required: true},
    credits: [creditSchema],
    debts: [debtSchema]
})

const BillingSchema = model<IBillingCycleSchema>("User", billingCycleSchema);

export default BillingSchema;