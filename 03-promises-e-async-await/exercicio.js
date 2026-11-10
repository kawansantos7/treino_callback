function consultarSaldo(conta) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (conta === "12345-6") {
        resolve(1500.75);
      } else {
        reject(new Error("Conta não encontrada."));
      }
    }, 1200);
  });
}

async function processarConsulta() {
  try {
    console.log("🔍 Consultando saldo...");
    const saldo = await consultarSaldo("12345-6");
    console.log(`💰 Saldo disponível: R$ ${saldo.toFixed(2)}`);
  } catch (error) {
    console.error("❌ Falha na consulta:", error.message);
  }
}

processarConsulta();