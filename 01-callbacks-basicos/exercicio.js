function validarUsuario(nome, callbackResultado) {
  const ehValido = nome.length > 3;
  callbackResultado(ehValido);
}

validarUsuario("Carlos", (valido) => {
  console.log("Validação 'Carlos':", valido ? "✅ Usuário válido" : "❌ Nome curto demais");
});

validarUsuario("Ana", (valido) => {
  console.log("Validação 'Ana':", valido ? "✅ Usuário válido" : "❌ Nome curto demais");
});