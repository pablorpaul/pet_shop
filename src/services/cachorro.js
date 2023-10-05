const RepositorieCachorro = require("../repositories/cachorro");

const repositorio = new RepositorieCachorro()

class ServicoCachorro{
    
    VerficarCachorro(cachorro) {
        if(!cachorro){
            throw new Error('Não foi enviada o cachorro para adicionar');
        } else if(!cachorro.nome){
            throw new Error('Não foi enviado o nome do cachorro');
        } else if(!cachorro.raca){
            throw new Error('Não foi enviado a raca do cachorro');
        }

        return true
    }

    async PegarUm(id, transaction) {
        return repositorio.PegarUm(id, transaction);
    }

    async PegarTodos() {
        return repositorio.PegarTodos();
    }

    async Add(cachorro, transaction) {
        this.VerficarCachorro(cachorro)

        return repositorio.Add(cachorro, transaction);
    }

    async Update(id, cachorro) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do cachorro para alterar');
        } 
        this.VerficarCliente(cachorro)

        return repositorio.Update(id, cachorro);
    }

    async Delete(id) {
        return repositorio.Delete(id);
    }

} 

module.exports = ServicoCachorro