const Joi = require('joi');
const books = require('../files/books');

const orderSchema = Joi.object().options({ abortEarly: false }).keys({
  order: Joi.array().min(1).items(Joi.object().keys({
    id: Joi.number().valid(books.map(book => book.id)).required(),
    quantity: Joi.number().min(1).required(),
    title:Joi.string(),
    author:Joi.string(),
    cover_url:Joi.string(),
    pages: Joi.number(),
    price: Joi.number(),
    currency: Joi.string()
  })).required(),
  first_name: Joi.string().required().min(4).max(50),
  last_name: Joi.string().required().min(5).max(50),
  email: Joi.string().required().email().max(100),
  phone_number: Joi.string().required().min(5).max(889999999),
  address: Joi.string().required(),
  city: Joi.string().required(),
  zip_code: Joi.string().required()
  //.regex(/\d{2}-\d{3}/),
});

module.exports = orderSchema;
