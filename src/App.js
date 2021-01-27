import Header from './components/Header'
import Board from './components/Board/Board'
import { useFetch } from './Hooks/useFetch';

function App() {

  const url = 'https://restcountries.eu/rest/v2/all'
  const {data, loading, error} = useFetch(url)
  
  if(!loading){
    const {name, capital, flag} = data[0]
    console.log(name, capital, flag)
  }
  return (
    <>
     <Header />
     {
       loading
        ? <p>Loading</p>
        : <Board />
     }     
    </>
  );
}

export default App;
