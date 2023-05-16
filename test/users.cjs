const request = require('supertest');
require("dotenv").config();

const TOKEN = process.env.USER_TOKEN;
console.log(`token is ${TOKEN}`);
const url = 'https://gorest.co.in/public/v2/';

describe('Users', () => {
    it('GET /users', () => {
        request(url)
            .get(`users?access-token=${TOKEN}`).end((err,res) => {
                console.log(res.body)
                console.log(err);
            });
    });
});