import { Route , BrowserRouter} from "react-router-dom";

import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";

import {AuthContextProvider} from  "./contexts/AuthContext";

function App() {


  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home}></Route>
        <Route path="/rooms/new" component={NewRoom}></Route>
      </AuthContextProvider>

    </BrowserRouter>
  );
}

export default App;
