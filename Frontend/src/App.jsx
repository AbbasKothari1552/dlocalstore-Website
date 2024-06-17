import './App.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import RegisterForm from './components/RegisterForm/RegisterForm'
import LoginForm from './components/LoginForm/LoginForm'
import { useState } from 'react'
function App() {
  
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleLoginClick = () => setLoginOpen(true);
  const handleCloseLogin = () => setLoginOpen(false);
  const handleRegisterClick = () => setRegisterOpen(true);
  const handleClose = () => setRegisterOpen(false);

  return (
    <>
      
<Navbar onRegisterClick={handleRegisterClick}  onLoginClick={handleLoginClick}  />
<Home />
<RegisterForm isOpen={isRegisterOpen} onClose={handleClose} />
<LoginForm isOpen={isLoginOpen} onClose={handleCloseLogin} />
<Footer />
    </>
  )
}

export default App
