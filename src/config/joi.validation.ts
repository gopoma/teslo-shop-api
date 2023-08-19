import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  PORT: Joi.number().required(),
  DB_HOST: Joi.required(),
  DB_PORT: Joi.number().required(),
  DB_NAME: Joi.required(),
  DB_USERNAME: Joi.required(),
  DB_PASSWORD: Joi.required(),
});
