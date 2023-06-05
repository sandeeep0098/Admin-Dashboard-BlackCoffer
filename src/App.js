import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import {
  // createBrowserRouter,
  // RouterProvider,
  Routes,
  Route,
  // Link,
  BrowserRouter,
} from "react-router-dom";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Single from "./pages/single/Single";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
