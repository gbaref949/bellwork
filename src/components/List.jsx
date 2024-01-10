import { useState, useEffect } from 'react';

const List = ({ data }) => {
  const [listType, setListType] = useState('ul');
  const [names, setNames] = useState(data);
  const [newName, setNewName] = useState('');

  const toggleListType = () => {
    setListType(listType === 'ul' ? 'ol' : 'ul');
  };

  useEffect(() => {
    //load saved names from session storage
    const savedNames = sessionStorage.getItem('savedNames');
    if (savedNames) {
      setNames(JSON.parse(savedNames));
    }
  }, []);

  const addName = () => {
    setNames([...names, newName]);
    setNewName('');
    saveNames(); //save changes to session storage
  };

  const saveNames = () => {
    sessionStorage.setItem('savedNames', JSON.stringify(names));
  };

  const removeName = (index) => {
    const updatedNames = [...names];
    updatedNames.splice(index, 1);
    setNames(updatedNames);
    saveNames();
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div style={{ border: 'thin solid #000', padding: '1rem', margin: '1rem' }}>
      <h1 style={{ textAlign: 'center', margin: '-.05rem' }}>
        Sort your List by Ordered or Unordered
      </h1>
      <br />
      <input
        type='text'
        placeholder='Enter a name'
        value={newName}
        onChange={handleChange}
        style={{ margin: '1rem' }}
      />
      <button onClick={addName} style={{ margin: '1rem' }}>
        Add Name
      </button>
      <button onClick={saveNames} style={{ margin: '1rem' }}>
        Save Name
      </button>
      <button onClick={toggleListType} style={{ margin: '1rem' }}>
        Switch List
      </button>
      {listType === 'ul' ? (
        <ul>
          {names.map((item, index) => (
            <li key={index}>
              {item}{' '}
              <button
                onClick={() => removeName(index)}
                style={{ marginLeft: '0.5rem' }}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <ol>
          {names.map((item, index) => (
            <li key={index}>
              {item}{' '}
              <button
                onClick={() => removeName(index)}
                style={{ marginLeft: '0.5rem' }}> Remove </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default List;