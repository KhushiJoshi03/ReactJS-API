import React from "react";
import { Routes,Route } from "react-router-dom";
import Menu from "./Menu";
import Category from "./Category";
import Subcategory from "./Subcategory";
import Products from "./Products";
import Home from "./Home";
import Error from "./Error";
class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={

    }
  }
  render()
  {
    return(
      <>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Category" element={<Category/>}/>
          <Route path="/Subcategory" element={<Subcategory/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </>
    )
  }
}
export default App;