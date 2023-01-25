
import './App.css';
import LogoRestaurant from "./Assets/logo1.png";
import CarouselGallery from './Components/CarouselGallery/CarouselGallery';
import Cart from './Components/Cart/Cart';
import TotalCart from './Components/Cart/TotalCart';
import TotalOnBoard from './Components/Cart/TotalOnBoard';
import Checkout from './Components/Checkout/Checkout';
import ThankUser from './Components/Checkout/ThankUser';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter/AllCategories';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div>
    <ThankUser />
    <ScrollToTop />
    <Cart />
    <Checkout />
      <header className="px-2 py-3 HeaderMain">
        <div className="container">
          <figure className='HeaderBanner'>
            <div className="outerBevel">
              <div className="flatSurface">
                <div className="innerBevel p-3">
                  <h1 className='headerTitle text-center'>
                    <span className='FlagGreen'>IT</span><span className='FlagWhite'>ALI</span><span className='FlagRed'>AN</span>
                    <img className='LogoRestaurant ms-2' src={LogoRestaurant} alt="LogoRestaurant" />
                  </h1>
                    <p className='headerText'>
                      Italian food is simple and healthy, and it’s easier for a vegetarian to choose something from the menu.<br />
                      With every bite, it feels like you are being transported to Italy. 
                    </p>
                </div>
              </div>
            </div>
          </figure>

          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

            <div className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <figure className='ChefCatTotalMain'>
                <div className="outerBevel">
                  <div className="flatSurface">
                    <div className="innerBevel chefCatTotalBoard">
                      <TotalCart />
                      <TotalOnBoard />
                    </div>
                  </div>
                </div>
              </figure> 
            </div>

            <figure className='col-12 col-lg-3 me-lg-auto mx-auto mb-2 justify-content-center mb-md-0 TopMenu'>
              <div className="outerBevel">
                <div className="flatSurface">
                  <div className="innerBevel">
                  <ul className="navMenu p-0">
                    <li className='text-center'>
                      <AllCategories />
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            </figure>
          
            <div className="img-fluid col-lg-4">
                <figure>
                  <div className="outerBevel">
                    <div className="flatSurface">
                      <div className="innerBevel">
                        <CarouselGallery />
                      </div>
                    </div>
                  </div>
                </figure>
            </div>
          </div>
        </div>
      </header>
      <div className="separator w-100"></div>
      <h2 className='text-center my-5 MenuTitle'>MAKE YOUR CHOICE</h2>
      <Dishes />
      <Footer />
    </div>
  );
}

export default App;
