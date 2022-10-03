import { categorySchema } from "../schemas/category.schema.js";

function categoriesMiddleware(req, res, next) {
    const { name } = req.body;

    const categoryValidation = categorySchema.validate(req.body, {abortEarly: false});

    if (categoryValidation.error) {
       const messages = categoryValidation.error.details.map(detail => detail.message);

       return res.status(422).send(messages);
    };

    res.locals.name = name;

    next();
};

export { categoriesMiddleware };