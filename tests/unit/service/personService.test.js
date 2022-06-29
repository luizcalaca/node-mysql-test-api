const sinon = require('sinon');
const { expect } = require('chai');

const personModel = require('../../../model/personModel')
const personService = require('../../../services/personService');

describe('Insere um novo person no BD', () => {
  describe('quando o payload informado não é válido', () => {
    const payloadperson = {};
    it("retorna um boolean", async () => {
      const response = await personService.add(payloadperson);
      expect(response).to.be.a("boolean");
    });

    it('o boolean contém "false"', async () => {
      const response = await personService.add(payloadperson);
      expect(response).to.be.equal(false);
    });
  });

  describe('quando é inserido com sucesso', () => {
    const payloadperson = {
      name: 'Jane Dow',
      cartoon: 'Test',
    };

    before(() => {
      const ID_EXAMPLE = 1;
      sinon.stub(personModel, 'add')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      personModel.add.restore();
    });

    it('retorna um objeto', async () => {
      const response = await personService.add(payloadperson);
      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo person inserido', async () => {
      const response = await personService.add(payloadperson);
      expect(response).to.have.a.property('id');
    });
  });
});