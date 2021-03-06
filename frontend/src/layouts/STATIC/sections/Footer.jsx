import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div class="left">
          <div class="contact">
            <div>
              <img
                src="https://raw.githubusercontent.com/hammercait/fylo-two-column-layout/9597c64eec3cb785b4a04b31e917204c1622355a/images/icon-phone.svg"
                alt="phone"
              />
              <p>Phone: +1-543-123-4567</p>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/hammercait/fylo-two-column-layout/9597c64eec3cb785b4a04b31e917204c1622355a/images/icon-email.svg"
                alt="email"
              />
              <p>example@taskyo.com</p>
            </div>
          </div>
        </div>
        <ul class="info">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Jobs</li>
          <li>Terms</li>
          <li>Press</li>
          <li>Privacy</li>
          <li>Blog</li>
        </ul>
        <ul class="social">
          <li>
            <i class="fab fa-facebook-f"></i>
          </li>
          <li>
            <i class="fab fa-twitter"></i>
          </li>
          <li>
            <i class="fab fa-instagram"></i>
          </li>
        </ul>
      </footer>
    </div>
  );
};
