import './App.css';
import AxiosCanceller from './Components/AxiosCanceller';
import FetchCanceller from './Components/FetchCanceller';
import AxiosSearchBar from './Components/AxiosSearchBar';

function App() {

  return (
    <>
      <h4>It's All About Cancelling an API Request</h4>
      <div className="container">
        <FetchCanceller />
        <AxiosCanceller />
        <AxiosSearchBar />
      </div>
    </>
  );
}

export default App;