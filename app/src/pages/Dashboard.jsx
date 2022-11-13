import React from 'react'
import { useEffect } from 'react'
import { getAlumns } from '../API/Api'
import { useState } from 'react'
import { TitleModal } from './Modal'
import {CursoModal} from './ModalCurso'
import { getCursos } from '../API/Api'

import Card from '../Components/Card' 
import info from '../assets/info.png'
import Dash from '../assets/Dash.png'
import Sombrero from '../assets/Sombrero.png'
import Libro from '../assets/Libro.png'
import Ajustes from '../assets/Ajustes.png'
import Avatar from '../assets/Avatar.png'
import Mail from '../assets/Mail.png'
import Campana from '../assets/Campana.png'
import Line from '../assets/Line.png'
import Mas from '../assets/Mas.png'
import Linehor from '../assets/Linehor.png'
import Form from './ModalForm'

const Dashboard = () => {
  const [alumns, setAlumns] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    loadingData();
  }, [filter]);

  const loadingData = () => {
    if (filter === "") {
      getAlumns().then((data) => {
        setAlumns(data);
      });
      getCursos().then((data) => {
        setCursos(data);
      });
    } else {
      const filteredAlumns = filtered("name", alumns);
      setAlumns(filteredAlumns);
    }
  };

  const filtered = (name, list) => {
    return list.filter((item) =>
      item[name].toLowerCase().includes(filter.toLowerCase())
    );
  };
  
  return (
    <div>
    <header className='header'>
        <div className='logo'>
          <img src="https://ucademy.com/wp-content/uploads/2022/08/Diseno-sin-titulo-28-1.png" />
          <input type='text' placeholder="Buscar..." onChange={(e) => setFilter(e.target.value)}></input>
        </div>
        <div className='buttons'>
        <button> <img src={Mail}></img> </button>
        <button> <img src={Campana}></img> </button>
        <img src={Line}></img>
        <button> <img src={Avatar}></img> </button>
        </div>
    </header>
      <nav className='nav'>
        <button className='dashboard'> <img src={Dash} alt= "dash"></img>Dashboard</button>
        <button className='academia'> <img src={Sombrero} /> Mi academia</button>
        <CursoModal item={cursos} />
       <button className='ajustes'> <img src={Ajustes} /> Ajustes</button>
      </nav>
        <section>
        <Form />
        <div className='title'>
          <div className='text'>
            <p>Nombre y apellidos</p>
            <p>Nombre de usuario</p>
            <p>Email</p>
            <p>Móvil</p>
          </div>
        </div>
        <img className='line' src={Linehor} />
          {alumns.map((alumn) => (
          <div className='info' key={alumn.id}>
             <Card item={alumn} />
             <TitleModal item={alumn} />     
          </div>
          ))}
        </section>
      </div>
  )
}

export default Dashboard