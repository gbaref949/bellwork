const List = ({ data, type }) => {
  const renderList = () => {
    if (type === 'ul') {
      return (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else if (type === 'ol') {
      return (
        <ol>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      );
    } else {
      return null; // Invalid type, do not render a list
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      {renderList()}
    </div>
  );
};

export default List;