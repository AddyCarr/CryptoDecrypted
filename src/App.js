import logo from './logo.svg';
import './App.css';
import coins from './coins.png'
import coins2 from './coins2.png'
import cointrails from './cointrails.png'
import cointrails2 from './cointrails2.png'
import clouds from './clouds.png'
import cloudsbg from './cloudsbg.png'
import cloudsbgbody from './cloudsbgbody.png'
import cloudsbgbody2 from './cloudsbgbody2.png'
import usdgraph from './usdgraph.png'
import usdGraphImage from './usdgraph.png'; 

import {Parallax, ParallaxLayer} from '@react-spring/parallax'

function App() {
  return (
    <div className="App background">
    <div class="centered-container">
      <div class="navbar flex">
      <a href="https://adamcarr.xyz">
        <div class="navbar-logo" href="">
        </div>
      </a>
        <div class="navbar-links">
          <a href="index">Home</a>
          <a href="https://adamcarr.xyz">About Me</a>
        </div>
      </div>
    </div>
    
    <Parallax pages={10}>
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
        offset={.99}
        speed={1.5}
        factor={3}
        style={{
          backgroundImage: `url(${coins2})`,
          backgroundPositionX: 'center',
          zIndex: 800,
        }}
        
      ></ParallaxLayer>

      <ParallaxLayer
        offset={.99}
        speed={1.55}
        factor={3}
        style={{
          backgroundImage: `url(${cointrails2})`,
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
        offset={1}
        speed={1.2}
        factor={4}
        style={{
          backgroundImage: `url(${cloudsbgbody})`,
          backgroundPositionX: 'center',
          zIndex: 900,
          backgroundRepeat: 'revert-layer',
          minHeight: '200',
        }}
      ></ParallaxLayer>

<ParallaxLayer
        offset={.99}
        speed={0.75}
        factor={4}
        style={{
          backgroundImage: `url(${cloudsbgbody2})`,
          backgroundPositionX: 'center',
          zIndex: 900,
          backgroundRepeat: 'revert-layer',
          minHeight: '200',
        }}
      ></ParallaxLayer>

      <ParallaxLayer
      offset={.5}
      speed={1}
      factor={1}
      >
      <div class="wrapper">
          <div class="center-title fullscreen article">
            <h2>
              Crypto should be open to all. <br></br> <br></br>
              Learn what all the fuss is about below.
            </h2>
          </div>
        <div class="article">
          <h3 id="crypto-blockchain-web3-and-why-we-should-care-">Crypto, blockchain, web3 - and why we should care.</h3>
          <p>Crypto is digital money that doesn&#39;t need banks and isn&#39;t controlled by a central power. This represents a milestone change in the system of exchanging value throughout the world. </p>
          <p>It can help people in places without good banks to handle their money safely, act as a buffer against inflation, and it facilitates exchanging value on a grass-roots level, without the need for large corporations that profit from controlling this exchange. </p>
          <p>Blockchain on the other hand is a type of network protocol that forms a digital database shared across thousands of individual computers - this is what underpins all the transactions of crypto.</p>
          <p>But blockchain goes far beyond money – it&#39;s about solving issues of trust, like how we buy stuff, vote and collaborate together to be safer and more honest. Web3 is the next evolution of the internet that allows the integration of crypto and blockchain to give us more control over our data and online lives.</p>
          <p>The price of the largest crypto currencies like Bitcoin and Ethereum continue to skyrocket over the medium term due to their ability to aid and solve the complex international issues described above.</p>
          <p>So, whether you&#39;re into money, new tech, or the future of the internet, crypto and blockchain are making some big impacts - and it&#39;s time to understand why.</p>
          <hr></hr>
        </div>
        <div class="article">
          <h3 id="blockchain">Blockchain</h3>
          <p>Blockchain technology forms the basis of all cryptocurrency. It was described in a anonymous paper released in 2008 along with it&#39;s first implementation, Bitcoin. </p>
          <p>Blockchain can be thought of as a sort of endless public online notebook, in which people around the world compete to write the next page.</p>
          <p>Blockchains do a few things. They:</p>
          <ol>
          <li><p>Form <strong>Blocks</strong>: Each piece of information (like a list of transactions) is stored in something called a &quot;block.&quot; Think of a block as a page in the notebook.</p>
          </li>
          <li><p><strong>Chain</strong> the Blocks: These blocks are connected in a chain, just like pages in a notebook. This chain of blocks keeps growing over time</p>
          </li>
          <li><p><strong>Decentralize</strong> Data: What makes a blockchain special is that it&#39;s not controlled by one single person or organization. Instead, copies of this digital notebook are stored on many computers all over the world. This makes it very hard for anyone to cheat or tamper with the information.</p>
          </li>
          <li><p><strong>Create consensus:</strong> consensus means that everyone in the network agrees on the contents of the notebook. This allows blockchains to have one final record of the truth that is agreed upon by all and is public to all.</p>
          </li>
          <li><p><strong>Incentivize Honesty:</strong> Blockchains are fundamentally set up to make the most profitable and rational action the truthful action. Participants compete in a difficult mathematical guessing game called <strong>mining</strong>, the lucky winner of which adds their version of the new page to the notebook and receives a reward in return. </p>
          </li>
          </ol>
          <p>The winner receives a reward in new crypto and their version of the new page joins the notebook chain. The reward entices many worldwide to play the game, cheatings would require a tremendous amount of computational power in additional to a simultaneous lie of thousands in every corner of the world.</p>
          <hr></hr>
        </div>
        <div class="article">
        <h3 id="bitcoin">Bitcoin</h3>
          <p>Bitcoin was the first implementation of blockchain tech as a currency and it arrived in the wake of the Global Financial Crisis of 2008. Many see it as the leading alternative to traditional economic banking systems.</p>
          <p>As of writing the net value of bitcoin is over US $500 Billion. But if bitcoin isn&#39;t a physical thing, where does this value come from? The main appeal of bitcoin is as it&#39;s use as a <strong>store of value</strong>. It&#39;s popularly referred to as <strong>digital gold</strong>. 
          Bitcoin has a limited supply, that is only a set amount of 21 million will ever exist, and the rate of supply is always getting slower (akin to mining more of a real-world resource, and it being harder to find increasing amounts).</p>
          <p>During the post COVID period, we have seen the highest inflation recorded in 43 years. At this rate of inflation, your buying power would half within 8 years. Compared to this diluting supply, alternative non-inflationary assets gain this buying power.</p>

          <div class="image" >
            <a href="https://elements.visualcapitalist.com">           
            <img src={usdGraphImage} alt="USD Exchange Rate Graph"/>
            </a>
          </div>
          
          <p>The characteristics of money are durability, portability, divisibility, uniformity &amp; limited supply. Bitcoin and it&#39;s use of blockchain reimagine modern money to mathematically ensure these characteristics, and people are becoming more interested and invested as inflation and global instability rise. </p>
          <hr></hr>
        </div>
        <div class="article">
          <h3 id="ethereum-and-smart-contracts">Ethereum and Smart Contracts</h3>
          <p>Ethereum is the second largest cryptocurrency by value and achieves something very different than bitcoin. Ethereum aims to be a <strong>general purpose blockchain</strong>, where not just a single currency but <em>anything</em> could be built on top of it, and inherit all the positives of it&#39;s decentralized, secure blockchain. </p>
          <p>Ethereum&#39;s public digital notebook doesn&#39;t store just transactions info, but it can store executable <em>code</em>. As these snippets of code exist on the blockchain itself, no one has to actively run or host them, and in fact, they can execute all on their own - meaning they can automatically enforce the rules of a agreement.
          These snippets of code are called <strong>Smart Contracts</strong>. </p>
          <p>Smart contracts allow anyone to hook into the use of the Ethereum blockchain and leverage the thousands people who run the network worldwide to run their code, giving rise to a type of <em>virtual world-computer</em>. To use this virtual computer, one must pay in the Ethereum token. Currently there exists over 50,000 decentralized applications that run on Ethereum&#39;s network.</p>
          <p>Imagine if instead of purchasing a stock of a website like Facebook, you could purchase a stock in the internet itself; and anytime anyone wanted to use the internet they would need some of your internet-stocks. This is the analogy of the Ethereum token and eco-system. </p>
          <hr></hr>
        </div>
        <div class="article">
          <h3 id="web3">Web3</h3>
          <p>Web3 is the next generation of the internet being ushered in by blockchain and smart contract which aims to create a more decentralized, user-centric, and secure internet ecosystem.</p>
          <p>In Web3, you&#39;re not just a passive user of websites; you&#39;re more like a digital citizen with rights. You have more say in how your data is used, have better native management of your assets and money through inbuilt wallets and overall more control of your online identity. </p>
          <p>The internet has changed a lot in the decades, and some might be asking, what makes this movement the third gen internet? The distinction lies in ownership of data and digital assets that allow a fairer and more community based model of control.</p>
          <h5 id="web-1-0-old-school-from-web-90-s-00-s">Web 1.0 - Old-school from Web 90&#39;s - 00&#39;s</h5>
          <ul>
          <li>Read only websites</li>
          <li>Direct translation of documents like magazines or recipes</li>
          <li>Owned by corporations, but minimal data being gathered</li>
          </ul>
          <h5 id="web-2-0-modern-web">Web 2.0 - Modern web</h5>
          <ul>
          <li>Read and write websites</li>
          <li>Large sites rely &amp; consist of user input and data (Facebook, Youtube, twitter)</li>
          <li>User content and data is owned by corporations</li>
          <li>Payment run through third party systems</li>
          </ul>
          <h5 id="web-3-0-future-of-the-web">Web 3.0 - Future of the web</h5>
          <ul>
          <li>Read, write and own</li>
          <li>User&#39;s and content can be their own. Owned ad managed by the individual. </li>
          <li>Native payment through crypto and wallets</li>
          <li>Websites are not companies but self running, decentralized applications that sit upon blockchain systems</li>
          <li>Allows users to co-operate and have their content in one marketplace without the need for a company to manage and take fees</li>
          </ul>
          <h5 id="examples-of-current-web3-platforms-">Examples of current Web3 platforms:</h5>
          <ul>
          <li><strong>Decentralized social media platforms.</strong> Platforms like Steemit and Hive allow users to earn tokens for creating and engaging with content. These tokens can then be used to vote on platform decisions or to redeem for goods and services.</li>
          <li><strong>Decentralized streaming services.</strong> Platforms like Audius and Livepeer allow users to earn tokens for listening to music or streaming video. These tokens can then be used to support artists and creators or to redeem for exclusive content and experiences.</li>
          <li><strong>Decentralized storage networks.</strong> Platforms like Filecoin and Sia allow users to earn tokens for storing and sharing data. These tokens can then be used to pay for storage or to earn rewards for contributing to the network.</li>
          </ul>
          <hr></hr>
        </div>
        <div class="article">
          <h3 id="the-price-of-crypto">The Price of Crypto</h3>
          <p>By many standards, bitcoin and crypto have been the best performing asset since it&#39;s inception. The large price movements in crypto draw many in, and the volatility keeps many at bay as well.
          By learning about the fundamentals of this tech though we can pierce through the hype and fear of price to better understand where we think it will go in the future.</p>
          <h5 id="if-bitcoin-and-ethereum-aren-t-real-how-can-they-be-worth-so-much-">If Bitcoin and Ethereum aren&#39;t <em>real</em>, how can they be worth so much?</h5>
          <p>Crypto is quite intangible compared to cash or the idea of a stock, so it can be tricky to get your head around. But in many ways, it isn&#39;t so different from the intangibility of credit or digital money that we have been magically summoning with plastic cards at shop checkouts for years.</p>
          <p><strong>Modern currency is exchanging tokenized forms of trust</strong>.
          The plastic I pay with can&#39;t directly feed me or protect me - but as everyone <em>trusts</em> that they will be able to redeem credit for real world goods an economy is created based o belief.</p>
          <p>Crypto is a another tokenized form of trust and value - one that is mathematically underpinned, transparent and scarce. These aspects draw investment in contrasts to the traditional systems, and due to the limited supply, drive price up.</p>
          <p>If we were two average the price over 2 years, and plot that as we move that 2 year timeframe forward in time from bitcoin&#39;s inception, we get the graph below. This is known as a 2 year moving-average and is often used to reduce the appearance of volatility to look at the underlying trends.</p>
          <br></br> <br></br>
          <h4>Crypto is a turbulent sea with fierce waves - but data shows the whole sea has been consistently rising when zoomed out, and with volatility actually decreasing as time goes on. </h4>
        </div>
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
