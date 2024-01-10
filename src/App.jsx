import './App.css';
import List from './components/List';

function App() {
  const testData = [
    'Noah',
    'Ren',
    'Georgi',
    'Ethan',
    'Mercutio',
    'Jacob',
    'Andrew M.',
    'Johnathan',
    'Matthew A.',
    'Matthew C.',
  ];
  
  return (
    <div className="App App-header">
      <List data={testData} type='ul' />
      <List data={testData} type='ol' />
     </div>
  );
}

export default App;