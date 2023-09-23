import logo from './logo.svg';
import './App.css';
import coins from './coins.png'
import clouds from './clouds.png'
import cloudsbg from './cloudsbg.png'
import cointrails from './cointrails.png'

import {Parallax, ParallaxLayer} from '@react-spring/parallax'


function App() {
  return (
    <div className="App">
    <div class="centered-container">
      <div class="navbar flex">
      <a href="https://adamcarr.xyz">
        <div class="navbar-logo" href="">
        </div>
      </a>
        <div class="navbar-links">
          <a href="index">Home</a>
          <a href="">About</a>
          <a href="https://adamcarr.xyz">Contact</a>
        </div>
      </div>
    </div>
    
    <Parallax pages={7}>
      <ParallaxLayer
      offset={0}
      speed={.75}
      >
        <div class="App-header">
        <h1>Crypto Decrypted</h1>
        <h4>A Welcome Guide for Latecomers</h4>
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
          zIndex: 800,
        }}
        
      ></ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={2.7}
        factor={2}
        style={{
          backgroundImage: `url(${cointrails})`,
          backgroundPositionX: 'center',
          zIndex: 500,
        }}
        
      ></ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={1}
        factor={2}
        style={{
          backgroundImage: `url(${clouds})`,
          backgroundPositionX: 'center',
          zIndex: 900,
        }}
      ></ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0.4}
        factor={3}
        style={{
          backgroundImage: `url(${cloudsbg})`,
          backgroundPositionX: 'center',
        }}
      ></ParallaxLayer>

      <ParallaxLayer 
        offset={.75}
        speed={1}
        factor={1}
        >
        <div class="wrapper center-title">
          <h2>
            
            Crypto should be open to all. <br></br> <br></br>
            Learn what all the fuss is about below.
          </h2>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
      offset={1}
      speed={1}
      factor={1}
      >
      <div class="wrapper">
        <h3>Crypto, blockchain, web3 - and why we should care.</h3>
        <hr></hr>
          <p>Crypto is digital money that doesn't need banks and isn't controlled by a central power. This represents a milestone change in the system of exchanging value throughout the world. <br></br> <br></br>

          It can help people in places without good banks to handle their money safely, it can be a buffer against inflation of standard (FIAT) currencies, and it facilitates a grass-roots network of value exchange, replacing the parasitic middlemen who normally own and profit from these systems with everyday people.<br></br><br></br>

          Blockchain on the other hand is a type of network protocol that forms a digital database shared across thousands of individual computers - this is what underpins all the transactions of crypto. But blockchain goes far beyond money – it's about solving issues of trust, like how we buy stuff, vote and collaborate together to be safer and more honest. Web3 is the next evolution of the internet that allows the integration of crypto and blockchain to give us more control over our data and online lives.
          <br></br>So, whether you're into money, new tech, or the future of the internet, crypto and blockchain are making some big waves that are no doubt around to stay.
        </p>

        <h3>Intro</h3>
        <h3>Intro</h3>  
        <h3>Intro</h3>
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
