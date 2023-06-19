import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { AllRoutes } from './components/routes/AllRoutes';
import 'react-toastify/dist/ReactToastify.css';
import { Apis } from './apis/Apis';
import axios from 'axios';
import { GetDataAction } from './components/Redux/Action';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    const result = await axios({
      url: Apis?.userLogin,
      method: "post",
      data: { "email": "vishh12@gmail.com" }
    });
    if (result?.data?.success) {
      dispatch(GetDataAction(result?.data?.data));
    }
  }

  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
