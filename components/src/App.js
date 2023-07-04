import "./App.css";
import Welcome from "./components/Welcome";
import Main from "./components/Main";
function App() {
  let today = new Date(Date.now()).toLocaleDateString();

  //la forma normal
  // const veryWelcome = (today) => {
  //   console.log(today);
  //   let div = document.createElement("div");
  //   let h1 = document.createElement("h1");
  //   h1.innerHTML = `hoy es ${today}`;
  //   div.appendChild(h1);
  //   let prap = {
  //     userName: "Adrian",
  //     todayDate: today
  //   }
  // };
  //

  return (
    <Main>
      <Welcome userName="Adrian" today={today}></Welcome>
      <Welcome userName="Aitana" today={today}></Welcome>
      <Welcome userName="World" today={today}></Welcome>
    </Main>
  );
}

export default App;
