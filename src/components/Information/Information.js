import { Button, Colors } from '../index';
import './Information.css'
function Information(){
    return(
        <div className='information'>
            <h2>the ultimate<br/><span>sneak</span> shoe<br/>paradise</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque quis, reprehenderit unde dolores repudiandae maxime!</p>
            <Button>Buy now</Button>
            <p>COLOR:</p>
            <Colors/>
        </div>
    );
}
export default Information