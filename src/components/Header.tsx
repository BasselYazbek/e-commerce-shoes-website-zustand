function Header() {
  return (
    <div className="flex w-[100%] justify-between text-align  bg-gray-300 p-10 text-3xl">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex gap-4">
        <a href="">Link 1</a>
        <a href="">Link 2</a>
        <a href="">Link 3</a>
      </div>
    </div>
  );
}

export default Header;
