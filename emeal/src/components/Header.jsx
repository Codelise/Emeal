export default function RecipeHeader() {
  return (
    <>
      {/* <!-- Sticky Navigation --> */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background-light/80 backdrop-blur-md border-primary/10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* <!-- Logo --> */}
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                <span className=" material-icons-round">restaurant_menu</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">
                RecipeHub
              </span>
            </div>
            {/* <!-- Nav Links --> */}
            <div className="flex items-center space-x-8">
              <a
                className="text-sm font-semibold transition-opacity text-primary hover:opacity-80"
                href="#"
              >
                Home
              </a>
              <a
                className="text-sm font-medium transition-colors text-slate-500 hover:text-primary"
                href="#"
              >
                Favorites
              </a>
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <span className="material-icons-round text-[20px]">
                  person_outline
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
