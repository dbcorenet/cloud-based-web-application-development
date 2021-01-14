import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent name="React" />;
};

function App() {
  const name = '리액트';
  return <div className="react">{name}</div>;
}

export default App;
