import React from "react";
import "./retornos.css";

// import { Container } from './styles';

function Retornos() {
    return (
        <div className="Retornos">
            <h1>API Pedidos OL</h1>
            <h1>Tela de Exportação Retornos e Notas</h1>
            <hr />
            <div class="form-interplayers">
                <div class="retorno-pedido">
                    <label>Retorno: </label>
                    <button
                        class="btn-retorno-pedido"
                        id="btn-pedidos"
                        onclick="novoPedido()"
                    >
                        Exportar Retornos
                    </button>
                </div>

                <h1>Retornos da Interplayers</h1>
                <div id="result"></div>
            </div>
            <hr />
            <div class="form-interplayers">
                <div class="nota-pedido">
                    <label>Retorno: </label>
                    <button
                        class="btn-nota-pedido"
                        id="btn-pedidos"
                        onclick="novoPedido()"
                    >
                        Exportar Notas
                    </button>
                </div>

                <h1>Notas da Interplayers</h1>
                <div id="result"></div>
            </div>
        </div>
    );
}

export default Retornos;
