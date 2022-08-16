import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topLeft">
            <div class="dropdown">
                <button className="dropbtn">TecnoMago
                    <i class="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#">Cadastrar equipamentos</a>
                    <a href="#">Realizar Solicitação de compras</a>
                    <a href="#">Cadastro de Tipos de equipamentos</a>
                    <a href="#">Cadastro de Fabricantes</a>
                    <a href="#">Cadastro de Manut. ou Recarga/ Impressoras</a>
                    <a href="#">FTP</a>
                </div>
            </div>
        </div>
        <div className="topCenter ">
            <ul className="topList">
                <li className="topListItem "> Inventario de equipamentos</li>
                <li className="topListItem"> Ativos de T.I</li>
                <li className="topListItem"> Registro de atualizações</li>
                <li className="topListItem"> Serviços das impressoras </li>
                <li className="topListItem"> automações</li>
                <li className="topListItem"> Compras</li>
            </ul>
        </div>
        <div className="topRight">
            <img
            className="topImage"
            src="http://3.bp.blogspot.com/_Q8B72nbTfOo/TTEDrw5QpMI/AAAAAAAACDo/vyl0Fa6aLs0/s320/batman-for-facebook.jpg"
            alt=""
            />
            <i className="topSearchIcon fas fa-search"></i>
        </div>

        <script src="./topbar.js"></script>
    </div>
  );
}
