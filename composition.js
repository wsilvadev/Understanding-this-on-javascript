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
//________-----------------_________________-____________-------------------___-___--__-__-________----_-______________---____--_-----_________--_-
//################################################################################################################################################
//---------------------------------------------------------------------------------------------------------
const logavel = {
    log(valor){
        console.log(valor);
    }
}
const emissorEvento = Object.assign({
   emitir(event){
    this.log(`evento: ${event}`);
   }
  
}, logavel);
 
function factorie(){
  return  Object.assign({}, emissorEvento);
}

const conta = factorie();
conta.emitir("evento log para qualquer arquivo!!!");
// podemos importar  o factorie pra quaquer arquivo
console.log(conta);





















