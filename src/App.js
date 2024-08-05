
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,Horror,romance} from './urls'

function App() {
  return (
    <div>
   <NavBar/>
   <Banner/>
   <RowPost url={originals} title='Netflix Originals'/>
   <RowPost url={action} title='Action Movies' isSmall/>

   <RowPost url={Horror} title='Horror Movies' isSmall/>

   <RowPost url={romance} title='Romantic Movies' isSmall/>
    </div>
  );
}

export default App;
