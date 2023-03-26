import Header from './Components/Header';
import './App.css';
import CardContainer from './Components/CardContainer';

function App() {
  return (
    <div>
      <Header />
      <div className="question-box">
        <CardContainer />
      </div>
    </div>
  );
}

export default App;
