import React from 'react';
import './Certificate.css';
import cer1 from '../../assets/Cer1.png';
import cer2 from '../../assets/Cer2.png';
import cer3 from '../../assets/Cer3.png';
import cer4 from '../../assets/Cer4.png';
import cer5 from '../../assets/Cer5.png';
import cer6 from '../../assets/Cer6.png';
import cer7 from '../../assets/Cer7.png';
import cer8 from '../../assets/Cer8.png';
import cer9 from '../../assets/Cer9.png';
import cer10 from '../../assets/Cer10.png';
import cer11 from '../../assets/Cer11.png';
import cer12 from '../../assets/Cer12.png';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const certificateData = [
  { imageUrl: cer12, title: "Front End Development Libraries" },
  { imageUrl: cer2, title: "Lao Young Hacker Competition" },
  { imageUrl: cer4, title: "Hacking Workshop" },
  { imageUrl: cer3, title: "The English Access Microscholarship Summer Camp Program" },
  { imageUrl: cer11, title: "Successfully Completing Team Excellence" },
  { imageUrl: cer5, title: "Workshop: Basic Arduino" },
  { imageUrl: cer6, title: "Workshop: Hydraulic" },
  { imageUrl: cer7, title: "Successful Completion of the Intensive" },
  { imageUrl: cer8, title: "The Access Alumni Physic, Social and Virtual Awareness Camp" },
  { imageUrl: cer9, title: "Completed the Word, Powerpoint, Excel" },
  { imageUrl: cer1, title: "Successful Completion Intern" },
  { imageUrl: cer10, title: "Web Design Contest" },
];

function Certificate() {
  return (
    <section id='certificate'>
      <h2>Certificate</h2>

      <div className="container certificate__container">
        {certificateData.map((certificate, index) => (
          <article key={index} className='certificate__item'>
            <Zoom
            zoomMargin={124}
            >
              <img className='cert_image' src={certificate.imageUrl} alt={certificate.title} />
            </Zoom>
            <h3>{certificate.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certificate;
