'use client';

function sideBar() {
  return (
    <div className="bg-secondary-bg h-205 p-5 rounded-2xl space-y-5 w-full text-white" >
      <h3 className="text-shadow-2xs text-sm text-gray-500">MENU</h3>
      <button className='w-full rounded-xl p-5 bg-sidebar-bg text-start cursor-pointer'>Overview</button>
      <button className='w-full rounded-xl p-5 bg-sidebar-bg text-start cursor-pointer'>Items</button>
      <button className='w-full rounded-xl p-5 bg-sidebar-bg text-start cursor-pointer'>Orders</button>
      <button className='w-full rounded-xl p-5 bg-sidebar-bg text-start cursor-pointer'>Customers</button>
      <button className='w-full rounded-xl p-5 bg-sidebar-bg text-start cursor-pointer'>Settings</button>
    </div>
  );
}

export default sideBar;
