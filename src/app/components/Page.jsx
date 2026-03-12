'use client';
import { useEffect, useState } from 'react';
// import { data } from '../data/data';
import Card from './Card';
import Header from './Header';
import NavComponent from './NavComponent';
import SideBar from './SideBar';

function Page({ data }) {
  const [items, setItems] = useState(data);
  const [sort, setSort] = useState(null);
  const [filter, setFilter] = useState(false);
  const [book, setBook] = useState();
  useEffect(() => {
    sort == true
      ? setItems((items) => [...items].sort((a, b) => a.item_name.localeCompare(b.item_name)))
      : sort == false
        ? setItems((items) => [...items].sort((a, b) => b.item_name.localeCompare(a.item_name)))
        : setItems(items);
  }, [sort]);

  return (
    <div className="">
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="fixed top-23 left-5 w-1/5">
        <SideBar />
      </div>
      <div className="ml-[22%] bg-primary-bg pr-10">
        <div className="flex flex-col gap-5">
          <div className="fixed top-[70] z-30 w-[78%] flex justify-between p-6 bg-primary-bg">
            <NavComponent setFilter={setFilter} setSort={setSort} filter={filter} />
          </div>
          <main className="mt-30">
            <div className="flex flex-col gap-3 justify-center items-center p-5">
              {(filter ? items.filter((item) => item.saved) : items).map((item) => (
                <Card key={item.id} item={item} items={items} setBook={setBook} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Page;
