import "./App.css";
import bug from "./assets/3e50180386b29ec70076be385730a1bc.gif";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-4">
      <p className="title text-5xl text-center text-white font-semibold">
        FELICIDADES!
      </p>
      <p className="text1 text-2xl text-center text-white font-semibold">
        ACCEDISTE A UN SITIO QUE PODRÍA ESTAR 
      </p>
      <p className="text2 text-2xl text-center text-white font-semibold">
        LEYENDO TUS DATOS!
      </p>
      <img src={bug} alt="bug gif" />
    </div>
  );
}

export default App;
