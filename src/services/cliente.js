const { where } = require("sequelize");
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

    async PegarUmPorEmail(email) {
        return repositorio.PegarUmPorEmail(email)
    }

    async PegarUm(id, transaction) {
        return repositorio.PegarUm(id, transaction);
    }

    async PegarTodos() {
        return repositorio.PegarTodos();
    }

    async Add(cliente, userid, transaction) {
        this.VerficarCliente(cliente)

        return repositorio.Add(cliente, userid, transaction);
    }

    async Update(id, cliente, userid, transaction) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do cliente para alterar');
        } 
        this.VerficarCliente(cliente)

        return repositorio.Update(id, cliente, userid, transaction);
    }

    async Delete(id, transaction) {
        return repositorio.Delete(id, transaction);
    }

    async AdicionarUsuario(usuario){
        
        if(!usuario.email) {
            throw new Error("Favor preencher o email.")
        } else if(!usuario.senha) {
            throw new Error("Favor preencher a senha.")
        }
  
        return repositorio.AdicionarUsuario({...usuario, permissao: 1})
    }

    async AtualizarUsuario(usuario, id){
        
        if(!usuario.email) {
            throw new Error("Favor preencher o email.")
        } else if(!usuario.senha) {
            throw new Error("Favor preencher a senha.")
        }
  
        return repositorio.AtualizarUsuario({...usuario, permissao: 1}, id)
    }

    async DeletarUsuario(id){
        
        if(!id) {
            throw new Error("Favor fornecer o id.")
        }
  
        return repositorio.DeletarUsuario(id)
    }

} 

module.exports = ServicoCliente