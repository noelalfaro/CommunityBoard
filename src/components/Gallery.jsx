import React from 'react'
import '../App.css'
import Event from './Event'
import image1 from '../images/event1.jpg'
import image2 from '../images/event2.jpeg'
import image3 from '../images/event3.jpg'
import image4 from '../images/event4.jpg'
import image5 from '../images/event5.jpg'
import image6 from '../images/event6.jpg'
import image7 from '../images/event7.jpg'
import image8 from '../images/event8.jpg'
import image9 from '../images/event9.jpg'
import image10 from '../images/event10.jpg'
import image11 from '../images/event11.jpg'
import image12 from '../images/event12.jpg'



export default function Gallery() {
  return (

    <div className='galleryContainer'>
        <div className='gallery'>
            <Event imageSrc={image1} name="Bright horizons at Clybourn Preschool open house" link="https://www.lincolnparkchamber.com/event/bright-horizons-at-clybourn-preschool-open-house/"/>
            <Event imageSrc={image2} name="Coffee connection at heron agency" link="https://www.lincolnparkchamber.com/event/coffee-connection-at-heron-agency/"/>
            <Event imageSrc={image3} name="Guiness passport arty at theatre on the Lake" link="https://www.lincolnparkchamber.com/event/guinness-passport-party-at-theater-on-the-lake/"/>
            <Event imageSrc={image4} name="Beat the brewer at whirlyball with lagunitas brewing company" link="https://www.lincolnparkchamber.com/event/beat-the-brewer-at-whirlyball-with-lagunitas-brewing-company/"/>
            <Event imageSrc={image5} name="BACP Business Education Workshop Webinar: City Inspections - Ask Questions, Get Answers" link="https://www.lincolnparkchamber.com/event/bacp-business-education-workshop-webinar-city-inspections-ask-questions-get-answers/"/>
            <Event imageSrc={image6} name="Chicago A Capella Presents: From Behind Closed Doors" link="https://www.lincolnparkchamber.com/event/chicago-a-capella-presents-from-behind-closed-doors/"/>
            <Event imageSrc={image7} name="Family Storybook Yoga at Peggy Notebaert Nature Museum" link="https://www.lincolnparkchamber.com/event/family-storybook-yoga-at-peggy-notebaert-nature-museum-3/"/>
            <Event imageSrc={image8} name="Tiny Tots Yoga at Peggy Notebaert Nature Museum" link="https://www.lincolnparkchamber.com/event/tiny-tots-yoga-at-peggy-notebaert-nature-museum/"/>
            <Event imageSrc={image9} name="Out of Control Eating Deep Dive with Laura B. Folkes, Certified Holistic Health Coach" link="https://www.lincolnparkchamber.com/event/out-of-control-eating-deep-dive-with-laura-b-folkes-certified-holistic-health-coach-2/"/>
            <Event imageSrc={image10} name="Bad Momz of Comedy at Theater on the Lake" link="https://www.lincolnparkchamber.com/event/bad-momz-of-comedy-at-theater-on-the-lake/"/>
            <Event imageSrc={image11} name="Black History Month Gallery Activities at the Chicago History Museum" link="https://www.lincolnparkchamber.com/event/black-history-month-gallery-activities-at-the-chicago-history-museum/"/>
            <Event imageSrc={image12} name="Health Technology Use In Adolescence with Dr. Jason Hacker at Fusion Academy Lincoln Park" link="https://www.lincolnparkchamber.com/event/health-technology-use-in-adolescence-with-dr-jason-hacker-at-fusion-academy-lincoln-park/"/>
    </div>
    </div>
    
  )
}
