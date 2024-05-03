const controladores = require('./controladores/arquivoDeControlador');

module.exports = (app) => {
    app.post('/calcular-imc', controladores.calcularIMC);
};