import { useEffect, useState } from "react";
import NavBar from "../../CommonComponets/NavBar";
import Product from "../../CommonComponets/Product";
import axiosInstance from "../../Helper/axiosInstance";
import Loading from "../../CommonComponets/Loading";

function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    let temp = [];
    setIsLoading(true);
    const response = await axiosInstance.get("/product");
    setIsLoading(false);
    if (response.status == 200) {
      setProductList(response.data);
    }
  };

  // const availableCategories = [
  //   { id: 1, category: "All" },
  //   { id: 2, category: "Cosmetics" },
  //   { id: 3, category: "Clothing" },
  //   { id: 4, category: "Electronics" },
  // ];

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <section className="min-h-screen bg-blue-50">
        <NavBar isSearchVisible={true} />
        <div className="h-full px-8 py-20">
          <h1 className="font-semibold text-black text-2xl">Recommendations</h1>
          <div className="py-2 text-black overflow-x-auto whitespace-nowrap">
            {/* {availableCategories.map(c => 
              <button onClick={() => setSelectedCategoryId(c.id)} className={`px-2 py-1 transition duration-300 ease-in-out my-1 mx-1  border rounded-lg ${selectedCategoryId == c.id ? 'bg-blue-500 border-blue-500 text-white':'bg-transparent border-black'}`}  id={c.id}>{c.category}</button>
            )} */}
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-2 z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {productList &&
                productList.map((e) => (
                  <Product
                    product={e.product}
                    shopId={e.shop_id}
                    shopName={e.shop_name}
                    shopLogo={e.shop_logo_url}
                  />
                ))}
            </div>
          )}
        </div>
      </section>
      <footer class="bg-gray-900 text-white py-8">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 class="text-2xl font-semibold mb-4">Bisine</h3>
              <p>Contact us:</p>
              <p>
                Email:{" "}
                <a href="mailto:contactbisine@gmail.com" class="underline">
                  contactbisine@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+919566875400" class="underline">
                  +91 95668 75400
                </a>
              </p>
              <p>
                Address: Vembu Flats, 24th cross Sowmya Nagar, Medavakkam,
                Chennai, 620018
              </p>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-4">Useful Links</h3>
              <ul>
                <li>
                  <a href="/terms-and-condition" class="hover:underline">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
