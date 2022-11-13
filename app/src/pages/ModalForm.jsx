import Popup from 'reactjs-popup'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import { postAlumn } from '../Api/api'
import Mas from '../assets/Mas.png'

const Form = () => {
    const [alumn, setAlumn] = useState({});
    const navigate = useNavigate();

    function refreshPage() {
        window.location.reload(false);
      }

    const onSubmit = (ev) => {
    ev.preventDefault();
    setAlumn({...alumn, id: uuidv4()});
    postAlumn(alumn).then((res)=> {
      if(res) {
        navigate('/dashboard');
      }
    });
  };

return (
    <Popup trigger={<button className='newStudent'> <img src={Mas}></img> Nuevo estudiante</button>}
    modal 
    nested>
        {(close) => (
        <div className='formModal'>
            <form className='ModalForm' onSubmit={(ev) => onSubmit(ev)}>
                <button className='guardar' type="submit" onClick={refreshPage}>Guardar</button>
        <label> Name <input required type="text" placeholder="Name..." onChange={(e) => setAlumn({ ...alumn, name: e.target.value })}/> </label>
        <label> User <input required type="text" placeholder="User..." onChange={(e) => setAlumn({ ...alumn, user: e.target.value })}/> </label>
        <label> Email: <input required type="text" placeholder="Email..." onChange={(e) => setAlumn({ ...alumn, email: e.target.value })}/> </label>
        <label> Movil: <input required type="text" placeholder="Movil..." onChange={(e) => setAlumn({ ...alumn, movil: e.target.value })}/> </label>
        <label> Date: <input required type="text" placeholder="Date..." onChange={(e) => setAlumn({ ...alumn, date: e.target.value })}/> </label>
      </form>
        <div className='buttonForm'>
                <button onClick={close}>Cerrar</button>
            </div>
        </div>
        )}
    </Popup>
)
}
export default Form
