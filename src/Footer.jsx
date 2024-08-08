import React from "react";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-buttons">
          <p className="footer-button-width">ABOUT</p>
          <p className="footer-button-width">HOW TO USE</p>
          <p>
            <a href="https://estherpstudio.gumroad.com/"> DONATION</a>
          </p>
        </div>
        <p className="footer-font">
          {" "}
          Made with <span class="heart">🤍</span> by{" "}
          <a href="https://estherpstudio.gumroad.com/">Esther</a>.{" "}
        </p>
        <p className="footer-font">
          &copy; 2024 PomoKitty. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
