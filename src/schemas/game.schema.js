import joi, { number } from 'joi';

const gameSchema = joi.object({
    name: joi.string().trim().required(),
    image: joi.string().uri(),
    stockTotal: joi.number().greater(0).required(),
    categoryId: joi.number().greater(0).required(),
    pricePerDay: joi.number().greater(0).required()
});

export { gameSchema };