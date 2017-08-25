const expect = require('chai').expect
const platzom = require('..').default  // search for the main file inside package.json

describe('#platzom', function (){
  it('Si la palabra termina con "ar", se le quitan esas dos letras', function () {
    const translation = platzom("Programar")
    expect(translation).to.equal("Program")
  })
  it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
    const translation0 = platzom("Zorro")
    const translation1 = platzom("Zarpar")
    expect(translation0).to.equal("Zorrope")
    expect(translation1).to.equal("Zarppe")
  })
  it('Si la palabra traducida tiene 10 o más letras, se de partir en dos por la mitad y unir con un guión medio', function () {
    const translation = platzom("abecedario")
    expect(translation).to.equal("abece-dario")
  })
  it('Si la palabra es un palíndromo, ninguan regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function () {
    const translation = platzom("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })
} )
