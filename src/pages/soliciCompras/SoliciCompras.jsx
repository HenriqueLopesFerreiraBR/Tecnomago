import './soliciCompras.css';

export default function SoliciCompras() {
  return (
    <div className="soliciCompras">
      <h1>Solicitação de compras para o T.I</h1>
      <form action="" className="formAtivos">
        <label for="nome">Nome</label>
        <input
          type="text"
          id="Nome"
          name="Nome"
          placeholder="Digite o nome do tipo equipamento"
        />
        <label for="nome">marca</label>
        <input
          type="text"
          id="marca"
          name="marca"
          placeholder="Digite a marca equipamento"
        />
        <label for="nome">Nome</label>
        <input
          type=""
          id="Nome"
          name="Nome"
          placeholder="Digite o nome do tipo equipamento"
        />
        <label for="nome">Nome</label>
        <input
          type="text"
          id="Nome"
          name="Nome"
          placeholder="Digite o nome do tipo equipamento"
        />

        <label for="subject">Descrição</label>
        <textarea
          id="desc"
          name="desc"
          placeholder="Descrição do tipo.."
        ></textarea>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
