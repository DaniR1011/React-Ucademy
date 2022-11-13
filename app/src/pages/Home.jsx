import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import RememberMe from '../Components/RememberMe'
import UcademyLogo from '../assets/UcademyLogo.svg'
import Ojo from '../assets/Ojo.png'

const Home = () => {
  const [shown, setShown] = React.useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = React.useState('');

  const switchShown = () => setShown(!shown);
  const onChange = ({ currentTarget }) => setPassword(currentTarget.value);


  const handleSubmit = (e) => {
    e.preventDefault();

  if(!password || !username) {
    console.error("Formulario incorrecto");
    return;
  }

    const formPayload = {
      username,
      password,
    };
    console.log("formPayload value:", formPayload)
  };

  return (
    <div className='home'>
          <img src={UcademyLogo} alt="logo ucademy" />
      <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Nombre de usuario:</label>
          <input type="text" name="username" onChange={(e) => 
          setUsername(e.target.value)} value={username} />
          <label htmlFor='password'>Contraseña:</label>
      <div className='passwordElement'>
          <input onChange={onChange} type={shown ? 'text' : 'password'} value={password} />
          <button onClick={switchShown} type={shown ? 'Ocultar' : 'Mostrar'}> <img src={Ojo}></img> </button>
      </div>
      <div className='rememberMe'>
          <RememberMe />
      </div>
        <Link to={`/dashboard`} >
          <button className='submitbtn' type="submit">Submit</button>
        </Link>
      </form>
    </div>
  )
}

export default Home