/* eslint-disable react/prop-types */
import { FaTimes } from 'react-icons/fa'

const NewMonsterCardList = ({ newMonster, onDelete }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newMonster.map((monster) => {
            return (
                <div className='bg-teal-600 rounded hover:scale-105 transition duration-300 mb-6 py-10 px-5 flex flex-col items-center' key={monster.id}>
                <FaTimes size={24} className='text-red-600 cursor-pointer' onClick={() => onDelete(monster.id)}/>    
                <img alt={monster.name}
                        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} ></img>
                    <h2 className="font-bold p-6 ">{monster.name}</h2>
                    <p className="">{monster.email}</p>
                </div>
            )
        })}
    </div>
    );
  };
  
  export default NewMonsterCardList;
  
  