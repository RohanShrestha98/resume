import React, { useState, useEffect } from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      setFilteredData(
        data.filter(item =>
          item.username.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, data]);
  

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
      {filteredData && filteredData.map(item => (
        <li key={item.id}>{item.username}</li>
    ))}
      </ul>
    </div>
  );
}
