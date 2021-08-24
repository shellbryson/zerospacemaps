import './zerospace.scss';
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <div className="zerospace">
      <main className="zerospace__layout">
        <header className="zerospace__header">Zero Space</header>
        <Map />
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
