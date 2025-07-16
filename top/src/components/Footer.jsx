function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="ft-logo">
          <img
            src="https://static.tossdown.com/images/da52b9b3-ba03-4d41-bc8f-ac9e7d6a598b.webp"
            alt="Salt'n Pepper Logo"
          />
          <p>
            Project by Umer Khan – Bano Qabil Course<br />
            Instructor: Sir Shahbaz Ahmed
            <br />
            <br />
            Project Title: Salt’n Pepper Restaurants – A Culinary Experience
          </p>
          <div className="footer-links">
            <a href="#">Terms &amp; Conditions</a> | <a href="#">Privacy Policy</a>
          </div>
        </div>

        <div className="site-links">
          <h4>Site Links</h4>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Publications</a>
          <a href="#">Get a Franchise</a>
          <a href="#">Feedback</a>
        </div>

        <div className="contact">
          <h4>Contact Us</h4>
          <p>
            <strong>Head Office Address:</strong>
            <br /> Foodconsults (Pvt) Ltd
            <br /> 23-Usman Block, New Garden Town, Lahore, Pakistan
          </p>

          <p>
            <strong>Head Office Numbers:</strong>
            <br />
            <a href="tel:+92428884411">+92 42 888 444 11</a>
            <br />
            <a href="tel:+923350038679">+92 33 50 03 86 79</a>
          </p>

          <p>
            <strong>Email Address:</strong>
            <br />
            <a href="mailto:snpfood@brain.net.pk">snpfood@brain.net.pk</a>
          </p>

          <p>
            <strong>Free Delivery Numbers:</strong>
            <br />
            <a href="tel:+923350038679">+92 42 999 999 000</a>
            <br />
            <a href="tel:+923350038679">+92 33 500 38 679</a>
          </p>
        </div>

        <div className="follow">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="app-links">
            <img
              src="https://static.tossdown.com/images/15a204d9-9623-4aea-8c7a-a4419417ee7e.webp"
              alt="App Store"
            />
            <img
              src="https://static.tossdown.com/images/c5c0daad-373c-4dd5-a8e8-6dcbbd142963.webp"
              alt="Google Play"
            />
          </div>
        </div>
      </div>

      <div className="sec-footer">
        <p>&copy; 2025 Snp Main Umer Khan</p>
        <p>Powered by Bano Qabil.Net</p>
      </div>
    </footer>
  );
}

export default Footer;