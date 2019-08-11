const Parente = {
    namorada: 'Tamires',
    mae: 'Edleuza',
    pai: 'Didi',
    irma: [ 'Wandra', 'Laiza'],

}

const family = {};
family.prototype  = {...Parente};
family.prototype.namorada = 'monica';

function Declaration(Mae){
    const nomes = {...family.prototype};
    const { namorada } = nomes;
    var mosinho = `${namorada} Alberto Oliveira`;
    var tam =  nomes.namorada =  `Minha noiva ${mosinho}  está com minha Mãe: `;
   
    if(Mae == null) {
        Mae = Parente.mae;
    
        return tam + `${Mae}`;
    }
    else 
    {
        nomes.mae = Mae;    
        return tam + `${Mae}`;;
  
    }
    
}

const resultCall = Declaration.call(Parente);  
const resultApply = Declaration.apply(Parente, ["Laiza"]);
const resultBind = Declaration.bind(Parente);

console.log( resultBind('Deusinha'));

//enclasuramento   
// function add(a, b ){
//     return a + b;
// }
// function addAll(a){
//     return function(b){
    
//                 return add(a,b);
//             }
//         }

// const Closures = addAll(42)(1);
// console.log(Closures);
