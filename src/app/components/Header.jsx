import Image from 'next/image';
import Search from './Search';

function Header() {
  return (
    <header className="w-full p-1 bg-secondary-bg text-text-primary flex justify-between items-center">
      <div className="logo flex items-center gap-4 cursor-pointer">
        <div className="w-15 h-15 relative overflow-hidden rounded-full border-2 border-white">
          <Image src="/cat-1045782_640.jpg" alt="logo" fill className="object-cover" />
        </div>
        <p className="text-white text-xl">Dashboard</p>
      </div>
      <Search />
    </header>
  );
}

export default Header;
