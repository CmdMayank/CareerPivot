function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 md:flex-row">
        
        <div>
          <h3 className="text-xl font-bold">Career Pivot</h3>
          <p className="mt-2 text-sm text-gray-500">
            Helping students bridge the gap between where they are and where they want to be.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#">How It Works</a>
          <a href="#">Explore Roles</a>
          <a href="#">GitHub</a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        © 2026 Career Pivot. Built by Mayank.
      </div>
    </footer>
  );
}

export default Footer;