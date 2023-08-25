import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  PORT: Joi.number().required(),
  HOST_API: Joi.string().uri().required(),
  JWT_SECRET: Joi.string().not().empty().required(),
  DB_HOST: Joi.string().not().empty().required(),
  DB_PORT: Joi.number().required(),
  DB_NAME: Joi.string().not().empty().required(),
  DB_USERNAME: Joi.string().not().empty().required(),
  DB_PASSWORD: Joi.string().not().empty().required(),
});
