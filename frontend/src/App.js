import './App.css';
import { useState } from 'react'
import InputCard from './components/InputCard/InputCard';
import OilListData from './components/OilList/OilList';
import LoginPage from './components/LoginPage/LoginPage';
import { toast } from 'react-toastify';

function App() {
  const [Login, setLogin] = useState(false)
  const [ErrorMessage, setErrorMessage] = useState(false)
  const [OilList, setOilList] = useState([])

  const handleLogout = () => {
    setLogin(false)
    toast('Logout Successful.')
  }

  if (!Login) return <LoginPage setLogin={setLogin} ErrorMessage={ErrorMessage} setErrorMessage={setErrorMessage} />

  return (
    <div className="App">
      {renderTitle()}
      <InputCard OilList={OilList} setOilList={setOilList} />
      <OilListData OilList={OilList} />
    </div>
  );

  function renderTitle() {
    return (
      <>
        <h1>Enter Oil Data</h1>
        <button onClick={handleLogout}>Logout</button>
      </>
    )
  }
}

export default App;
