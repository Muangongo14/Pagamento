document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
 
    // Validação da data de pagamento
    const paymentDate = document.getElementById('paymentDate').value;
    const today = new Date().toISOString().split('T')[0];

    if (paymentDate < today) {
        document.getElementById('message').innerText = 'A data de pagamento não pode ser anterior a hoje.';
        return;
    }

    //  exibira uma mensagem de sucesso
    document.getElementById('message').innerText = 'Formulário enviado com sucesso!';
    
});