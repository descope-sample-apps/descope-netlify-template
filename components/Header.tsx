import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-[#1077d8] py-3 px-8">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2">
          <Image 
            src="/descope-logo-dark.png" 
            alt="Descope Logo" 
            width={120}
            height={60}
            className="w-[120px] h-[60px] object-contain"
          />
          <h1 className="text-white text-xl font-">Netlify Example</h1>
        </div>
        <nav className="flex gap-8">
          <a 
            href="https://docs.descope.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white no-underline hover:text-[#bfdbfe]"
          >
            Descope Docs
          </a>
          <a 
            href="https://github.com/descope-sample-apps/descope-netlify-template" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white no-underline hover:text-[#bfdbfe]"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
