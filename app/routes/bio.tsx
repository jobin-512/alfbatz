
export function meta() {
  return [
    { title: "Alfbatz – Music Producer for Film, TV & Games | Bio" },
    { name: "description", content: "From Denmark to MTV fame with Paul Di'Anno to film & game scoring—discover Alfbatz's journey as a music producer now focused on Film, TV, and Game music." },
  ];
}


export default function Bio() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-transparent bg-cover bg-center px-4 py-16"
    >
      <div className="max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center bg-transparent bg-opacity-70 rounded-2xl p-8 md:p-16">
        {/* Left: Images */}
        <div className="relative flex flex-col items-center">
          <img
            src="/bio.png"
            alt="Alf Batz singing"
            className="w-full h-full object-cover rounded-lg shadow-lg border-2 mb-4 z-10"
          />
        </div>
        {/* Right: Bio Text */}
        <div className="text-white text-lg space-y-6">
          <h1 className="text-5xl font-bold mb-4 text-center md:text-left">BIO</h1>
          <p>
            I was Born in Beautiful farm country of Denmark, Started playing Guitar around age 5, moved on to playing gigs and lots of session work.
          </p>
          <p>
            I did a MTV video in 1988 while playing with now Hall of Fame Paul Di'Anno X Iron Maiden Singer, also did many live tv appearances with him, and shows all over the world.
          </p>
          <p>
            I settle down in USA in the late 80s and did many productions and session work, I eventually started my own recording studio and did very well as engineer and producer, But COVID-19 took that away real quick and had to make some changes, so instead of closing I made it my own private studio and began to figure out who I am and what I would like to do. FILM,TV,GAME music something that I always dreamt of doing and I’m very excited to share it with you. I’m looking forward to working with Film, TV and Game producers for any custom work they need, Sincerely Thank you.
          </p>
          <div className="pt-4">
            <div className="font-semibold">Alf Batz</div>
            <div>Email: <a href="mailto:alfbatz@gmail.com" className="text-yellow-400 hover:underline">alfbatz@gmail.com</a></div>
            <div><a href="https://alfbatz.com" className="text-yellow-400 hover:underline">alfbatz.com</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}