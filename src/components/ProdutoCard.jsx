import { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  width: 100%;
  max-width: 300px;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 192px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 16px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
`;

const ProductDescription = styled.p`
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 8px;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 16px;
`;

const AddButton = styled.button`
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  color: white;
  font-weight: 500;
  background-color: ${({ adicionado }) => (adicionado ? "#198754" : "#6c757d")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ adicionado }) =>
      adicionado ? "#157347" : "#5c636a"};
  }
`;

function ProdutoCard({ nome, preco, descricao, imagem }) {
  const [adicionado, setAdicionado] = useState(false);

  const handleAddToCart = () => {
    setAdicionado(!adicionado);
  };

  return (
    <CardContainer>
      <ProductImage
        src={imagem || "https://via.placeholder.com/150"}
        alt={nome}
      />
      <ProductName>{nome}</ProductName>
      <ProductDescription>{descricao}</ProductDescription>
      <ProductPrice>R$ {preco.toFixed(2)}</ProductPrice>
      <AddButton onClick={handleAddToCart} adicionado={adicionado}>
        {adicionado ? "Adicionado" : "Adicionar ao carrinho"}
      </AddButton>
    </CardContainer>
  );
}

export default ProdutoCard;
