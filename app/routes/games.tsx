import { useState } from 'react';

export default function Games() {
  // FAQ state for this page
  const [openFAQ, setOpenFAQ] = useState(-1);
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center py-20 px-4">
      {/* Headline */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          Alf Batz Game Music Composition &amp; Sound Design
        </h1>
      </div>
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Video */}
        <div className="w-full flex justify-center">
          <div className="rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/game.jpg"
              style={{ minWidth: 400, minHeight: 300 }}
            >
              <source src="/game.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* Right: Text and CTA */}
        <div className="w-full flex flex-col items-start justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
            Elevate Your Game with Expert Music Composition &amp; Audio Design
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            At Alf Batz, we specialize in creating immersive and dynamic music compositions, crafting high-quality music compositions for games, and delivering immersive soundtracks and dynamic audio experiences. Whether you’re developing an indie adventure, an action-packed RPG, a AAA blockbuster title, an open-world adventure, or a fast-paced action game, our expertise in video game music composition and sound design will bring your game to life. We ensure that your project will stand out with a memorable and engaging soundtrack.
          </p>
          <a href="#contact" className="inline-block bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded hover:bg-yellow-300 transition-colors">
            HIRE ME TO COMPOSE
          </a>
        </div>
      </section>
      {/* Why Choose Alf Batz for Your Game's Music Section */}
      <section className="w-full bg-transparent py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">Why Choose Alf Batz for Your Game's Music?</h2>
          <p className="text-xl text-white mb-10">
            As a game’s music composer, we create memorable soundtracks that enhance the player experience, set the mood, and tell a story, while making your game highly impactful and engaging.
          </p>
          <ul className="text-left text-lg text-gray-200 space-y-4 max-w-4xl mx-auto">
            <li><span className="font-bold">Experienced Video Game Music Composer:</span> Backed by years of experience in the industry, we understand the importance of creating engaging soundtracks that enhance gameplay and storytelling.</li>
            <li><span className="font-bold">Customized Soundscapes:</span> We create unique, immersive audio environments tailored to enhance the mood, atmosphere, and storytelling of your project.</li>
            <li><span className="font-bold">Versatile:</span> With experience in a a variety of genres and styles, we produce authentic compositions that fit any genre or style.</li>
            <li><span className="font-bold">High-Quality Production:</span> Supported by state-of-the-art software and industry-standard tools, we offer professional, polished, and immersive compositions.</li>
            <li><span className="font-bold">Seamless Integration:</span> We have in-depth knowledge and expertise in video game audio design, ensuring that all elements work together smoothly, creating a cohesive and immersive experience without disruptions.</li>
            <li><span className="font-bold">Adaptive and Interactive Music:</span> We design dynamic compositions that are adaptive as well as interactive, ensuring an engaging and immersive player experience.</li>
            <li><span className="font-bold">Collaboration and Flexibility:</span> We are open for collaboration and feedback to bring new perspectives and open distant horizons.</li>
          </ul>
        </div>
      </section>
      {/* Our Comprehensive Services & Our Process Section */}
      <section className="w-full bg-transparent py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-4">
          {/* Left: Services */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center md:text-left">Our Comprehensive Services</h2>
            <ul className="text-lg text-white space-y-4 list-disc list-inside">
              <li><span className="font-bold">Custom Music Composition –</span> Creating original soundtracks customized to a game’s theme, mood, and story.</li>
              <li><span className="font-bold">Adaptive Music –</span> Designing dynamic music that changes based on in-game events or player actions.</li>
              <li><span className="font-bold">Sound Design & Implementation –</span> Integrating music seamlessly into the game engine using middleware like FMOD or Wwise.</li>
              <li><span className="font-bold">Remixing & Arranging –</span> Reworking existing music to fit different levels, moods, or versions of a game.</li>
              <li><span className="font-bold">Licensing & Library Music –</span> Providing pre-made tracks or licensing existing music for use in games.</li>
              <li><span className="font-bold">Audio Branding –</span> Crafting unique musical themes or motifs that define a game’s identity.</li>
            </ul>
          </div>
          {/* Right: Process */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center md:text-left">Our Process</h2>
            <ul className="text-lg text-white space-y-4 list-disc list-inside">
              <li><span className="font-bold">Understanding the Game:</span> We begin by clearly understanding the game’s story, setting, and gameplay alongwith its emotional tone and style.</li>
              <li><span className="font-bold">Consultation & Concept Development:</span> Following that, we decide on its structure including its main themes, level music, battle music, etc.</li>
              <li><span className="font-bold">Composition & Sound Design:</span> We create original tracks and sound effects that align with your vision.</li>
              <li><span className="font-bold">Feedback & Revisions:</span> We work with you to refine the compositions and make adjustments based on your feedback.</li>
              <li><span className="font-bold">Final Delivery & Integration Support:</span> Once the tracks are finalized, we assist with integration into your game to ensure smooth implementation.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Looking for a Video Game Music Composer for Hire Section */}
      <section className="w-full bg-transparent py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          {/* Left: Text */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">Looking for a Video Game Music Composer for Hire?</h2>
            <p className="text-lg text-white mb-6">
              If you’re searching for a video game music composer needed to bring your game to life, you’ve come to the right place. At Alf Batz, we take pride in our ability to craft music that resonates with players and enhances storytelling. If you are looking for one of the best video game music composers to enhance your project, your search ends here.
            </p>
            <p className="text-lg text-white">
              Whether you need a full soundtrack or individual sound elements, we provide top-tier audio design tailored to your project, perfectly complementing your vision.
            </p>
          </div>
          {/* Right: Video */}
          <div className="w-full flex justify-center">
            <div className="rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/game.jpg"
                style={{ minWidth: 400, minHeight: 300 }}
              >
                <source src="/game.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* Add Some Character to Your Game Section */}
      <section className="w-full bg-transparent py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          {/* Left: Video */}
          <div className="w-full flex justify-center">
            <div className="rounded-3xl overflow-hidden border-4 border-yellow-400 shadow-2xl">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/game.jpg"
                style={{ minWidth: 400, minHeight: 300 }}
              >
                <source src="/game.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* Right: Text and CTA */}
          <div className="w-full flex flex-col items-start justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
              Let’s Add Some Character to Your Game with Exceptional Music
            </h2>
            <p className="text-lg text-white mb-6">
              Passionate about creating timeless video game music composition that captivates players, I will transform your project into a masterpiece. Whether you’re an indie developer or a major studio, we’re here to craft the perfect soundtrack for your project.
            </p>
            <p className="text-lg text-white mb-6">
              Ready to elevate your gaming experience with immersive soundscape? Contact us today to discuss your project and see how we can elevate your game’s music and sound design.
            </p>
            <div className="text-white text-xl font-semibold mb-8">Let’s Create Something Incredible and Memorable!</div>
            <a href="#contact" className="inline-block bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded hover:bg-yellow-300 transition-colors">
              BOOK A CUSTOM SCORE
            </a>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="relative py-20 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
              Got questions? Here are some of the most frequently asked questions about game music composition and my services.
            </p>
          </div>
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <button
                className="flex justify-between items-center w-full text-left text-white font-semibold"
                onClick={() => toggleFAQ(0)}
              >
                <span>What genres of games do you compose music for?</span>
                <svg className="w-6 h-6 text-yellow-400 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openFAQ === 0 ? 'max-h-screen' : 'max-h-0'}`}>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I compose for all genres, including RPGs, action, adventure, puzzle, horror, indie, and AAA titles. Each project is tailored to the game's unique style and needs.
                </p>
              </div>
            </div>
            {/* FAQ 2 */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <button
                className="flex justify-between items-center w-full text-left text-white font-semibold"
                onClick={() => toggleFAQ(1)}
              >
                <span>Can you create adaptive or interactive music for games?</span>
                <svg className="w-6 h-6 text-yellow-400 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openFAQ === 1 ? 'max-h-screen' : 'max-h-0'}`}>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Yes! I specialize in adaptive and interactive music that responds to in-game events, player actions, and game states, using middleware like FMOD or Wwise.
                </p>
              </div>
            </div>
            {/* FAQ 3 */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <button
                className="flex justify-between items-center w-full text-left text-white font-semibold"
                onClick={() => toggleFAQ(2)}
              >
                <span>How do you ensure the music fits my game's vision?</span>
                <svg className="w-6 h-6 text-yellow-400 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openFAQ === 2 ? 'max-h-screen' : 'max-h-0'}`}>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I work closely with you throughout the process, from concept to final mix, incorporating your feedback and vision to ensure the music perfectly matches your game.
                </p>
              </div>
            </div>
            {/* FAQ 4 */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <button
                className="flex justify-between items-center w-full text-left text-white font-semibold"
                onClick={() => toggleFAQ(3)}
              >
                <span>What is your turnaround time for game music projects?</span>
                <svg className="w-6 h-6 text-yellow-400 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openFAQ === 3 ? 'max-h-screen' : 'max-h-0'}`}>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Turnaround time depends on the scope and complexity, but I always strive to deliver high-quality music on time and within your deadlines. Let's discuss your timeline needs!
                </p>
              </div>
            </div>
            {/* FAQ 5 */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <button
                className="flex justify-between items-center w-full text-left text-white font-semibold"
                onClick={() => toggleFAQ(4)}
              >
                <span>Can you provide sound design and implementation as well?</span>
                <svg className="w-6 h-6 text-yellow-400 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openFAQ === 4 ? 'max-h-screen' : 'max-h-0'}`}>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Absolutely! I offer both music composition and sound design, and can help with integration into your game engine for a seamless audio experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}