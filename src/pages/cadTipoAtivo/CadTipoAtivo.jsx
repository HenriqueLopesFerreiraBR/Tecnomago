import './cadTipoAtivo.css'

export default function CadTipoAtivo() {
  return (
    <div className="cadTipoAtivo">
      <form action="" className="formAtivos">
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
