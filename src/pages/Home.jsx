import { useState, useEffect } from "react";
import styled from "styled-components";
import ProdutoCard from "../components/ProdutoCard.jsx";
import FormularioProduto from "../components/FormularioProduto.jsx";
import img from "../assets/corinthians.jpg";

const Container = styled.div`
  padding: 0;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 32px;
  color: #1f2937;
`;

const LoadingText = styled.div`
  text-align: center;
  font-size: 20px;
  color: #1f2937;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
  grid-column: 1 / -1;
  color: #6b7280;
  font-size: 16px;
`;

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const mockProdutos = [
    {
      id: 1,
      nome: "Camisa Corinthians",
      preco: 29.99,
      descricao: "Camisa oficial do Corinthians",
      imagem: img,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setProdutos(mockProdutos);
      setCarregando(false);
    }, 2000);
  }, []);

  const adicionarProduto = (novoProduto) => {
    setProdutos((prev) => [...prev, novoProduto]);
  };

  return (
    <Container>
      <Title>Catálogo de Produtos</Title>
      <FormularioProduto onAdicionarProduto={adicionarProduto} />
      {carregando ? (
        <LoadingText>Carregando...</LoadingText>
      ) : (
        <Grid>
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
            <EmptyMessage>Nenhum produto disponível.</EmptyMessage>
          )}
        </Grid>
      )}
    </Container>
  );
}

export default Home;
