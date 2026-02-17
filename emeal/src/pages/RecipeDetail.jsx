export default function RecipeDetail() {
  return (
    <>
      {/* <!-- Navigation Bar --> */}
      <nav className="sticky top-0 z-50 border-b bg-background-light/80 backdrop-blur-md border-primary/10">
        <div className="flex items-center justify-between h-16 max-w-6xl px-4 mx-auto">
          <button className="flex items-center gap-2 transition-colors text-stone-600 hover:text-primary group">
            <span className="text-lg transition-transform material-icons-outlined group-hover:-translate-x-1">
              arrow_back
            </span>
            <span className="font-medium">Back to Search</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-3xl material-icons-outlined text-primary">
              restaurant_menu
            </span>
            <span className="text-xl font-bold tracking-tight">
              Recipe<span className="text-primary">Hub</span>
            </span>
          </div>
          <button className="flex items-center justify-center p-2 transition-all rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white">
            <span className="material-icons-outlined">share</span>
          </button>
        </div>
      </nav>
      <main className="max-w-6xl px-4 py-8 mx-auto">
        {/* <!-- Hero Section --> */}
        <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-xl mb-8">
          <img
            alt="Spicy Garlic Shrimp Pasta"
            className="object-cover w-full h-full"
            data-alt="Close up of delicious spicy garlic shrimp pasta with parsley"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4hgF6ML6NGy--cpPlKIZbugJoh-O6s15vyfz0Ero_KxSOmmNkG4AB4N6peqL23Eji9tWpo5YykxiKFdKhMY8gX1Rm_gETX-peirH2TXCfrrrfqbv3mv2s6FTDd2k_XV0BPGSjXCgIQ5eMbIrYFdkzuC6FboraQMshHj2D2DX-Vb404tqvyHGse5zgPlzDIlnk_9OpeKEQnW_ldqvu1WRf01LoXVOK53fP87DO2kSELgI8jQ54OLbFMkfnUzlMCncg--vu4ahuYMM"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute flex items-end justify-between bottom-8 left-8 right-8">
            <div>
              <span className="inline-block px-3 py-1 mb-3 text-sm font-semibold tracking-wider text-white uppercase rounded-full bg-primary">
                Italian Fusion
              </span>
              <h1 className="text-4xl font-bold text-white md:text-5xl drop-shadow-md">
                Spicy Garlic Shrimp Pasta
              </h1>
            </div>
            <button className="p-4 transition-transform bg-white rounded-full shadow-lg group hover:scale-110">
              <span className="material-icons-outlined text-primary group-hover:scale-110">
                favorite
              </span>
            </button>
          </div>
        </div>
        {/* <!-- Recipe Meta Bar --> */}
        <div className="grid grid-cols-2 gap-4 mb-12 md:grid-cols-4">
          <div className="flex items-center gap-4 p-4 bg-white border rounded-lg shadow-sm border-primary/5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
              <span className="material-icons-outlined">schedule</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-stone-500 ">
                Prep Time
              </p>
              <p className="text-lg font-bold">15 Mins</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white border rounded-lg shadow-sm border-primary/5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
              <span className="material-icons-outlined">timer</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-stone-500 ">
                Cook Time
              </p>
              <p className="text-lg font-bold">20 Mins</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white border rounded-lg shadow-sm border-primary/5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
              <span className="material-icons-outlined">group</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-stone-500 ">
                Servings
              </p>
              <p className="text-lg font-bold">4 People</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white border rounded-lg shadow-sm border-primary/5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
              <span className="material-icons-outlined">bolt</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-stone-500 ">
                Calories
              </p>
              <p className="text-lg font-bold">420 kcal</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* <!-- Sidebar: Ingredients --> */}
          <aside className="w-full lg:w-1/3">
            <div className="sticky p-8 bg-white border shadow-sm rounded-xl border-primary/5 top-24">
              <h2 className="flex items-center gap-2 mb-6 text-2xl font-bold">
                <span className="material-icons-outlined text-primary">
                  shopping_basket
                </span>
                Ingredients
              </h2>
              <div className="space-y-4">
                <label className="flex items-center gap-4 cursor-pointer group">
                  <input
                    className="w-6 h-6 rounded border-stone-300 text-primary focus:ring-primary"
                    type="checkbox"
                  />
                  <span className="transition-colors text-stone-700 group-hover:text-primary">
                    400g Spaghetti or Linguine
                  </span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer group">
                  <input
                    className="w-6 h-6 rounded border-stone-300 text-primary focus:ring-primary"
                    type="checkbox"
                  />
                  <span className="transition-colors text-stone-700 group-hover:text-primary">
                    500g Large Shrimp, peeled &amp; deveined
                  </span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer group">
                  <input
                    className="w-6 h-6 rounded border-stone-300 text-primary focus:ring-primary"
                    type="checkbox"
                  />
                  <span className="transition-colors text-stone-700 group-hover:text-primary">
                    6 Cloves of Garlic, minced
                  </span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer group">
                  <input
                    className="w-6 h-6 rounded border-stone-300 text-primary focus:ring-primary"
                    type="checkbox"
                  />
                  <span className="transition-colors text-stone-700 group-hover:text-primary">
                    1/2 cup Extra Virgin Olive Oil
                  </span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer group">
                  <input
                    className="w-6 h-6 rounded border-stone-300 text-primary focus:ring-primary"
                    type="checkbox"
                  />
                  <span className="transition-colors text-stone-700 group-hover:text-primary">
                    1 tsp Red Chili Flakes
                  </span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer group">
                  <input
                    className="w-6 h-6 rounded border-stone-300 text-primary focus:ring-primary"
                    type="checkbox"
                  />
                  <span className="transition-colors text-stone-700 group-hover:text-primary">
                    1/4 cup Fresh Parsley, chopped
                  </span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer group">
                  <input
                    className="w-6 h-6 rounded border-stone-300 text-primary focus:ring-primary"
                    type="checkbox"
                  />
                  <span className="transition-colors text-stone-700 group-hover:text-primary">
                    Salt and Black Pepper to taste
                  </span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer group">
                  <input
                    className="w-6 h-6 rounded border-stone-300 text-primary focus:ring-primary"
                    type="checkbox"
                  />
                  <span className="transition-colors text-stone-700 group-hover:text-primary">
                    1 Lemon, for zest and juice
                  </span>
                </label>
              </div>
              <button className="flex items-center justify-center w-full gap-2 py-4 mt-8 font-bold transition-all border-2 rounded-lg bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white">
                <span className="material-icons-outlined">
                  add_shopping_cart
                </span>
                Add All to Cart
              </button>
            </div>
          </aside>
          {/* <!-- Main Content: Instructions --> */}
          <div className="flex-1">
            <h2 className="flex items-center gap-3 mb-8 text-3xl font-bold">
              <span className="material-icons-outlined text-primary">
                menu_book
              </span>
              Cooking Instructions
            </h2>
            <div className="space-y-12">
              {/* <!-- Step 1 --> */}
              <div className="relative pl-12">
                <div className="absolute top-0 left-0 flex items-center justify-center w-8 h-8 font-bold text-white rounded-full shadow-md bg-primary">
                  1
                </div>
                <h3 className="mb-3 text-xl font-bold">Prepare the Pasta</h3>
                <p className="mb-4 leading-relaxed text-stone-600 ">
                  Bring a large pot of salted water to a boil. Add the pasta and
                  cook according to package directions until al dente. Reserve
                  about 1/2 cup of the pasta cooking water before draining.
                </p>
                <div className="w-full h-48 overflow-hidden rounded-lg">
                  <img
                    alt="Boiling pasta"
                    className="object-cover w-full h-full opacity-80"
                    data-alt="Boiling pasta in a large stainless steel pot"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL6jSGpUR6smWa4CXHpE6LMHI850r3wabMZdwrJebDsfTPwHj-chM4Hjd4RSGwVNGh7Oj1Pj3V3k2La-kVz23A4cHtkLJ8_cXQzXxV4ewpkgkzcZaIYWJ6lK0Wi4bA1WSchTm4VwmtWXXJdQw_N4rEOGJnFKLYnTuWDoIDJBt52drO8vdtoNecpafHuBLAfRp0hRF_SE7WExJSu806os-TaKBQmFzEGf8pSxUz52fdikS6hwSoCrTmfPvJQqN-tiLl6KiPf42WVC4"
                  />
                </div>
              </div>
              {/* <!-- Step 2 --> */}
              <div className="relative pl-12">
                <div className="absolute top-0 left-0 flex items-center justify-center w-8 h-8 font-bold text-white rounded-full shadow-md bg-primary">
                  2
                </div>
                <h3 className="mb-3 text-xl font-bold">
                  Sauté Aromatics and Shrimp
                </h3>
                <p className="leading-relaxed text-stone-600 ">
                  While the pasta cooks, heat olive oil in a large skillet over
                  medium heat. Add the minced garlic and red chili flakes. Sauté
                  for about 1 minute until fragrant but not browned. Add the
                  shrimp in a single layer, season with salt and pepper. Cook
                  for 2 minutes per side until pink and opaque.
                </p>
              </div>
              {/* <!-- Step 3 --> */}
              <div className="relative pl-12">
                <div className="absolute top-0 left-0 flex items-center justify-center w-8 h-8 font-bold text-white rounded-full shadow-md bg-primary">
                  3
                </div>
                <h3 className="mb-3 text-xl font-bold">Combine and Emulsify</h3>
                <p className="leading-relaxed text-stone-600 ">
                  Transfer the cooked pasta directly into the skillet with the
                  shrimp. Add the lemon zest, lemon juice, and half of the
                  chopped parsley. If the pasta looks too dry, splash in some of
                  the reserved pasta water while tossing everything together
                  over medium heat.
                </p>
              </div>
              {/* <!-- Step 4 --> */}
              <div className="relative pl-12">
                <div className="absolute top-0 left-0 flex items-center justify-center w-8 h-8 font-bold text-white rounded-full shadow-md bg-primary">
                  4
                </div>
                <h3 className="mb-3 text-xl font-bold">Final Garnish</h3>
                <p className="leading-relaxed text-stone-600 ">
                  Remove from heat. Sprinkle with the remaining parsley and an
                  extra drizzle of high-quality olive oil if desired. Serve
                  immediately while hot.
                </p>
              </div>
            </div>
            {/* <!-- Footer Recipe Action --> */}
            <div className="p-8 mt-16 text-center border-2 border-dashed bg-primary/5 rounded-xl border-primary/20">
              <h4 className="mb-4 text-xl font-bold">
                Did you make this recipe?
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                  <span className="material-icons-outlined">photo_camera</span>
                  Share a Photo
                </button>
                <button className="flex items-center gap-2 px-6 py-3 font-bold transition-all bg-white rounded-lg shadow text-stone-700 hover:shadow-lg">
                  <span className="material-icons-outlined">reviews</span>
                  Write a Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- Floating Favorite Button (Mobile/Tablet specific feel but visible on desktop) --> */}
      <div className="fixed z-40 bottom-8 right-8 lg:hidden">
        <button className="flex items-center justify-center w-16 h-16 text-white transition-all rounded-full shadow-2xl bg-primary hover:scale-110 active:scale-95">
          <span className="text-3xl material-icons-outlined">favorite</span>
        </button>
      </div>
      {/* <!-- Simple Footer --> */}
      <footer className="py-12 mt-20 border-t bg-stone-100 border-stone-200 ">
        <div className="flex flex-col items-center justify-between max-w-6xl gap-8 px-4 mx-auto md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-2xl material-icons-outlined text-primary">
              restaurant_menu
            </span>
            <span className="text-lg font-bold tracking-tight">
              Recipe<span className="text-primary">Hub</span>
            </span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-stone-500 ">
            <a className="hover:text-primary" href="#">
              About Us
            </a>
            <a className="hover:text-primary" href="#">
              Meal Plans
            </a>
            <a className="hover:text-primary" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary" href="#">
              Terms of Service
            </a>
          </div>
          <p className="text-sm text-stone-400">
            © 2024 RecipeHub. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
