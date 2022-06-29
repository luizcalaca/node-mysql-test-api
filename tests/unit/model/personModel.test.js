const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../helpers/connection');
const personModel = require('../../../model/personModel');

describe('Insere um novo person no BD', () => {

  const payloadperson = {
     name: 'Example Name',
     cartoon: 'Jane Cartoon',
  };

      before(async () => {
        const execute = [{ insertId: 1 }]; // retorno esperado nesse teste
        sinon.stub(connection, 'execute').resolves(execute);
      });

      // Restauraremos a função `execute` original após os testes.
      after(async () => {
        connection.execute.restore();
      });

   describe('quando é inserido com sucesso', () => {

     it('retorna um objeto', async () => {
       const response = await personModel.add(payloadperson);
       expect(response).to.be.a('object');
     });

     it('tal objeto possui o "id" do novo person inserido', async () => {
       const response = await personModel.add(payloadperson);
       expect(response).to.have.a.property('id');
     });

   });


});