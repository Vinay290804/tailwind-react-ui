function Header({ title }) {
  return (
    <header className="bg-blue-600 text-white text-center py-4 rounded-lg shadow">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
}

export default Header;