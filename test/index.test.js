const { describe, expect, it, beforeAll, afterAll } = require('@jest/globals')
const ServicoCliente = require("../src/services/cliente")
const conexao = require('../src/database')

describe('Testes clientes', () => {

   beforeAll(async () => {
      this.save = await conexao.transaction()
   })
   afterAll(async () => {
      this.save.rollback()
   })

   const servico = new ServicoCliente()
   
   it('Should get person', async () => {
      const result = await servico.PegarUm(1, this.save)

      expect(result.id).toBe(1);
      expect(result.nome).toBe('joao');
      expect(result.telefone).toBe('teste@teste.com');
   })

   it('Should create a person', async () => {
      const result = await servico.Add({
         nome: 'joao',
         telefone: 'teste2@teste.com'
      }, this.save)

      expect(result.nome).toBe('joao');
      expect(result.telefone).toBe('teste2@teste.com');
   })
})