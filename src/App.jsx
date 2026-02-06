import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isHovered, setIsHovered] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const shortcutKeys = [
    { key: "Alt+Shift+Q", action: "Select Option A", color: "from-cyan-500 to-blue-500" },
    { key: "Alt+Shift+W", action: "Select Option B", color: "from-purple-500 to-pink-500" },
    { key: "Alt+Shift+E", action: "Select Option C", color: "from-green-500 to-emerald-500" },
    { key: "Alt+Shift+R", action: "Select Option D", color: "from-orange-500 to-red-500" },
    { key: "Alt+Shift+N", action: "Next Question", color: "from-indigo-500 to-purple-500" },
    { key: "Alt+Shift+P", action: "Previous Question", color: "from-yellow-500 to-amber-500" },
    { key: "Alt+Shift+S", action: "Submit Answer", color: "from-lime-500 to-green-500" },
    { key: "Alt+Shift+T", action: "Timer Toggle", color: "from-rose-500 to-pink-500" },
  ];

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#" },
    { name: "Demo", href: "#" },
    { name: "Download", href: "#" },
    { name: "Docs", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 w-full py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-2xl border border-gray-800/50 backdrop-blur-xl">
            <div className="flex items-center justify-between px-6 py-4">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                  <span className="text-xl font-bold">⚡</span>
                </div>
                <div>
                  <div className="text-xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    CrewExam
                  </div>
                  <div className="text-xs text-gray-400">Accessibility Extension</div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/30 rounded-lg transition-all duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Download Button & Mobile Menu Toggle */}
              <div className="flex items-center space-x-4">
                <button className="hidden sm:flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                  <span>Download Now</span>
                  <span>⬇️</span>
                </button>
                
                {/* Mobile Menu Button */}
                <button 
                  className="lg:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden border-t border-gray-800/50 px-6 py-4 animate-slideDown">
                <div className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/30 rounded-lg transition-all duration-200 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-xl font-semibold transition-all duration-300 mt-4">
                    <span>Download Extension</span>
                    <span>⬇️</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="relative w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 mb-6 glass-card px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-medium">New Update Available</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Crew Exam Accessibility
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl text-gray-300">Intelligent Keyboard Extension</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Master your exams with lightning-fast keyboard shortcuts. 
            <span className="text-cyan-400 font-semibold"> Alt+Shift shortcuts </span>
            designed for MCQs - save precious seconds when it matters most.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]">
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                Download Extension
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            </button>
            
            <button className="group px-8 py-4 glass-card border border-gray-700 hover:border-cyan-500/50 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-3">
                <span className="text-2xl">📺</span>
                Watch Demo
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Hero Image with Floating Effect */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <div className="relative glass-card rounded-2xl p-8">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt="Extension"
                  className="w-full max-w-md mx-auto floating"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl -rotate-12 flex items-center justify-center">
                  <span className="text-5xl">⚡</span>
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-cyan-500/10 rounded-full">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm font-semibold text-cyan-400">FEATURED SHORTCUT</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Navigate 5x Faster
                </span>
              </h2>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Transform your exam experience with intelligent keyboard navigation. 
                Our extension automatically detects MCQ patterns and enables instant 
                selection with intuitive shortcuts.
              </p>

              {/* Interactive Shortcut Demo */}
              <div className="space-y-6">
                <div className="glass-card rounded-xl p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-gray-300">Live Demo - Press keys:</span>
                    <div className="flex gap-2">
                      {['Alt', 'Shift', 'Q'].map((key) => (
                        <kbd 
                          key={key}
                          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg font-mono font-bold text-lg hover:border-cyan-500 transition-all duration-200 cursor-pointer hover:scale-105"
                          onMouseEnter={() => setIsHovered(key)}
                          onMouseLeave={() => setIsHovered(null)}
                        >
                          {key}
                        </kbd>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-cyan-400 font-semibold text-lg">
                      → Instantly selects Option A
                    </span>
                    <p className="text-sm text-gray-400 mt-2">
                      Works across all major exam platforms
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-4 rounded-xl text-center">
                    <div className="text-3xl mb-2">🔥</div>
                    <div className="font-bold text-2xl">5x Faster</div>
                    <div className="text-gray-400 text-sm">Navigation Speed</div>
                  </div>
                  <div className="glass-card p-4 rounded-xl text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <div className="font-bold text-2xl">99%</div>
                    <div className="text-gray-400 text-sm">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative w-full py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Advanced Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to ace your exams with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Smart Detection",
                desc: "Auto-detects MCQ patterns on any exam platform",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: "🛡️",
                title: "Exam Safe",
                desc: "Zero data collection, 100% privacy focused",
                color: "from-emerald-500 to-green-500"
              },
              {
                icon: "🎨",
                title: "Custom Themes",
                desc: "Dark mode & custom color schemes",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "⏱️",
                title: "Time Tracker",
                desc: "Built-in timer with warning alerts",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: "📱",
                title: "Cross-Platform",
                desc: "Works on Chrome, Edge & Firefox",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: "🔧",
                title: "Easy Setup",
                desc: "One-click installation & auto-configuration",
                color: "from-yellow-500 to-amber-500"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden glass-card rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`text-4xl mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="relative w-full py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Interactive Demo
                </span>
              </h3>
              <p className="text-xl text-gray-300">Try our keyboard shortcuts below</p>
            </div>

            {/* MCQ Demo */}
            <div className="mb-12">
              <div className="glass-card rounded-xl p-6 mb-8">
                <h4 className="text-xl font-bold mb-4 text-cyan-400">Sample Question</h4>
                <p className="text-lg mb-6">Which of the following is the capital of France?</p>
                
                <div className="space-y-4">
                  {[
                    { id: "A", text: "London", correct: false },
                    { id: "B", text: "Berlin", correct: false },
                    { id: "C", text: "Paris", correct: true },
                    { id: "D", text: "Madrid", correct: false }
                  ].map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                        selectedOption === item.id 
                          ? item.correct 
                            ? "bg-gradient-to-r from-emerald-500/20 to-green-500/20 border-2 border-emerald-500" 
                            : "bg-gradient-to-r from-rose-500/20 to-red-500/20 border-2 border-rose-500"
                          : "glass-card hover:border-cyan-500/50"
                      }`}
                      onClick={() => setSelectedOption(item.id)}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl ${
                        selectedOption === item.id 
                          ? item.correct 
                            ? "bg-emerald-500 text-white" 
                            : "bg-rose-500 text-white"
                          : "bg-gray-800"
                      }`}>
                        {item.id}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{item.text}</div>
                        <div className="text-sm text-gray-400 mt-1">
                          Press <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">Alt+Shift+{item.id === "A" ? "Q" : item.id === "B" ? "W" : item.id === "C" ? "E" : "R"}</kbd>
                        </div>
                      </div>
                      {selectedOption === item.id && (
                        <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                          item.correct ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"
                        }`}>
                          {item.correct ? "✓ Correct!" : "✗ Wrong"}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Shortcuts Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {shortcutKeys.map((shortcut, index) => (
                <div 
                  key={index} 
                  className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${shortcut.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className="text-2xl font-mono font-bold mb-3 text-cyan-300">{shortcut.key}</div>
                    <div className="text-gray-300">{shortcut.action}</div>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-sm text-gray-400">Click to try</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="glass-card rounded-3xl p-12 overflow-hidden">
            <div className="relative">
              <div className="text-6xl mb-6">🎯</div>
              <h2 className="text-4xl sm:text-5xl font-black mb-6">
                Ready to Transform Your Exam Experience?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands of students who have improved their exam performance with Crew Extension.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(6,182,212,0.6)]">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <span className="text-2xl">⭐</span>
                    Install Free Extension
                  </span>
                </button>
                
                <button className="group px-10 py-5 glass-card border border-gray-700 hover:border-cyan-500/50 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105">
                  <span className="flex items-center justify-center gap-3">
                    <span className="text-2xl">📖</span>
                    View Documentation
                  </span>
                </button>
              </div>
              
              <div className="mt-10 grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">50K+</div>
                  <div className="text-gray-400">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400">4.9★</div>
                  <div className="text-gray-400">Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">99%</div>
                  <div className="text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="glass-card rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"></div>
                  Crew Extension
                </div>
                <p className="text-gray-400">
                  Making exams accessible and efficient for everyone.
                </p>
              </div>
              
              <div>
                <div className="font-bold mb-4">Quick Links</div>
                <div className="space-y-2">
                  <a href="#" className="text-gray-400 hover:text-cyan-400 block transition-colors">Documentation</a>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 block transition-colors">Support</a>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 block transition-colors">Privacy Policy</a>
                </div>
              </div>
              
              <div>
                <div className="font-bold mb-4">Contact</div>
                <div className="space-y-2">
                  <div className="text-gray-400">support@crewextension.com</div>
                  <div className="text-gray-400">Follow us on social media</div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400">
                © 2026 Crew Extension | Designed for exam accessibility
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;