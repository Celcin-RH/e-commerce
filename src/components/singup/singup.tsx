import React from 'react'
import './singup.css'
import google from '../../assets/icons/google.png'
import facebook from '../../assets/icons/facebook.png'
import { Link } from 'react-router-dom'

const SingUp = () => {
  return (
    <div className='singup BG'>
<form>
            <h3>Get started now</h3>
            <small>enter your credentials to access your account</small>
            <div className="connect-in">
                <span>
                    <img src={google} alt="google" />
                    <small>Log in with Google</small>
                </span>
                <span>
                    <img src={facebook} alt="facebook" />
                    <small>Log in with facebook</small>
                </span>
            </div>
            <div className="forms">
                <span>
                    <label htmlFor="Pseudo">Pseudo</label>
                    <input type="text" name="pseudo" id="pseudo" />
                </span>
                <span>
                    <label htmlFor="email">Adresse email</label>
                    <input type="email" name="email" id="email" />
                </span>
                <span>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" id="password" />
                </span>
                <span>
                    <label htmlFor="password">confirmer le mot de passe</label>
                    <input type="password" name="password" id="password" />
                </span>
                <span>
                    <button>Se connecter</button>
                </span>
                <small style={{textAlign:"center"}}>Already a menber ? <Link to={"/login"}>login</Link></small>
            </div>

            <Link to={"/home/landingPage"}>
                <span className='backHome'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M6.265625 3.027344L1.929688 7.5L6.265625 11.972656L6.984375 11.277344L3.816406 8.007813L15 8.007813L15 7.007813L3.796875 7.007813L6.984375 3.722656Z" fill="#9A9A9A" />
                    </svg>
                    Retour
                </span>
            </Link>
        <div className="lim"></div>
        </form>
    </div>
  )
}

export default SingUp