import { useState } from 'react';

function FormularioProduto({ onAdicionarProduto }) {
  const [formData, setFormData] = useState({
    nome: '',
    preco: '',
    descricao: '',
    imagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nome && formData.preco && formData.descricao) {
      onAdicionarProduto({
        id: Date.now(),
        ...formData,
        preco: parseFloat(formData.preco)
      });
      setFormData({ nome: '', preco: '', descricao: '', imagem: '' });
    } else {
      alert('Preencha todos os campos obrigatórios!');
    }
  };

  return (
    <div className="mb-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Adicionar Novo Produto</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome do produto"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="preco"
          value={formData.preco}
          onChange={handleChange}
          placeholder="Preço"
          className="w-full p-2 border rounded"
          step="0.01"
          required
        />
        <textarea
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          placeholder="Descrição"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="imagem"
          value={formData.imagem}
          onChange={handleChange}
          placeholder="URL da imagem (opcional)"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Adicionar Produto
        </button>
      </div>
    </div>
  );
}

export default FormularioProduto;