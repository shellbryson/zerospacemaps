import './zerospace.scss';
import Map from "./components/Map";

function App() {

  return (
    <div className="zerospace">
      <main className="zerospace__layout">
        <header className="zerospace__header">Zero Space</header>
        <Map />
      </main>
    </div>
  );
}

export default App;
