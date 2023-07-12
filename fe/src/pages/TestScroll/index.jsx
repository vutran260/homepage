import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import './index.css'
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};


const Box = ({ num, scrollToNextSection, isActive }) => {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className={`box ${isActive ? 'active' : ''}`}
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      style={{ height: '101vh', background: 'gray' }}
    >
      <h1>Box {num} </h1>
      <button onClick={scrollToNextSection}>Scroll to Next Section</button>
    </motion.div>
  );
};

export default function TestScroll() {
  const [activeSection, setActiveSection] = useState(0);

  const scrollToNextSection = () => {
    setActiveSection((prevSection) => prevSection + 1);
    const nextSectionOffset = (activeSection + 1) * window.innerHeight;
    window.scrollTo({ top: nextSectionOffset, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = Math.floor(window.scrollY / window.innerHeight);
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="sidebar w-[200px] bg-slate-50 fixed">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className={`sidebar-item ${activeSection === num - 1 ? 'active' : ''}`}
            onClick={() => {
              const sectionOffset = (num - 1) * window.innerHeight;
              window.scrollTo({ top: sectionOffset, behavior: 'smooth' });
              setActiveSection(num - 1);
            }}
          >
            Section {num}
          </div>
        ))}
      </div>
      <div className="sections">
        {[1, 2, 3].map((num) => (
          <Box
            key={num}
            num={num}
            scrollToNextSection={scrollToNextSection}
            isActive={activeSection === num - 1}
          />
        ))}
      </div>
    </div>
  );
}
