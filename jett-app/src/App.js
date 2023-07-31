/* eslint-disable no-restricted-globals */
import { BrowserRouter} from 'react-router-dom';
import { Rotas } from './Routes/Rotas';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </div>
  );
}

export default App;
