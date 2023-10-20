const RepositorieUsuario = require("../repositories/usuario");

const repositorio = new RepositorieUsuario()

class ServicoUsuario{
    
    VerificarUsuario(usuario) {
        if(!usuario){
            throw new Error('Não foi enviada o usuario para adicionar');
        } else if(!usuario.email){
            throw new Error('Não foi enviado o nome do usuario');
        } else if(!usuario.senha){
            throw new Error('Não foi enviado o telefone do usuario');
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

    async Add(usuario, transaction) {
        this.VerificarUsuario(usuario)

        return repositorio.Add(usuario, transaction);
    }

    async Update(id, usuario, transaction) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do usuario para alterar');
        } 
        this.VerificarUsuario(usuario)

        return repositorio.Update(id, usuario, transaction);
    }

    async Delete(id, transaction) {
        return repositorio.Delete(id, transaction);
    }

} 

module.exports = ServicoUsuario