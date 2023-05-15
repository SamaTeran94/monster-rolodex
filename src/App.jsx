/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import AddMonsters from './components/AddMonsters';
import NewMonsterCardList from './components/NewMonsterCardList';

const App = () => {

  const [monsters, setMonsters] = useState([])
  const [filterMonsters, setFilterMonsters] = useState([])
  const [newMonster, setNewMonster] = useState([])
  const [isChecked, setIsChecked] = useState(false);
  const [title, setTitle] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        console.log(users)
        setMonsters(users);
        setFilterMonsters(users);
      });
  }, []);


  //FILTER MONSTERS

  const filteredMonsters = (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredMonsters = isChecked
      ? monsters.filter((monster) =>
        monster.address.city.toLowerCase().includes(searchString)
      )
      : monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchString)
      );
    setFilterMonsters(filteredMonsters);
  };


  //MODIFY TITLE

  const titleChange = (e) => {
    const searchString = e.target.value;
    setTitle(searchString);
  };


  //ADD MONSTERS

  const addMonsters = (monster) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newMonsterData = { id, ...monster };
    setNewMonster([...newMonster, newMonsterData]);
    console.log(newMonsterData);
  };

  //REMOVE MONSTERS

  const removeMonsters = (id) => {
    setNewMonster(newMonster.filter((monster) => monster.id !== id))
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='mt-10 mb-5 text-3xl font-monster font-extrabold text-teal-600'>{title}</h1>
      <SearchBox onChangeHandler={filteredMonsters} isChecked={isChecked} setIsChecked={setIsChecked} placeholder='search monsters' className=' bg-white w-40 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 rounded-md p-3 leading-tight shadow-sm' />
      <SearchBox onChangeHandler={titleChange} placeholder='set title' className=' bg-white w-40 mb-10 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 rounded-md p-3 leading-tight shadow-sm' />
      <CardList monsters={filterMonsters} />
      <h1 className='mt-10 mb-5 text-3xl font-monster font-extrabold text-teal-600'>Add Your Monster</h1>
      <AddMonsters onAdd={addMonsters} />
      <NewMonsterCardList newMonster={newMonster} onDelete={removeMonsters} />
    </div>
  )
}

export default App;




