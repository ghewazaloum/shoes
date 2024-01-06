import './App.css';
import shoe from './Assests/Images/shoe.png'
import { UnFocusedButton } from './components/Button/Button';
import { Curves, Navbar,Information ,ShoeContainer,DisplayShoes, Headers, Button, WideButton, Colors, Card} from './components/index';
import { TinyGlassContainer } from './sections/GlassContainer/GlassContainer';
import { ButtonContainer, CardContainer, Container, GlassContainer, ShoesContainer, SmallGlassContainer } from './sections/index';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Curves/>
          <Container>
            <Information>
              <h2>the ultimate<br/><span>sneak</span> shoe<br/>paradise</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque quis, reprehenderit unde dolores repudiandae maxime!</p>
              <Button>Buy now</Button>
              <p>COLOR:</p>
              <Colors/>
            </Information>
            <ShoeContainer/>
            {/* <DisplayShoes/> */}
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
        <CardContainer>
          <Card>
            <div>
                <p>Nike Air</p>
                <h3>sf air force 1 med mens</h3>
                <p>30.00$</p>    
            </div>   
            <div>
              <img src={shoe}/>
            </div>
            <div>
              <i>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 -80 150 300"  >
                <g>
                  <path class="shopping" d="M22.63,12.6h93.3c6.1,0,5.77,2.47,5.24,8.77l-3.47,44.24c-0.59,7.05-0.09,5.34-7.56,6.41l-68.62,8.73 l3.63,10.53c29.77,0,44.16,0,73.91,0c1,3.74,2.36,9.83,3.36,14h-12.28l-1.18-4.26c-24.8,0-34.25,0-59.06,0 c-13.55-0.23-12.19,3.44-15.44-8.27L11.18,8.11H0V0h19.61C20.52,3.41,21.78,9.15,22.63,12.6L22.63,12.6z M53.69,103.92 c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48C44.21,108.17,48.45,103.92,53.69,103.92 L53.69,103.92z M92.79,103.92c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48 C83.31,108.17,87.56,103.92,92.79,103.92L92.79,103.92z"/>
                </g>
              </svg>
              </i>
            </div>
          </Card>
          <Card>
            <div>
                <p>Nike Air</p>
                <h3>sf air force 1 med mens</h3>
                <p>30.00$</p>    
            </div>   
            <div>
              <img src={shoe}/>
            </div>
            <div>
              <i>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 -80 150 300"  >
                <g>
                  <path class="shopping" d="M22.63,12.6h93.3c6.1,0,5.77,2.47,5.24,8.77l-3.47,44.24c-0.59,7.05-0.09,5.34-7.56,6.41l-68.62,8.73 l3.63,10.53c29.77,0,44.16,0,73.91,0c1,3.74,2.36,9.83,3.36,14h-12.28l-1.18-4.26c-24.8,0-34.25,0-59.06,0 c-13.55-0.23-12.19,3.44-15.44-8.27L11.18,8.11H0V0h19.61C20.52,3.41,21.78,9.15,22.63,12.6L22.63,12.6z M53.69,103.92 c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48C44.21,108.17,48.45,103.92,53.69,103.92 L53.69,103.92z M92.79,103.92c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48 C83.31,108.17,87.56,103.92,92.79,103.92L92.79,103.92z"/>
                </g>
              </svg>
              </i>
            </div>
          </Card>
          <Card>
            <div>
                <p>Nike Air</p>
                <h3>sf air force 1 med mens</h3>
                <p>30.00$</p>    
            </div>   
            <div>
              <img src={shoe}/>
            </div>
            <div>
              <i>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 -80 150 300"  >
                <g>
                  <path class="shopping" d="M22.63,12.6h93.3c6.1,0,5.77,2.47,5.24,8.77l-3.47,44.24c-0.59,7.05-0.09,5.34-7.56,6.41l-68.62,8.73 l3.63,10.53c29.77,0,44.16,0,73.91,0c1,3.74,2.36,9.83,3.36,14h-12.28l-1.18-4.26c-24.8,0-34.25,0-59.06,0 c-13.55-0.23-12.19,3.44-15.44-8.27L11.18,8.11H0V0h19.61C20.52,3.41,21.78,9.15,22.63,12.6L22.63,12.6z M53.69,103.92 c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48C44.21,108.17,48.45,103.92,53.69,103.92 L53.69,103.92z M92.79,103.92c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48 C83.31,108.17,87.56,103.92,92.79,103.92L92.79,103.92z"/>
                </g>
              </svg>
              </i>
            </div>
          </Card>
        </CardContainer>

        <ShoesContainer>
            <svg width="1804" height="825" viewBox="0 0 1804 825" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M235 667C28.6668 783 -226.6 945.4 403 667C1190 319 2203 -287.5 1633 168C1063 623.5 890 776.5 1031.5 767" stroke="black" stroke-width="8"/>
            </svg>
            <Information>
              <span>About Us</span>
              <h2>elevate your<br/>look with <span>shoes</span> </h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque quis, reprehenderit unde dolores repudiandae maxime!</p>
              <ButtonContainer>
                   <Button>Buy now</Button>
                   <UnFocusedButton>learn more</UnFocusedButton>
              </ButtonContainer>
            </Information>
            <img src={shoe}/>
          </ShoesContainer>
          <Headers>for women</Headers>
        <CardContainer>
          <Card>
            <div>
                <p>Nike Air</p>
                <h3>sf air force 1 med mens</h3>
                <p>30.00$</p>    
            </div>   
            <div>
              <img src={shoe}/>
            </div>
            <div>
              <i>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 -80 150 300"  >
                <g>
                  <path class="shopping" d="M22.63,12.6h93.3c6.1,0,5.77,2.47,5.24,8.77l-3.47,44.24c-0.59,7.05-0.09,5.34-7.56,6.41l-68.62,8.73 l3.63,10.53c29.77,0,44.16,0,73.91,0c1,3.74,2.36,9.83,3.36,14h-12.28l-1.18-4.26c-24.8,0-34.25,0-59.06,0 c-13.55-0.23-12.19,3.44-15.44-8.27L11.18,8.11H0V0h19.61C20.52,3.41,21.78,9.15,22.63,12.6L22.63,12.6z M53.69,103.92 c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48C44.21,108.17,48.45,103.92,53.69,103.92 L53.69,103.92z M92.79,103.92c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48 C83.31,108.17,87.56,103.92,92.79,103.92L92.79,103.92z"/>
                </g>
              </svg>
              </i>
            </div>
          </Card>
          <Card>
            <div>
                <p>Nike Air</p>
                <h3>sf air force 1 med mens</h3>
                <p>30.00$</p>    
            </div>   
            <div>
              <img src={shoe}/>
            </div>
            <div>
              <i>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 -80 150 300"  >
                <g>
                  <path class="shopping" d="M22.63,12.6h93.3c6.1,0,5.77,2.47,5.24,8.77l-3.47,44.24c-0.59,7.05-0.09,5.34-7.56,6.41l-68.62,8.73 l3.63,10.53c29.77,0,44.16,0,73.91,0c1,3.74,2.36,9.83,3.36,14h-12.28l-1.18-4.26c-24.8,0-34.25,0-59.06,0 c-13.55-0.23-12.19,3.44-15.44-8.27L11.18,8.11H0V0h19.61C20.52,3.41,21.78,9.15,22.63,12.6L22.63,12.6z M53.69,103.92 c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48C44.21,108.17,48.45,103.92,53.69,103.92 L53.69,103.92z M92.79,103.92c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48 C83.31,108.17,87.56,103.92,92.79,103.92L92.79,103.92z"/>
                </g>
              </svg>
              </i>
            </div>
          </Card>
          <Card>
            <div>
                <p>Nike Air</p>
                <h3>sf air force 1 med mens</h3>
                <p>30.00$</p>    
            </div>   
            <div>
              <img src={shoe}/>
            </div>
            <div>
              <i>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 -80 150 300"  >
                <g>
                  <path class="shopping" d="M22.63,12.6h93.3c6.1,0,5.77,2.47,5.24,8.77l-3.47,44.24c-0.59,7.05-0.09,5.34-7.56,6.41l-68.62,8.73 l3.63,10.53c29.77,0,44.16,0,73.91,0c1,3.74,2.36,9.83,3.36,14h-12.28l-1.18-4.26c-24.8,0-34.25,0-59.06,0 c-13.55-0.23-12.19,3.44-15.44-8.27L11.18,8.11H0V0h19.61C20.52,3.41,21.78,9.15,22.63,12.6L22.63,12.6z M53.69,103.92 c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48C44.21,108.17,48.45,103.92,53.69,103.92 L53.69,103.92z M92.79,103.92c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48 C83.31,108.17,87.56,103.92,92.79,103.92L92.79,103.92z"/>
                </g>
              </svg>
              </i>
            </div>
          </Card>
        </CardContainer>
 
    </div>
  );
}

export default App;
