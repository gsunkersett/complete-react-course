import './App.css';
import Products from './Components/Products';

function App() {

    return (<div className='row'>
        {/* <h1 className="myHeader">This is my header</h1> */}
        <div className="col-lg-8 mx-auto"><Products></Products></div>
    </div>)
}

export default App;