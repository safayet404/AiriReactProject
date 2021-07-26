import './App.css';
import '../src/assets/css/responsive.css';

import {HashRouter} from "react-router-dom";
import AppRoute from "./routes/AppRoute";


function App() {
  return (
    <div className="App">


    <HashRouter>
        <AppRoute/>
    </HashRouter>



    </div>
  );
}

export default App;
