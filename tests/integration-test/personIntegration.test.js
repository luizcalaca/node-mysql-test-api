const request = require('supertest')
const app = require('../../index')

test('Shoud list all people from list',  () => {
     request(app).get('/person').then( (res) => {
        expect(res.status).toBe(200)
        expect(res.body.length).toBeGreaterThan(0)
    })
})

test('Should insert a new person', () => {   
    request(app).post('/person')
        .send({name: 'Luiz', age: 20})
        .then((res) => {
            expect(res.status).toBe(201)
            expect(res.body.name).toBe('Luiz')
    })
})