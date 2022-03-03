class Retangulo{
    constructor(largura, altura){
        this.largura = largura
        this.altura = altura
    }
  CalcularArea(){
  return this.largura * this.altura
  }

  Area(){     
      return this.calcularArea()
}
}

let Retangulo_1 = new Retangulo(16 , 9)
Retangulo_1.CalcularArea()
console.log(Retangulo_1.CalcularArea())
let Retangulo_2 = new Retangulo(25 , 15)
Retangulo_2.CalcularArea()
console.log(Retangulo_2.CalcularArea())
  