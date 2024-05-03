const calcularIMC = (req, res) => {
    const { peso, altura } = req.body;
    if (!peso || !altura) {
        return res.status(400).json({ erro: 'Peso e altura são obrigatórios' });
    }

    const alturaMetros = altura / 100;
    const imc = (peso / (alturaMetros * alturaMetros)).toFixed(1);
    let categoria;
    if (imc < 18.5) {
        categoria = "Baixo peso";
    } else if (imc < 24.9) {
        categoria = "Nutrição de boa qualidade";
    } else if (imc < 29.9) {
        categoria = 'Sobrepeso';
    } else if (imc < 34.9) {
        categoria = 'Obesidade Grau I';
    } else if (imc < 39.9) {
        categoria = 'Obesidade Grau II';
    } else {
        categoria = 'Obesidade Grau III';
    }
    res.json({ imc, categoria });
};

module.exports = { calcularIMC };