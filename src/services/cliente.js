const RepositorieCliente = require("../repositories/cliente");

const repositorio = new RepositorieCliente()

class ServicoCliente{
    
    VerficarCliente(cliente) {
        if(!cliente){
            throw new Error('Não foi enviada o cliente para adicionar');
        } else if(!cliente.nome){
            throw new Error('Não foi enviado o nome do cliente');
        } else if(!cliente.telefone){
            throw new Error('Não foi enviado o telefone do cliente');
        }

        return true
    }

    Login(email, senha) {
        if(!email || !senha){
            throw new Error('Envie todas as informações')
        }

        return repositorio.Login(email, senha)
    }

    async PegarUmPorEmail(email) {
        return repositorio.PegarUmPorEmail(email)
    }

    async PegarUm(id, transaction) {
        return repositorio.PegarUm(id, transaction);
    }

    async PegarTodos() {
        return repositorio.PegarTodos();
    }

    async Add(cliente, transaction) {
        this.VerficarCliente(cliente)

        return repositorio.Add(cliente, transaction);
    }

    async Update(id, cliente, transaction) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do cliente para alterar');
        } 
        this.VerficarCliente(cliente)

        return repositorio.Update(id, cliente, transaction);
    }

    async Delete(id, transaction) {
        return repositorio.Delete(id, transaction);
    }

} 

module.exports = ServicoCliente