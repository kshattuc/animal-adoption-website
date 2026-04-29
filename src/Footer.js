import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl">
                🐾
              </div>
              <div>
                <p className="text-xl font-bold">Hopeful Tails</p>
                <p className="mt-2 text-sm leading-6 text-green-200">
                  Welcome everyone to Hopeful Tails, the purr-fect place to find the newest addition to your family!
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-9">
            <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-green-200">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dogs" className="hover:text-white">
                  Dogs
                </Link>
              </li>
              <li>
                <Link to="/cats" className="hover:text-white">
                  Cats
                </Link>
              </li>
              <li>
                <Link to="/other-animals" className="hover:text-white">
                  Other Animals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Location</h4>
            <p className="text-green-200">
              Villanova University
              <br />
              800 E Lancaster Ave
              <br />
              Villanova, PA 19085
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex items-center gap-4 text-green-200">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-white">
                  <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.89h-2.32V21.9C18.34 21.12 22 16.99 22 12Z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-white">
                  <path fill="currentColor" d="M22.46 6c-.77.34-1.6.57-2.46.67a4.3 4.3 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.13 12.13 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.33 5.72 4.24 4.24 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.12 12.12 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.72 8.72 0 0 0 22.46 6Z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-white">
                  <path fill="currentColor" d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10Zm-5 3.15a4.85 4.85 0 1 0 0 9.7 4.85 4.85 0 0 0 0-9.7Zm0 2.55a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6Zm4.95-.1a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1Z" />
                </svg>
              </a>
            </div>
          </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-green-200">
          <p>© 2026 Hopeful Tails. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
