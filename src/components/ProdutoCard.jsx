function ProdutoCard({ nome, preco, descricao, imagem }) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition w-full max-w-xs">
      <img 
        src={imagem || "https://via.placeholder.com/150"} 
        alt={nome} 
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{nome}</h3>
      <p className="text-gray-600">{descricao}</p>
      <p className="text-xl font-bold mt-2">R$ {preco.toFixed(2)}</p>
    </div>
  );
}

export default ProdutoCard;