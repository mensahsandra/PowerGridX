import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx';
import { 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  MapPin, 
  Calendar,
  Activity,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Home,
  Building,
  Gauge,
  Power,
  Eye,
  Target,
  Lightbulb,
  Cpu,
  Globe,
  ArrowRight,
  Play,
  Mail,
  Linkedin,
  MessageSquare,
  Twitter,
  Monitor,
  Settings
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import './App.css';
import solarPanelBg from './assets/Solarpanels.jpg';
import pgxLogo from './assets/PGX_Logo.png';

// Enhanced Dashboard Component (simplified for this context)
const EnhancedDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Live PGX Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Energy Tracked</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">2,847.6 kWh</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Energy Theft Detected</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">12.3%</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Smart Poles Connected</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">47</div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Link to="/">
            <Button>Back to Main Site</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Main PowerGridX Website Component
const PowerGridXWebsite = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const typewriterTexts = ["Africa's Power", 'Grid Transparency', 'Community Resilience', 'Energy Justice', 'Next-Gen Utilities'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = typewriterTexts[currentTextIndex];
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 100 : 150);
    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, currentTextIndex, typewriterTexts]);

  // Check if Week 2 and Week 3 should be visible
  const currentDate = new Date();
  const sprintStartDate = new Date('2024-07-23');
  const daysSinceStart = Math.floor((currentDate - sprintStartDate) / (1000 * 60 * 60 * 24));
  const isWeek2Visible = daysSinceStart >= 7;
  const isWeek3Visible = daysSinceStart >= 14;

  // Toggle function for dark/light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Smooth scroll function for navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Theme classes
  const themeClasses = {
    background: isDarkMode ? 'bg-gray-900' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    navBg: isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200',
    sectionBg: isDarkMode ? 'bg-gray-800' : 'bg-gray-50',
    footerBg: isDarkMode ? 'bg-black' : 'bg-gray-900'
  };

  return (
    <div className={`min-h-screen ${themeClasses.background} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`${themeClasses.navBg} shadow-sm border-b sticky top-0 z-50 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo section with more left spacing */}
            <div className="flex items-center gap-2 mr-8">
              <img src={pgxLogo} alt="PowerGridX Logo" className="h-8 w-8" />
              <span className={`text-xl font-bold ${themeClasses.text} transition-colors duration-300 flex items-center`}>
                P<span 
                  onClick={toggleTheme}
                  className="cursor-pointer text-xl hover:scale-110 transition-transform duration-200 mx-0.5"
                  title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                >
                  {isDarkMode ? '⚫' : '🌞'}
                </span>werGridX
              </span>
            </div>
            {/* Navigation items */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <button onClick={() => scrollToSection('overview')} className={`${themeClasses.text} hover:text-blue-600 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300`}>Overview</button>
              <button onClick={() => scrollToSection('challenges')} className={`${themeClasses.textSecondary} hover:text-blue-600 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300`}>Challenges</button>
              <button onClick={() => scrollToSection('impact')} className={`${themeClasses.textSecondary} hover:text-blue-600 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300`}>Impact</button>
              <button onClick={() => scrollToSection('components')} className={`${themeClasses.textSecondary} hover:text-blue-600 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300`}>Components</button>
              <button onClick={() => scrollToSection('delta-sprint')} className={`${themeClasses.textSecondary} hover:text-blue-600 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300`}>Delta Sprint</button>
              <button onClick={() => scrollToSection('future')} className={`${themeClasses.textSecondary} hover:text-blue-600 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300`}>Future</button>
              <button onClick={() => scrollToSection('architecture')} className={`${themeClasses.textSecondary} hover:text-blue-600 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300`}>Architecture</button>
              <button onClick={() => scrollToSection('use-cases')} className={`${themeClasses.textSecondary} hover:text-blue-600 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300`}>Use Cases</button>
              <button onClick={() => scrollToSection('tech-pillars')} className={`${themeClasses.textSecondary} hover:text-blue-600 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300`}>Tech Pillars</button>
              <button onClick={() => scrollToSection('ui-simulation')} className={`${themeClasses.textSecondary} hover:text-blue-600 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300`}>UI Simulation</button>
              <a href="https://qltdbzwh.manus.space/#/dashboard" target="_blank" rel="noopener noreferrer" className={`${themeClasses.textSecondary} hover:text-blue-600 px-2 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-300`}>
                <BarChart3 className="h-4 w-4 mr-1" />
                Live Dashboard
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image and Typewriter */}
      <section id="overview" className="relative bg-cover bg-center py-20" style={{ backgroundImage: `url(${solarPanelBg})` }}>
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-black opacity-70' : 'bg-black opacity-50'} transition-opacity duration-300`}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Smart Infrastructure for
              <span className="text-blue-400 block h-20">{displayText}<span className="animate-pulse">|</span></span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Rebuilding trust in Africa's grid with cloud-connected smart meters and solar nodes that see, secure, and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://qltdbzwh.manus.space/#/dashboard" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Live Dashboard
                </Button>
              </a>
              <a href="https://tally.so/r/nGA9bk" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black transition-all duration-300">
                  Join the Pilot
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className={`py-16 ${themeClasses.background} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className={`text-3xl font-bold ${themeClasses.text} mb-4 transition-colors duration-300`}>Introduction</h2>
            <p className={`text-lg ${themeClasses.textSecondary} max-w-4xl mx-auto transition-colors duration-300`}>
              PowerGridX is a smart infrastructure initiative addressing energy access across underserved African communities. Using tamper resistant smart meters, renewable smart poles and mobile first systems, we drive down inefficiency, theft, and outages.
            </p>
            <p className={`text-lg ${themeClasses.textSecondary} max-w-4xl mx-auto mt-4 transition-colors duration-300`}>
              Our platform delivers real-time asset visibility, secure contractor tools and accessible recharge options empowering utilities, technicians and residents alike.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="challenges" className={`py-16 ${themeClasses.sectionBg} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold ${themeClasses.text} mb-4 transition-colors duration-300`}>The Challenges – Field Insights</h2>
            <p className={`text-lg ${themeClasses.textSecondary} transition-colors duration-300`}>Based on real-world experience from ECG & BPS digitalization project in Ghana</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "High Energy Theft & Losses", desc: "Over 30% of electricity in Ghana is lost, largely due to theft, illegal connections and unregistered meters." },
              { title: "Broken Visibility & Data Gaps", desc: "Most meters were not previously linked to their poles or transformers, making tamper detection difficult." },
              { title: "Widespread Tampering", desc: "Unregistered, diverted, and tampered meters are common in rural areas." },
              { title: "Manual Processes", desc: "Installation and fault resolution rely heavily on informal contractors and handwritten reports." },
              { title: "Customer Frustration", desc: "Frequent complaints include unclear billing, delays in fault repairs and no visibility into usage." },
              { title: "Trust & Transparency", desc: "Low trust in utility systems due to lack of transparency in billing and service delivery." }
            ].map((challenge, index) => (
              <Card key={index} className={`${themeClasses.cardBg} hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br ${isDarkMode ? 'hover:from-gray-700 hover:to-gray-600' : 'hover:from-blue-50 hover:to-indigo-50'}`}>
                <CardHeader>
                  <CardTitle className={`text-lg ${themeClasses.text} transition-colors duration-300`}>{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${themeClasses.textSecondary} transition-colors duration-300`}>{challenge.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className={`py-16 ${themeClasses.background} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold ${themeClasses.text} mb-4 transition-colors duration-300`}>Impact</h2>
            <p className={`text-lg ${themeClasses.textSecondary} transition-colors duration-300`}>Transforming energy access across Africa</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Digital-First Energy Access", desc: "PGX serves peri-urban and rural areas where digital services are often skipped." },
              { title: "Local & Traceable Management", desc: "By pairing each meter with a contractor, pole and community dashboard, PGX decentralizes grid visibility." },
              { title: "Smart Grid Foundation", desc: "PGX doesn't just fix tampering, it lays groundwork for smart energy future." }
            ].map((impact, index) => (
              <Card key={index} className={`${themeClasses.cardBg} hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br ${isDarkMode ? 'hover:from-gray-700 hover:to-gray-600' : 'hover:from-green-50 hover:to-emerald-50'}`}>
                <CardHeader>
                  <CardTitle className={`text-lg ${themeClasses.text} transition-colors duration-300`}>{impact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${themeClasses.textSecondary} transition-colors duration-300`}>{impact.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section id="components" className={`py-16 ${themeClasses.sectionBg} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold ${themeClasses.text} mb-4 transition-colors duration-300`}>Key Components</h2>
            <p className={`text-lg ${themeClasses.textSecondary} transition-colors duration-300`}>The building blocks of PowerGridX infrastructure</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Smart Meter", 
                subtitle: "Tamper-Resistant, Digitally Secured",
                features: ["Embedded tamper sensors", "Transformer-authenticated pairing", "LoRaWAN/Satellite-ready", "USSD + mobile top-up", "Blockchain monitoring enabled"]
              },
              { 
                title: "Smart Pole", 
                subtitle: "Multi-purpose, solar-powered infrastructure",
                features: ["Solar + battery backup", "Dual LED public lighting", "LoRa base node placement", "Optional: mosquito-repelling tech", "Blockchain monitoring enabled"]
              },
              { 
                title: "Passive Smart Nodes", 
                subtitle: "Low-cost grid monitoring",
                features: ["Monitors voltage, current, activity", "Detects illegal connections", "Sends data via LoRa to cloud", "Solar-powered and easy install", "Real-time fault detection"]
              },
              { 
                title: "Mini Grid Integration", 
                subtitle: "Off-grid rural area support",
                features: ["Smart poles as energy nodes", "PGX meters for micropayments", "USSD/mobile recharge offline", "Remote usage monitoring", "Payment and fault tracking"]
              }
            ].map((component, index) => (
              <Card key={index} className={`${themeClasses.cardBg} hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br ${isDarkMode ? 'hover:from-gray-700 hover:to-gray-600' : 'hover:from-purple-50 hover:to-pink-50'}`}>
                <CardHeader>
                  <CardTitle className={`text-lg ${themeClasses.text} transition-colors duration-300`}>{component.title}</CardTitle>
                  <CardDescription className={`${themeClasses.textSecondary} transition-colors duration-300`}>{component.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className={`space-y-1 text-sm ${themeClasses.textSecondary} transition-colors duration-300`}>
                    {component.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delta Sprint Section */}
      <section id="delta-sprint" className={`py-16 ${themeClasses.background} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold ${themeClasses.text} mb-4 transition-colors duration-300`}>Delta Sprint</h2>
            <p className={`text-lg ${themeClasses.textSecondary} transition-colors duration-300`}>21-Day Sprint Roadmap - Our journey through The Residency's Delta Sprint</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Week 1 */}
            <Card className={`${themeClasses.cardBg} hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br ${isDarkMode ? 'hover:from-gray-700 hover:to-gray-600' : 'hover:from-blue-50 hover:to-indigo-50'}`}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <CardTitle className={`${themeClasses.text} transition-colors duration-300`}>Week 1</CardTitle>
                </div>
                <CardDescription className={`${themeClasses.textSecondary} transition-colors duration-300`}>Clarify & Communicate (Days 1-7)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className={`space-y-2 ${themeClasses.textSecondary} mb-4 transition-colors duration-300`}>
                  <li>• Refine PowerGridX one-liner</li>
                  <li>• Establish social media presence on X and LinkedIn</li>
                  <li>• Create foundational content</li>
                  <li>• Initial community engagement</li>
                </ul>
                <div className="space-y-2">
                  <a href="https://form.typeform.com/report/fp9OeJsI/ywAzf1v7Ll7VLuvH" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="w-full">Feedback & Validation</Button>
                  </a>
                  <a href="https://tally.so/r/nGA9bk" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="w-full">More Feedback</Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Week 2 */}
            <Card className={`${themeClasses.cardBg} hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br ${isDarkMode ? 'hover:from-gray-700 hover:to-gray-600' : 'hover:from-green-50 hover:to-emerald-50'} ${!isWeek2Visible ? 'opacity-50' : ''}`}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Eye className="h-6 w-6 text-green-600" />
                  <CardTitle className={`${themeClasses.text} transition-colors duration-300`}>Week 2</CardTitle>
                </div>
                <CardDescription className={`${themeClasses.textSecondary} transition-colors duration-300`}>Validate & Visualize (Days 8-14)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className={`space-y-2 ${themeClasses.textSecondary} mb-4 transition-colors duration-300`}>
                  <li>• Gather user feedback</li>
                  <li>• Validate key assumptions</li>
                  <li>• Create visual assets</li>
                  <li>• Created Live Dashboard Demo based on insight from ECG professional insights</li>
                </ul>
                <a href="https://qltdbzwh.manus.space/#/dashboard" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    View Live PGX Dashboard
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Week 3 */}
            <Card className={`${themeClasses.cardBg} hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br ${isDarkMode ? 'hover:from-gray-700 hover:to-gray-600' : 'hover:from-purple-50 hover:to-pink-50'} ${!isWeek3Visible ? 'opacity-50' : ''}`}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-purple-600" />
                  <CardTitle className={`${themeClasses.text} transition-colors duration-300`}>Week 3</CardTitle>
                </div>
                <CardDescription className={`${themeClasses.textSecondary} transition-colors duration-300`}>Accelerate & Articulate (Days 15-21)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className={`space-y-2 ${themeClasses.textSecondary} transition-colors duration-300`}>
                  <li>• Created simulation for user interface and contractor interface from insights from feedbacks</li>
                  <li>• Designing prototypes</li>
                  <li>• Refine team and funding asks</li>
                  <li>• Prepare final presentation</li>
                  <li>• Demonstrate scalability</li>
                  <li>• Final Delta pitch</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Capabilities Section */}
      <section id="future" className={`py-16 ${themeClasses.sectionBg} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold ${themeClasses.text} mb-4 transition-colors duration-300`}>Future Capabilities</h2>
            <p className={`text-lg ${themeClasses.textSecondary} transition-colors duration-300`}>Smart energy system that grows with community needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* New Drone-Assisted GIS Card */}
            <Card className={`${themeClasses.cardBg} hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br ${isDarkMode ? 'hover:from-gray-700 hover:to-gray-600' : 'hover:from-indigo-50 hover:to-blue-50'}`}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                  <CardTitle className={`${themeClasses.text} transition-colors duration-300`}>🚁 Drone-Assisted GIS & LoRa Mapping</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className={`${themeClasses.textSecondary} mb-3 transition-colors duration-300`}>Increase safety, accuracy, and efficiency of deployments. Move from guesswork to precision in rural areas.</p>
                <div className="space-y-2">
                  <h4 className={`font-semibold text-sm ${themeClasses.text} transition-colors duration-300`}>Benefits:</h4>
                  <ul className={`space-y-1 text-sm ${themeClasses.textSecondary} transition-colors duration-300`}>
                    <li>• Field-verified problem solving from real deployments</li>
                    <li>• Aerial surveying of transformer coverage zones</li>
                    <li>• Pre-validate LoRa signal ranges before installation</li>
                    <li>• Enhanced worker safety with optimized routes</li>
                    <li>• Strategic node placement to reduce theft</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Other Future Capabilities */}
            {[
              { icon: Cpu, title: "🤖 AI-Powered Grid Intelligence", features: ["Detects abnormal consumption patterns", "Learns from usage trends", "Predicts faults before they happen"] },
              { icon: Activity, title: "📡 Smart Maintenance & Alerts", features: ["Automatic fault alerts from devices", "Prioritizes urgent issues", "Enables predictive servicing"] },
              { icon: MessageSquare, title: "💬 SMS/USSD Fault Classification", features: ["Analyzes customer messages", "Categorizes issues automatically", "Streamlines rural fault reporting"] },
              { icon: Globe, title: "🌍 Modular Mini-Grids", features: ["Plug-and-play solar/wind grids", "Seamless PGX integration", "Decentralized energy delivery"] },
              { icon: Shield, title: "🔐 Blockchain Trust Layer", features: ["Logs installations securely", "Prevents ghost meters", "Verifies contractor actions"] }
            ].map((capability, index) => (
              <Card key={index} className={`${themeClasses.cardBg} hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br ${isDarkMode ? 'hover:from-gray-700 hover:to-gray-600' : 'hover:from-blue-50 hover:to-indigo-50'}`}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <capability.icon className="h-6 w-6 text-blue-600" />
                    <CardTitle className={`${themeClasses.text} transition-colors duration-300`}>{capability.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className={`space-y-2 ${themeClasses.textSecondary} transition-colors duration-300`}>
                    {capability.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Layers Section */}
      <section id="architecture" className={`py-16 ${themeClasses.background} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold ${themeClasses.text} mb-4 transition-colors duration-300`}>Architecture Layers</h2>
            <p className={`text-lg ${themeClasses.textSecondary} transition-colors duration-300`}>Each layer working together for comprehensive grid management</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Gauge, title: "Meter Layer", desc: "Smart meters with tamper detection", impact: "99.2% accuracy" },
              { icon: Zap, title: "Node Layer", desc: "Passive monitoring nodes", impact: "Real-time alerts" },
              { icon: Globe, title: "Cloud Layer", desc: "Data processing and analytics", impact: "24/7 monitoring" },
              { icon: Shield, title: "Blockchain Layer", desc: "Immutable transaction records", impact: "100% transparency" }
            ].map((layer, index) => (
              <Card key={index} className={`${themeClasses.cardBg} hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group`}>
                <CardHeader className="text-center">
                  <layer.icon className="h-12 w-12 mx-auto text-blue-600 group-hover:text-blue-800 transition-colors" />
                  <CardTitle className={`${themeClasses.text} transition-colors duration-300`}>{layer.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className={`${themeClasses.textSecondary} mb-2 transition-colors duration-300`}>{layer.desc}</p>
                  <Badge variant="secondary">{layer.impact}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Explorer Section */}
      <section id="use-cases" className={`py-16 ${themeClasses.sectionBg} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold ${themeClasses.text} mb-4 transition-colors duration-300`}>Use Case Explorer</h2>
            <p className={`text-lg ${themeClasses.textSecondary} transition-colors duration-300`}>Real-world applications and success stories</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Theft Detection", desc: "Identify and prevent energy theft in real-time", story: "Reduced theft by 85% in pilot community" },
              { title: "Energy Savings", desc: "Optimize consumption and reduce waste", story: "20% reduction in energy waste" },
              { title: "Rural Access", desc: "Bring reliable power to underserved areas", story: "Connected 500+ rural households" }
            ].map((useCase, index) => (
              <Card key={index} className={`${themeClasses.cardBg} hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group`}>
                <CardHeader>
                  <CardTitle className={`group-hover:text-blue-600 transition-colors ${themeClasses.text}`}>{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${themeClasses.textSecondary} mb-4 transition-colors duration-300`}>{useCase.desc}</p>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} p-3 rounded-lg transition-colors duration-300`}>
                    <p className={`text-sm ${isDarkMode ? 'text-blue-300' : 'text-blue-800'} font-medium transition-colors duration-300`}>{useCase.story}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Pillars Section */}
      <section id="tech-pillars" className={`py-16 ${themeClasses.background} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold ${themeClasses.text} mb-4 transition-colors duration-300`}>Tech Pillars</h2>
            <p className={`text-lg ${themeClasses.textSecondary} transition-colors duration-300`}>Core technologies powering PowerGridX</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Tamper-proofing", desc: "Hardware and software security", connection: "Connects to Cloud Monitoring" },
              { title: "Cloud Monitoring", desc: "Real-time data processing", connection: "Integrates with Solar Logic" },
              { title: "Solar Logic", desc: "Renewable energy optimization", connection: "Powers Blockchain Layer" },
              { title: "Blockchain", desc: "Immutable record keeping", connection: "Validates Tamper-proofing" }
            ].map((pillar, index) => (
              <Card key={index} className={`${themeClasses.cardBg} hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group`}>
                <CardHeader>
                  <CardTitle className={`group-hover:text-blue-600 transition-colors ${themeClasses.text}`}>{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${themeClasses.textSecondary} mb-4 transition-colors duration-300`}>{pillar.desc}</p>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-2 rounded text-xs ${themeClasses.textSecondary} transition-colors duration-300`}>
                    {pillar.connection}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UI Simulation Section */}
      <section id="ui-simulation" className={`py-16 ${themeClasses.sectionBg} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold ${themeClasses.text} mb-4 transition-colors duration-300`}>UI Simulation</h2>
            <p className={`text-lg ${themeClasses.textSecondary} transition-colors duration-300`}>Experience PowerGridX interfaces</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className={`${themeClasses.cardBg} hover:shadow-lg transition-all duration-300 hover:scale-105`}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Monitor className="h-6 w-6 text-blue-600" />
                  <CardTitle className={`${themeClasses.text} transition-colors duration-300`}>User Interface</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className={`${themeClasses.textSecondary} mb-4 transition-colors duration-300`}>Experience the customer-facing dashboard</p>
                <Button className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Launch User Simulation
                </Button>
              </CardContent>
            </Card>
            <Card className={`${themeClasses.cardBg} hover:shadow-lg transition-all duration-300 hover:scale-105`}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Settings className="h-6 w-6 text-green-600" />
                  <CardTitle className={`${themeClasses.text} transition-colors duration-300`}>Contractor Interface</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className={`${themeClasses.textSecondary} mb-4 transition-colors duration-300`}>See the contractor management tools</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Play className="mr-2 h-4 w-4" />
                  Launch Contractor Simulation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-16 ${themeClasses.background} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className={`text-3xl font-bold ${themeClasses.text} mb-4 transition-colors duration-300`}>About The Founder</h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Sandra Mensah</h3>
            <p className={`text-lg ${themeClasses.textSecondary} max-w-3xl mx-auto transition-colors duration-300`}>
              Founded by Sandra Mensah, PowerGridX reflects my deep commitment to community-first innovation, infrastructure integrity and energy equity. I'm currently seeking aligned partners, advisors and early supporters, passionate about the future of reliable energy in Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-16 ${themeClasses.footerBg} text-white transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're inviting early collaborators: local utilities, off-grid communities, NGOs, regulators and energy-forward investors. If you're interested in piloting PGX or supporting its mission, let's connect. 🚀
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </Button>
              <a href="https://www.linkedin.com/company/powergridx" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </Button>
              </a>
              <a href="https://www.x.com/@powergridx" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
                  <Twitter className="mr-2 h-4 w-4" />
                  Follow on X
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-black' : 'bg-gray-800'} text-white py-8 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 PowerGridX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Main App Component with Routing
function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/dashboard" element={<EnhancedDashboard />} />
          <Route path="/" element={<PowerGridXWebsite />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

