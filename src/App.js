import './zerospace.scss';
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import { selector, useRecoilValue, useRecoilState } from "recoil";
import { demoState } from "./store";

function App() {

  const [demo, setDemo] = useRecoilState(demoState);

  return (
    <div className="zerospace">
      <header className="zerospace__header">Zero Space: {demo}</header>
      <main className="zerospace__layout">
        <Map />
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
