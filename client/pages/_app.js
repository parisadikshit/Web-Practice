import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd';
import '../public/css/styles.css';
import TopNav from '../components/TopNav';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from '../context';
function myApp({Component, pageProps}){
    return(
    <Provider>
    <ToastContainer position='top-center'/>
    <TopNav/>
     <Component {...pageProps}/>
    
     </Provider>
    )

}

export default myApp;