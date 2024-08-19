let saldo = 3000;

const spanSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (spanSaldo !== null) {
  spanSaldo.textContent = saldo.toString();
}

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

elementoFormulario.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!elementoFormulario.checkValidity()) {
    alert("Por favor, preencha todos os dados da transação");
    return;
  }
  const inputTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
  const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
  const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

  let tipoTransacao: string = inputTransacao.value;
  let valor: number = inputValor.valueAsNumber;
  let data: Date = new Date(inputData.value);

  if (tipoTransacao == "Depósito") {
    saldo += valor;
  } else {
    if (
      tipoTransacao == "Transferência" ||
      tipoTransacao == "Pagamento de Boleto"
    ) {
      saldo -= valor;
    } else {
      alert("Tipo de transação inválido!");
      return;
    }
  }
  spanSaldo.textContent = saldo.toString();

  const novaTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
  };

  console.log(novaTransacao);
  elementoFormulario.reset();
});
