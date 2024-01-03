import './App.css';
import shoe from './Assests/Images/shoe.png'
import { Curves, Navbar,Information ,ShoeContainer,DisplayShoes, Headers, Button, WideButton} from './components/index';
import { TinyGlassContainer } from './sections/GlassContainer/GlassContainer';
import { Container, GlassContainer, PageContainer, SmallGlassContainer } from './sections/index';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Curves/>
          <Container>
            <Information/>
            <ShoeContainer/>
            <DisplayShoes/>
          </Container>
        <Headers>our collection</Headers>
        <Container>
          <GlassContainer>
            <div className='firstDiv'>
              <p >black friday <span>sale</span></p>
              <h1 className='h1' >up to</h1>
              <h2>55% off</h2>
              <Button>shop now</Button>
            </div>
            <img className='img1' src={shoe}/>
          </GlassContainer>
          <div id='div1'>
              <SmallGlassContainer>
              <div className='secondDiv'>
              <h1 >puma shoes</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque quis</p>
              <Button>shop now</Button>
            </div>
            <img className='img2' src={shoe}/>
              </SmallGlassContainer>
              <div id='div2'> 
                  <TinyGlassContainer>
                  <h3 className='headerH3'>puma shoes</h3>
                  <img className='img1' src={shoe}/>
                  <WideButton>shop now</WideButton>

                  </TinyGlassContainer>
                  <TinyGlassContainer>
                  <h3 className='headerH3'>brand shoes</h3>
                  <img className='img1' src={shoe}/>
                  <WideButton>shop now</WideButton>
                  </TinyGlassContainer>
              </div>
          </div>

        </Container>
        <Headers>for men</Headers>
 
    </div>
  );
}

export default App;
