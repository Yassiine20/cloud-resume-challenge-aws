import { motion } from 'framer-motion';
import VisitorCounter from './VisitorCounter';

export default function Footer() {
  return (
    <>
      <VisitorCounter />

    <footer className="py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF00FF] to-[#00FFFF] flex items-center justify-center">
              <span className="text-white font-bold text-sm">&gt;_</span>
            </div>
            <span className="text-white font-semibold">
              yassine<span className="text-gray-400">.dev</span>
            </span>
          </motion.a>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Mohamed Yassine CHEBBI. All rights reserved.
          </p>

          {/* Built with */}
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Built with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              ❤️
            </motion.span>{' '}
            & React
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
