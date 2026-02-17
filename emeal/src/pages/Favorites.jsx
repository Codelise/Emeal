export default function Favorites() {
  return (
    <>
      {/* <!-- Navigation Bar --> */}
      <nav class="sticky top-0 z-50 bg-white/80  backdrop-blur-md border-b border-primary/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-20 items-center">
            <div class="flex items-center gap-2">
              <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                <span class="material-icons">restaurant_menu</span>
              </div>
              <span class="text-2xl font-bold tracking-tight text-primary">
                RecipeHub
              </span>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a
                class="text-slate-600  hover:text-primary transition-colors font-medium"
                href="#"
              >
                Browse
              </a>
              <a
                class="text-primary font-semibold flex items-center gap-1"
                href="#"
              >
                <span class="material-icons text-sm">favorite</span>
                Favorites
              </a>
              <a
                class="text-slate-600  hover:text-primary transition-colors font-medium"
                href="#"
              >
                My Kitchen
              </a>
              <div class="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/20">
                <img
                  class="w-full h-full object-cover"
                  data-alt="User profile picture of a woman smiling"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtMetpF-VgOLd_evBHj-FMI4FhAZUg3EDBFDeNumUnbRm5ZwisRukdOKxoSGmQibA6ZQ_UKltCin3m2w3UgROg5hs2yx7XT46s9PCS_yw713lt1rNZztIMpZEwkxCf2N_XIXmClguhyS4TCwIywMurx7BeTkO16RTZLcQdl6DfKGgU26JoBBzHXoINSYCMPTUAWHQza3NZwaRhkykf-c_kkgJETHAOeCKafA5OAn6TeP_wBYSLUqJ0o8I2POIcXYy0nbFJEML4JSg"
                />
              </div>
            </div>
            <button class="md:hidden text-slate-600">
              <span class="material-icons">menu</span>
            </button>
          </div>
        </div>
      </nav>
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* <!-- Page Header --> */}
        <div class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 class="text-4xl font-bold text-slate-900  mb-2">
              My Favorites
            </h1>
            <p class="text-slate-500 ">
              You have 8 recipes saved in your cookbook.
            </p>
          </div>
          <div class="flex items-center gap-3">
            <div class="relative">
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-icons text-sm">
                search
              </span>
              <input
                class="pl-10 pr-4 py-2 bg-white  border border-primary/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all w-64"
                placeholder="Search favorites..."
                type="text"
              />
            </div>
            <button class="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
              <span class="material-icons">filter_list</span>
            </button>
          </div>
        </div>
        {/* <!-- Favorites Grid --> */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* <!-- Recipe Card 1 --> */}
          <div class="group bg-white  rounded-xl overflow-hidden border border-primary/5 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col">
            <div class="relative aspect-[4/3] overflow-hidden">
              <img
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt="Plate of fresh pasta with pesto and tomatoes"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYGo84RBgXV7JJvd-EVEP5CguJj4s6lOA1Z1Gu6YxJlsozF91udWQt29q7yCyy2bCzID_M2Ol35WGAps5ZrRQGBC0DRmKoJpKOwRZvQKxzDouWvbT_Et4CSGGRJoz7oFIPUV52ogANuLCP84_jILH2ch5kG1iNiNj6gBXYeRUUnFUpUk3P-EMBGZNNLWu6B0vHxunlic1By0tnqIovwtIyl-7PfkfcUpnPWPunL-ZyBgq8rEyjhNTxHwiGKNE-1anny66uS-4SSx8"
              />
              <button class="absolute top-3 right-3 p-2 bg-white/90  text-red-500 rounded-full shadow-lg hover:bg-red-50 transition-colors group/btn">
                <span class="material-icons text-xl group-hover/btn:scale-110 transition-transform">
                  delete_outline
                </span>
              </button>
              <div class="absolute bottom-3 left-3 px-2 py-1 bg-black/40 backdrop-blur-md rounded text-white text-xs font-medium">
                Dinner
              </div>
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <div class="flex items-center gap-1 text-primary mb-2">
                <span class="material-icons text-xs">star</span>
                <span class="material-icons text-xs">star</span>
                <span class="material-icons text-xs">star</span>
                <span class="material-icons text-xs">star</span>
                <span class="material-icons text-xs">star_half</span>
                <span class="text-xs font-semibold ml-1 text-slate-500">
                  4.8
                </span>
              </div>
              <h3 class="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                Creamy Pesto Penne
              </h3>
              <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 ">
                <div class="flex items-center gap-3 text-slate-500  text-sm">
                  <span class="flex items-center gap-1">
                    <span class="material-icons text-xs">schedule</span> 25m
                  </span>
                  <span class="flex items-center gap-1">
                    <span class="material-icons text-xs">restaurant</span> Easy
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Recipe Card 2 --> */}
          <div class="group bg-white  rounded-xl overflow-hidden border border-primary/5 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col">
            <div class="relative aspect-[4/3] overflow-hidden">
              <img
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt="Healthy Buddha bowl with avocado and chickpeas"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVqyVmqNLy5RzMXD6jZVBx1eMcicVp8TUVeCK_2lCvmbT_mA75GF1J4oJH6uJfzgyUpIsJfQTBp2ZLPabJmazRmGHaZlYgb_5EKgTsaT5jPK-E76D8IHeRd-70hLaWEvLD1QxnZyy3OhqPaVXfszcq63vlajHp5XoJcyl-gqxWzHqqlKPUC7sFCAC9buNkT4n2ctjBSB0g8A17ZffRhZBP0Cab7sgJjZN1AEKcUM5KFp31_to-DFWDTJOf4f_fjzesrKNEW05Hb6I"
              />
              <button class="absolute top-3 right-3 p-2 bg-white/90  text-red-500 rounded-full shadow-lg hover:bg-red-50 transition-colors group/btn">
                <span class="material-icons text-xl group-hover/btn:scale-110 transition-transform">
                  delete_outline
                </span>
              </button>
              <div class="absolute bottom-3 left-3 px-2 py-1 bg-black/40 backdrop-blur-md rounded text-white text-xs font-medium">
                Healthy
              </div>
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <div class="flex items-center gap-1 text-primary mb-2">
                <span class="material-icons text-xs">star</span>
                <span class="material-icons text-xs">star</span>
                <span class="material-icons text-xs">star</span>
                <span class="material-icons text-xs">star</span>
                <span class="material-icons text-xs">star</span>
                <span class="text-xs font-semibold ml-1 text-slate-500">
                  5.0
                </span>
              </div>
              <h3 class="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                Power Buddha Bowl
              </h3>
              <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 ">
                <div class="flex items-center gap-3 text-slate-500  text-sm">
                  <span class="flex items-center gap-1">
                    <span class="material-icons text-xs">schedule</span> 15m
                  </span>
                  <span class="flex items-center gap-1">
                    <span class="material-icons text-xs">restaurant</span> Quick
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Recipe Card 3 --> */}
          <div class="group bg-white  rounded-xl overflow-hidden border border-primary/5 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col">
            <div class="relative aspect-[4/3] overflow-hidden">
              <img
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt="Stack of fluffy pancakes with berries"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBKOR60kN8ikq7J7wQAuaPH9Khj5ZuXYGAJNtTXogwF5kpEsmeDY3-PwEbuopEcPm0r_1UE_pSDEeZqkYNKMdubfA31jqa5ucgJn0WYDjdM5D1KoCZZvtPEjpUTs1re6JvbFMWEawpECzcgEmotwl9mX3ATwPVwV7SO3IWknoqWDX_j6Mb1Wis-DTajCiusuO05DwfF704iT2kWE6Ulmh4gLvrXx1xSvfg4tJlX6p6Z0fjIDWwhbj0afx6B60HiD9sjn2zW_3BOGE"
              />
              <button class="absolute top-3 right-3 p-2 bg-white/90  text-red-500 rounded-full shadow-lg hover:bg-red-50 transition-colors group/btn">
                <span class="material-icons text-xl group-hover/btn:scale-110 transition-transform">
                  delete_outline
                </span>
              </button>
              <div class="absolute bottom-3 left-3 px-2 py-1 bg-black/40 backdrop-blur-md rounded text-white text-xs font-medium">
                Breakfast
              </div>
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <div class="flex items-center gap-1 text-primary mb-2">
                <span class="material-icons text-xs">star</span>
                <span class="material-icons text-xs">star</span>
                <span class="material-icons text-xs">star</span>
                <span class="material-icons text-xs">star</span>
                <span class="material-icons text-xs">star_outline</span>
                <span class="text-xs font-semibold ml-1 text-slate-500">
                  4.2
                </span>
              </div>
              <h3 class="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                Berry Fluffy Pancakes
              </h3>
              <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 ">
                <div class="flex items-center gap-3 text-slate-500  text-sm">
                  <span class="flex items-center gap-1">
                    <span class="material-icons text-xs">schedule</span> 20m
                  </span>
                  <span class="flex items-center gap-1">
                    <span class="material-icons text-xs">restaurant</span> Easy
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Recipe Card 4 --> */}
          <div class="group bg-white  rounded-xl overflow-hidden border border-primary/5 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col">
            <div class="relative aspect-[4/3] overflow-hidden">
              <img
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt="Gourmet BBQ ribs with honey glaze"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-BtojfmvvVTfpAhBeW103ycYd-ujnnVhfo9x-F-SGvTiNwcOsHcBIhcbdMW3l-m_mL_IQ0BnAyTcqkMpoH89w8856jvelr8KzTrIwyWHITx6XjShjueAnsuoFH8AFcTnODGdASvL_fB1bduzeBBhjn1VMgmtzK3QbtlvnBfTBSAuXRqkOsTeUufJXABa3FDyWnhg4LEfjVXN8eUQa8bmRAjO7rN0orvyIn5bfqpEU2fJtYe89eyY3yeBOMp75T0RUDScZ2wUA6A0"
              />
              <button class="absolute top-3 right-3 p-2 bg-white/90  text-red-500 rounded-full shadow-lg hover:bg-red-50 transition-colors group/btn">
                <span class="material-icons text-xl group-hover/btn:scale-110 transition-transform">
                  delete_outline
                </span>
              </button>
              <div class="absolute bottom-3 left-3 px-2 py-1 bg-black/40 backdrop-blur-md rounded text-white text-xs font-medium">
                Chef Special
              </div>
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <div class="flex items-center gap-1 text-primary mb-2">
                <span class="material-icons text-xs">star</span>
                <span class="material-icons text-xs">star</span>
                <span class="material-icons text-xs">star</span>
                <span class="material-icons text-xs">star</span>
                <span class="material-icons text-xs">star</span>
                <span class="text-xs font-semibold ml-1 text-slate-500">
                  4.9
                </span>
              </div>
              <h3 class="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                Honey Glazed Ribs
              </h3>
              <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 ">
                <div class="flex items-center gap-3 text-slate-500  text-sm">
                  <span class="flex items-center gap-1">
                    <span class="material-icons text-xs">schedule</span> 1h 20m
                  </span>
                  <span class="flex items-center gap-1">
                    <span class="material-icons text-xs">restaurant</span> Pro
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Optional Empty State Example (Hidden by default, shown for demonstration if grid was empty) --> */}
        <div class="hidden flex flex-col items-center justify-center py-20 px-4 text-center">
          <div class="w-64 h-64 bg-primary/5 rounded-full flex items-center justify-center mb-8">
            <div class="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center relative">
              <span class="material-icons text-8xl text-primary/40">
                restaurant
              </span>
              <span class="material-icons absolute top-8 right-8 text-4xl text-primary animate-bounce">
                favorite
              </span>
            </div>
          </div>
          <h2 class="text-3xl font-bold text-slate-900  mb-4">
            Your cookbook is empty!
          </h2>
          <p class="text-slate-500  max-w-md mx-auto mb-10">
            You haven't saved any recipes yet. Start exploring and click the
            heart icon to add recipes to your favorites.
          </p>
          <button class="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
            <span class="material-icons">search</span>
            Browse Recipes
          </button>
        </div>
        {/* <!-- Pagination / Load More (Contextual) --> */}
        <div class="mt-16 flex justify-center">
          <button class="px-8 py-3 bg-white  border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
            Load More Favorites
          </button>
        </div>
      </main>
      {/* <!-- Footer --> */}
      <footer class="bg-white  border-t border-primary/10 py-12 mt-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="flex items-center justify-center gap-2 mb-6">
            <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span class="material-icons text-sm">restaurant_menu</span>
            </div>
            <span class="text-xl font-bold tracking-tight text-primary">
              RecipeHub
            </span>
          </div>
          <div class="flex justify-center space-x-6 mb-8 text-slate-500 ">
            <a class="hover:text-primary transition-colors" href="#">
              About
            </a>
            <a class="hover:text-primary transition-colors" href="#">
              Privacy
            </a>
            <a class="hover:text-primary transition-colors" href="#">
              Terms
            </a>
            <a class="hover:text-primary transition-colors" href="#">
              Support
            </a>
          </div>
          <p class="text-slate-400 text-sm">© 2024 RecipeHub. Happy cooking!</p>
        </div>
      </footer>
    </>
  );
}
