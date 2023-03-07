import React from "react";
import awakazalogo from '../../assets/delivery/images/awakaza-logo.png';
const Body = () => {
  return (
    <main className="container"><br />
      <h2>Welcome to Awakaza Delivery</h2>
      <p>
        E-commerce web architecture offers a wide range of advantages to both businesses and consumers. For businesses, e-commerce allows for a global reach and a 24/7 online presence, providing a level of convenience that traditional brick-and-mortar stores cannot match. E-commerce websites are also more cost-effective to set up and operate compared to physical stores, as they require less physical infrastructure and can be managed remotely. Additionally, e-commerce allows for more targeted marketing efforts through personalized recommendations and advertising, which can result in higher conversion rates and customer loyalty.
      </p>
      <p>For consumers, e-commerce provides a convenient and accessible shopping experience that allows them to shop from anywhere and at any time. Online stores offer a wider selection of products and services than traditional stores, with easy search and comparison tools that allow consumers to find the best deals quickly. E-commerce websites also offer a secure payment process and flexible payment options, making transactions more convenient and accessible. Overall, e-commerce web architecture benefits both businesses and consumers by providing a more efficient, cost-effective, and convenient way to buy and sell products and services.
      </p><br />

      <div className="row">

        <div className="col-md-6">
          <div className="card" style={{ width: '205px' }}>
            <img src={awakazalogo} className="card-img-top" alt="..." style={{ width: '200px' }}></img>
            <div className="card-body">
              <h5 className="card-title">Latest News</h5>
              <p className="card-text">Awakaza weekly NewsLetter here !</p>
              <a href="#" className="btn btn-primary">Subscribe</a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card text-bg-dark">
            <img src={awakazalogo} className="card-img-top" alt="..." style={{ width: '400px', height: '250px' }}></img>
            <div className="card-img-overlay">
              <h5 className="card-title">Join with us !</h5>
              <p className="card-text">We are Hiring ! <br />Contact us through email.</p>
              <p className="card-text"><small>Last vacancy updated 3 mins ago</small></p>
            </div>
          </div>
        </div>

      </div>
      <br />
    </main>
  );
};

export default Body;
