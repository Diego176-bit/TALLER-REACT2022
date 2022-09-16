
import './App.css';
import { Opinion } from './componentes/Opinion'
function App() {
  return (
    <div className="App">
      <div className = 'contenedor'>
      <Opinion 
        imagen = {'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
        nombre = 'Michael'
        opinion = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, enim harum corporis cumque dolorum, esse ut aut totam veniam temporibus illum ullam dolore modi, animi ratione non quod quo. Facere'
      />

      <Opinion 
        imagen = {'https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=2000'}
        nombre = 'Karla'
        opinion = 'No me gusto el platillo principal, adipisicing elit. Repellendus, enim harum corporis cumque dolorum, esse ut aut totam veniam temporibus illum ullam dolore modi, animi ratione non quod quo. Facere'
      />
      </div>
    </div>
  );
}

export default App;
