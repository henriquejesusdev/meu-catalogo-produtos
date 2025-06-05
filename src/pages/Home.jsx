import { useState, useEffect } from "react";
import ProdutoCard from "../components/ProdutoCard.jsx";
import FormularioProduto from "../components/FormularioProduto.jsx";
import img from "../assets/corinthians.jpg";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Dados fictícios para simulação de API
  const mockProdutos = [
    // {
    //   id: 1,
    //   nome: "Produto 1",
    //   preco: 29.99,
    //   descricao: "Descrição do Produto 1",
    //   imagem: img,
    // },
  ];

  // Simulação de carregamento de dados com useEffect
  useEffect(() => {
    setTimeout(() => {
      setProdutos(mockProdutos);
      setCarregando(false);
    }, 2000); // Simula 2 segundos de carregamento
  }, []);

  // Função para adicionar novo produto
  const adicionarProduto = (novoProduto) => {
    setProdutos((prev) => [...prev, novoProduto]);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">
        Catálogo de Produtos
      </h1>

      <FormularioProduto onAdicionarProduto={adicionarProduto} />

      {carregando ? (
        <div className="text-center text-xl">Carregando...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.length > 0 ? (
            produtos.map((produto) => (
              <ProdutoCard
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                descricao={produto.descricao}
                imagem={produto.imagem}
              />
            ))
          ) : (
            <p className="text-center col-span-full">
              Nenhum produto disponível.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
