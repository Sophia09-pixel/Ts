var saldo = 3000;
var spanSaldo = document.querySelector(".saldo-valor .valor");
if (spanSaldo !== null) {
    spanSaldo.textContent = saldo.toString();
}
var elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os dados da transação");
        return;
    }
    var inputTransacao = elementoFormulario.querySelector("#tipoTransacao");
    var inputValor = elementoFormulario.querySelector("#valor");
    var inputData = elementoFormulario.querySelector("#data");
    var tipoTransacao = inputTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else {
        if (tipoTransacao == "Transferência" ||
            tipoTransacao == "Pagamento de Boleto") {
            saldo -= valor;
        }
        else {
            alert("Tipo de transação inválido!");
            return;
        }
    }
    spanSaldo.textContent = saldo.toString();
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
