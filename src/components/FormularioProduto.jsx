import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  margin-bottom: 32px;
  max-width: 448px;
  margin-left: auto;
  margin-right: auto;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #1f2937;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  background-color: #3b82f6;
  color: white;
  font-weight: 500;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2563eb;
  }
`;

function FormularioProduto({ onAdicionarProduto }) {
  const [formData, setFormData] = useState({
    nome: "",
    preco: "",
    descricao: "",
    imagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nome && formData.preco && formData.descricao) {
      onAdicionarProduto({
        id: Date.now(),
        ...formData,
        preco: parseFloat(formData.preco),
      });
      setFormData({ nome: "", preco: "", descricao: "", imagem: "" });
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
  };

  return (
    <FormContainer>
      <FormTitle>Adicionar Novo Produto</FormTitle>
      <FormWrapper>
        <Input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome do produto"
          required
        />
        <Input
          type="number"
          name="preco"
          value={formData.preco}
          onChange={handleChange}
          placeholder="Preço"
          step="0.01"
          required
        />
        <TextArea
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          placeholder="Descrição"
          required
        />
        <Input
          type="text"
          name="imagem"
          value={formData.imagem}
          onChange={handleChange}
          placeholder="URL da imagem (opcional)"
        />
        <SubmitButton onClick={handleSubmit}>Adicionar Produto</SubmitButton>
      </FormWrapper>
    </FormContainer>
  );
}

export default FormularioProduto;
