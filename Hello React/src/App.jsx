
import logo from './assets/ironhack-logo-xs.png'
import menu from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import './App.css'
import './index.css'

function App() {
  return( 
  <div className= 'App'>
    <div className='main'>
      <div className='header'>
        <img src={logo} alt="logo" />
        <img className='menulogo' src={menu} alt="menu" />
      </div>
      <div className='hello'>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
        <button>Awesome!</button>
      </div>
    </div>
    <div className='fouricons'>
      <div className='icon'>
        <img src={icon1} alt='icon 1'/>
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className='icon'>
        <img src={icon2} alt='icon 2'/>
        <h2>Components</h2>
        <p>Build encapsulated compenents that manage their state</p>
      </div>
      <div className='icon'>
        <img src={icon3} alt='icon 3'/>
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components</p>
      </div>
      <div className='icon'>
        <img src={icon4} alt='icon 4'/>
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  </div>
  
  )
}

export default App
