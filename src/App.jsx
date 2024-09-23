import "./App.css";
import UserDetails from "./components/UserDetails";

const user = {
  nome: "Larise",
  idade: 19,
  profissao: "Desempregada",
};

const App = () => {
  return (
    <div className="App">
      <UserDetails
        nome={user.nome}
        idade={user.idade}
        profissao={user.profissao}
      />
    </div>
  );
};

export default App;
