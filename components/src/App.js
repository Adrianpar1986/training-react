import "./App.css";
import Welcome from "./components/Welcome";
function App() {
  let today = new Date(Date.now()).toLocaleDateString();

  //la forma normal 
  const veryWelcome = (today) => {
    console.log(today);
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.innerHTML = `hoy es ${today}`;
    div.appendChild(h1);
    let prap = {
      userName: "Adrian",
      todayDate: today
    }
  };
  //

  return (
    <div className="main">
      <Welcome name="Adrian" today={today}></Welcome>
      <Welcome name="Aitana" today={today}></Welcome>
      <Welcome name="World" today={today}></Welcome>
    </div>
  );
}

export default App;
