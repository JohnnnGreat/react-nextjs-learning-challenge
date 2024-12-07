import "./App.css";
import { ProtectedRoute } from "./components/(hoc)/Wrapper";
import DynamicList from "./components/(renderprops)/DynamicList";
import Posts from "./components/(renderprops)/Posts";
import ProductsDisplay from "./components/(renderprops)/ProfileCard";
import Title from "./components/(renderprops)/Title";

const listAge = ["23", "34", "90", "100"];

function App() {
   return (
      <div>
         {" "}
         {/* <Posts
            endpoint="https://dummyjson.com/posts"
            renderPosts={(data) => data.map((post) => <p>{post?.title}</p>)}
         /> */}
         {/* <DynamicList
            list={listAge}
            renderItem={(list) => (
               <ul>
                  {list.map((item) => (
                     <li>{item}</li>
                  ))}
               </ul>
            )}
         /> */}
         <ProductsDisplay
            url="https://dummyjson.com/productsd"
            displayProducts={(products) => (
               <div className="product-grid">
                  {products.map((product) => (
                     <div>
                        <h2 className="product-title">{product.title}</h2>
                        <p>{product.description}</p>
                     </div>
                  ))}
               </div>
            )}
         />
      </div>
   );
}

export default App;
