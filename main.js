class Personagem {
    constructor(nome, idade, tipo) {
        this.nome = nome,
            this.idade = idade,
            this.tipo = tipo;
    }
    // atacar() {
    //     let ataque;

    //     if (this.tipo === "guerreiro") {
    //         ataque = "usou Espada";
    //     } else if (this.tipo === "mago") {
    //         ataque = "usou Magia";
    //     } else if (this.tipo === "monge") {
    //         ataque = "usou Artes Marciais";
    //     } else if (this.tipo === "ninja") {
    //         ataque = "usou Shuriken";
    //     } else {
    //         ataque = "usou um ataque misterioso"
    //     }
    //     console.log(`O ${this.tipo} ${this.nome} de ${this.idade} anos atacou.`);
    //     console.log(`O ${this.tipo} ${ataque}`);
    // }

    atacar(){
        let ataque;

        switch(this.tipo){
            case 'mago':
                ataque = 'usou Magia.';
                break;
            case 'guerreiro':
                ataque = 'usou Espada.';
                break;
            case 'monge':
                ataque = 'usou Artes Marciais.';
                break;
            case 'ninja':
                ataque = 'usou Shuriken.';
                break;
            default:
                ataque = 'usou um ataque misterioso.';
        }
        console.log(`O ${this.tipo} ${this.nome} de ${this.idade} anos atacou.`);
        console.log(`O ${this.tipo} ${ataque}`);
    }
}

let pessoas = [
    new Personagem('Xanders', 30, 'guerreiro'),
    new Personagem('Jhoey', 32, 'mago'),
    new Personagem('JardielsRO', 32, 'monge'),
    new Personagem('Lee-ninjaBR', 32, 'ninja')
]
pessoas.forEach(Personagem => Personagem.atacar(console.log()));

// pessoas[1].atacar();

