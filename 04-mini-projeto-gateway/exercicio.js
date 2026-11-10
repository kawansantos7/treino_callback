function autorizarCartao(valor, callback) {
  console.log(`💳 Autorizando pagamento no valor de R$ ${valor}...`);
  setTimeout(() => {
    const transacaoId = "TX-" + Math.floor(Math.random() * 10000);
    callback(transacaoId);
  }, 1000);
}

function dispararWebhook(transacaoId, callbackFinal) {
  console.log(`🔔 Disparando Webhook para transação [${transacaoId}]...`);
  setTimeout(() => {
    callbackFinal(`✅ Status 200 OK: Evento enviado com sucesso.`);
  }, 1000);
}

autorizarCartao(199.90, (id) => {
  dispararWebhook(id, (resposta) => {
    console.log("Resultado final do Gateway:", resposta);
  });
});