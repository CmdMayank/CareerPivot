function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
      <h1 className="text-2xl font-bold">Career Pivot</h1>

      <div className="hidden gap-8 text-gray-600 md:flex">
        <a href="#">How It Works</a>
        <a href="#">Explore Roles</a>
        <a href="#">Pricing</a>
      </div>

      <button className="rounded-xl bg-black px-5 py-2 text-white">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;