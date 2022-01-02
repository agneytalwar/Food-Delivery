import HomeLayoutHOC from "./HOC/Home.HOC";
import Temp from './Components/temp'

function App() {
  return (
    <div className="App">
      {/* <h1 className="text-gray-500 font-bold">App Component</h1> */}
      <HomeLayoutHOC path='/' exact component={Temp} />
    </div>
  );
}

export default App;