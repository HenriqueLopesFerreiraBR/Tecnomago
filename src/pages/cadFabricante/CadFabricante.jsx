import './cadFabricante.css'

export default function CadFabricante() {
  return (
    <div className='cadFabricante'>
             <h1>Cadastro de Fabricantes</h1>
      <form action="" className="formAtivos">
        <label for="">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder=""
        />

        <textarea
          id="desc"
          name="desc"
          placeholder="Descrição do tipo.."

        ></textarea>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}
