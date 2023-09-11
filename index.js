class hero {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo   
    }
    atacar(){

        let ataque = ""
        switch (this.tipo){
            case "guerreiro":
                ataque = "espada"
                console.log(`o heroi ${this.nome} atacou utilizando ${ataque}`) 
                break
            case "mago":
                ataque = "magia"
                 console.log(`o heroi ${this.nome} atacou utilizando ${ataque}`) 
                break    
            case "monge":
                ataque = "artes marciais"
                console.log(`o heroi ${this.nome} atacou utilizando ${ataque}`) 
                break
            case "ninja":
                ataque = "shuriken"
                console.log(`o heroi ${this.nome} atacou utilizando ${ataque}`) 
                break
            case "arqueiro":
                ataque = "arco e flecha"
                console.log(`o heroi ${this.nome} atacou utilizando ${ataque}`) 
                break
            default:
                console.log("categoria inexistente no momento, talvez em atualizações futuras ele esteja presente ;)")    
        }
    }
}

let hero1 = new hero ("Pablo", 15, "arqueiro")
let hero2 = new hero ("gelado", 50, "mago")
let hero3 = new hero ("Rocky", 36, "lutador")

hero1.atacar()
hero2.atacar()
hero3.atacar()