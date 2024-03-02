import './CardContainer.css'
import {CardInfo} from '../../components/index'
import { useEffect } from 'react';
function CardContainer ({cardInformation}){
  useEffect(()=>{
    observer.observe(document.querySelector('.CardContainer'));
  })
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const scroller = entry.target.querySelector('.scroller');
  
      if (entry.isIntersecting) {
        scroller.classList.add('scroller-animation');
      return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      scroller.classList.remove('scroller-animation');
    });
  });
  const cardInfo =cardInformation.results?.map((card)=>{
    return(
        <CardInfo 
          key={card.pk}
          url={card.url}
          image={card.image}
          name={card.name}
          category_slug={card.category_slug}
        />
    )
  });
    return(
        <div className='CardContainer'>
          <div className='scroller'>
          {cardInfo?cardInfo:null}
          </div>
        </div>
    );
}
export default CardContainer