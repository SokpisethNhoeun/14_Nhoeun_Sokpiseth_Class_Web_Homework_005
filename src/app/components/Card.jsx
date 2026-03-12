'use client';

import { Bookmark } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
function Card({ item, items, setBook }) {
  const [display, setDisplay] = useState(false);
  const toggleBook = (id) => {
    // items.map(i => i.id == id ? i.saved = !i.saved  : items)
    setBook(items.map((i) => (i.id == id ? (i.saved = !i.saved) : null)));
  };
  return (
    <>
      {display == true ? (
        <div className="fixed top-0 left-0 w-full h-screen  flex items-center justify-center z-100 backdrop-brightness-80">
          <div className="bg-primary-bg w-1/3 max-h-max p-5 gap-2 flex flex-col items-start justify-start rounded-2xl">
            <div className="w-full flex justify-between items-center">
              <h1 className="font-extrabold">Items details</h1>
              <div
                className="border border-gray-500 rounded-lg p-1 cursor-pointer"
                onClick={() => setDisplay(false)}
              >
                Close
              </div>
            </div>
            <div className="flex items-center mt-5">
              <h1 className="font-bold">ID : </h1> <span className="text-gray-400"> {item.id}</span>
            </div>
            <div className="flex items-center">
              <h1 className="font-bold">Name : </h1>
              <span className="text-gray-400"> {item.item_name}</span>
            </div>
            <div className="flex items-center">
              <h1 className="font-bold">Price : </h1>
              <span className="text-gray-400"> ${item.item_price}</span>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold">Description : </h1>
              <span className="text-gray-400"> {item.item_description}</span>
            </div>
          </div>
        </div>
      ) : null}
      <div
        className="flex items-center justify-between w-full bg-card-bg p-5 rounded-2xl"
        key={item.id}
      >
        <div className="flex gap-2 justify-center items-center">
          <Image
            src={item.image}
            alt="items"
            width={100}
            height={100}
            style={{ borderRadius: '1rem' }}
          />
          <div className="flex flex-col">
            <div className="flex gap-3">
              <p className="font-bold ">{item.item_name}</p>
              <p className="font-sm text-shadow-gray-500 text-sm text-gray-500">
                {' '}
                ${item.item_price}
              </p>
              <div className="cursor-pointer" onClick={() => toggleBook(item.id)}>
                {item.saved ? <Bookmark fill="yellow" /> : <Bookmark />}
              </div>
            </div>
            <p className="text-shadow-gray-500 text-gray-500">{item.item_description}</p>
          </div>
        </div>
        <div className="">
          <button className="px-5 py-3 bg-btn-bg rounded-xl" onClick={() => setDisplay(true)}>
            View
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
