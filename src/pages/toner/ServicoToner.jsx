import './servicoToner.css';

export default function servicoToner() {
  return (
    <div className="soliciCompras">
      <h1>Serviços de toner</h1>
      <form action="" className="formToner">
        <label for="nome">Nome</label>
        <input
          type="text"
          id="Nome"
          name="Nome"
          placeholder="Digite o nome do equipamento"
        />
        <label for="nome">serie</label>
        <input
          type="text"
          id="serie"
          name="serie"
          placeholder="Digite o numero de serie do equipamento"
        />
        <label for="">Serviço</label>
        <select name="servico" id="">
          <option value="recarga">Recarga</option>
          <option value="manutencao" >manutencao</option>
        </select>

        <label for="nome">Solicitação do serviço</label>
        <input
          type="date"
          id="date-servico"
          name="date-servico"
          placeholder="Digite o nome do tipo equipamento"
        />

        <label for="subject">Obsercações</label>
        <textarea
          id="desc"
          name="desc"
          placeholder="Observações.."
        ></textarea>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
