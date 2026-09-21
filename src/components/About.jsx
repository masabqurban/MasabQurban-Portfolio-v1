// Popup.js
import React from 'react';
import Button from './closebutton';
import mypic2 from '../assets/mypic2.png';
import Download from './downloadbutton';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Popup = ({ close }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-6"
      onClick={close}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-sm shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 max-h-[90vh] md:max-h-[min(90vh,720px)]">
          {/* About Me Section */}
          <div className="relative bg-[#ececec] text-black overflow-y-auto order-2 md:order-1 max-h-[55vh] md:max-h-[min(90vh,720px)] p-5 sm:p-8 lg:p-10">
            <span className="pointer-events-none z-0 text-[120px] sm:text-[160px] absolute -top-8 -right-16 text-[#e6e6e6] font-bold heading-font select-none">
              ABOUT
            </span>

            <h2 className="relative z-10 text-[#1595b6] text-2xl sm:text-3xl lg:text-4xl font-semibold font-lexend">
              ABOUT ME
            </h2>
            <p className="relative z-10 text-[#1595b6] text-sm sm:text-base mb-3 font-HubotSans font-medium">
              Software Engineer | Full Stack Architect
            </p>
            <p className="relative z-10 mb-4 font-HubotSans font-medium text-sm leading-relaxed">
              Full-Stack Engineer passionate about crafting digital experiences that drive business value. I build scalable SaaS platforms and high-performance web apps with React.js, Next.js, Node.js, and PostgreSQL — sharp interfaces, solid backends, and systems that hold up in production.
            </p>

            <div className="relative z-10 mb-4">
              <h3 className="text-[#1595b6] text-base font-semibold font-lexend mb-2">
                Experience
              </h3>
              <ul className="space-y-2 font-HubotSans font-medium text-sm">
                <li>
                  <span className="font-semibold block">Senior Software Engineer</span>
                  <span className="text-black/65 text-[13px]">VendAxis FZ-LLC · Feb 2026 - Present</span>
                </li>
                <li>
                  <span className="font-semibold block">Software Engineer (Full Stack)</span>
                  <span className="text-black/65 text-[13px]">VendAxis FZ-LLC · Feb 2025 - Jan 2026</span>
                </li>
                <li>
                  <span className="font-semibold block">Frontend Developer</span>
                  <span className="text-black/65 text-[13px]">Snow Dream Studios GmbH · Nov 2024 - Jan 2025</span>
                </li>
                <li>
                  <span className="font-semibold block">Frontend Developer</span>
                  <span className="text-black/65 text-[13px]">Spirit Idea Tech System · Jun 2023 - Oct 2024</span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 flex flex-wrap gap-1.5 font-lexend mb-4">
              {[
                'HTML',
                'CSS',
                'JavaScript',
                'Tailwind CSS',
                'React JS',
                'Next JS',
                'Node JS',
                'Laravel',
                'MySQL',
                'MongoDB',
                'Firebase',
                'GitHub',
                'Figma',
                'Linux',
                'Ubuntu',
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-800 text-gray-400 text-[11px] px-2.5 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="relative z-10 pb-1">
              <Download />
            </div>
          </div>

          {/* Illustration Section */}
          <div className="relative bg-[#1c1d25] text-white order-1 md:order-2 min-h-[220px] md:min-h-0 md:h-full flex items-center justify-center p-6 sm:p-8 overflow-hidden">
            <span className="pointer-events-none z-0 text-[120px] sm:text-[160px] absolute -bottom-10 -right-24 text-[#27282f] font-bold heading-font select-none">
              DEVELO
            </span>

            <button
              className="absolute right-3 top-3 z-20 text-gray-400 hover:text-white focus:outline-none"
              onClick={close}
              aria-label="Close about popup"
            >
              <Button />
            </button>

            <div className="relative z-10 w-[70%] max-w-[280px] mx-auto">
              <LazyLoadImage
                src={mypic2}
                alt="Masab Qurban"
                effect="blur"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
