import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-neutral-800 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex space-x-8 mb-10">
            <a
              href="https://instagram.com/luzguffanti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://tiktok.com/@luzdegira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.76-.54-1.45-1.27-1.92-2.11-.01 2.62-.01 5.24-.01 7.86 0 1.13-.19 2.27-.64 3.32-1.22 2.76-4.48 4.23-7.41 3.51-3.32-.82-5.46-4.52-4.42-7.79.62-1.9 2.2-3.41 4.16-3.86 1.21-.29 2.44-.14 3.58.42v4.11c-.81-.47-1.78-.63-2.7-.42-1.12.25-2.01 1.18-2.22 2.3-.23 1.11.23 2.33 1.13 3.03 1.05.8 2.61.8 3.59-.08.6-.53.91-1.31.91-2.1V.02z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/luz-guffanti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <Linkedin size={22} />
            </a>
          </div>

          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium text-gray-500">
            &copy; {new Date().getFullYear()} LUZ GUFFANTI | TODOS LOS DERECHOS
            RESERVADOS
          </p>
        </div>
      </div>
    </footer>
  );
}
