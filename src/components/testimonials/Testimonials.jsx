import React from 'react'
import './Testimonials.css'
// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';



import client1 from '../../assets/client1.png'
import client2 from '../../assets/client2.png'
import client3 from '../../assets/client3.png'
import client4 from '../../assets/client4.png'
import client5 from '../../assets/client5.png'


const clientData = [
    {
        id: 1,
        name: 'Alieng Keolany',
        imagePath: client1,
        comment: 'This is unbelievable. After using services with Xaypanya Phongsa my buisness skyrocketed!'
    },
    {
        id: 2,
        name: 'Thanouthong Nanthavong',
        imagePath: client2,
        comment: 'Thanks Xaypanya Phongsa! Your product description are amazing and your service is wonderful .'
    },
    {
        id: 3,
        name: 'Pong Keosithong',
        imagePath: client3,
        comment: 'Would definitely recommend Xaypanya Phongsa and will definitely be using your services again. '
    },
    {
        id: 4,
        name: 'Annie Thammavongsa',
        imagePath: client4,
        comment: 'my blog website has just deployed.  It is soooo beautiful. Thank you for developing it so quickly!'
    },
    {
        id: 5,
        name: 'Sinxai Xaybounmee',
        imagePath: client5,
        comment: 'Thank you so much Xaypanya Phongsa for your help. Nice work on your Website. You guys rock!'
    },
]

function Testimonials() {
    return (
        <section id='testimonials'>
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
            // install Swiper modules
                modules={[Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                autoplay={{delay: 5000}}
                pagination={{ clickable: true }}
            >
               {clientData.map((client)=>(
                <SwiperSlide key={client.id} className='testimonial'>
                    <div className="client__avatar">
                        <img src={client.imagePath} alt={client.name}/>
                    </div>
                    <h5 className='client__name'>{client.name}</h5>
                    <small className='client__review'>{client.comment}</small>
                </SwiperSlide>
               ))}
            </Swiper>
        </section>
    )
}

export default Testimonials
