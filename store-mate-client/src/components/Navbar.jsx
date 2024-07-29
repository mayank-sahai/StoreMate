export function Navbar() {
  return (
    <header className=" bg-white shadow-md flex p-2 md:p-4 m-4 md:m-8 rounded-lg items-center">
      <div className="flex-none"><p className="text-xl font-bold p-2 md:p-1">STOREMATE</p></div>
      <div className="flex-1 flex justify-end">
            <a href="#" className="rounded-md px-4 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white">CONTACT</a>
            <a href="#" className="rounded-md px-4 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white">LOGIN</a>
      </div>
    </header>
  );
}
