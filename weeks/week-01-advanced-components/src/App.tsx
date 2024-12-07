import "./App.css";
import { ProtectedRoute } from "./components/(hoc)/Wrapper";
import Posts from "./components/(renderprops)/Posts";
import Title from "./components/(renderprops)/Title";

function App() {
   return (
      <div>
         {" "}
         <Posts
            endpoint="https://dummyjson.com/posts"
            renderPosts={(data) => data.map((post) => <p>{post?.title}</p>)}
         />
         <ProtectedRoute name="john" />
      </div>
   );
}

export default App;
