const RepositorieAtendimento = require("../repositories/atendimento");

const repositorio = new RepositorieAtendimento()

class ServicoAtendimento{
    
    VerficarCliente(atendimento) {
        if(!atendimento){
            throw new Error('Não foi enviada o atendimento para adicionar');
        } else if(!atendimento.data){
            throw new Error('Não foi enviado o dia e hora do atendimento');
        } else if(!atendimento.valor){
            throw new Error('Não foi enviado o valor do atendimento');
        } else if(atendimento.concluido == null){
            throw new Error('Não foi enviado o estado do atendimento');
        }

        return true
    }

    async PegarUm(id, transaction) {
        return repositorio.PegarUm(id, transaction);
    }

    async PegarPorData(id, transaction) {
        return repositorio.PegarPorData(id, transaction);
    }


    async PegarTodos() {
        return repositorio.PegarTodos();
    }

    async Add(atendimento, transaction) {
        this.VerficarCliente(atendimento)

        return repositorio.Add(atendimento, transaction);
    }

    async Update(id, atendimento, transaction) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do atendimento para alterar');
        } 
        this.VerficarCliente(atendimento)

        return repositorio.Update(id, atendimento, transaction);
    }

    async Delete(id, transaction) {
        return repositorio.Delete(id, transaction);
    }

} 

module.exports = ServicoAtendimento