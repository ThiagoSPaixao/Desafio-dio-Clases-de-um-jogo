// Você é James, um Guerreiro Templário, Caçador de Demônios, portador da " Gold Sword"
//A Gold Sword, é uma espada comun, que na presença das sombras, emana um brilho dourado.
//Você está embarcando um uma aventura, juntamente com o seu grupo de aventureiros, quando são emboscados
//ao cruzar a perigosa ponte de Ferro...

class Heroi {
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
    }

    atacar() {
        let ataque;
        switch (this.classe) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
        }

        const mensagem = `O ${this.classe} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

// Exemplo de uso
const Heroi1 = new Heroi("James", 33, "guerreiro");
heroi1.atacar();

const Heroi2 = new Heroi("Drew", 28, "mago");
heroi2.atacar();

const Heroi3 = new Heroi("Maya", 28, "ninja");
heroi2.atacar();