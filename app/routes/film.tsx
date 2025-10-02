import { useState } from 'react';

export function meta() {
    return [
      { title: "Top Film and TV Music Composer | Best Movie Soundtrack & Film Scores" },
      { name: "description", content: "Looking for a skilled film music composer? Get professional music composition for films, TV, and soundtracks. Expert in orchestral scores and movie music production" },
      { name: "keywords", content: "best film music composers, music composition for films, best film score composers, best movie soundtrack composers, top movie music composers, tv music composer, music production for film, movie score composers, orchestral music for films, best movie soundtrack composers, film soundtrack composers" },
    ];
  }


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Who are the Alf Batz Games composers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with seasoned experts, such as a TV music composer, the best film score composers, and the best movie soundtrack composers. Each artist brings years of experience in music composition for films, giving our games a cinematic touch."
      }
    },{
      "@type": "Question",
      "name": "Are your soundtracks original?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. All our game music is 100% original, crafted by top movie music composers, best film score composers, and experts in music production for film. Every track is composed to elevate gameplay and storytelling."
      }
    },{
      "@type": "Question",
      "name": "Do your games feature orchestral music?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Many titles include breathtaking orchestral music for films that enhance immersion. Some of the best film music composers renowned for writing stirring, emotionally impactful compositions are on our team."
      }
    },{
      "@type": "Question",
      "name": "Are the composers recognized in the film industry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most of our composers have worked alongside the best movie soundtrack composers, collaborating with legends in the world of cinema. Their background in music composition for films ensures every piece is top-tier."
      }
    },{
      "@type": "Question",
      "name": "Can I purchase or stream your game soundtracks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Definitely. Some tracks by our best movie soundtrack composers and film soundtrack composers are available on major streaming platforms. Dive in and discover why our music rivals even the best movie soundtrack composers in the industry."
      }
    }]
  };
  
  
  const SchemaMarkup = () => (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );


export default function Film() {
    const [openFAQ, setOpenFAQ] = useState(0);
    
    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? -1 : index);
    };

    return (
        <>
        <SchemaMarkup />
        <div className="min-h-screen bg-transparent flex flex-col items-center justify-center py-20 px-4">
            {/* Main Title */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    Film & Video
                </h1>
            </div>

            {/* Video Grid */}
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Video 1 - Tears of Steel */}
                    <div className="bg-gray-900 rounded-lg border border-white shadow-lg overflow-hidden">
                        <div className="relative">
                           
                            
                            {/* Video Iframe */}
                            <div className="relative h-48">
                                <iframe
                                    src="https://www.youtube.com/embed/obm-RCt5iEQ"
                                    title="Tears Of Steel | Dark Epic Rescore by Alf Batz"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                          </div>
                          </div>

                    {/* Video 2 - Twin Spark */}
                    <div className="bg-gray-900 rounded-lg border border-white shadow-lg overflow-hidden">
                        <div className="relative">
                           
                            
                            {/* Video Iframe */}
                            <div className="relative h-48">
                                <iframe
                                    src="https://www.youtube.com/embed/0bP_B8k1vYA"
                                    title="Tears Of Steel | Dark Epic Rescore by Alf Batz"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                          </div>
                          </div>

                    {/* Video 3 - Take Care */}
                    <div className="bg-gray-900 rounded-lg border border-white shadow-lg overflow-hidden">
                        <div className="relative">
                           
                            
                            {/* Video Iframe */}
                            <div className="relative h-48">
                                <iframe
                                    src="https://www.youtube.com/embed/P88K0AqlJJk"
                                    title="Tears Of Steel | Dark Epic Rescore by Alf Batz"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                          </div>
                          </div>

                    {/* Video 4 - Placeholder */}
                    <div className="bg-gray-900 rounded-lg border border-white shadow-lg overflow-hidden">
                        <div className="relative">
                           
                            
                            {/* Video Iframe */}
                            <div className="relative h-48">
                                <iframe
                                    src="https://www.youtube.com/embed/BjZ-lxH9dhw"
                                    title="Tears Of Steel | Dark Epic Rescore by Alf Batz"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                          </div>
                          </div>
                        {/* Video 5 - Take Care */}
                    <div className="bg-gray-900 rounded-lg border border-white shadow-lg overflow-hidden">
                        <div className="relative">
                           
                            
                            {/* Video Iframe */}
                            <div className="relative h-48">
                                <iframe
                                    src="https://www.youtube.com/embed/3dVywriAGbY"
                                    title="Tears Of Steel | Dark Epic Rescore by Alf Batz"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                          </div>
                          </div>

                          {/* Video 6 - Take Care */}
                    <div className="bg-gray-900 rounded-lg border border-white shadow-lg overflow-hidden">
                        <div className="relative">
                           
                            
                            {/* Video Iframe */}
                            <div className="relative h-48">
                                <iframe
                                    src="https://www.youtube.com/embed/j93OIAb3t08"
                                    title="Tears Of Steel | Dark Epic Rescore by Alf Batz"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                          </div>
                          </div>

                          {/* Video 7 - Take Care */}
                    <div className="bg-gray-900 rounded-lg border border-white shadow-lg overflow-hidden">
                        <div className="relative">
                           
                            
                            {/* Video Iframe */}
                            <div className="relative h-48">
                                <iframe
                                    src="https://www.youtube.com/embed/zBIJ6EURG8k"
                                    title="Tears Of Steel | Dark Epic Rescore by Alf Batz"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                          </div>
                          </div>

                          {/* Video 8 - Take Care */}
                    <div className="bg-gray-900 rounded-lg border border-white shadow-lg overflow-hidden">
                        <div className="relative">
                           
                            
                            {/* Video Iframe */}
                            <div className="relative h-48">
                                <iframe
                                    src="https://www.youtube.com/embed/NrFLxlfj9PE"
                                    title="Tears Of Steel | Dark Epic Rescore by Alf Batz"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                          </div>
                          </div>

                          {/* Video 9 - Take Care */}
                    <div className="bg-gray-900 rounded-lg border border-white shadow-lg overflow-hidden">
                        <div className="relative">
                           
                            
                            {/* Video Iframe */}
                            <div className="relative h-48">
                                <iframe
                                    src="https://www.youtube.com/embed/FelaLOdjxBU"
                                    title="Tears Of Steel | Dark Epic Rescore by Alf Batz"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                          </div>
                          </div>

                          {/* Video 10 - Take Care */}
                    <div className="bg-gray-900 rounded-lg border border-white shadow-lg overflow-hidden">
                        <div className="relative">
                           
                            
                            {/* Video Iframe */}
                            <div className="relative h-48">
                                <iframe
                                    src="https://www.youtube.com/embed/Jit1wuwpOHU"
                                    title="Tears Of Steel | Dark Epic Rescore by Alf Batz"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                          </div>
                          </div>

                          {/* Video 11 - Take Care */}
                    <div className="bg-gray-900 rounded-lg border border-white shadow-lg overflow-hidden">
                        <div className="relative">
                           
                            
                            {/* Video Iframe */}
                            <div className="relative h-48">
                                <iframe
                                    src="https://www.youtube.com/embed/zjEMJbMcVJM"
                                    title="Tears Of Steel | Dark Epic Rescore by Alf Batz"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                          </div>
                          </div>

                          {/* Video 12 - Take Care */}
                    <div className="bg-gray-900 rounded-lg border border-white shadow-lg overflow-hidden">
                        <div className="relative">
                           
                            
                            {/* Video Iframe */}
                            <div className="relative h-48">
                                <iframe
                                    src="https://www.youtube.com/embed/lwWgau0wm40"
                                    title="Tears Of Steel | Dark Epic Rescore by Alf Batz"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                          </div>
                          </div>
                          
                          
                </div>
            </div>

            {/* FILM & TV MUSIC COMPOSITION Section */}
            <section className="relative py-20 px-4 bg-black w-full mt-20">
                <div className="max-w-7xl mx-auto">
                    {/* Background with guitar strings effect */}
                    <div className="absolute inset-0 bg-black bg-opacity-90" style={{
                        backgroundImage: 'url(/guitarist.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(2px) brightness(0.3)'
                    }}></div>
                    
                    {/* Yellow glow effect */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 opacity-20 rounded-full blur-3xl"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                        {/* Main Title */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 leading-tight">
                                FILM & TV MUSIC COMPOSITION
                            </h2>
                        </div>

                        {/* Three Column Layout */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Column 1: Elevating Storytelling Through Music */}
                            <div className="bg-black bg-opacity-50 rounded-lg p-8 border border-gray-700">
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    Elevating Storytelling Through Music
                                </h3>
                                <p className="text-white text-lg leading-relaxed">
                                    I specialize in creating music compositions for films and television, crafting evocative and dynamic scores that enhance cinematic storytelling. With an in-depth understanding of emotion, rhythm, tone, and orchestration, I breathe life into narratives with compelling, tailor-made soundtracks. My music resonates deeply with audiences, whether it's a sweeping orchestral score, an atmospheric electronic composition, or a hybrid of both. As a dedicated film score composer, I ensure every note supports your story with intention.
                                </p>
                            </div>

                            {/* Column 2: Excellence in Film & TV Scoring */}
                            <div className="bg-black bg-opacity-50 rounded-lg p-8 border border-gray-700 relative">
                                {/* Vertical line separator */}
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-white opacity-30"></div>
                                <div className="absolute right-0 top-0 bottom-0 w-px bg-white opacity-30"></div>
                                
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    Excellence in Film & TV Scoring
                                </h3>
                                <p className="text-white text-lg leading-relaxed">
                                    My passion lies in delivering rich, immersive musical experiences that align seamlessly with visual storytelling. Originality is the essence of Film & TV Scoring, and I bring authenticity and ingenuity to every project with meticulous attention to detail. Recognized by clients as one of the best movie score composers in the industry, my expertise encompasses a wide range of genres, making me a versatile choice for any production. I incorporate Western Classical to jazz, rock, pop, blues, new-age, and ambient music, as well as ethnic and world music. I aim to deliver the caliber of work expected from the best film music composers working today.
                                </p>
                            </div>

                            {/* Column 3: Comprehensive Music Composition Services */}
                            <div className="bg-black bg-opacity-50 rounded-lg p-8 border border-gray-700">
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    Comprehensive Music Composition Services
                                </h3>
                                <p className="text-white text-lg leading-relaxed mb-6">
                                    I offer a comprehensive range of music production services tailored to the needs of filmmakers and TV producers.
                                </p>
                                <ul className="space-y-4 text-white">
                                    <li className="flex items-start">
                                        <span className="text-yellow-400 mr-3 mt-1">•</span>
                                        <div>
                                            <strong>Original Score Composition</strong> – Custom-crafted music designed to bring your film or television project to life.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-400 mr-3 mt-1">•</span>
                                        <div>
                                            <strong>Orchestral Music for Films</strong> – Beautifully arranged compositions featuring live orchestras and digital orchestrations.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-400 mr-3 mt-1">•</span>
                                        <div>
                                            <strong>Hybrid Soundtrack Creation</strong> – A fusion of electronic, orchestral, and experimental elements for a modern cinematic experience.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-400 mr-3 mt-1">•</span>
                                        <div>
                                            <strong>TV Music Composition</strong> – Engaging and memorable themes that elevate TV shows, documentaries, and episodic series.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-400 mr-3 mt-1">•</span>
                                        <div>
                                            <strong>Music Production for Film</strong> – End-to-end music production, from composing to final mastering.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-400 mr-3 mt-1">•</span>
                                        <div>
                                            <strong>Custom Film Soundtrack Design</strong> – Unique musical themes that define your project's identity.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* My Services Section */}
            <section className="relative py-20 px-4 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-6">
                            My Services
                        </h2>
                        <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
                            Music liberates the human soul by touching the very core of one's heart. Its true impact can be realized in the extensive list of my services that are designed for versatile users. I am open to exploring new dimensions of collaborations that could fit any creative project. Whether you're a filmmaker, content creator, or business owner, I can provide:
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* Card 1: Music Production */}
                        <div className="bg-gray-900 border border-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
                            {/* Image */}
                            <div className="h-48 relative overflow-hidden">
                                <img src="/s1.webp" alt="Sound mixing board" className="w-full h-full object-cover" />
                            </div>
                            
                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold text-white mb-4">Music Production</h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    Every song or streaming service that you hear in today's world is the result of creative geniuses of music composers who tirelessly spend hours crafting soundscapes that breathe life into a piece of art. I offer comprehensive solutions to cover all your requirements for producing musical compositions that exceed your expectations.
                                </p>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">Looking for one of the best movie music composers to produce original cues with exceptional emotional impact? Let’s talk.</p>
                                
                                <div className="mb-6 flex-1">
                                    <p className="text-gray-300 text-sm mb-3">My service includes:</p>
                                    <ul className="space-y-1">
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Mixing
                                        </li>
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Mastering
                                        </li>
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Sound design
                                        </li>
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Editing
                                        </li>
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Recording
                                        </li>
                                    </ul>
                                </div>
                                
                                <button className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-bold hover:bg-yellow-300 transition-colors mt-auto">
                                    Know more
                                </button>
                            </div>
                        </div>

                        {/* Card 2: Film Scoring and Soundtracks */}
                        <div className="bg-gray-900 border border-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
                            {/* Image */}
                            <div className="h-48 relative overflow-hidden">
                                <img src="/s2.webp" alt="Live concert stage" className="w-full h-full object-cover" />
                            </div>
                            
                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold text-white mb-4">Film Scoring and Soundtracks</h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    Creating original soundtracks to perfectly capture the mood and theme of a film is an exceptional art and an innovative science. I specialize in composing original scores that enhances the narrative and emotional impact of your production.
                                </p>
                                
                                <div className="mb-6 flex-1">
                                    <p className="text-gray-300 text-sm mb-3">You can reach me for:</p>
                                    <ul className="space-y-1 mb-4">
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Feature Films
                                        </li>
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Short Films
                                        </li>
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Documentaries
                                        </li>
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Web Series
                                        </li>
                                    </ul>
                                    <p className="text-gray-300 text-sm">
                                        My compositions enhance the storytelling experience, allowing your audience to connect emotionally with the visual content. If you're searching for one of the <span className="text-yellow-400 font-bold">top soundtrack composers in Tennessee</span> or one of the best film music composers who understands emotional depth and cinematic nuance, to create a score that transforms your film, look no further.
                                    </p>
                                </div>
                                
                                <button className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-bold hover:bg-yellow-300 transition-colors mt-auto">
                                    Know more
                                </button>
                            </div>
                        </div>

                        {/* Card 3: TV Commercial and Advertisement Music */}
                        <div className="bg-gray-900 border border-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
                            {/* Image */}
                            <div className="h-48 relative overflow-hidden">
                                <img src="/s3.png" alt="Electric guitar" className="w-full h-full object-cover" />
                            </div>
                            
                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold text-white mb-4">TV Commercial and Advertisement Music</h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    Music plays a vital role in influencing consumer perception when it comes to marketing and advertising of goods and services. It creates a narrative, builds structural continuity and emphasizes dramatic moments to build brand recognition.
                                </p>
                                
                                <div className="mb-6 flex-1">
                                    <p className="text-gray-300 text-sm mb-3">I compose powerful and memorable soundtracks for:</p>
                                    <ul className="space-y-1 mb-4">
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            TV Commercials
                                        </li>
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Radio Ads
                                        </li>
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Online Advertisements
                                        </li>
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Product Launches
                                        </li>
                                    </ul>
                                    <p className="text-gray-300 text-sm">
                                        As a film score composer experienced in branding and visuals, I bring cinematic quality even to the shortest ad spots. By aligning the music with your brand's message, I ensure that your campaign leaves a strong impression on your audience.
                                    </p>
                                </div>
                                
                                <button className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-bold hover:bg-yellow-300 transition-colors mt-auto">
                                    Know more
                                </button>
                            </div>
                        </div>

                        {/* Card 4: Music for Games */}
                        <div className="bg-gray-900 border border-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
                            {/* Image */}
                            <div className="h-48 relative overflow-hidden">
                                <img src="/s4.webp" alt="Dartboard target" className="w-full h-full object-cover" />
                            </div>
                            
                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold text-white mb-4">Music for Games</h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    Captivating soundscapes and scores are essential for creating an immersive video game experience. I create custom soundscapes that complement your game's environment, set the mood, enhance the story, and reinforce realism to motivate replay.
                                </p>
                                
                                <div className="mb-6 flex-1">
                                    <p className="text-gray-300 text-sm">
                                        My compositions are detail-oriented and consistent for various game elements including title screens, menus, and gameplay. Each piece is crafted to enhance the player's emotional connection and engagement with your game world.
                                    </p>
                                </div>
                                
                                <button className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-bold hover:bg-yellow-300 transition-colors mt-auto">
                                    Know more
                                </button>
                            </div>
                        </div>

                        {/* Card 5: Sound Design and Audio Production */}
                        <div className="bg-gray-900 border border-yellow-400 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
                            {/* Image */}
                            <div className="h-48 relative overflow-hidden">
                                <img src="/s5.webp" alt="Studio microphone" className="w-full h-full object-cover" />
                            </div>
                            
                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold text-white mb-4">Sound Design and Audio Production</h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    Sound design is an essential element in modern media production, whether it's for film, television, video games, or music. My aim is to create crisp, clear, and professional-quality sound that enhances your project's impact.
                                </p>
                                
                                <div className="mb-6 flex-1">
                                    <p className="text-gray-300 text-sm mb-3">Full-scale sound design services include:</p>
                                    <ul className="space-y-1">
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Recording
                                        </li>
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Editing
                                        </li>
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Mixing
                                        </li>
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Creating and Sourcing Sounds
                                        </li>
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Sound Effects
                                        </li>
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Ambient Soundscapes
                                        </li>
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Dialogue Mixing
                                        </li>
                                        <li className="text-gray-300 text-sm flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            Audio Mastering
                                        </li>
                                    </ul>
                                </div>
                                
                                <button className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-bold hover:bg-yellow-300 transition-colors mt-auto">
                                    Know more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Alf Batz for Your Film & TV Music Section */}
            <section className="relative py-20 px-4 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            <span className="text-yellow-400">Why Choose Alf Batz</span>
                            <span className="text-white"> for Your Film & TV Music?</span>
                        </h2>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left Column - Bulleted List */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <span className="text-yellow-400 text-xl mt-1">•</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">One of the Best Film Score Composers</h3>
                                        <p className="text-gray-300 leading-relaxed">Our work has been recognized for its ability to enhance storytelling through music.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <span className="text-yellow-400 text-xl mt-1">•</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Creative and Collaborative Approach</h3>
                                        <p className="text-gray-300 leading-relaxed">I work closely with filmmakers to ensure the music complements their vision.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <span className="text-yellow-400 text-xl mt-1">•</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Diverse Musical Expertise</h3>
                                        <p className="text-gray-300 leading-relaxed">From large-scale orchestral arrangements to intimate piano solos and electronic textures.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <span className="text-yellow-400 text-xl mt-1">•</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Professional Sound Design & Production</h3>
                                        <p className="text-gray-300 leading-relaxed">High-quality sound engineering for the best listening experience.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <span className="text-yellow-400 text-xl mt-1">•</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Passion for Storytelling Through Music</h3>
                                        <p className="text-gray-300 leading-relaxed">I understand how music can shape emotions and elevate a scene.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Overlapping Images */}
                        <div className="relative">
                            {/* Foreground Image (Larger) */}
                            <div className="relative w-full h-auto rounded-lg overflow-hidden z-20">
                                <img 
                                    src="/film.png" 
                                    alt="Alf Batz playing guitar" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transform Your Film or TV Project Section */}
            <section className="relative py-20 px-4 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    {/* Main Headline */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 leading-tight">
                            Transform Your Film or TV Project with Music That Speaks
                        </h2>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left Column - Image */}
                        <div className="relative">
                            <div className="w-full h-auto rounded-lg overflow-hidden">
                                <img 
                                    src="/film2.webp" 
                                    alt="Live concert with dramatic lighting and engaged audience" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Column - Text Block */}
                        <div className="space-y-6 text-white">
                                <p className="text-lg leading-relaxed">
                                As one of today’s best movie composers working in independent and commercial cinema, I craft original, emotionally resonant scores that bring your vision to life. Whether you're working on a blockbuster, an indie film, a television drama, a documentary, or a web series, my music will add depth and meaning to your story.
                                </p>
                            
                                <p className="text-lg leading-relaxed">
                                Industry professionals often describe my work as aligned with the best film soundtracks in modern cinema. My compositions are authentic, deeply expressive, and tailored to the story.
                                </p>
                            
                                <p className="text-lg leading-relaxed">
                                If you're searching for the best movie music composers who can offer timeless and memorable scores, you’re in the right place.
                                </p>
                                <p className="text-lg leading-relaxed">
                                I believe that music is an essential filmmaking tool that can transform an ordinary scene into an unforgettable cinematic moment.
                                </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative py-20 px-4 bg-transparent">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 leading-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
                            Got questions? I've got answers. Here are some of the most frequently asked questions about my services and work.
                        </p>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-6">
                        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
                            <button
                                className="flex justify-between items-center w-full text-left text-white font-semibold"
                                onClick={() => toggleFAQ(0)}
                            >
                                <span>What is your typical turnaround time for a project?</span>
                                <svg
                                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${
                                        openFAQ === 0 ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openFAQ === 0 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                                    My turnaround time varies depending on the complexity and scope of the project. For a standard film score, it's typically 4-6 weeks. For custom compositions, it can be shorter or longer, depending on the details and revisions.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
                            <button
                                className="flex justify-between items-center w-full text-left text-white font-semibold"
                                onClick={() => toggleFAQ(1)}
                            >
                                <span>Do you offer custom music for specific genres or styles?</span>
                                <svg
                                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${
                                        openFAQ === 1 ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openFAQ === 1 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                                    Absolutely! I specialize in creating music that perfectly aligns with your vision, regardless of genre or style. Whether you're looking for a cinematic score, a game soundtrack, or a unique instrumental piece, I can tailor my work to your specific needs.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
                            <button
                                className="flex justify-between items-center w-full text-left text-white font-semibold"
                                onClick={() => toggleFAQ(2)}
                            >
                                <span>How do you ensure the quality of your final product?</span>
                                <svg
                                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${
                                        openFAQ === 2 ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openFAQ === 2 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                                    Quality is paramount. I employ rigorous production techniques, including multiple rounds of mixing, mastering, and sound design to ensure your final product is crystal clear, professionally balanced, and perfectly suited to its purpose.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
                            <button
                                className="flex justify-between items-center w-full text-left text-white font-semibold"
                                onClick={() => toggleFAQ(3)}
                            >
                                <span>Can you provide a sample of your previous work?</span>
                                <svg
                                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${
                                        openFAQ === 3 ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openFAQ === 3 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                                    Yes, I can provide a selection of my previous works. Please feel free to contact me for a portfolio or specific examples of my work in your desired genre or medium.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
                            <button
                                className="flex justify-between items-center w-full text-left text-white font-semibold"
                                onClick={() => toggleFAQ(4)}
                            >
                                <span>How do I get started with a project?</span>
                                <svg
                                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${
                                        openFAQ === 4 ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openFAQ === 4 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                                    To begin a project, please reach out to me via email or phone. I'll discuss your vision, requirements, and budget. From there, we can collaborate on the details and move forward with the production process.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}