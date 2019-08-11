function Pessoa(nome, idade){
    const atributosPessoa = {
        nome: nome,
        idade: idade,
        falar,
        envelhecer
        
    }
    function falar(palavras){
            console.log(`${nome} falou: ${palavras}`);
        }
        function envelhecer(anos){
            let somaIdade = anos + idade;
        console.log(`${nome} enveleceu: ${somaIdade} `);
        }
    
    return atributosPessoa;
}
const willian = Pessoa('Willian', 21);
willian.falar('bobagem');
willian.envelhecer(29);