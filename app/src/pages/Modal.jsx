import Popup from 'reactjs-popup'
import info from '../assets/info.png'
import FotoModal from '../assets/FotoModal.png'
import Mail from '../assets/Mail.png'
import Avatar from '../assets/Avatar.png'
import Movil from '../assets/Movil.png'
import Calendario from '../assets/Calendario.png'


export const TitleModal = ({item}) => (
    <Popup trigger={<img src={info}></img>}
    modal 
    nested>
        {(close) => (
        <div className='modal'>
            <div className='modalContainer'>
                <button className='edit'>Editar estudiante</button>
                <div className='textDiv'>
                    <img src={FotoModal} />
                    <p> <img src={Avatar}></img> Nombre y apellidos: {item.name}</p>
                    <p>Nombre de usuario: {item.user}</p>
                    <p> <img src={Mail}></img> Email: {item.email}</p>
                    <p> <img src={Movil}></img> Móvil: {item.movil}</p>
                    <p> <img src={Calendario}></img> Fecha de inscripción: {item.date}</p>
                </div>
            <div className='buttonDiv'>
                <button onClick={close}>Cerrar</button>
            </div>
            </div>
        </div>
        )}
    </Popup>
);