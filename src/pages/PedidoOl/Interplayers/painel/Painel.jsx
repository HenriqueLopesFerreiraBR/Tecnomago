import React from "react";
import "./painel.css";

// import { Container } from './styles';

function Painel() {
    return (
        <div className="Painel">
            <h1>API pedidos OL</h1>
            <div class="form-tudopharma">
                <div class="import-pedido">
                    <label>Pedidos: </label>
                    <button
                        class="btn-import-pedido"
                        id="btn-pedidos"
                        onclick="novoPedido()"
                    >
                        Importar pedidos
                    </button>
                </div>

                <h1>Pedidos da Interplayers</h1>
                <div id="result"></div>
            </div>
        </div>
    );
}

export default Painel;
