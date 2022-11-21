import React  from 'react';
import Jed1  from '../AboutUs/download.png';

const Home = (classes) => {
 
  return (
    <div className="component">
      <div className="row">
        <div className="col-lg-6">
          <div>
            <h1 className="title-heading">The mission of LinkedIn is simple: connect the world’s professionals to make them more productive and successful.</h1>
            <button type="button" className="btn btn-dark btn-lg btn-download ">Join now</button>
          </div>



        

        </div>
        <div className="col-lg-6 image-div">
          <img className={classes.titleImage} src={Jed1} alt="iphone-mockup"/>
        </div>
      </div>
      {/* <h3>Career Path</h3>
      <p>Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set.
      </p>
      <p>Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set.
      </p>
      <p>Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set.
      </p>
      <p>Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. \
      Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set. Lorem Ipsum Dolar Set.
      </p> */}
    </div>
  )
}

export default Home;