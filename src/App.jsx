import Login from './pages/login/Login'
import Home from './pages/home/Home'
import CadAtivos from './pages/cadAtivo/CadAtivos'
import CadTipoAtivos from './pages/cadTipoAtivo/CadTipoAtivo'
import CadFabricante from './pages/cadFabricante/CadFabricante'
import SoliciCompras from './pages/soliciCompras/SoliciCompras'
import Topbar from './components/topbar/Topbar'

function App() {
  return (
    <div className="App">
      <Topbar />
      <SoliciCompras />
    </div>
  );
}

export default App;
