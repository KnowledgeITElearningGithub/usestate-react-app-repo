import { useState } from 'react';
import './App.css';

function App() {
const [disableBtnCard1, setDisableBtnCard1] = useState(true);
const [disableBtnCard2, setDisableBtnCard2] = useState(true);
const [disableBtnCard3, setDisableBtnCard3] = useState(true);

  return (
    <div className='container mt-4'>
      <div className='row'>
       <p className='text-center'><h3>Choisir un numéro de carte où se trouve le bouton "Voir plus" à activer : </h3></p>
       <p className='d-flex justify-content-center'>
        <button className='btn btn-primary me-3' onClick={()=>setDisableBtnCard1(false)}>Carte 1</button>
        <button className='btn btn-primary me-3' onClick={()=>setDisableBtnCard2(false)}>Carte 2</button>
        <button className='btn btn-primary' onClick={()=>setDisableBtnCard3(false)}>Carte 3</button>
       </p>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Titre de la carte 1</h5>
              <p className='card-text'>Aute proident irure aliquip tempor qui proident. Aute esse nostrud officia esse velit dolore laboris mollit pariatur ea reprehenderit ad ea. Elit cupidatat excepteur pariatur sint. Esse laborum esse amet cupidatat qui. Mollit officia nisi in aute do cupidatat cillum eu mollit aliquip eu elit est. Et pariatur ipsum enim ullamco aute non laborum occaecat aute esse aliquip velit proident dolore. Amet ex eiusmod quis deserunt dolore sint ad et incididunt et incididunt ex.</p>
            <hr/>
            <button className='btn btn-primary' disabled={disableBtnCard1}>Voir plus</button>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Titre de la carte 2</h5>
              <p className='card-text'>Aute proident irure aliquip tempor qui proident. Aute esse nostrud officia esse velit dolore laboris mollit pariatur ea reprehenderit ad ea. Elit cupidatat excepteur pariatur sint. Esse laborum esse amet cupidatat qui. Mollit officia nisi in aute do cupidatat cillum eu mollit aliquip eu elit est. Et pariatur ipsum enim ullamco aute non laborum occaecat aute esse aliquip velit proident dolore. Amet ex eiusmod quis deserunt dolore sint ad et incididunt et incididunt ex.</p>
            <hr/>
            <button className='btn btn-primary' disabled={disableBtnCard2}>Voir plus</button>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Titre de la carte 3</h5>
              <p className='card-text'>Aute proident irure aliquip tempor qui proident. Aute esse nostrud officia esse velit dolore laboris mollit pariatur ea reprehenderit ad ea. Elit cupidatat excepteur pariatur sint. Esse laborum esse amet cupidatat qui. Mollit officia nisi in aute do cupidatat cillum eu mollit aliquip eu elit est. Et pariatur ipsum enim ullamco aute non laborum occaecat aute esse aliquip velit proident dolore. Amet ex eiusmod quis deserunt dolore sint ad et incididunt et incididunt ex.</p>
            <hr/>
            <button className='btn btn-primary' disabled={disableBtnCard3}>Voir plus</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
