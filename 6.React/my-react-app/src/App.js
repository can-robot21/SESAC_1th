import './App.css';

function App() {
  let name = 'sesac';
  // const style = {
  //   h2: {
  //     color: 'red',
  //   }
  //   my-text: {
  //     color: 'green',
  //   }
  // }


  return (
    <div className="App">
      <MyHeader />
      <header className='App-header'>
        <h1>헬로우, 리엑트 {name}</h1>
      </header>
      <h2 style={style.h2}>헤더2</h2>
      <p>본문 ... Welcome to React-Class ... </p>
      <MyFooter />
    </div>
  );
}

export default App;