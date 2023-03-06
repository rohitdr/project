import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './searchbar.css'
import NavbarToggler from "./NavbarToggler";
import RecipeContext from "../Context/RecipeContext";
import { useState } from "react";
import { Navbar, Text, Avatar, Dropdown,Input  } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
import { SearchIcon } from "./SearchIcon.js";
export default function Searchbar(props) {
  const context = useContext(RecipeContext)
  const {recipe,NameRecipe, setName_to_search,name_to_search,searchRecipe,getUser,userData} = context
let Navigate = useNavigate();
useEffect(()=>{
getUser()
},[])
var num=0;

const logout=()=>{
  sessionStorage.removeItem("auth-token")
Navigate("/login")
}
var searchentered
var modalsearch

  return (
  //  dont delte
    <>

<Navbar isBordered variant="sticky">
        <Navbar.Brand css={{ mr: "$4" }}>
        <NavbarToggler></NavbarToggler>
      {/* <AcmeLogo></AcmeLogo> */}
      <p class="navbar-brand d-none d-sm-block">
      <img src="Reciperiotlogo.png" alt="Logo" width="75" height="90" class="d-inline-block align-text-top logoofwebsite"/>
    </p>
          <Text  color="inherit" css={{ mr: "$11" }} hideIn="xs">
          <span className="navbar-brand "><span  className="name text-dark  fw-bold"> 
  
          <span className="R">R</span>
          <span className="e">e</span>
          <span className="c">c</span>
          <span className="i">i</span>
          <span className="p">p</span>
          <span className="e2">e</span>
          <span className="R2">R</span>
          <span className="i2">i</span>
          <span className="o">o</span>
          <span className="t">t</span>
          </span></span>
    
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-magnifying-glass "></i>
    </button> */}
          </Text>
           </Navbar.Brand>
        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
           <form className="d-flex text-white  ">
        <input className="form-control me-2 text-white search_input rounded-3" id="searchbar-searchbox" type="search" placeholder="Search"  data-bs-toggle="modal" data-bs-target="#exampleModalsearch" aria-label="Search" onChange={(e)=>{
          searchentered=e.target.value
          setName_to_search(searchentered)
      
        }}  />
        
      
      {/* <Link  className="btn btn-outline-light" tabIndex="-1" to={"/SearchResult"} role="button" onClick={()=>{   NameRecipe(`/${name_to_search}`); }}  aria-disabled="true">Search</Link> */}
      </form>
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src={userData?.user?.Profile_Image}
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            {sessionStorage.getItem("auth-token")?
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                 {userData?.user?.email}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
              <Link to="/Profile_Profile" className=" text-dark searchbardropdown"> Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item key="team_settings"><Link to="/Profile_Activity" className=" text-dark searchbardropdown"> Activity</Link></Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
              <Link to="/Profile_Security" className=" text-dark searchbardropdown"> Security</Link>
              </Dropdown.Item>
              <Dropdown.Item key="system"><Link to="/Profile_Recipe" className=" text-dark searchbardropdown"> My Recipes</Link></Dropdown.Item>
              <Dropdown.Item key="configurations"><Link to="/Profile_LikedRecipe" className=" text-dark searchbardropdown">Favourite</Link></Dropdown.Item>
            
              <Dropdown.Item key="logout" withDivider color="error">
               <span onClick={logout}>Log Out</span> 
              </Dropdown.Item>
            </Dropdown.Menu>: <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              
              <Dropdown.Item key="settings" >
              <Link to="/login" className="px-4 text-dark searchbardropdown w-100"> Login</Link>
             
              </Dropdown.Item>
              
              <Dropdown.Item key="analytics" >
              <Link to="/signUp" className=" px-4 text-dark searchbardropdown"> Sign UP</Link>
              </Dropdown.Item>
             
       
              
            </Dropdown.Menu>}
            
          </Dropdown>
        </Navbar.Content>
      </Navbar>


{/* <nav className="navbar navbar-expand-lg bg-light" id="Searchbar">
  <div className="container-fluid ">
    <span className="navbar-brand"><span  className="name text-white"> <NavbarToggler></NavbarToggler>
  
          <span className="R">R</span>
          <span className="e">e</span>
          <span className="c">c</span>
          <span className="i">i</span>
          <span className="p">p</span>
          <span className="e2">e</span>
          <span className="R2">R</span>
          <span className="i2">i</span>
          <span className="o">o</span>
          <span className="t">t</span>
          </span></span>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-magnifying-glass "></i>
    </button>
    <div className="collapse navbar-collapse d-flex  bd-highlight" id="navbarSupportedContent">
      <div className="flex-grow-1 bd-highlight searchbarform ">
    <form className="d-flex text-white  ">
        <input className="form-control me-2 search_input rounded-3" id="searchbar-searchbox" type="search" placeholder="Search"  data-bs-toggle="modal" data-bs-target="#exampleModalsearch" aria-label="Search" onChange={(e)=>{
          searchentered=e.target.value
          setName_to_search(searchentered)
      
        }}  />
        
      
      <Link  className="btn btn-outline-light" tabIndex="-1" to={"/SearchResult"} role="button" onClick={()=>{   NameRecipe(`/${name_to_search}`); }}  aria-disabled="true">Search</Link>
      </form></div>
      <div className=" bd-highlight">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
     
  
      <li class="nav-item dropdown d-none d-lg-block">
      <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
        
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
     
         
        </li>
       
      </ul>
      </div>
    </div>
  </div>
</nav> */}

<div className="modal " id="exampleModalsearch" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
    <div className="modal-header">
       
        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body searchmodal ">
    
<div className="input-group input-group-lg transformingup mb-3">
  <button className="btn btn-outline-secondary bg-white" type="button" id="button-addon1y"><i className="fa-solid fs-4 fa-magnifying-glass"></i></button>
  <input type="text" className="form-control modalsearch fw-bold" id="button-addon1x" placeholder="Enter the Recipe Name" aria-label="Example text with button addon" onChange={(e)=>{NameRecipe(`/${e.target.value}`)}} aria-describedby="button-addon1"/>
</div>
<div>
<ul   className="searchlistbox" id="docsearch-list"> <div className="listcombo">
{searchRecipe.recipe && searchRecipe.recipe.map((element)=>{
   num++
   if(num<10){
    return <><Link to="/SearchResult"  onClick={(e)=>{ NameRecipe(`/${element.label.substring(0,20)}`);     }} className="DocSearch-Hitslink  transformingup"><li className="DocSearch-Hits  fw-bold"> <i className="fa-solid me-2 fa-bars"></i>{element.label}</li></Link></>}}
   )
   }</div></ul></div>
      </div>
     
    </div>
  </div>
</div>
    </>



  );
}
