const Pessoa  = {
    andar(passos){
     console.log(`${this.nome} andou ${passos} passos`);
    }
}

const willian = Object.create(Pessoa,{
    
    nome :{value: 'Willian', writable:true},
    idade:{ value: '48'},
    sobrenome:{value: 'Simões'},
    nomeCompleto: {
        get(){
            return `${this.nome} ${this.sobrenome}`   
     },
     set(valor){
         this.nome = valor;
     }

    }

});
willian.nomeCompleto = "Lana"
willian.andar(49);


console.log(willian);