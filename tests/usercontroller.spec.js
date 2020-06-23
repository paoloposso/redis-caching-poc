const { app } = require('../app');
const supertest = require('supertest');
const request = supertest(app);
const User = require('../infrastructure/db/mongo/model/user-model');

const { connectToMongoDb } = require('../infrastructure/db/mongo/mongo-connect');

connectToMongoDb('userstestjest');

jest.setTimeout(30000);

beforeAll(() => {
    User.deleteMany({"name": "John"}).then(res => console.log(`delete ${res.deletedCount} users`));
});

describe('Sample Test', () => {   

    it('should insert user John', async (done) => {

        const res = await request.post('/user').send({
            "name": "John",
            "email": "john@gmail.com",
            "document": "01234567890",
            "addresses": [
                {
                    "street": "test avenue",
                    "number": "880",
                    "city": "Sao Paulo",
                    "country": "Brazil",
                    "zipCode": "012345789"
                }
            ]
        });

        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual('John');

        done();
    });

    it('should get name validation error', async (done) => {

        const res = await request.post('/user').send({
            "email": "john@gmail.com",
            "document": "01234567890",
            "addresses": [
                {
                    "street": "test avenue",
                    "number": "880",
                    "city": "Sao Paulo",
                    "country": "Brazil",
                    "zipCode": "012345789"
                }
            ]
        });

        expect(res.statusCode).toEqual(500);

        done();
    });

    it('should list all users', async (done) => {
        const res = await request.get('/users/all');

        expect(res.body.length > 0).toBeTruthy();

        done();
    });
});

afterAll(async done => {
    done();
});