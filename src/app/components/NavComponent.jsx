import { ArrowUpAZ, ArrowUpZA, BookMarked } from 'lucide-react';

function NavComponent({ setFilter, setSort, filter }) {
  return (
    <nav className="flex items-center justify-between w-full">
      <button
        className="block p-2 bg-white rounded-xl text-black cursor-pointer hover:bg-yellow-300"
        onClick={() => {
          setSort(null);
          setFilter(false);
        }}
      >
        Back
      </button>
      <ul className="flex items-center gap-2">
        <div
          className="flex gap-3 cursor-pointer hover:text-yellow-500"
          onClick={() => setFilter(!filter)}
        >
          Your BookMarked <BookMarked />
        </div>
        <div className="hover:text-yellow-500 cursor-pointer">
          <ArrowUpAZ onClick={() => setSort(true)} />
        </div>
        <div className="hover:text-yellow-500 cursor-pointer">
          <ArrowUpZA onClick={() => setSort(false)} />
        </div>
      </ul>
    </nav>
  );
}

export default NavComponent;
