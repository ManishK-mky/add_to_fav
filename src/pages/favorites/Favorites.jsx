import React, { useContext } from 'react';
import { GlobalContext } from '../../context/context';
import { Link } from 'react-router-dom';

function Favorites() {

  const {favoritesList} = useContext(GlobalContext)
    
  console.log(favoritesList)

    return (
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 bg-gray-200 w-full h-full gap-y-5 pl-5 py-[21px] rounded">
          {favoritesList && favoritesList.length > 0 ? favoritesList.map((item) => (
            <div className="w-[90%] h-[60vh] bg-white p-2 rounded-[15px]" key={item.id}>
              <div className="w-full h-[40vh] flex items-center justify-center overflow-hidden rounded-[21px]">
                <img src={item.image_url} alt={item.title} className="object-cover w-full h-full" />
              </div>
              <p className='mt-2 ml-3 text-[15px] font-semibold text-blue-500'>{item.publisher}</p>
              <p className="ml-3 mb-2 text-[15px] font-light">{item.title.substring(0,20)}...</p>
              <Link to = {`/recipe-item/${item.id}`} className='mt-[21px] ml-2 text-[15px] bg-red-400 px-[21px] py-[6px] rounded-[12px] text-white'>Recipe Details</Link>
            </div>
          )):
          (
            <p>Add Product to favorite to see here...</p>
          )}
        </div>
      </div>
  )
}

export default Favorites
