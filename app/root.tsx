import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import ReactGA from "react-ga4";
import type { Route } from "./+types/root";
import "./app.css";

// Initialize GA only in the browser
if (typeof window !== "undefined") {
  ReactGA.initialize("G-FL9DVNQQ66");
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Alf Batz",
  "alternateName": "alfbatz",
  "url": "https://www.alfbatz.com/",
  "logo": "https://www.alfbatz.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1 931-797-8507",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/alfbatzofficial/",
    "https://www.instagram.com/alfbatzofficial/",
    "https://www.youtube.com/@alfbatzofficial"
  ]
}

const SchemaMarkup = () => (
  <script type="application/ld+json">
    {JSON.stringify(schemaData)}
  </script>
);

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="uL1x7HrvWiA-PGX0LV7e46_Exu_AqaP0UBOm1iT7ia4" />
        <meta name="robots" content="index, follow"/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Professional Music Composer for Games & Films | Freelance & Custom Scores" />
        <meta property="og:image" content="https://www.alfbatz.com/logo.png"/>
        <meta property="og:description" content="Experienced music composer for video games, films, and TV. Offering custom compositions, original soundtracks, and immersive audio design. Hire a composer today!" />
        <meta property="og:url" content="https://www.alfbatz.com/" />
        <meta property="og:site_name" content="alfbatz" /> 
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="alfbatz" />
        <meta name="twitter:description" content="Experienced music composer for video games, films, and TV. Offering custom compositions, original soundtracks, and immersive audio design. Hire a composer today!" />
        <meta name="twitter:image" content="https://www.alfbatz.com/logo.png" />
        <meta name="twitter:creator" content="@alfbatz" />
        <meta name="twitter:site" content="@alfbatz" />
        <meta name="twitter:label1" content="Written by"/>
        <meta name="twitter:data1" content="admin"/>
        <meta name="twitter:label2" content="Est. reading time"/>
        <meta name="twitter:data2" content="31 minutes"/>
        <link rel="canonical" href="https://www.alfbatz.com/" />
        <SchemaMarkup />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  // Send pageview only on client
  if (typeof window !== "undefined") {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }

  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
