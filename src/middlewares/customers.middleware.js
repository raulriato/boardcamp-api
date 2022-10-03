import { customerSchema } from "../schemas/customer.schema.js";

function customersMiddleware(req, res) {
    const customer = req.body;

    const customerValidation = customerSchema.validate(customer, {abortEarly: false});

    if (customerValidation.error) {
        const messages = customerValidation.error.details.map(detail => detail.message);
        return res.status(422).send(messages);
    };

    res.locals.customer = customer;
    next();
}