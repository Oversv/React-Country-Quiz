import Header from './components/Header'
import Board from './components/Board/Board'
import { useFetch } from './Hooks/useFetch';


function App() {

  const url = 'https://restcountries.eu/rest/v2/all'
  const {data, loading, error} = useFetch(url)


  return (
    <>
     <Header />
     {       
       loading
        ? <p>Loading</p>
        : <Board 
            data={data}
          />
     }     
    </>
  );
}

export default App;
