import React from 'react';
//
import AboutCard1 from '../Layout/AboutCard1';
import Jed  from '../AboutUs/r.jpeg';
import Jed2  from '../AboutUs/y.jpeg';
import Jed1  from '../AboutUs/1.jpeg';

const AboutUs = () => {

  const aboutUsData = [{
    img: Jed,
    name: "Jed Mike",
    designation: "co-founder @Linkedin",
    quotes: "“Today, I share the Series B deck with you, too. It has many stylistic errors — and a few substantive ones, too — that I would now change having learned more, but I realized that it still provides useful insights for entrepreneurs and startup participants outside of the Greylock network, particularly across three areas of interest:”"
  },
  {
    img: Jed2,
    name: "Konstantin Guericke ",
    designation: "co-founder @LinkedIn",
    quotes: "“ISometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.”"
  },
  {
    img: Jed1,
    name: "Eric Thich Vi Ly ",
    designation: "Director Head @LinkedIn",
    quotes: "“ Debugging is twice as hard as writing the code in the first place.Therfore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it”"
  }];

  return (
    <div className="component">
      <h3>About Us</h3>
      <p>
      Linkedin vision is Create economic opportunity for every member of the global workforce.
      </p>
      <p>

      Today, LinkedIn leads a diversified business with revenues from membership subscriptions, advertising sales and recruitment solutions under the leadership of Ryan Roslansky. In December 2016, Microsoft completed its acquisition of LinkedIn, bringing together the world’s leading professional cloud and the world’s leading professional network.
      </p>
      <p><strong>People</strong></p>
      <AboutCard1 data={aboutUsData}/>
    </div>
  )
}

export default AboutUs;
