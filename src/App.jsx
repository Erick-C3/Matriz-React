import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col col-diferente">
          <Button className='btn-casilla' variant="primary">Primary</Button>
        </div>
        <div className="col col-diferente">
          <Button className='btn-casilla' variant="primary">Primary</Button>
        </div>
        <div className="col col-diferente">
          <Button className='btn-casilla' variant="primary">Primary</Button>
        </div>
      </div>
      <div className="row">
        <div className="col col-diferente">
          <Button className='btn-casilla' variant="primary">Primary</Button>
        </div>
        <div className="col col-diferente">
          <Button className='btn-casilla' variant="primary">Primary</Button>
        </div>
        <div className="col col-diferente">
          <Button className='btn-casilla' variant="primary">Primary</Button>
        </div>
      </div>
      <div className="row">
        <div className="col col-diferente">
          <Button className='btn-casilla' variant="primary">Primary</Button>
        </div>
        <div className="col col-diferente">
          <Button className='btn-casilla' variant="primary">Primary</Button>
        </div>
        <div className="col col-diferente">
          <Button className='btn-casilla' variant="primary">Primary</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
