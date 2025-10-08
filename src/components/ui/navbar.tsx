"use client";
import { motion } from "framer-motion";

interface NavItem {
  name: string;
  link: string;
}

interface NavbarProps {
  navItems: NavItem[];
}

export function Navbar({ navItems }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <motion.a 
          href="#home" 
          className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Saurav Chanda
        </motion.a>
        
        <ul className="flex items-center gap-8 text-sm font-medium">
          {navItems.map((item, index) => (
            <motion.li 
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <motion.a 
                href={item.link}
                className="text-black/80 dark:text-white/80 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}