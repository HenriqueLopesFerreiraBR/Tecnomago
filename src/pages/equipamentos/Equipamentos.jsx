import "./equipamentos.css";

export default function Equipamentos() {
  return (
    <div className="equipamentos">
      <h1>Lista de equipamentos</h1>

      <table>

        <tr>
          <th>codigo</th>
          <th>Setor</th>
          <th>Apelido</th>
          <th>Numero de serie</th>
          <th>Service tag</th>
          <th>Fabricante</th>
          <th>Tipo</th>
          <th>Opções</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Administrativo</td>
          <td>DUNI01-003</td>
          <td>2125446225</td>
          <td>SX5543SD</td>
          <td>DELL</td>
          <td>COMPUTADOR</td>
          <td>
            <button>editar</button>
            <button>Excluir</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Administrativo</td>
          <td>DUNI01-002</td>
          <td>554684232</td>
          <td>S55DF3SD</td>
          <td>DELL</td>
          <td>COMPUTADOR</td>
          <td>
            <button>editar</button>
            <button>Excluir</button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Financeiro</td>
          <td>DUNI04-003</td>
          <td>2125446225</td>
          <td>FL65SDFG5</td>
          <td>DELL</td>
          <td>COMPUTADOR</td>
          <td>
            <button>editar</button>
            <button>Excluir</button>
          </td>
        </tr>

      </table>
    </div>
  );
}
