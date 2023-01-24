import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar.js'
import Searchbar from './Components/Searchbar';

function App() {
  return (
    <>
     {/* <div class="container-fluid">
    <div class="row flex-nowrap">
    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-info"> */}
    <Sidebar></Sidebar>
    {/* </div>
    <div class="col py-3"> */}
            Content area...
        {/* <Searchbar></Searchbar>
        </div>
    </div>
</div> */}
   </>
  );
}

export default App;
