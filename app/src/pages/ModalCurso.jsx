import Popup from 'reactjs-popup'
import Libro from '../assets/Libro.png'
import Calendario from '../assets/Calendario.png'
import Barra from '../assets/Barra.png'
import Progreso from '../assets/Progreso.png'

export const CursoModal = ({item}) => (
    <Popup trigger={<button className='cursos'> <img src={Libro} /> Cursos</button>}
    modal 
    nested>
        {(close) => (
        <div className='cursoModal'>
        {item.map((curso) => (
            <div className='curso' key={curso.id}>
                    <p>Curso: {curso.curso} </p>
                <div className='cursoText'>
                    <p className='progressText'>50%</p>
                    <p className='barra'> <img src={Barra}></img> </p>
                    <p className='progreso'> <img src={Progreso}></img> </p>
                </div>
                    <p> <img src={Calendario}></img> Fecha de inscripción: {curso.date}</p>
            </div>
        ))}
        <div className='buttonCurso'>
                <button onClick={close}>Cerrar</button>
            </div>
        </div>
        )}
    </Popup>
);