import React from "react";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-buttons">
          <p className="footer-button-width">
            <a href="https://estherphang.com/blog/2024/8/18/pomokitty-pomodoro-timer-with-a-cute-kitty-theme">
              ABOUT
            </a>
          </p>
          <p className="footer-button-width">
            <a href="https://estherphang.com/blog/2024/8/18/pomokitty-pomodoro-timer-with-a-cute-kitty-theme#How-to-use-Pomokitty">
              HOW TO USE
            </a>
          </p>
          <p>
            <a href="https://estherpstudio.gumroad.com/"> DONATION</a>
          </p>
        </div>
        <p className="footer-font">
          {" "}
          Made with <span class="heart">🤍</span> by{" "}
          <a href="https://estherphang.com/">Esther</a>.{" "}
        </p>
        <p className="footer-font">
          &copy; 2024 PomoKitty. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
