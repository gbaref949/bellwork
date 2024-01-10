import './App.css';
import List from './components/List.jsx';

function App () {
  const data = ['Georgi', 'Noah', 'Ren', 'Ethan', 'Murphy', 'Jacob', 'Sabrina', 'Nico', 'Mercurtio', 'Audrey'];
  return (
    <div>
      <List data={data}/>
    </div>
  );
};

export default App;