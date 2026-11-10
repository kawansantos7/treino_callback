function buscarProduto(id, callback) {
  setTimeout(() => {
    if (id < 1) {
      return callback(new Error("ID do produto inválido!"), null);
    }

    const produto = { id: id, nome: "Teclado Mecânico", preco: 250.00 };
    callback(null, produto);
  }, 1000);
}

buscarProduto(101, (err, produto) => {
  if (err) {
    return console.error("❌ Erro:", err.message);
  }
  console.log("📦 Produto encontrado:", produto);
});

buscarProduto(-1, (err, produto) => {
  if (err) {
    return console.error("❌ Erro:", err.message);
  }
  console.log("📦 Produto encontrado:", produto);
});