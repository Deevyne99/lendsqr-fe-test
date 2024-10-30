import logo from '../assets/svg-logo.svg'
import InputComponent from '../components/inputs/Input'
// import HeroImg from '../assets/pablo-sign-in 1.svg'
import HeroImg2 from '../assets/pablo-sign-in.png'
import ButtonComponent from '../components/buttons/Button'

// import { SvgComponent } from '../components/svgComponent'

const Home = () => {
  return (
    <section className='wrapper-home'>
      <div className='container'>
        <div className='image-container '>
          <div className='image-box'>
            <div>
              <img src={logo} alt='logo image' />
            </div>
            <div className='image-cover'>
              <img className='image' src={HeroImg2} alt='' />
            </div>
          </div>
        </div>
        <div className='login-wrapper'>
          <div className='logo-container'>
            <img src={logo} alt='logo image' />
          </div>
          <article className='text'>
            <h1 className='text-header'>Welcome!</h1>
            <p className='text-description'>Enter details to login.</p>
          </article>
          <div className='form-container'>
            <div className='input-wrapper'>
              <InputComponent />
            </div>
            <div className='input-wrapper'>
              <InputComponent />
            </div>
            <div className='forgot'>
              <p className='text-forgot'>Forgot Password?</p>
            </div>
            <div className='btn-container'>
              <ButtonComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
