/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Card = ({ monsters }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {monsters.map((monster) => {
                const { name, email, id, address } = monster;
                return (
                    <div className='bg-teal-600 rounded hover:scale-105 transition duration-300 mb-6 py-10 flex flex-col items-center' key={id}>
                        <img alt={name}
                            src={`https://robohash.org/${id}?set=set2&size=180x180`} ></img>
                        <h2 className="font-bold p-6 ">{name}</h2>
                        <p className="p-3">{email}</p>
                        <p className="">{address.city}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Card



