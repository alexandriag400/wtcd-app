import './App.css';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Hello</h1>
      <div class = "div">
        <h2>Cats are the best</h2>
        <p>(If you didn't know)</p>
        <h6>very tiny</h6>
      </div>
      <img src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/ba79ccaf05eaf17.png" alt="Kitty" width="460" height="345"></img>
      <img src="https://purepng.com/public/uploads/medium/red-pixel-heart-vmx.png" alt="heart" width="50" height="50"></img>
    </div>
  );
}
export default App;
