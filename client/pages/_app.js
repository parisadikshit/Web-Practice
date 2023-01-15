import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd';
import '../public/css/styles.css';
import TopNav from '../components/TopNav';

function myApp({Component, pageProps}){
    return(
        <>
    <TopNav/>
     <Component {...pageProps}/>
     </>
    )

}

export default myApp;