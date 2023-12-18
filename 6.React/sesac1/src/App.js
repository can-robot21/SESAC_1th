import './App.css';
import Counter from './Counter';
import Container from './Container';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Container>
          <h2>안녕, 리엑트</h2>
          <Counter num={1} />
        </Container>
        <Container>
          <h2>안녕, 리엑트</h2>
          <Counter num={2} />
        </Container>
        <Container>
          <h2>안녕, 리엑트</h2>
          <Counter num={3} />
        </Container>
      </header>

    </div>
  );
}

export default App;
