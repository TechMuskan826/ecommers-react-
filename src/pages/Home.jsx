import React from 'react';
import Navbar from '../component/Navbar.jsx';
import Slider from '../component/Slider.jsx';
import './Home.css';

const Home = () => {
  const items = [
    {
      id: 1,
      image:'image/img2_a (1).jpg',
      image1:'image/img2_c_360x.webp',
      title: 'BLUSH POWDER',
      price: 6000,
     
    
    },
    {
      id: 2,
      image: 'image/img6_a_360x.webp',
      image1:'image/img6_c_360x.webp',
      title: 'Cover-Up Cream Foundation',
      price: 7000
    },
    {
      id: 3,
      image: 'image/img5_a_720x.webp',
      image1:'image/img5_b_720x.webp',
      title: 'Bronzing Powder',
      price: 8000
      
    },
    {
      id: 4,
      image: 'image/img11_a_360x.webp',
      image1:'image/img11_c_360x.webp',
      title: 'Herbal Skin Remedy',
      price: 2000
    },
    {
      id: 5,
      image: 'image/img8_a_360x.webp',
      image1:'image/img11_c_360x.webp',
      title: 'Emerald Deep Moisture Glow Oil',
      price: 2500
    },
    {
      id: 6,
      image: 'image/img9_a_360x.webp',
      image1:'image/img9_b_360x.jpg',
      title: 'Essential Daily Primer',
      price: 2600
    },
    {
      id: 7,
      image: 'image/img7_a_360x.webp',
      image1:'image/img6_c_360x.webp',
      title: 'Cream Concealer Refill',
      price: 3000

    },
    {
      id: 8,
      image: 'image/img4_a_720x.webp',
      image1:'image/img4_c_720x.webp',
      title: 'Brighten Pineapple',
      price: 2400

    }
  ];
  const postitem = [
    {
      id: 1,
      image:'image/new1_bf040da3-333d-4e80-884a-48c7fdfe2dc3_540x.webp',
      title: 'AUGUST 26,2020',
      title2:'ESSENTIAL CHRISTMAS GIFT GUIDE 2020',
      title3:'Baths can improve skin health. Originally you might think that baths would maybe dry out...',
      price: 1000
    },
    {
      id: 2,
      image: 'image/new2_6ee2b593-0784-4f60-8d2c-0db3e141b54f_540x.webp',
      title: 'AUGUST 26,2020',
      title2:'3 SKINCARE TIPS TO PROTECT YOUR SKIN',
      title3:'Even though most of Utah has fully opened up  we ve been having fun doing...',
      price: 1000
    },
    {
      id: 3,
      image: 'image/new3_1080x.jpg',
      title: 'AUGUST 26,2020',
      title2:'PLASTIC FREE CHRISTMAS WITH OUR LOVE',
      title3:'Hey guys! I wanted to share the Best of multiple categories from the Nordstrom Sale,...',
      price: 1000
    },
  ]
  const air =[
    {
      id:1,
      image:'image/airplane.png',
      title: 'WORLDWIDE SHIPPING',
      title2:'Special financing and earn rewwards.'

  },
    {
      id:2,
      image:'image/cash-flow.png',
      title: '30 DAYS GUARANTEE',
      title3:'30-days free return policy.'

  },
    {
      id:3,
      image:'image/lock.png',
      title: 'SECURED PAYMENTS',
      title2:'We accept all majoi credit cards.'

  }
]

  return (
    <>
      <Navbar />
      <Slider />
      

      <div className="boxcontainer">
        <div className="boxbestxt">
          <h1 className='taxtbest'>Best Seller New Arrivals Body & Bath Haircare Acne & Blemishes</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-6 bestimgbox">
              <img src="image/bn6_1920x.jpg" alt="Best Seller" className="imagebest" />
            </div>
            <div className="col-xl-6 bestimgbox">
              <img src="image/a3_1920x.jpg" alt="New Arrival" className="imagebest" />
            </div>
          </div>
        </div>
      </div>

      <div className="boxarriver">
        <div className="arrival">
          <h3 className='besttext'>BEST FOR YOU</h3>
          <h1 className='newtext'>New Arrivals</h1>
          <h5 className='newtext1'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black and there were stars.</h5>
        </div>

        <div className="cardbox-container"> {/* Container for all cards */}
          {items.map(item => (
            <div key={item.id} className="cardbox"> {/* Unique key based on item id */}
              <img src={item.image}  alt={item.title} className="card-image cardimge" />
              <img src={item.image1} alt="" className='card-image1 cardimage1' />
              <h3 className="card-title">{item.title}</h3>
              <span className='textprice'>Rs . {item.price}.00 </span>
             </div>
           
          ))}
        </div>
      </div>

      <div className="boxrive">
        
        
            <h1 className='coustomerhead'>COUSTOMER REVIEWS</h1>
            <div className="star">
              <img src="image/star.png" alt="" className='straimg' />
              <img src="image/star.png" alt="" className='straimg' />
              <img src="image/star.png" alt="" className='straimg' />
              <img src="image/star.png" alt="" className='straimg' />
              <img src="image/star (1).png" alt="" className='straimg'/>
            </div>
            <h1 className='textriv'>“The most comfortable shoes ever!! I <br />
            have them in 3 colors. And I am not <br />
            done."</h1>
            <h4 className='daytext'>— Jaycie, The Day Glove</h4>
         
          
          <div className="boxmageriv">
         
            <img src="image/rv1_550x.jpg" alt="" className='imgrive' />
            </div>
            </div>

            <div className="letastpostbox">
              <h5 className='postbox'>THE DALIY MUSE</h5>
              <h1 className='postbox1'>Latest news</h1>
              <h6 className='postbox3'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black and there a stars.</h6>
            
              <div className="cardpostbox-container">
             
              {postitem.map(data => (
    <div key={data.id} className="latesnew">
        <img src={data.image} alt={data.title} className='imagenew' />
        <h5 className='textnew'>{data.title}</h5>
        <h2 className='textnew2'>{data.title2}</h2>
        <h4 className='textnew3'>{data.title3}</h4>
        <button type='bttuon' className='btn'><span className='btn2'>READ MORE</span></button>
        </div>
))}
 </div>
        <div className="boxicon">
        {air.map(daye =>(
           <div key={daye.id}className="boxair">
           <img src={daye.image} alt=""  className='imgair'/>
           <h5 className='textair'>{daye.title}</h5>
           <h6 className='texair2'>{daye.title2}</h6>
           <h6 className='texair2 texair3'>{daye.title3}</h6>
           </div>
        ))} 
         </div>   
            </div>
            <div className="boxinsta">
            <h2 className='textinstal'>INSTAGRAM</h2>
            <h1 className='ow'>owOrganic</h1> 
            </div>
       
    </>
  );
};

export default Home;
