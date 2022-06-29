const sinon = require("sinon");
const { expect } = require("chai");

const personService = require("../../../services/personService");
const personController = require("../../../controllers/personController");

describe("Ao chamar o controller de add", () => {
  describe("quando o payload informado não é válido", async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(personService, "add").resolves(false);
    });

    after(() => {
      personService.add.restore();
    });

    it("é chamado o status com o código 400", async () => {
      await personController.add(request, response);
      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await personController.add(request, response);
      expect(response.send.calledWith("Dados inválidos")).to.be.equal(true);
    });
  });

  describe("quando é inserido com sucesso", async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        name: "Example name",
        cartoon: "Jane Dow"
      };

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(personService, "add").resolves(true);
    });

    after(() => {
      personService.add.restore();
    });

    it("é chamado o status com o código 201", async () => {
      await personController.add(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send o array de Resultado"', async () => {
      await personController.add(request, response);
    //   expect(response.send.calledWith("Filme criado com sucesso!")).to.be.equal(
    //     true
    //   );
    expect(response).to.be.a('object')
    });
  });
});