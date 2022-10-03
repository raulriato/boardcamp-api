import joi from 'joi';

const customerSchema = joi.object({
    name: joi.string().trim().required(),
    phone: joi.string().trim().required(),
    cpf: joi.string().trim().required(),
    birthday: joi.string.trim().required()
});

export { customerSchema };