import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProductAdd, ProductList, PageNotFound } from "./pages";
import Layout from "./Layout";
import * as React from "react";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductAdd />} />
          <Route path="list" element={<ProductList />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;

/*
  Bu sayfada rotalarımızı belirttik. Muhtemelen yapacağımız proje birden fazla sayfadan oluşacak.
  Bu nedenle react-router-dom paketini kullandık.
  <Routes> içerisinde öncelikle Layout verdik. Layout dosyası bizim sitemizim ana teması aslında. Navbar, footer vb. hepsi burada olur. Sadece iç kısımlar değişir 
  ki bunlar da zaten Layout altındaki rotalar. ProductAdd, ProductList gibi. 

  Önemli: 
  - react-router-dom paketini kullanabilmek için, index.js içerisinde de, BrowserRouter wrapperi ile App'i sarmalamak gerekli.
*/
