const request = require('supertest');
const chai = require('chai');
require("dotenv").config();

const expect = chai.expect;
const TOKEN = process.env.USER_TOKEN;

const url = 'https://gorest.co.in/public/v2/';

describe('Users', () => {
    it('GET /users', () => {
   
        return request(url)
            .get(`users?access-token=${TOKEN}`).then((res) => {
                expect(res.body.data).to.not.be.null;
            });
    });

    it('GET /users/:id', () => {
        return request(url)
        .get(`users/1132?access-token=${TOKEN}`).then((res) => {
           expect(res.body.id).to.be.eql(1132);
          // expect(res.body).to.be.an('object');
          //console.log(res.body)
        });
    })
});