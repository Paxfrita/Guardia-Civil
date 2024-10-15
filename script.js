document.getElementById('calculadora').addEventListener('click', function() {
    document.getElementById('calculator-section').classList.remove('hidden');
});

document.getElementById('copyCommand').addEventListener('click', function() {
    const articulo = document.getElementById('articulo').value;
    let commandText = '';

    if (articulo === '1.1') {
        commandText = 'multa poner usuario: Uso excesivo de claxon: 200€';
    } else if (articulo === '1.2') {
        commandText = 'multa poner usuario: Giro indebido: 250€';
    }

    const total = parseInt(commandText.match(/\d+/)[0]);
    
    if (total > 1000) {
        commandText += '\nComando de arresto: Multa superior a 1000€';
    }

    document.getElementById('comando').value = commandText;
    navigator.clipboard.writeText(commandText);
    alert('Comando copiado al portapapeles.');
});
