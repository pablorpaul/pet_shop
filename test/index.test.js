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
      expect(result.nome).toBe('João da Silva');
      expect(result.telefone).toBe('9999-9999');
   })

   it('Should create a person', async () => {
      const result = await servico.Add({
         nome: 'Jorge',
         telefone: '9999-9932'
      }, this.save)

      expect(result.nome).toBe('Jorge');
      expect(result.telefone).toBe('9999-9932');
   })

   it('Should delete a person', async () => {
      const result = await servico.Delete({
         id: 5
      }, this.save)

      expect(result).toBe(0)
   })
})