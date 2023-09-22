import logo from './logo.svg';
import './App.css';
import coins from './coins.png'
import clouds from './clouds.png'
import cloudsbg from './cloudsbg.png'

import {Parallax, ParallaxLayer} from '@react-spring/parallax'

function App() {
  return (
    <div className="App">
    <div class="centered-container">
      <div class="navbar flex">
        <div class="navbar-logo">
          {/* <img src="logo.png" alt="Logo"> */}
        </div>
        <div class="navbar-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
    
    <Parallax pages={5}>
      <ParallaxLayer
      offset={0}
      speed={.75}
      >
        <div class="App-header">
        <h1>Crypto Decrypted</h1>
        <h4>A latecomer's guide to crypto</h4>
        </div>
      </ParallaxLayer>
    <div class="wrapper">
      <ParallaxLayer
        offset={0}
        speed={2}
        factor={2}
        style={{
          backgroundImage: `url(${coins})`,
          backgroundPositionX: 'center',
        }}
        
      ></ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={1}
        factor={2}
        style={{
          backgroundImage: `url(${clouds})`,
          backgroundPositionX: 'center',
        }}
      ></ParallaxLayer>

<ParallaxLayer
        offset={0}
        speed={0.4}
        factor={3}
        style={{
          backgroundImage: `url(${cloudsbg})`,
          backgroundPositionX: 'center',
          backgroundBlendMode: 'overlay',
        }}
      ></ParallaxLayer>

      <ParallaxLayer
      offset={.7}
      speed={1}
      factor={1}
      >
      <div class="wrapper">
        <h2>Intro</h2>
        <p>There exists more uncertainty in the world right now than other time in the last 50 years. Progression of AI has shook the average person (before being adopted without a blink within a year), geopolitics shakiness looms over world events, inflation hit unseen levels two years ago as we had a major worldwide pandemic all as we try to ignore just how good the big data algorithms are at knowing us and our actions.</p>

        <p>Yet despite it's volatility, over a 2 year moving average the crypto market cap has not seized to keep its momentum in the face of all of this.</p>

        <p>For each of the worldwide issues mentioned, many see blockchain and crypto currency as a shining hope in the future digital landscape, and it's time to understand why.</p>
        <h2>Intro</h2>
        <h2>Intro</h2>
        <h2>Intro</h2>
      </div>
      </ParallaxLayer>
      </div>
    </Parallax>

      <header className="App-header">
      </header>
      
    </div>
  );
}

export default App;
