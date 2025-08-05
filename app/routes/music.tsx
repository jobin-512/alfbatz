import { useState, useRef, useEffect } from 'react';

export default function Music() {
  // Music player state
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioError, setAudioError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  // FAQ state for this page
  const [openFAQ, setOpenFAQ] = useState(-1);
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  // Sample tracks data
  const tracks = [
    // Original tracks
    {
      id: 1,
      title: "Weeping Prayer",
      duration: "1:54",
      durationSeconds: 114,
      audioUrl: "/weeping_prayer.mp3"
    },
    {
      id: 2,
      title: "A Song For You", 
      duration: "3:30",
      durationSeconds: 210,
      audioUrl: "/a_song_for_you.mp3"
    },
    {
      id: 3,
      title: "Adrift At Winter", 
      duration: "2:01",
      durationSeconds: 121,
      audioUrl: "/adrift_at_winter.mp3"
    },
    {
      id: 4,
      title: "Cats", 
      duration: "2:14",
      durationSeconds: 134,
      audioUrl: "/cats.mp3"
    },
    {
      id: 5,
      title: "Cyberpunk", 
      duration: "2:24",
      durationSeconds: 144,
      audioUrl: "/cyberpunk.mp3"
    },
    {
      id: 6,
      title: "Desert Storm", 
      duration: "0:45",
      durationSeconds: 45,
      audioUrl: "/desert_storm.mp3"
    },
    {
      id: 7,
      title: "Hello Life", 
      duration: "2:13",
      durationSeconds: 133,
      audioUrl: "/hello_life.mp3"
    },
    {
      id: 8,
      title: "Impossible New World", 
      duration: "1:26",
      durationSeconds: 146,
      audioUrl: "/impossible_new_world.mp3"
    },
    {
      id: 9,
      title: "Inside The Moon", 
      duration: "3:33",
      durationSeconds: 213,
      audioUrl: "/inside__the_moon.mp3"
    },
    // New tracks
    {
      id: 10,
      title: "Out Of Silence",
      duration: "1:10",
      durationSeconds: 70,
      audioUrl: "/out_of_silence.mp3"
    },
    {
      id: 11,
      title: "Rings Of Saturn", 
      duration: "2:06",
      durationSeconds: 126,
      audioUrl: "/rings_of_saturn.mp3"
    },
    {
      id: 12,
      title: "The Hunted", 
      duration: "1:33",
      durationSeconds: 93,
      audioUrl: "/the_hunted.mp3"
    },
    {
      id: 14,
      title: "Wakunu War Tribe", 
      duration: "2:13",
      durationSeconds: 133,
      audioUrl: "/wakunu_war_tribe.mp3"
    },
    {
      id: 15,
      title: "A Warrior Crying", 
      duration: "1:55",
      durationSeconds: 115,
      audioUrl: "/A-Warrior-Crying.mp3"
    },
    {
      id: 16,
      title: "Wild Diversion", 
      duration: "2:32",
      durationSeconds: 152,
      audioUrl: "/Wild-Diversion.mp3"
    },
    {
      id: 17,
      title: "The Wolf and Dane", 
      duration: "3:15",
      durationSeconds: 195,
      audioUrl: "/The-Wolf-and-Dane.mp3"
    },
    {
      id: 18,
      title: "The Way We Go", 
      duration: "1:58",
      durationSeconds: 118,
      audioUrl: "/The-Way-We-Go.mp3"
    },
    {
      id: 19,
      title: "The Lone Dane", 
      duration: "4:35",
      durationSeconds: 275,
      audioUrl: "/The-Lone-Dane.mp3"
    },
    {
      id: 20,
      title: "The Journey Begins", 
      duration: "3:09",
      durationSeconds: 189,
      audioUrl: "/The-Journey-Begins.mp3"
    },
    {
      id: 21,
      title: "Tearful Ocean", 
      duration: "1:58",
      durationSeconds: 118,
      audioUrl: "/Tearful-Ocean.mp3"
    },
    {
      id: 22,
      title: "Fight Or Fail", 
      duration: "1:41",
      durationSeconds: 101,
      audioUrl: "/Fight-Or-Fail.mp3"
    }
  ];

  // Audio event handlers
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => setIsPlaying(true)).catch((e) => setAudioError(e.message));
      }
    }
  };

  const handlePrevious = () => {
    const newTrack = currentTrack > 0 ? currentTrack - 1 : tracks.length - 1;
    setCurrentTrack(newTrack);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handleNext = () => {
    const newTrack = currentTrack < tracks.length - 1 ? currentTrack + 1 : 0;
    setCurrentTrack(newTrack);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handleTrackClick = (trackIndex: number) => {
    setCurrentTrack(trackIndex);
    setCurrentTime(0);
    setIsPlaying(true); // auto-play on track change
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
      setAudioError(null);
      if (isPlaying) {
        audioRef.current.play().catch((e) => setAudioError(e.message));
      }
    }
  }, [currentTrack]);

  // Play/pause effect
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch((e) => setAudioError(e.message));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

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
    const handleError = () => {
      setAudioError("Audio failed to load or play. Check the file and path.");
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [currentTrack]);

  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center py-20 px-4">
      {/* Headline and Subheadline */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Alf Batz – Music Composer for Hire</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">Elevate Your Game with Expert Music Composition &amp; Audio Design</h2>
      </div>
      <section className="relative py-20 px-4 bg-transparent w-full">
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
                <div className="flex-1 space-y-4 mb-6 overflow-y-auto max-h-[12rem]">
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
                  
                  {/* Audio element */}
                  <audio ref={audioRef} preload="metadata" style={{ width: '100%' }} />
                  {audioError && (
                    <div className="text-red-500 text-xs mt-2">{audioError}</div>
                  )}
                  <div className="flex items-center justify-center space-x-6 mt-4">
                    {/* Previous Track */}
                    <button className="text-gray-400 hover:text-white transition-colors" onClick={handlePrevious}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
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
                        <path d="M6 18h2V6H6v12zm3.5-6l8.5-6v12l-8.5-6z" />
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
      {/* Service Description Section */}
      <section className="w-full bg-transparent border-t border-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 text-left">Original, Custom, and Freelance Music Composition Services</h2>
          <p className="text-lg text-gray-200 mb-12 text-left">
            Looking for a skilled and experienced music composer in the USA? Alf Batz is a freelance music composer offering soulful, original, and custom music composition services for an extensive range of projects. Whether it is a cinematic score, trailer music or electronic soundscapes, Alf Batz enhances every composition with his creativity, technical expertise, and passion.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 text-left">Your Vision, Our Composition</h2>
          <p className="text-lg text-gray-200 text-left">
            Alf Batz specializes in composing unique and engaging music tailored to your specific needs. As an expert music composer for hire online, Alf works with clients across various industries, including film, television, advertising, gaming, and digital media. If you need an immersive soundtrack, a compelling theme, or a full orchestral arrangement, Alf delivers music that enhances your project’s emotional impact and storytelling.
          </p>
        </div>
      </section>
      {/* Custom Music Composition Services Section */}
      <section className="w-full bg-transparent py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          {/* Left: Video */}
          <div className="w-full">
            <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-white">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/game.jpg"
              >
                <source src="/game.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* Right: Text and CTA */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">Custom Music Composition Services</h2>
            <p className="text-lg text-gray-200 mb-6">
              At Alf Batz, you will get an entire range of music composition freelance services, including:
            </p>
            <ul className="list-disc list-inside text-gray-100 space-y-2 mb-8">
              <li><span className="font-bold">Film and TV Scores</span> – Original and emotional compositions for feature films, documentaries, short films, and television productions.</li>
              <li><span className="font-bold">Trailer Music</span> – Energy-packed, dramatic music for trailers, promos, and teasers.</li>
              <li><span className="font-bold">Video Game Music</span> – Immersive and dynamic soundtracks that enhances the gaming experience.</li>
              <li><span className="font-bold">Commercial and Advertising Music</span> – Catchy and engaging background scores for commercials, branding, and marketing campaigns.</li>
              <li><span className="font-bold">Electronic Music</span> – Unique soundscapes, beats, and melodies for diverse electronic music projects.</li>
              <li><span className="font-bold">Custom Arrangements and Soundtracks</span> – Personalized compositions tailored to your artistic vision.</li>
            </ul>
            <a href="#contact" className="inline-block bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded hover:bg-yellow-300 transition-colors">HIRE ME TO COMPOSE</a>
          </div>
        </div>
      </section>
      {/* Why Choose Alf Batz Section */}
      <section className="w-full bg-transparent py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          {/* Left: Text */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">Why Choose Alf Batz?</h2>
            <p className="text-lg text-gray-200 mb-6">
              Regarded as one of the best trailer music composers in USA, Alf Batz finds his reputation in:
            </p>
            <ul className="list-disc list-inside text-gray-100 space-y-2 mb-8">
              <li><span className="font-bold">Creativity &amp; Originality</span> – Each composition is crafted from scratch, ensuring a unique soundscape .</li>
              <li><span className="font-bold">Versatility</span> – Expertise across multiple genres, from orchestral scores to electronic beats.</li>
              <li><span className="font-bold">Professional Approach</span> – Dedicated to delivering high-quality music on time and within budget.</li>
              <li><span className="font-bold">Collaboration &amp; Flexibility</span> – Works closely with clients to bring their vision to life.</li>
              <li><span className="font-bold">Seamless Online Hiring Process</span> – As a freelance music composer, Alf Batz provides a hassle-free experience for remote collaborations.</li>
            </ul>
          </div>
          {/* Right: Video */}
          <div className="w-full">
            <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-white">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/music.jpg"
              >
                <source src="/game.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* Elevate Your Project Section */}
      <section className="w-full bg-transparent py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">Elevate Your Project with Professional Music Composition</h2>
          <p className="text-lg text-gray-200 mb-6">
            Music is a powerful tool that holds the power to transform storytelling, by creating emotion, and captivating audience. With Alf Batz’s original music composition services, you gain access to a skilled composer who understands how to enhance your project’s impact through sound.
          </p>
          <p className="text-lg text-gray-200 mb-12">
            Whether you need a dramatic film score, an electrifying trailer track, or a soothing ambient melody, Alf Batz is ready to compose the perfect piece for your needs.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">Hire a Music Composer Today!</h2>
          <p className="text-lg text-gray-200 mb-10">
            If you’re looking for an experienced music composer for hire online, contact Alf Batz today to discuss your project. Let’s create music that speaks to your audience and brings your vision to life.
          </p>
          <a href="#contact" className="inline-block bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded hover:bg-yellow-300 transition-colors">BOOK A CUSTOM SCORE</a>
        </div>
      </section>
      {/* My Services Section */}
      <section className="relative py-20 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-6">
              My Services
            </h2>
            <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
              Music liberates the human soul by touching the very core of one's heart. Its true impact can be realized in the extensive list of my services that are designed for versatile users. I am open to exploring new dimensions of collaborations that could fit any creative project. Whether you're a filmmaker, content creator, or business owner, I can provide:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Music Production */}
            <div className="bg-gray-900 border border-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
              <div className="h-48 relative overflow-hidden">
                <img src="/s1.webp" alt="Sound mixing board" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Music Production</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Every song or streaming service that you hear in today's world is the result of creative geniuses of music composers who tirelessly spend hours crafting soundscapes that breathe life into a piece of art. I offer comprehensive solutions to cover all your requirements for producing musical compositions that exceeds your expectations.
                </p>
                <div className="mb-6 flex-1">
                  <p className="text-gray-300 text-sm mb-3">My service includes:</p>
                  <ul className="space-y-1">
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Mixing</li>
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Mastering</li>
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Sound design</li>
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Editing</li>
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Recording</li>
                  </ul>
                </div>
                <button className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-bold hover:bg-yellow-300 transition-colors mt-auto">Know more</button>
              </div>
            </div>
            {/* Card 2: Film Scoring and Soundtracks */}
            <div className="bg-gray-900 border border-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
              <div className="h-48 relative overflow-hidden">
                <img src="/s2.webp" alt="Live concert stage" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Film Scoring and Soundtracks</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Creating original soundtracks to perfectly capture the mood and theme of a film is an exceptional art and an innovative science. I specialize in composing original scores that enhances the narrative and emotional impact of your production.
                </p>
                <div className="mb-6 flex-1">
                  <p className="text-gray-300 text-sm mb-3">You can reach me for:</p>
                  <ul className="space-y-1 mb-4">
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Feature Films</li>
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Short Films</li>
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Documentaries</li>
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Web Series</li>
                  </ul>
                  <p className="text-gray-300 text-sm">My compositions enhance the storytelling experience, allowing your audience to connect emotionally with the visual content. If you're searching for one of the <span className="text-yellow-400 font-bold">top soundtrack composers in Tennessee</span> to create a score that transforms your film, look no further.</p>
                </div>
                <button className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-bold hover:bg-yellow-300 transition-colors mt-auto">Know more</button>
              </div>
            </div>
            {/* Card 3: TV Commercial and Advertisement Music */}
            <div className="bg-gray-900 border border-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
              <div className="h-48 relative overflow-hidden">
                <img src="/s3.png" alt="Electric guitar" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">TV Commercial and Advertisement Music</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Music plays a vital role in influencing consumer perception when it comes to marketing and advertising of goods and services. It creates a narrative, builds structural continuity and emphasizes dramatic moments to build brand recognition.
                </p>
                <div className="mb-6 flex-1">
                  <p className="text-gray-300 text-sm mb-3">I compose powerful and memorable soundtracks for:</p>
                  <ul className="space-y-1 mb-4">
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>TV Commercials</li>
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Radio Ads</li>
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Online Advertisements</li>
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Product Launches</li>
                  </ul>
                  <p className="text-gray-300 text-sm">By aligning the music with your brand's message, I ensure that your campaign leaves a strong impression on your audience.</p>
                </div>
                <button className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-bold hover:bg-yellow-300 transition-colors mt-auto">Know more</button>
              </div>
            </div>
            {/* Card 4: Music for Games */}
            <div className="bg-gray-900 border border-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
              <div className="h-48 relative overflow-hidden">
                <img src="/s4.webp" alt="Dartboard target" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Music for Games</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Captivating soundscapes and scores are essential for creating an immersive video game experience. I create custom soundscapes that complement your game's environment, set the mood, enhance the story, and reinforce realism to motivate replay.
                </p>
                <div className="mb-6 flex-1">
                  <p className="text-gray-300 text-sm">My compositions are detail-oriented and consistent for various game elements including title screens, menus, and gameplay. Each piece is crafted to enhance the player's emotional connection and engagement with your game world.</p>
                </div>
                <button className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-bold hover:bg-yellow-300 transition-colors mt-auto">Know more</button>
              </div>
            </div>
            {/* Card 5: Sound Design and Audio Production */}
            <div className="bg-gray-900 border border-yellow-400 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
              <div className="h-48 relative overflow-hidden">
                <img src="/s5.webp" alt="Studio microphone" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Sound Design and Audio Production</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Sound design is an essential element in modern media production, whether it's for film, television, video games, or music. My aim is to create crisp, clear, and professional-quality sound that enhances your project's impact.
                </p>
                <div className="mb-6 flex-1">
                  <p className="text-gray-300 text-sm mb-3">Full-scale sound design services include:</p>
                  <ul className="space-y-1">
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Recording</li>
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Editing</li>
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Mixing</li>
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Creating and Sourcing Sounds</li>
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Sound Effects</li>
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Ambient Soundscapes</li>
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Dialogue Mixing</li>
                    <li className="text-gray-300 text-sm flex items-center"><span className="text-yellow-400 mr-2">•</span>Audio Mastering</li>
                  </ul>
                </div>
                <button className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-bold hover:bg-yellow-300 transition-colors mt-auto">Know more</button>
              </div>
            </div>
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
              Got questions? I've got answers. Here are some of the most frequently asked questions about my services and work.
            </p>
          </div>
          <div className="space-y-6">
            {/* FAQ 1 */}
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
            {/* FAQ 2 */}
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
            {/* FAQ 3 */}
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
            {/* FAQ 4 */}
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
            {/* FAQ 5 */}
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
    </div>
  );
}