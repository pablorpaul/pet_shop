const RepositorieUsuario = require("../repositories/atendente");

const repositorio = new RepositorieUsuario()

class ServicoUsuario{

    Login(email, senha) {
        if(!email || !senha){
            throw new Error('Envie todas as informações')
        }

        return repositorio.Login(email, senha)
    }

    async PegarUmPorEmail(email) {
        return repositorio.PegarUmPorEmail(email)
    }

    async Add(atendente, transaction) {
    
        return repositorio.AdicionarUsuario({...atendente, permissao: 2}, transaction);
    }

    async Update(id, atendente) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do atendente para alterar');
        }
 
        return repositorio.UpdateUsuario(id, atendente);
    }

    async Delete(id) {
        return repositorio.DeletarUsuario(id);

    }

} 

module.exports = ServicoUsuario