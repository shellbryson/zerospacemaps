import './zerospace.scss';
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <div className="zerospace">
      <header className="zerospace__header">Zero Space</header>
      <main className="zerospace__layout">
        <Map />
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
