import heroGif from '../../public/hero.gif';
import { useState, useRef, useEffect } from 'react';

export function meta() {
  return [
    { title: "ALF BATZ - From Silence to Symphony" },
    { name: "description", content: "Crafting iconic soundtracks for film, TV and games through music that speaks beyond words." },
  ];
}

export default function Home() {
  // Music player state
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [openFAQ, setOpenFAQ] = useState(0);

  // Contact form state
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [contactSubmitStatus, setContactSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Sample tracks data
  const tracks = [
    {
      id: 1,
      title: "weeping_prayer.mp3",
      duration: "1:54",
      durationSeconds: 114,
      audioUrl: "/weeping_prayer.mp3" // You'll need to add this audio file
    },
    {
      id: 2,
      title: "a_song_for_you.mp3", 
      duration: "3:30",
      durationSeconds: 210,
      audioUrl: "/a_song_for_you.mp3" // You'll need to add this audio file
    }
  ];

  // Audio event handlers
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePrevious = () => {
    const newTrack = currentTrack > 0 ? currentTrack - 1 : tracks.length - 1;
    setCurrentTrack(newTrack);
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const handleNext = () => {
    const newTrack = currentTrack < tracks.length - 1 ? currentTrack + 1 : 0;
    setCurrentTrack(newTrack);
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const handleTrackClick = (trackIndex: number) => {
    setCurrentTrack(trackIndex);
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Update audio source when track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrack].audioUrl;
      audioRef.current.load();
    }
  }, [currentTrack]);

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      handleNext();
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack]);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  // Contact form handlers
  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setContactFormData(prev => ({
      ...prev,
      [id.replace('contact-', '')]: value
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsContactSubmitting(true);
    setContactSubmitStatus('idle');

    try {
      // You can replace this URL with your actual API endpoint
      const response = await fetch('mail.alfbatz.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactFormData),
      });

      if (response.ok) {
        setContactSubmitStatus('success');
        setContactFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setContactSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setContactSubmitStatus('error');
    } finally {
      setIsContactSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hidden audio element */}
      <audio ref={audioRef} preload="metadata" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-transparent">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroGif})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-transparent bg-opacity-30"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          {/* Main Headline */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2">
              <span className="text-yellow-400">FROM SILENCE TO SYMPHONY</span>
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              CRAFTING ICONIC SOUNDTRACKS!
            </h2>
          </div>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-white max-w-4xl mb-8 leading-relaxed">
            A seamless blend of professionalism, experience, and passion—bringing film, TV and games to life through music that speaks beyond words.
          </p>

          {/* CTA Button */}
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
            DISCOVER MORE
          </button>
        </div>
      </section>

      {/* Lower Content Section */}
      <section className="relative z-20 -mt-20 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 border border-white rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Left Side - Text Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl text-white font-semibold">
                    Hear it. Feel it. Experience the Story in Sound
                  </h3>
                  <p className="text-xl text-white">
                    <span className="text-white">AUTHENTIC. DYNAMIC. </span>
                    <span className="text-yellow-400">ORIGINAL</span>
                  </p>
                </div>
                
                <button className="bg-transparent text-white border border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300">
                  DISCOVER MORE
                </button>
              </div>

              {/* Right Side - Video Player */}
              <div className="relative">
                <div className="bg-gray-800 rounded-xl overflow-hidden">
                  {/* Video Thumbnail */}
                  <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-700 to-gray-900">
                    {/* Blurred background image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 opacity-50"></div>
                    
                    {/* Video overlay content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                    <iframe width="1310" height="737" src="https://www.youtube.com/embed/0bP_B8k1vYA" title="Twin Spark | Emotional Cinematic Rescore by Alf Batz – A Sci-Fi Story Reborn Through Music" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soundtrack of My Life Section */}
      <section className="relative py-20 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Content - Text */}
            <div className="space-y-8 text-white">
              {/* Main Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                The Soundtrack of My Life: From Gigs to Games
              </h2>
              
              {/* Quote */}
              <blockquote className="text-lg md:text-xl italic text-gray-300 border-l-4 border-yellow-400 pl-6">
                "Music is God's gift to man, the only art of Heaven given to earth, the only art of earth we take to Heaven." - Walter Savage Landor
              </blockquote>
              
              {/* Paragraph 1 */}
              <p className="text-lg leading-relaxed">
                As a Tennessee-based music composer, my mission is to create unforgettable soundscapes that connect deeply with listeners. My music is the way I communicate with this world.
              </p>
              
              {/* Paragraph 2 */}
              <p className="text-lg leading-relaxed">
                Whether it's a compelling film, an engaging podcast, a high-impact commercial or a game, my compositions are custom-made to evoke powerful emotions that seamlessly support storytelling.
              </p>
              
              {/* Paragraph 3 */}
              <p className="text-lg leading-relaxed">
                With expertise in creating original soundtracks, I position myself as one of the best soundtrack composers in the industry. My goal is to craft captivating music that resonates with your audience and leaves a lasting impression.
              </p>
              
              {/* Closing */}
              <p className="text-2xl font-semibold text-yellow-400">
                Sincerely Thank You.
              </p>
              
              {/* CTA Button */}
              <button className="bg-transparent text-white border border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300">
                DISCOVER MORE
              </button>
            </div>
            
            {/* Right Content - Images */}
            <div className="space-y-6">
              {/* Top Image - Young Artist */}
              <div className="relative overflow-hidden rounded-lg ">
                <div className="aspect-[4/5] flex items-center justify-center">
                <img src="/guitarist.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="relative py-20 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Right Content - Images */}
            <div className="space-y-6">
              {/* Top Image - Guitarist */}
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[4/5] flex items-center justify-center">
                  <img src="/guitarist2.png" alt="Guitarist playing electric guitar" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
            
            {/* Left Content - Text */}
            <div className="space-y-8 text-white">
              {/* Main Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-yellow-400">
                Why Choose Me for Your Soundtrack Needs?
              </h2>
              
              {/* Introductory Paragraph */}
              <p className="text-lg leading-relaxed">
                Creating an immersive soundtrack requires passion, intuition, and the ability to translate emotions into sound. As one of the top soundtrack composers in Tennessee, I offer a unique blend of talent and dedication.
              </p>
              
              {/* Transition */}
              <p className="text-lg leading-relaxed">
                Partner with me to add an innovative freshness to your creative work. Learn how we can create magic:
              </p>
              
              {/* Numbered List */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tailor-made Musical Compositions</h3>
                    <p className="text-gray-300">Each project is unique and deserves a custom soundtrack that aligns with your vision and communicates tone, mood, and narrative.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Emotionally-Driven Soundscapes</h3>
                    <p className="text-gray-300">Music exists to touch the soul, evoking emotion through rhythm and tone, creating an unforgettable experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">High-Quality Production</h3>
                    <p className="text-gray-300">Unbeatable quality in all productions, meeting industry standards with clear, dynamic, and balanced sound from concept to final mix.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Inspiration from the Best</h3>
                    <p className="text-gray-300">Drawing inspiration from <span className="text-yellow-400 font-bold">famous soundtrack composers</span> like John Williams, Hans Zimmer, Ennio Morricone, John Barry, and Maurice Jarre, blending timeless techniques with creative touch.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-sm">5</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Affordable and Flexible Services</h3>
                    <p className="text-gray-300">Good music should be accessible to everyone. Flexible packages designed to cater to every budget.</p>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Music Player Section */}
      <section className="relative py-20 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-yellow-400">Alf Batz</span>
              <span className="text-white"> Crafting Instrumental Narratives</span>
            </h2>
            <div className="w-32 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          {/* Music Player Frame */}
          <div className="bg-transparent border-4 border-yellow-400 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              
              {/* Left Panel - Album Art */}
              <div className="relative h-96 lg:h-auto">
              <img src="/music.jpg" alt="" className='w-full h-full object-cover' />
              </div>
              
              {/* Right Panel - Music List & Controls */}
              <div className="bg-transparent p-8 flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">Music List</h3>
                  <a className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center space-x-2 hover:bg-red-700 transition-colors cursor-pointer" href="/music">
                    <span className="text-lg">🎧</span>
                    <span>LISTEN MORE</span>
                  </a>
                </div>
                
                {/* Track List */}
                <div className="flex-1 space-y-4 mb-6">
                  {tracks.map((track, index) => (
                    <div
                      key={track.id}
                      className={`flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer ${
                        index === currentTrack ? 'bg-gray-900' : 'hover:bg-gray-900'
                      }`}
                      onClick={() => handleTrackClick(index)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-red-600 flex items-center justify-center rounded-sm">
                          <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                        </div>
                        <span className="text-white font-medium">{track.title}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{track.duration}</span>
                    </div>
                  ))}
                </div>
                
                {/* Playback Controls */}
                <div className="border-t border-gray-700 pt-6">
                  <div className="text-center mb-4">
                    <div className="text-gray-400 text-xs mb-1">PLAYING</div>
                    <div className="text-white font-medium">{tracks[currentTrack]?.title || 'No track selected'}</div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-6">
                    {/* Previous Track */}
                    <button className="text-gray-400 hover:text-white transition-colors" onClick={handlePrevious}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                      </svg>
                    </button>
                    
                    {/* Play/Pause Button */}
                    <button
                      className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                      onClick={handlePlayPause}
                    >
                      {isPlaying ? (
                        <div className="flex space-x-1">
                          <div className="w-1 h-4 bg-white"></div>
                          <div className="w-1 h-4 bg-white"></div>
                        </div>
                      ) : (
                        <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                      )}
                    </button>
                    
                    {/* Next Track */}
                    <button className="text-gray-400 hover:text-white transition-colors" onClick={handleNext}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 18h2V6H6v12zm3.5-6l8.5-6v12l-8.5-6z"/>
                      </svg>
                    </button>
                  </div>
                  
                  {/* Time Display */}
                  <div className="flex justify-center items-center space-x-2 mt-4">
                    <span className="text-white text-sm">{formatTime(currentTime)}</span>
                    <span className="text-gray-400 text-sm">/</span>
                    <span className="text-white text-sm">{formatTime(duration)}</span>
                  </div>
                </div>
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
                  Every song or streaming service that you hear in today's world is the result of creative geniuses of music composers who tirelessly spend hours crafting soundscapes that breathe life into a piece of art. I offer comprehensive solutions to cover all your requirements for producing musical compositions that exceeds your expectations.
                </p>
                
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
                    My compositions enhance the storytelling experience, allowing your audience to connect emotionally with the visual content. If you're searching for one of the <span className="text-yellow-400 font-bold">top soundtrack composers in Tennessee</span> to create a score that transforms your film, look no further.
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
                    By aligning the music with your brand's message, I ensure that your campaign leaves a strong impression on your audience.
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

      {/* Epic Game Music Section */}
      <section className="relative py-20 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 leading-tight">
              Epic Scores for Epic Gameplay Music That Brings Worlds to Life
            </h2>
            <p className="text-2xl md:text-3xl text-white font-semibold">
              Games
            </p>
          </div>

          {/* Video Player */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 border border-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Container */}
              <div className="relative aspect-video bg-gradient-to-br from-green-600 to-blue-600">
                {/* Video Element */}
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="/game.jpg"
                >
                  <source src="/game.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Game UI Elements */}
                <div className="absolute top-4 left-4 flex space-x-2 z-10">
                  {/* Health Bar */}
                  <div className="w-16 h-2 bg-red-600 rounded-full"></div>
                  {/* Stamina Bar */}
                  <div className="w-16 h-2 bg-green-600 rounded-full"></div>
                  {/* Mana Bar */}
                  <div className="w-16 h-2 bg-blue-600 rounded-full"></div>
                </div>
                
                {/* Contest Badge */}
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 z-10">
                  <span>🎵</span>
                  <span>INDIE GAME MUSIC CONTEST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Tennessee's Best Section */}
      <section className="relative py-20 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content - Text */}
            <div className="space-y-8 text-white">
              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Work With Tennessee's</span>
                <br />
                <span className="text-yellow-400">Best Soundtrack Composers</span>
              </h2>
              
              {/* First Paragraph */}
              <p className="text-lg md:text-xl leading-relaxed">
                If you're searching for a dedicated and talented Tennessee-based music composer who can transform your project with world-class soundtracks, you've come to the right place. I am proud to be recognized among the best soundtrack composers and I am committed to delivering exceptional music that exceeds your expectations within your budget.
              </p>
              
              {/* Second Paragraph */}
              <p className="text-lg md:text-xl leading-relaxed">
                Whether you need a dramatic film score, an engaging podcast soundtrack, or a powerful commercial jingle, I am here to collaborate and bring your vision to life.
              </p>
            </div>
            
            {/* Right Content - Images */}
            <div className="relative">
              {/* Top Image - Profile Shot */}
              <div className="relative z-10 mb-8">
                <div className="w-full max-w-md mx-auto">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                    <img 
                      src="/guitarist3.png" 
                      alt="Composer profile shot with microphone" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Film Clips Section */}
      <section className="relative py-20 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 leading-tight">
              Epic Scores for Epic Gameplay Music That Brings Worlds to Life
            </h2>
            <p className="text-2xl md:text-3xl text-white font-semibold">
              Film Clips
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Video 1 - Another Daily Life */}
            <iframe width="399" height="299" src="https://www.youtube.com/embed/tnU8ZYtXcdU" title="Another Daily Life | Intense Sci-Fi Rescore by Alf Batz – A Futuristic Showdown"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='border border-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 block w-full'></iframe>


            {/* Video 2 - Another Daily Life */}
            <iframe width="399" height="299" src="https://www.youtube.com/embed/BjZ-lxH9dhw" title="Another Daily Life | Intense Sci-Fi Rescore by Alf Batz – A Futuristic Showdown"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='border border-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 block w-full'></iframe>


            {/* Video 3 - Tears Of Steel */}
            <iframe width="399" height="299" src="https://www.youtube.com/embed/obm-RCt5iEQ" title="Another Daily Life | Intense Sci-Fi Rescore by Alf Batz – A Futuristic Showdown"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='border border-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 block w-full'></iframe>


            {/* Video 4 - Twin Spark */}
            <iframe width="399" height="299" src="https://www.youtube.com/embed/0bP_B8k1vYA" title="Another Daily Life | Intense Sci-Fi Rescore by Alf Batz – A Futuristic Showdown"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='border border-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 block w-full'></iframe>


            {/* Video 5 - Terminator */}
            <iframe width="399" height="299" src="https://www.youtube.com/embed/3dVywriAGbY" title="Another Daily Life | Intense Sci-Fi Rescore by Alf Batz – A Futuristic Showdown"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='border border-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 block w-full'></iframe>


            {/* Video 6 - Take Care */}
            <iframe width="399" height="299" src="https://www.youtube.com/embed/P88K0AqlJJk" title="Another Daily Life | Intense Sci-Fi Rescore by Alf Batz – A Futuristic Showdown"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='border border-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 block w-full'></iframe>

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
                  className="w-6 h-6 text-yellow-400 transform transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  openFAQ === 0 ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300 text-lg leading-relaxed">
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
                  className="w-6 h-6 text-yellow-400 transform transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  openFAQ === 1 ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300 text-lg leading-relaxed">
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
                  className="w-6 h-6 text-yellow-400 transform transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  openFAQ === 2 ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300 text-lg leading-relaxed">
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
                  className="w-6 h-6 text-yellow-400 transform transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  openFAQ === 3 ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300 text-lg leading-relaxed">
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
                  className="w-6 h-6 text-yellow-400 transform transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  openFAQ === 4 ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300 text-lg leading-relaxed">
                  To begin a project, please reach out to me via email or phone. I'll discuss your vision, requirements, and budget. From there, we can collaborate on the details and move forward with the production process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="relative py-20 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 leading-tight">
              Get in Touch
            </h2>
            <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
              Have a project in mind? Let's make it a reality. I'd love to hear about your vision and discuss how I can help bring your creative ideas to life.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 border border-white rounded-2xl p-8 md:p-12">
            <form onSubmit={handleContactSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-white text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  value={contactFormData.name}
                  onChange={handleContactInputChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-yellow-400" 
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-white text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  value={contactFormData.email}
                  onChange={handleContactInputChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-yellow-400" 
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="contact-subject" className="block text-white text-sm font-medium mb-1">Subject</label>
                <input 
                  type="text" 
                  id="contact-subject" 
                  value={contactFormData.subject}
                  onChange={handleContactInputChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-yellow-400" 
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="contact-message" className="block text-white text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="contact-message" 
                  rows={6} 
                  value={contactFormData.message}
                  onChange={handleContactInputChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-yellow-400"
                ></textarea>
              </div>
              
              {/* Status Messages */}
              {contactSubmitStatus === 'success' && (
                <div className="md:col-span-2 p-4 bg-green-900 border border-green-500 text-green-300 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {contactSubmitStatus === 'error' && (
                <div className="md:col-span-2 p-4 bg-red-900 border border-red-500 text-red-300 rounded-lg">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isContactSubmitting}
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105 col-span-2 md:col-span-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isContactSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Get Started Today Section */}
      <section className="relative py-20 px-4 bg-transparent overflow-hidden">
        {/* Golden Yellow Glow Effect */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-yellow-400 opacity-15 rounded-full blur-2xl transform translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-yellow-400">Get</span>
            <span className="text-white"> Started Today</span>
          </h2>
          
          {/* First Paragraph */}
          <p className="text-lg md:text-xl text-white mb-6 leading-relaxed">
            Ready to create a soundtrack that captivates your audience? Let's collaborate to craft music that aligns perfectly with your project's theme and vision. As one of the top soundtrack composers in Tennessee, I am committed to providing music that stands the test of time.
          </p>
          
          {/* Second Paragraph */}
          <p className="text-lg md:text-xl text-white leading-relaxed">
            Contact Me Today to discuss your project or request a custom quote. Together, we will build compositions that can transform your creative vision into an unforgettable musical masterpiece.
          </p>
        </div>
      </section>
    </div>
  );
}
