import React from 'react';
import './Blog.css';
import Titulo from '../Titulo/Titulo';
import Cardblog from './Cardblog';
import blogimage1 from '../img/blog_image_1.svg';
import blogimage2 from '../img/blog_image_2.svg';
import blogimage3 from '../img/blog_image_3.svg';
import blogimage4 from '../img/blog_image_4.svg';
import avatar1 from '../img/Mask_Group_1.svg';
import avatar2 from '../img/Mask_Group_2.svg';
import avatar3 from '../img/Mask_Group_3.svg';
import avatar4 from '../img/Mask_Group_4.svg';
import seta from '../img/Arrow.svg';
import Seta from './Seta';

const Blog = () => {
  const carrossel = React.useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
    console.log(e);
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft += carrossel.current.offsetWidth;
  };

  return (
    <section className={'blog-container'}>
      <div className={'blog-title'}>
        <Titulo h2>{'Read Our Blog'} </Titulo>
      </div>
      <div className={'bloginfo'}>
        <Titulo p>
          Far far away, behind the word mountains, far from the countries
        </Titulo>
      </div>
      <div className={'bloginfo1'}>
        <Titulo p>Vokalia and Consonantia, there live the blind texts.</Titulo>
      </div>

      <button onClick={handleLeftClick} className={'btnleft'}>
        <Seta seta={seta} setaleft />
      </button>
      <button onClick={handleRightClick} className={'btnright'}>
        <Seta seta={seta} />
      </button>
      <div className={'carrossel'} ref={carrossel}>
        <div className={'card-break'}>
          <Cardblog
            img={blogimage1}
            titulo={'Quick-start guide to nuts and seeds'}
            avatar={avatar1}
            nome={'Kevin Ibrahim'}
          />
        </div>
        <div className={'card-break'}>
          <Cardblog
            img={blogimage2}
            titulo={'Nutrition: Tips for Improving Your Health'}
            avatar={avatar2}
            nome={'Mike Jackson'}
          />
        </div>
        <div className={'card-break'}>
          <Cardblog
            img={blogimage3}
            titulo={'The top 10 benefits of eating healthy'}
            avatar={avatar3}
            nome={'Bryan McGregor'}
          />
        </div>
        <div className={'card-break'}>
          <Cardblog
            img={blogimage4}
            titulo={'What Makes a Healthy Diet?'}
            avatar={avatar4}
            nome={'Jashua'}
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
