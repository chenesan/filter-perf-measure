import logo from './logo.svg';
import './App.css';
import Test from './Test';

const data = {
  __typename: 'TestData',
  a: {
      a1: 'a1',
      a2: 'a2',
  },
  b: {
      b1: 'b1',
      b2: 'b2',
  },
  c: {
      c1: 'c1',
      c2: 'c2',
  },
  d: {
      d1: 'd1',
      d2: 'd2',
  },
  e: {
      e1: 'e1',
      e2: 'e2',
  },
  f: {
      f1: 'f1',
      f2: 'f2',
  },
  g: {
      g1: 'g1',
      g2: 'g2',
  },
  h: {
      h1: 'h1',
      h2: 'h2',
  },
  i: {
      i1: 'i1',
      i2: 'i2',
  },
  j: {
      j1: 'j1',
      j2: 'j2',
  },
  k: {
      k1: 'k1',
      k2: 'k2',
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Test componentLayerCount={6} data={data} />
    </div>
  );
}

export default App;
