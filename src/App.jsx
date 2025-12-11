import React, { useState, useEffect } from 'react';
import foundationLogo from './assets/foundation.png'; // Assuming the logo is in src/assets/
import maheshImg from './assets/Mahesh.jpg';
import priyaImg from './assets/Priya.jpg';
import anilImg from './assets/Anil.png';

import { 
  Heart, 
  Menu, 
  X, 
  Users, 
  HandHeart, 
  Stethoscope, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Activity,
  Globe,
  Palette,
  Check,
  ChevronRight
} from 'lucide-react';


// Helper component for Team Members
// const TeamMember = ({ name, role, desc, theme }) => (
//   <div className={`bg-white ${theme.shapes.card} p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform`}>
//     {/* Placeholder for Profile Picture */}
//     <div className={`w-20 h-20 ${theme.shapes.button} ${theme.colors.primaryLight} flex items-center justify-center mb-4 mx-auto`}>
//       <Users className={`${theme.colors.primaryText} w-10 h-10`} />
//     </div>
//     <h4 className="text-xl font-bold text-slate-900 text-center">{name}</h4>
//     <p className={`text-sm font-semibold ${theme.colors.primaryText} text-center mb-4`}>{role}</p>
//     <p className="text-slate-600 text-center text-sm">{desc}</p>
//   </div>
// );

const TeamMember = ({ name, role, desc, theme, image }) => (
  <div className={`bg-white ${theme.shapes.card} p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform`}>
    {/* Profile Picture */}
    <div className={`w-20 h-20 ${theme.shapes.button} overflow-hidden mb-4 mx-auto border-2 ${theme.colors.accentBorder}`}>
      {image ? (
        <img 
          src={image} 
          alt={`${name} - ${role}`} 
          className="w-full h-full object-cover"
        />
      ) : (
        // Fallback to foundation logo if no image provided
        <div className={`w-full h-full ${theme.colors.primaryLight} flex items-center justify-center p-2`}>
          <img 
            src={foundationLogo} 
            alt="Sailaja Mahesh Foundation" 
            className="w-full h-full object-contain opacity-60"
          />
        </div>
      )}
    </div>
    <h4 className="text-xl font-bold text-slate-900 text-center">{name}</h4>
    <p className={`text-sm font-semibold ${theme.colors.primaryText} text-center mb-4`}>{role}</p>
    <p className="text-slate-600 text-center text-sm">{desc}</p>
  </div>
);

// Helper component for Program Cards
const ProgramCard = ({ icon, title, desc, tagline, theme }) => (
  <div className={`bg-slate-50 p-6 ${theme.shapes.card} shadow-lg border border-slate-100 flex flex-col hover:shadow-xl hover:border-slate-200 transition-all duration-300`}>
    <div className={`w-12 h-12 flex items-center justify-center ${theme.shapes.rounded} ${theme.colors.primaryLight} mb-4`}>
        {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 mb-4 flex-grow">{desc}</p>
    <div className="flex items-center text-sm font-medium">
      <span className={`px-3 py-1 ${theme.shapes.button} text-xs uppercase tracking-wider ${theme.colors.secondaryAccentBg} text-white`}>{tagline}</span>
    </div>
  </div>
);

// Helper component for Resources
const ResourceItem = ({ title, icon, theme }) => (
    <button className={`w-full text-left flex items-center justify-between p-4 ${theme.shapes.rounded} bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all`}>
        <div className="flex items-center">
            <div className={`p-2 ${theme.shapes.rounded} ${theme.colors.primaryLight} mr-4`}>
                {icon}
            </div>
            <span className="text-base font-medium text-slate-700">{title}</span>
        </div>
        <ChevronRight size={20} className="text-slate-400" />
    </button>
);


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  // Default to 'awareness' theme as requested
  const [currentTheme, setCurrentTheme] = useState('awareness'); 
  const [showThemeSwitcher, setShowThemeSwitcher] = useState(false);

  // --- THEME CONFIGURATIONS ---
  const themes = {
    awareness: {
      name: 'Awareness',
      description: 'Logo Colors (Default)',
      colors: {
        // Logo Primary: Pink/Fuchsia
        primary: 'bg-fuchsia-600',
        primaryHover: 'hover:bg-fuchsia-700',
        primaryLight: 'bg-fuchsia-50',
        primaryText: 'text-fuchsia-600',
        
        // Logo Secondary/Accent: Teal/Aqua
        secondaryAccentBg: 'bg-teal-500',
        secondaryAccentText: 'text-teal-500',

        // Logo Tertiary: Dark Purple/Indigo
        secondary: 'bg-indigo-950',
        secondaryText: 'text-indigo-950',
        
        accentBorder: 'border-fuchsia-200',
        background: 'bg-slate-50',
        footerBg: 'bg-indigo-950',
        gradient: 'from-fuchsia-50 via-slate-50 to-teal-50',
        heroText: 'text-indigo-950'
      },
      shapes: {
        rounded: 'rounded-xl',
        button: 'rounded-full',
        card: 'rounded-xl'
      }
    },
    hope: {
      name: 'Hope',
      description: 'Soft Pink & White',
      colors: {
        primary: 'bg-pink-400',
        primaryHover: 'hover:bg-pink-500',
        primaryLight: 'bg-pink-50',
        primaryText: 'text-pink-400',
        secondaryAccentBg: 'bg-slate-300',
        secondaryAccentText: 'text-slate-500',
        secondary: 'bg-indigo-900',
        secondaryText: 'text-indigo-900',
        accentBorder: 'border-pink-100',
        background: 'bg-white',
        footerBg: 'bg-pink-950',
        gradient: 'from-pink-100 via-white to-pink-50',
        heroText: 'text-slate-800'
      },
      shapes: {
        rounded: 'rounded-3xl',
        button: 'rounded-3xl',
        card: 'rounded-3xl'
      }
    },
    strength: {
      name: 'Strength',
      description: 'Bold Magenta & Charcoal',
      colors: {
        primary: 'bg-fuchsia-700',
        primaryHover: 'hover:bg-fuchsia-800',
        primaryLight: 'bg-fuchsia-50',
        primaryText: 'text-fuchsia-700',
        secondaryAccentBg: 'bg-gray-800',
        secondaryAccentText: 'text-gray-800',
        secondary: 'bg-neutral-950',
        secondaryText: 'text-neutral-950',
        accentBorder: 'border-fuchsia-900',
        background: 'bg-neutral-50',
        footerBg: 'bg-neutral-950',
        gradient: 'from-fuchsia-50 via-neutral-100 to-white',
        heroText: 'text-neutral-900'
      },
      shapes: {
        rounded: 'rounded-md',
        button: 'rounded-none',
        card: 'rounded-lg'
      }
    }
  };

  const theme = themes[currentTheme];

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Our Story', id: 'story' },
    { name: 'About Us', id: 'about' },
    { name: 'Our Work', id: 'programs' },
    { name: 'Get Involved', id: 'involved' },
    { name: 'Resources', id: 'resources' },
    { name: 'Contact', id: 'contact' },
  ];

  // Helper to safely extract color codes for the custom logo component
  // Note: These need to be actual hex or RGB values for the SVG fill properties.
  const getLogoColor = (tailwindClass) => {
    if (tailwindClass.includes('fuchsia-600')) return '#EC4899';
    if (tailwindClass.includes('pink-400')) return '#F472B6';
    if (tailwindClass.includes('fuchsia-700')) return '#C026D3';
    if (tailwindClass.includes('teal-500')) return '#14B8A6';
    if (tailwindClass.includes('slate-300')) return '#CBD5E1';
    if (tailwindClass.includes('gray-800')) return '#1F2937';
    return '#A1A1AA'; // Default to Slate 400
  };
  
  const primaryColor = getLogoColor(theme.colors.primary);
  const secondaryColor = getLogoColor(theme.colors.secondaryAccentBg);


  return (
    <div className={`min-h-screen font-sans text-slate-800 ${theme.colors.background} transition-colors duration-500`}>
      
      {/* Theme Switcher Floating UI */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
        {showThemeSwitcher && (
          <div className="bg-white p-4 rounded-xl shadow-xl border border-slate-200 mb-2 w-64">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Select Design Style</h4>
            <div className="space-y-2">
              {Object.keys(themes).map((key) => (
                <button
                  key={key}
                  onClick={() => setCurrentTheme(key)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all border ${
                    currentTheme === key 
                      ? `${themes[key].colors.primaryLight} ${themes[key].colors.primaryText} border-transparent` 
                      : 'bg-white text-slate-500 border-slate-100 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex flex-col items-start">
                    <span className="capitalize text-base font-bold">{themes[key].name}</span>
                    <span className="text-xs opacity-75">{themes[key].description}</span>
                  </div>
                  {currentTheme === key && <Check size={18} />}
                </button>
              ))}
            </div>
          </div>
        )}
        <button 
          onClick={() => setShowThemeSwitcher(!showThemeSwitcher)}
          className="bg-slate-900 text-white p-4 rounded-full shadow-lg hover:bg-slate-800 transition-all hover:scale-105"
          aria-label="Toggle Theme Switcher"
        >
          <Palette size={24} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              {/* Logo Area - Using the new color-driven icon */}
              <div className={`w-12 h-12 flex items-center justify-center mr-3 transition-colors duration-300`}>
              <img 
                src={foundationLogo} 
                alt="Sailaja Mahesh Foundation Logo" 
                className="h-16 w-auto" // Use Tailwind classes to control the size of the image
              />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 leading-tight">SAILAJA MAHESH</h1>
                <span className={`text-xs ${theme.colors.secondaryText} font-semibold tracking-wide uppercase transition-colors duration-300`}>FOUNDATION</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors hover:opacity-75 ${
                    activeSection === link.id ? theme.colors.primaryText : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('involved')}
                className={`${theme.colors.primary} ${theme.colors.primaryHover} text-white px-5 py-2 ${theme.shapes.button} text-sm font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
              >
                Donate
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`text-slate-600 hover:${theme.colors.primaryText} focus:outline-none p-2`}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:${theme.colors.primaryText} hover:bg-slate-50`}
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('involved')}
                className={`w-full mt-4 ${theme.colors.primary} text-white px-3 py-3 rounded-md text-base font-medium`}
              >
                Donate Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className={`pt-28 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${theme.colors.gradient}`}>
        <div className={`max-w-7xl mx-auto ${currentTheme === 'strength' ? 'text-left' : 'text-center'}`}>
          <div className={`inline-flex items-center px-4 py-2 ${theme.shapes.button} ${theme.colors.primaryLight} ${theme.colors.primaryText} text-sm font-semibold mb-6`}>
            <Heart size={16} className={`mr-2 fill-current ${theme.colors.primaryText}`} /> Non-Profit Organization
          </div>
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold ${theme.colors.heroText} tracking-tight mb-6 leading-tight`}>
            Healing begins with <span className={`${theme.colors.primaryText} relative`}>
              hope
              <svg className={`absolute w-full h-3 -bottom-1 left-0 opacity-30 -z-10 text-current`} viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>.
          </h1>
          <p className={`mt-6 text-lg md:text-xl text-slate-600 leading-relaxed ${currentTheme === 'strength' ? 'max-w-3xl mr-auto' : 'max-w-2xl mx-auto'}`}>
            Committed to raising awareness, providing patient support, and advancing community-based initiatives that promote timely diagnosis and compassionate care.
          </p>
          <div className={`mt-10 flex flex-col sm:flex-row gap-4 ${currentTheme === 'strength' ? 'justify-start' : 'justify-center'}`}>
            <button 
              onClick={() => scrollToSection('programs')}
              className={`px-8 py-4 ${theme.shapes.button} ${theme.colors.primary} ${theme.colors.primaryHover} text-white font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center`}
            >
              Our Programs <ArrowRight size={20} className="ml-2" />
            </button>
            <button 
              onClick={() => scrollToSection('story')}
              className={`px-8 py-4 ${theme.shapes.button} bg-white text-slate-700 border-2 border-slate-200 font-bold text-lg hover:border-slate-300 hover:text-slate-900 transition-all`}
            >
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative mb-12 lg:mb-0">
              <div className={`absolute inset-0 ${theme.colors.primaryLight} ${theme.shapes.card} transform rotate-3 scale-105 opacity-50`}></div>
              <div className={`relative bg-slate-50 ${theme.shapes.card} overflow-hidden aspect-[4/3] shadow-xl flex items-center justify-center border-4 border-white`}>
                 <div className="text-center p-8">
                 <img 
                    src={foundationLogo} 
                    alt="Sailaja Mahesh Foundation Logo" 
                    className="h-16 w-auto" // Use Tailwind classes to control the size of the image
                  />
                    <p className="text-slate-400 font-medium tracking-widest uppercase text-xs">[Image: Portrait of Sailaja Mahesh]</p>
                 </div>
              </div>
            </div>
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold ${theme.colors.secondaryText} mb-6`}>In Loving Memory</h2>
              <div className="prose prose-lg text-slate-600 space-y-6">
                <p>
                  The Sailaja Mahesh Foundation was established in loving memory of Sailaja Mahesh – a devoted wife, aunt, and friend whose courage in the face of Stage 4 breast cancer continues to inspire countless lives.
                </p>
                <p className={`border-l-4 ${theme.colors.primaryText} pl-6 italic text-slate-700 ${theme.colors.primaryLight} py-4 pr-4 ${currentTheme === 'strength' ? 'rounded-r-none' : 'rounded-r-xl'}`}>
                  "Despite receiving some of the best available medical care, Sailaja’s story shed light on a critical truth — early detection saves lives."
                </p>
                <p>
                  She fought bravely for three years before sadly losing her battle in August 2025. The Foundation was born from her journey – to ensure that every individual has access to advocacy, timely screenings, affordable treatment, and above all, the <span className={`font-bold ${theme.colors.primaryText}`}>hope to heal</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section id="about" className={`py-16 ${theme.colors.secondary} text-white relative overflow-hidden transition-colors duration-500`}>
        {/* Background Decorative Elements */}
        <div className={`absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full ${primaryColor} blur-3xl opacity-20`}></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white blur-3xl opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Vision */}
            <div className={`bg-white/5 backdrop-blur-sm p-8 ${theme.shapes.card} border border-white/10 hover:bg-white/10 transition-colors`}>
              <div className={`w-12 h-12 ${theme.colors.secondaryAccentBg} ${theme.shapes.rounded} flex items-center justify-center mb-6`}>
                <Globe size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                A world where cancer never determines a person’s future, and where care and support are accessible to all.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                {['Accessibility', 'Compassion', 'Empowerment'].map((val) => (
                  <div key={val} className={`bg-slate-900/50 ${theme.shapes.rounded} p-3 border border-white/5`}>
                    <span className={`${theme.colors.primaryText} font-bold text-sm md:text-base brightness-125`}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div className={`bg-white/5 backdrop-blur-sm p-8 ${theme.shapes.card} border border-white/10 hover:bg-white/10 transition-colors`}>
              <div className={`w-12 h-12 bg-white ${theme.shapes.rounded} flex items-center justify-center mb-6`}>
                <Activity size={24} className={`${theme.colors.primaryText}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                To help ensure equitable, compassionate cancer care by supporting access to advocacy, early detection, treatment, financial assistance, and education—empowering individuals in underserved communities to take charge of their health.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* About Us / Team Section */}
      <section id="about" className={`py-16 md:py-24 ${theme.colors.background}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-slate-600">
              Led by a passionate team united by one goal: to make quality cancer care accessible to everyone.
            </p>
          </div>

          {/* Board Members Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            <TeamMember 
              name="Mahesh Puducheri" 
              role="Chairperson" 
              desc="The spouse and caregiver of Sailaja Mahesh, Mahesh’s firsthand experience drives his mission to ensure no family faces cancer alone."
              theme={theme}
              image={maheshImg}
            />
            <TeamMember 
              name="Chitra Manian Subramanyam" 
              role="Board Member" 
              desc="A cancer survivor and financial expert committed to ensuring financial barriers never define a patient’s access to care."
              theme={theme}
            />
            <TeamMember 
              name="Dr. Ramapriya (Priya) Suresh" 
              role="M.D., M.B.A" 
              desc="US board-certified physician specializing in patient-centric care and expanding access to evidence-based healthcare."
              theme={theme}
              image={priyaImg}
            />
            <TeamMember 
              name="Anil Kalavakolanu" 
              role="Board Member" 
              desc="Sailaja’s brother. Combines passion for outreach with technology to deliver credible cancer information."
              theme={theme}
              image={anilImg}
            />
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Team</h3>
          </div>
          
          <div className="max-w-md mx-auto">
             <TeamMember 
              name="Mandira Murali" 
              role="Programs Director" 
              desc="Leads initiatives that bring education, screenings, and caregiver support to communities in need."
              theme={theme}
            />
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="programs" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`${theme.colors.primaryText} font-bold tracking-wider uppercase text-sm`}>What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Our Programs</h2>
            <p className="text-lg text-slate-600">
              Collaborating with partners to provide equitable access to cancer care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard 
              icon={<HandHeart className={`w-8 h-8 ${theme.colors.secondaryAccentText}`} />}
              title="Caregiver Support Network"
              desc="Training, emotional support, and practical tools for caregivers managing the physical and mental responsibilities of supporting loved ones."
              tagline="Empowerment through knowledge."
              theme={theme}
            />
            <ProgramCard 
              icon={<Stethoscope className={`w-8 h-8 ${theme.colors.secondaryAccentText}`} />}
              title="Women’s Health Initiative"
              desc="Education, self-examination training, and free/subsidized screening camps for breast, cervical, and other high-risk cancers."
              tagline="Reducing late-stage diagnoses."
              theme={theme}
            />
            <ProgramCard 
              icon={<Activity className={`w-8 h-8 ${theme.colors.secondaryAccentText}`} />}
              title="Patient Treatment Support"
              desc="Guidance on treatment options, hospital navigation, and financial aid programs connecting patients with trusted facilities."
              tagline="Bridging the gap."
              theme={theme}
            />
            <ProgramCard 
              icon={<Users className={`w-8 h-8 ${theme.colors.primaryText}`} />}
              title="Community Outreach"
              desc="Mobile health units and volunteer networks bringing screening and awareness directly to remote and marginalized populations."
              tagline="Breaking stigmas."
              theme={theme}
            />
            <ProgramCard 
              icon={<Heart className={`w-8 h-8 ${theme.colors.primaryText}`} />}
              title="Survivorship & Rehabilitation"
              desc="Support groups offering guidance on nutrition, emotional wellness, and long-term recovery for survivors."
              tagline="Building hope and strength."
              theme={theme}
            />
             <ProgramCard 
              icon={<GraduationCap className={`w-8 h-8 ${theme.colors.primaryText}`} />}
              title="Health Education"
              desc="Workshops, seminars, and accessible online materials to disseminate credible cancer prevention and early detection information."
              tagline="Knowledge is power."
              theme={theme}
            />
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="involved" className={`py-16 md:py-24 ${theme.colors.primaryLight}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Join Our Mission</h2>
            <p className="text-lg text-slate-600">
              Your support makes equitable cancer care possible. There are many ways to contribute.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Donate */}
            <div className={`bg-white p-8 md:p-10 ${theme.shapes.card} shadow-lg border ${theme.colors.accentBorder} flex flex-col justify-between hover:shadow-xl transition-shadow`}>
              <div className={`w-14 h-14 ${theme.colors.primaryLight} rounded-full flex items-center justify-center mb-6`}>
                <Heart className={`${theme.colors.primaryText} w-8 h-8 fill-current`} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Donate</h3>
              <p className="text-slate-600 text-lg mb-8">
                Every contribution directly funds screenings, patient advocacy, and community education programs.
              </p>
              <button className={`w-full ${theme.colors.primary} ${theme.colors.primaryHover} text-white px-8 py-4 ${theme.shapes.button} font-bold text-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}>
                Make a Donation <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
            
            {/* Volunteers */}
            <div className={`bg-white p-8 md:p-10 ${theme.shapes.card} shadow-lg border ${theme.colors.accentBorder} flex flex-col justify-between hover:shadow-xl transition-shadow`}>
              <div className={`w-14 h-14 ${theme.colors.primaryLight} rounded-full flex items-center justify-center mb-6`}>
                <Users className={`${theme.colors.primaryText} w-8 h-8`} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Volunteer</h3>
              <p className="text-slate-600 text-lg mb-8">
                Join our cancer care volunteers who assist in outreach programs and patient care initiatives.
              </p>
              <button className={`w-full ${theme.colors.secondary} hover:opacity-90 text-white px-8 py-4 ${theme.shapes.button} font-bold text-lg transition-all flex items-center justify-center`}>
                Join The Community <ArrowRight size={20} className="ml-2" />
              </button>
            </div>

            {/* Partnerships */}
            <div className={`bg-white p-8 md:p-10 ${theme.shapes.card} shadow-lg border ${theme.colors.accentBorder} flex flex-col justify-between hover:shadow-xl transition-shadow`}>
              <div className={`w-14 h-14 ${theme.colors.secondaryAccentBg} rounded-full flex items-center justify-center mb-6`}>
                <HandHeart className="text-white w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Partner</h3>
              <p className="text-slate-600 text-lg mb-8">
                Collaborate with us to expand our reach and impact more lives through shared resources.
              </p>
              <button className={`w-full bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-100 px-8 py-4 ${theme.shapes.button} font-bold text-lg transition-colors flex items-center justify-center`}>
                Partner With Us <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Patient Resources & Guides</h2>
          <div className="grid gap-4">
            <ResourceItem title="What do I do if I have cancer? (First Steps Guide)" icon={<Activity size={20} />} theme={theme} />
            <ResourceItem title="Where do I go for screening in Chennai? (Affordable Clinics)" icon={<MapPin size={20} />} theme={theme} />
            <ResourceItem title="BreastCancer.org Guide (External Link)" icon={<Globe size={20} />} theme={theme} />
            <ResourceItem title="Government Programs & Financial Assistance" icon={<GraduationCap size={20} />} theme={theme} />
            <ResourceItem title="Instructional Videos on Self-Examination" icon={<Stethoscope size={20} />} theme={theme} />
            <ResourceItem title="Resources for Caregivers & Support Groups" icon={<Heart size={20} />} theme={theme} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 md:py-24 ${theme.colors.footerBg} text-white transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-slate-400 mb-8 text-lg">
                Have questions or want to get involved? We'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className={`w-6 h-6 ${theme.colors.primaryText} mt-1 mr-4`} />
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-slate-300">contact@sailajamahesh.org</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className={`w-6 h-6 ${theme.colors.primaryText} mt-1 mr-4`} />
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-slate-300">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className={`w-6 h-6 ${theme.colors.primaryText} mt-1 mr-4`} />
                  <div>
                    <h4 className="font-semibold text-white">Address</h4>
                    <p className="text-slate-300">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`bg-white ${theme.shapes.card} p-8 text-slate-800`}>
              <h3 className="text-xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input id="name" type="text" className={`w-full px-4 py-2 ${theme.shapes.rounded} border border-slate-300 focus:ring-2 focus:ring-opacity-50 focus:ring-${theme.colors.primary.split('-')[1]}-${theme.colors.primary.split('-')[2]} focus:border-transparent outline-none transition-all`} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input id="email" type="email" className={`w-full px-4 py-2 ${theme.shapes.rounded} border border-slate-300 focus:ring-2 focus:ring-opacity-50 focus:ring-${theme.colors.primary.split('-')[1]}-${theme.colors.primary.split('-')[2]} focus:border-transparent outline-none transition-all`} placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea id="message" rows={4} className={`w-full px-4 py-2 ${theme.shapes.rounded} border border-slate-300 focus:ring-2 focus:ring-opacity-50 focus:ring-${theme.colors.primary.split('-')[1]}-${theme.colors.primary.split('-')[2]} focus:border-transparent outline-none transition-all`} placeholder="How can we help?"></textarea>
                </div>
                <button className={`w-full ${theme.colors.primary} ${theme.colors.primaryHover} text-white font-bold py-3 ${theme.shapes.rounded} transition-colors`}>
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-slate-500 py-8 text-center text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Sailaja Mahesh Foundation. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default App;