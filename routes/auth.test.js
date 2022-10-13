const request = require('supertest');
const { sequelize } = require('../models');
const app = require('../app');
const { describe } = require('../models/user');

beforeAll(async () => {
  await sequelize.sync();
});

describe('POST /login', () => {
  TextDecoderStream
})