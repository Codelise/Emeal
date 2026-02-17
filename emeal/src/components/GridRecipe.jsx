export default function GridRecipe() {
  return (
    <>
      <section className="px-4 pb-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900 ">
            Trending Recipes
          </h2>
          <button className="flex items-center gap-1 text-sm font-semibold transition-all text-primary hover:gap-2">
            View All{" "}
            <span className="text-sm material-icons-round">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* <!-- Recipe Card 1 --> */}
          <div className="overflow-hidden transition-all duration-300 bg-white border shadow-sm cursor-pointer group rounded-xl hover:shadow-xl border-primary/5">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                alt="Spicy Basil Pesto Pasta"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                data-alt="Gourmet spicy basil pesto pasta bowl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLCx29iJN-zvP_tUp9nnzJnYCQjqsuGUbPV4CsGhZRu_uEFyjWh24sdx_EwIM68M8Rx8pRPix9nUX-JzgwAX0Qsy1V7z-R7vssM2nqrSXYl1S5wDgztxAL5gJmrA0HxwDqL_jID2XWnTpkwrQHHb8bO_AniVMGpVgeN7PDlOvq86TuTJog54XEacMgmNHm0IVci6_9LZfLztalQEVoV9XJFEyro14_pFEaPX4B8GqssqP3-kcFh0fe2LZ-p0ojx1KV3JA7gob0yG8"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-lg shadow-sm bg-white/90 backdrop-blur text-primary">
                  Italian
                </span>
              </div>
              <button className="absolute flex items-center justify-center text-white transition-all rounded-full top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-md hover:bg-white hover:text-primary">
                <span className="material-icons-round text-[20px]">
                  favorite_border
                </span>
              </button>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold transition-colors text-slate-900 group-hover:text-primary">
                Spicy Basil Pesto Pasta
              </h3>
              <div className="flex items-center text-sm text-slate-500 ">
                <span className="mr-1 text-sm material-icons-round text-primary">
                  schedule
                </span>
                <span>20 mins</span>
                <span className="mx-3 text-slate-300">•</span>
                <span className="mr-1 text-sm material-icons-round text-primary">
                  bolt
                </span>
                <span>Easy</span>
              </div>
            </div>
          </div>
          {/* <!-- Recipe Card 2 --> */}
          <div className="overflow-hidden transition-all duration-300 bg-white border shadow-sm cursor-pointer group rounded-xl hover:shadow-xl border-primary/5">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                alt="Honey Garlic Glazed Salmon"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                data-alt="Freshly glazed honey garlic salmon fillet"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWATt4zYAKmPGhqcngKjnpifzQIcNqbNeiyCE1P78qI1Kw6UsM5rwHLRn1Xz-iKO3ysHT_Wr3pZF-1EC9eHdt_z45K7BGXGDIyrRRFfGZxipu5gD_cMww6gxbUFfNkGj_mSCQevF12ZYeGTPMa1_e_74_9hO1U0rRWotGOltRxEDyU9pvSFtrZn0b8sbW5AUyIcO5LRFRzEfmlMwc2y2KLHmQ9Bs3WmWpHmFmg3Rjmc4lwaZBGNRTNueJ4sLVoGZCdWNCRH5eA4cw"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-lg shadow-sm bg-white/90 backdrop-blur text-primary">
                  Seafood
                </span>
              </div>
              <button className="absolute flex items-center justify-center text-white transition-all rounded-full top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-md hover:bg-white hover:text-primary">
                <span className="material-icons-round text-[20px]">
                  favorite_border
                </span>
              </button>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold transition-colors text-slate-900 group-hover:text-primary">
                Honey Garlic Glazed Salmon
              </h3>
              <div className="flex items-center text-sm text-slate-500 ">
                <span className="mr-1 text-sm material-icons-round text-primary">
                  schedule
                </span>
                <span>15 mins</span>
                <span className="mx-3 text-slate-300">•</span>
                <span className="mr-1 text-sm material-icons-round text-primary">
                  bolt
                </span>
                <span>Medium</span>
              </div>
            </div>
          </div>
          {/* <!-- Recipe Card 3 --> */}
          <div className="overflow-hidden transition-all duration-300 bg-white border shadow-sm cursor-pointer group rounded-xl hover:shadow-xl border-primary/5">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                alt="Vegetarian Chickpea Curry"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                data-alt="Vibrant vegetarian chickpea curry in bowl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCobjJEIUFJ5yWZ5kOqeVRc3jE_bEUjvnGcm_y1YrgrPW-aueIVRX1FPcVI51tzTJ01Ou4Zz5ytqE-Uic0rfog4USIcaaP15Hs7k0M0Om6Rsyo-c_u5thkOQwFL_lCd8skVA2jGnJgua8g2Pib4OA5n22Tsg892_Ig5wR3ztNVUazo6Y2NyZLjvfvNdLG5JMS3jmg7b7kCJFTp_YFa48hBWfMh8LsrQ_ADhgxk88YRCDUHwsBccpS3p3-ryewuSlkMTD4dHWvnjdGI"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-lg shadow-sm bg-white/90 backdrop-blur text-primary">
                  Indian
                </span>
              </div>
              <button className="absolute flex items-center justify-center text-white transition-all rounded-full top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-md hover:bg-white hover:text-primary">
                <span className="material-icons-round text-[20px]">
                  favorite_border
                </span>
              </button>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold transition-colors text-slate-900 group-hover:text-primary">
                Vegetarian Chickpea Curry
              </h3>
              <div className="flex items-center text-sm text-slate-500 ">
                <span className="mr-1 text-sm material-icons-round text-primary">
                  schedule
                </span>
                <span>30 mins</span>
                <span className="mx-3 text-slate-300">•</span>
                <span className="mr-1 text-sm material-icons-round text-primary">
                  bolt
                </span>
                <span>Easy</span>
              </div>
            </div>
          </div>
          {/* <!-- Recipe Card 4 --> */}
          <div className="overflow-hidden transition-all duration-300 bg-white border shadow-sm cursor-pointer group rounded-xl hover:shadow-xl border-primary/5">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                alt="Berry French Toast"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                data-alt="Fluffy french toast with fresh berries"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUYs9_Scwj_4PanreMhyG8tzYPERhgJYOE6mgfUEMC92QqrCkrJU0LYWCwcdbqj_UmKZFrLbU288hT0wkdp1NBlIJ-ZR0rws_iOK1qgSvOla8Uq_Pz6U-o3fepVhJq13ugyLBC0eubsBmcL-jT2JusvkOjvUqBgbP-w2JfEiGDOlyGXOPjko-ReA-RiZjHwl-MhU7oVzBHzBVpDVm7nSaLWTFS3Afx8FGvy6WsSx2OxELccqu1IP3saPisZBRogTZNy7Oi3ARonxs"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-lg shadow-sm bg-white/90 backdrop-blur text-primary">
                  Breakfast
                </span>
              </div>
              <button className="absolute flex items-center justify-center text-white transition-all rounded-full top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-md hover:bg-white hover:text-primary">
                <span className="material-icons-round text-[20px]">
                  favorite_border
                </span>
              </button>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold transition-colors text-slate-900 group-hover:text-primary">
                Berry French Toast
              </h3>
              <div className="flex items-center text-sm text-slate-500 ">
                <span className="mr-1 text-sm material-icons-round text-primary">
                  schedule
                </span>
                <span>25 mins</span>
                <span className="mx-3 text-slate-300">•</span>
                <span className="mr-1 text-sm material-icons-round text-primary">
                  bolt
                </span>
                <span>Simple</span>
              </div>
            </div>
          </div>
          {/* <!-- Recipe Card 5 --> */}
          <div className="overflow-hidden transition-all duration-300 bg-white border shadow-sm cursor-pointer group rounded-xl hover:shadow-xl border-primary/5">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                alt="Summer Buddha Bowl"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                data-alt="Healthy organic vegetable buddha bowl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7YnG5bmFLj2pGUlqHIej8Rc1Uq5_mmTLk14bQPfBuAabdK_E1T_KYkkzh2a2y0bA37RWYnHDJLrE1EeIdP2Ks4TVSONJAMs7Uasyop9TlpzSUGt7VzW1im506Q2bArCOIRHofZLe-iTmr3VQHsjmwwvYeWSHyKIxI3U66ZsV7vL0abakWQGp3niVDKwWKv6p86NKdHi29PeTys7pZndZ26Qeue8EmH4DcwQ1ZmhsMZLpo7tgD7XzT0nJmxN5m2pov-TI5mYZ_DW8"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-lg shadow-sm bg-white/90 backdrop-blur text-primary">
                  Salad
                </span>
              </div>
              <button className="absolute flex items-center justify-center text-white transition-all rounded-full top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-md hover:bg-white hover:text-primary">
                <span className="material-icons-round text-[20px]">
                  favorite_border
                </span>
              </button>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold transition-colors text-slate-900 group-hover:text-primary">
                Summer Buddha Bowl
              </h3>
              <div className="flex items-center text-sm text-slate-500 ">
                <span className="mr-1 text-sm material-icons-round text-primary">
                  schedule
                </span>
                <span>15 mins</span>
                <span className="mx-3 text-slate-300">•</span>
                <span className="mr-1 text-sm material-icons-round text-primary">
                  bolt
                </span>
                <span>Quick</span>
              </div>
            </div>
          </div>
          {/* <!-- Recipe Card 6 --> */}
          <div className="overflow-hidden transition-all duration-300 bg-white border shadow-sm cursor-pointer group rounded-xl hover:shadow-xl border-primary/5">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                alt="Margherita Artisan Pizza"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                data-alt="Rustic margherita pizza with fresh basil"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFtIbctOAmP59wYEtZsmYmgK_zMAMBJrznar_PzQFXVB4DN2anuXpNqcFb1KGZpDkakGm81hPQQZn1FJ89s42RBC6hgDVQxecDZbcKg3SVeFEKq4JNKbj6LQH-sLcPFqvBGzE-1dX7bIaKryPplmcS1v1xmVmxtXW_MOZdR5__LeJCh7LoD2YFNa8nwO-HNzMUGqnERG3VrWQqygd8qIkQm40umpPb6n0c4U2tQt_h5cphLp9UvR8eMHJuTJ1govkZSpyAHa-ogOM"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-lg shadow-sm bg-white/90 backdrop-blur text-primary">
                  Italian
                </span>
              </div>
              <button className="absolute flex items-center justify-center text-white transition-all rounded-full top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-md hover:bg-white hover:text-primary">
                <span className="material-icons-round text-[20px]">
                  favorite_border
                </span>
              </button>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold transition-colors text-slate-900 group-hover:text-primary">
                Artisan Pizza Margherita
              </h3>
              <div className="flex items-center text-sm text-slate-500 ">
                <span className="mr-1 text-sm material-icons-round text-primary">
                  schedule
                </span>
                <span>45 mins</span>
                <span className="mx-3 text-slate-300">•</span>
                <span className="mr-1 text-sm material-icons-round text-primary">
                  bolt
                </span>
                <span>Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
