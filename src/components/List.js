import React, { useState } from 'react';
import './list.css';




const USERS = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Node js' },
  { id: 3, name: 'Git' },
  { id: 4, name: 'React'},
  { id: 5, name: 'NPM'},
  { id: 6, name: 'БД'},
  { id: 7, name: 'TypeScript'},
  { id: 8, name: 'Работа в команде'},
  { id: 9, name: 'Docker'},
  { id: 10, name: 'Проект'},
];

function App() {
  
  const [name, setName] = useState('');

  
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
       
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Поиск"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.age} Е-Soft</span>
            </li>
          ))
        ) : (
          <h1>Не найден</h1>
        )}
      </div>
    </div>
  );
}

export default App;