import React from 'react';
import ContactUsCard2 from '../Layout/ContactUsCard2';
import one  from '../AboutUs/2.svg';
import one1 from '../AboutUs/3.svg';
import one2 from '../AboutUs/4.svg';
import one3  from '../AboutUs/5.svg';

const Contact = () => {

  const contantData = [{
    img: one,
    name: "Media and press Members of the media may direct inquiries to our communications team. Only members of the press will receive a response.",
    number: "(857)-467-8760",
    email: "media@linkedin.com"
  },
  {
    img: one1,
    name: "Speaker requests, Please email our communications team. We will review each request, but please note that we receive such a large volume of requests that it’s not possible to provide an individual response to every inquiry.",
    number: "(227)-567-6789",
    email: "spealer@linkedin.com"
  },
  {
    img: one2,
    name: "Journalism program, To learn more about LinkedIn For Journalists, view our program page or reach out to us",
    number: "(237)-657-1239",
    email: "journalisttraining@linkedin.com"
  },
  {
    img: one3,
    name: "General Help & Support, If you’re inquiring about cancelling a subscription, please see our Help Center. Or if you’re requiring a refund, please see our policy here and you can request account reviews here. For all other inquiries, please visit the LinkedIn Help Center.",
    number: "(617)-223-2332",
    email: "support@linkedin.com"
  }];

  return (
    <div className="component">
      <h3>Contact Us</h3>
      <p>You can reach out to domains you are interested in</p>
      <ContactUsCard2 data={contantData}/>
    </div>
  )
}

export default Contact;