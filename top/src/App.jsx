import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      {/* ===== Slider / Carousel ===== */}
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://static.tossdown.com/images/9025f107-a9b4-4242-ba97-bee6af69fa9d.webp"
              className="d-block w-100"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.tossdown.com/images/ac51af11-090c-49e8-9296-472de72fc5cb.webp"
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ===== Brand Card Section ===== */}
      <div className="container-fluid">
        <div className="container">
          <div className="brand-heading">
            <h1>
              Welcome to <b>Salt'n Pepper by Umer Khan</b>
              <br />Restaurants! Our Brands
            </h1>
            <p>
              Please click our brands below for further information, reservations or to order online!
            </p>
          </div>
          <section className="hero">
            <div className="brands">
              <div className="brand">
                <img
                  src="https://static.tossdown.com/site/8a66dd76-03d2-4b71-8d03-cf045f0248a7.webp"
                  alt="Restaurant"
                  className="brand-image"
                />
                <button className="brndbtn">Order Now</button>
              </div>
              <div className="brand">
                <img
                  src="https://static.tossdown.com/site/9d9cb355-ac8c-404e-a608-c28242343cd1.webp"
                  alt="Express"
                  className="brand-image"
                />
                <button className="brndbtn">Order Now</button>
              </div>
              <div className="brand">
                <img
                  src="https://static.tossdown.com/site/f9238d0e-7c34-4139-a081-c57b7713628e.webp"
                  alt="Village"
                  className="brand-image"
                />
                <button className="brndbtn">Reserve a Table</button>
              </div>
              <div className="brand">
                <img
                  src="https://static.tossdown.com/images/38f64422-c79a-4650-8df2-5668743154df.webp"
                  alt="Signature"
                  className="brand-image brnd-img"
                />
                <button className="brndbtn">Order Now</button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ===== Franchise Sections ===== */}
      <section className="franchise-section">
        <div className="franchise-header">
          <h1>
            <span className="logo-text">Salt'n Pepper</span>
          </h1>
          <h2>Restaurant Franchises</h2>
          <p>
            Each of our franchises are individually managed. For further details, kindly contact them directly.
          </p>
        </div>

        <div className="franchise-card">
          <div className="franchise-info">
            <p className="city">ISLAMABAD</p>
            <h3>
              <span className="logo-text">Salt'n Pepper</span> Restaurant
            </h3>
            <p className="detail">
              <span className="icon"><i className="fa-solid fa-location-dot"></i></span> Plot# 55, Shabbir Plaza, Gulshan e Maymar, F-6, Karachi
            </p>
            <p className="detail">
              <span className="icon"><i className="fa-solid fa-phone"></i></span> Ph: 051-2604904-6
            </p>
            <button className="direction-btn">
              Get Directions <span className="arrow"><i className="fa-solid fa-arrow-right"></i></span>
            </button>
          </div>
          <div className="franchise-image">
            <img
              src="https://images-beta.tossdown.com/site/7aba8915-02ed-46ee-bd96-1063abe072fa.webp"
              alt="Islamabad Branch"
            />
          </div>
        </div>
      </section>

      <section className="franchise-section">
        <div className="franchise-card">
          <div className="franchise-image">
            <img
              src="https://images-beta.tossdown.com/site/11771dbf-36a1-4684-a55e-18af61e0f77c.webp"
              alt="Faisalabad Branch"
            />
          </div>
          <div className="franchise-info">
            <p className="city">Faisalabad</p>
            <h3>
              <span className="logo-text">Salt'n Pepper</span> Restaurant
            </h3>
            <p className="detail">
              <span className="icon"><i className="fa-solid fa-location-dot"></i></span> 4-Kohinoor City, Faisalabad
            </p>
            <p className="detail">
              <span className="icon"><i className="fa-solid fa-phone"></i></span>Ph: Ph: 041-8711404
            </p>
            <button className="direction-btn">
              Get Directions <span className="arrow"><i className="fa-solid fa-arrow-right"></i></span>
            </button>
          </div>
        </div>
      </section>

      <section className="franchise-section">
        <div className="franchise-card">
          <div className="franchise-info">
            <p className="city">Bahawalpur</p>
            <h3>
              <span className="logo-text">Salt'n Pepper</span> Restaurant
            </h3>
            <p className="detail">
              <span className="icon"><i className="fa-solid fa-location-dot"></i></span> D.C Chowk, opposite Commissioner House, Bahawalpur
            </p>
            <p className="detail">
              <span className="icon"><i className="fa-solid fa-phone"></i></span>Ph: 062-2740271-2
            </p>
            <button className="direction-btn">
              Get Directions <span className="arrow"><i className="fa-solid fa-arrow-right"></i></span>
            </button>
          </div>
          <div className="franchise-image">
            <img
              src="https://images-beta.tossdown.com/site/b2f78afe-11e4-4af5-8aef-cff9c2908614.webp"
              alt="Bahawalpur Branch"
            />
          </div>
        </div>
      </section>

      {/* ===== Express Franchise Cards ===== */}
      <section className="franchise-express franchise-section">
        <div className="franchise-header">
          <h1>
            <span className="logo-text">Salt'n Pepper</span>
          </h1>
          <h2>Express Franchises</h2>
        </div>

        <div className="card-group">
          <div className="card">
            <img
              src="https://static.tossdown.com/images/0f3ddba0-18a0-450e-af77-188aeb795934.webp"
              className="card-img-top"
              alt="Sargodha"
            />
            <div className="card-body">
              <h5 className="card-title">Sargodha</h5>
              <h1>
                <b>Salt'n Pepper</b> Express
              </h1>
              <p className="card-text">
                <i className="fa-solid fa-location-dot"></i> Opposite Sargodha Arts Council Babar Road
              </p>
              <p className="card-text">
                <i className="fa-solid fa-phone"></i> Ph: 048-3725500
              </p>
              <button className="direction-btn">
                Get Directions <span className="arrow"><i className="fa-solid fa-arrow-right"></i></span>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src="https://static.tossdown.com/images/171bb884-f60a-4d94-a0b9-78204522564e.webp"
              className="card-img-top"
              alt="Jhelum"
            />
            <div className="card-body">
              <h5 className="card-title">Jhelum</h5>
              <h1>
                <b>Salt'n Pepper</b> Express
              </h1>
              <p className="card-text">
                <i className="fa-solid fa-location-dot"></i> Opposite Dancing Fountain Gallery 2 Citi Housing Jhelum
              </p>
              <p className="card-text">
                <i className="fa-solid fa-phone"></i> Ph: 0307-7675555
              </p>
              <button className="direction-btn">
                Get Directions <span className="arrow"><i className="fa-solid fa-arrow-right"></i></span>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src="https://static.tossdown.com/images/31b37f0c-5936-4232-a55e-8042c2656526.webp"
              className="card-img-top"
              alt="Faisal Town"
            />
            <div className="card-body">
              <h5 className="card-title">Faisal Town</h5>
              <h1>
                <b>Salt'n Pepper</b> Express
              </h1>
              <p className="card-text">
                <i className="fa-solid fa-location-dot"></i> 34-C Abul Hassan Isfahani Rd, Faisal Town, Lahore
              </p>
              <p className="card-text">
                <i className="fa-solid fa-phone"></i> Ph: 042-111-100-678
              </p>
              <button className="direction-btn">
                Get Directions <span className="arrow"><i className="fa-solid fa-arrow-right"></i></span>
              </button>
            </div>
          </div>
        </div>

        <div className="card-group">
          <div className="card">
            <img
              src="https://static.tossdown.com/images/2b5877b5-ca49-4161-a30e-752ddce91595.webp"
              className="card-img-top"
              alt="DHA"
            />
            <div className="card-body">
              <h5 className="card-title">DHA</h5>
              <h1>
                <b>Salt'n Pepper</b> Express
              </h1>
              <p className="card-text">
                <i className="fa-solid fa-location-dot"></i> 93-Y Phase III, DHA, Lahore
              </p>
              <p className="card-text">
                <i className="fa-solid fa-phone"></i> Ph: 042-111-100-678
              </p>
              <button className="direction-btn">
                Get Directions <span className="arrow"><i className="fa-solid fa-arrow-right"></i></span>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src="https://static.tossdown.com/images/0cdc03af-9732-4d0c-9174-f4e66953b3c8.webp"
              className="card-img-top"
              alt="Bahria Town"
            />
            <div className="card-body">
              <h5 className="card-title">Bahria Town</h5>
              <h1>
                <b>Salt'n Pepper</b> Express
              </h1>
              <p className="card-text">
                <i className="fa-solid fa-location-dot"></i> Arwa Heights Building 19 Nishtar Block, Sector E, Bahria Town Lahore
              </p>
              <p className="card-text">
                <i className="fa-solid fa-phone"></i> Ph: 042-111-100-678
              </p>
              <button className="direction-btn">
                Get Directions <span className="arrow"><i className="fa-solid fa-arrow-right"></i></span>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src="https://static.tossdown.com/images/a860f757-114b-4453-ba86-f7b24dc0f24e.webp"
              className="card-img-top"
              alt="Gujar Khan"
            />
            <div className="card-body">
              <h5 className="card-title">Gujar Khan</h5>
              <h1>
                <b>Salt'n Pepper</b> Express
              </h1>
              <p className="card-text">
                <i className="fa-solid fa-location-dot"></i> New Metro City Gujar Khan
              </p>
              <p className="card-text">
                <i className="fa-solid fa-phone"></i> Ph: 0321-1114965
              </p>
              <button className="direction-btn">
                Get Directions <span className="arrow"><i className="fa-solid fa-arrow-right"></i></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;