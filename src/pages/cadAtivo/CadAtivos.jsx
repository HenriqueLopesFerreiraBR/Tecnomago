import "./catAtivos.css";

export default function cadAtivos() {
  return (
    <div className="cadAtivos">
      <h1>Cadastro de Ativos de T.I</h1>
      <form action="" className="formAtivos">
        <label for="fname">Setor</label>
        <input
          type="text"
          id="setor"
          name="setor"
          placeholder=""
        />

        <label for="fname">Apelido</label>
        <input
          type="text"
          id="alias"
          name="alias"
          placeholder=""
        />

        <label >Numero de serie</label>
        <input
          type="text"
          id="serie"
          name="serie"
          placeholder="Digite o numero de serie do equipamento.."
        />

        <label for="fabricante">Fabricante</label>
        <select id="fabricante" name="fabricante">
          <option value="Dell">Dell</option>
          <option value="Lenovo">Lenovo</option>
          <option value="APC">APC</option>
        </select>

        <label for="country">Tipo</label>
        <select id="tipo" name="tipo">
          <option value="Computador">Computador</option>
          <option value="Impressora">Impressora</option>
          <option value="Periféricos">Periféricos</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
