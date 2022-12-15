import AppClima from "../components/AppClima"
import ClimaContext, { ClimaProvider } from "../context/ClimaProvider"



function App() {
 

  return (
    <ClimaProvider>
      <header>
        <h1>Buscador De Clima</h1>
      </header>
      <AppClima/>
    </ClimaProvider>
  )
}

export default App
