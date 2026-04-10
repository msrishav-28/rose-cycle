import React from 'react';
import { useAuth, SignIn } from '@clerk/clerk-react';

export default function ProtectedRoute({ children }) {
  const { isSignedIn, isLoaded } = useAuth();

  // In development mode, if Clerk fails to load (invalid key), 
  // bypass auth to allow local testing. In production, this never triggers
  // because Clerk will have a valid key.
  const isDev = import.meta.env.DEV;

  if (!isLoaded) {
    // Give Clerk 3 seconds to load, then bypass in dev
    return <AuthLoadingFallback isDev={isDev}>{children}</AuthLoadingFallback>;
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-soft-blush relative overflow-hidden">
        {/* Background blooms */}
        <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
        <div className="fixed bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[100px] rounded-full -z-10"></div>
        <div className="text-center space-y-8">
          <div className="space-y-2">
            <h1 className="font-['Instrument_Serif'] italic text-4xl text-primary">RoseCycle</h1>
            <p className="text-on-surface-variant text-sm">Your Digital Sanctuary</p>
          </div>
          <SignIn routing="hash" />
        </div>
      </div>
    );
  }

  return children;
}

// Helper component that handles the loading timeout
function AuthLoadingFallback({ isDev, children }) {
  const [timedOut, setTimedOut] = React.useState(false);

  React.useEffect(() => {
    if (isDev) {
      const timer = setTimeout(() => setTimedOut(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isDev]);

  // In dev mode, if Clerk hasn't loaded after 2s, just render the app
  if (isDev && timedOut) {
    return children;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-blush">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto"></div>
        <p className="font-['Instrument_Serif'] italic text-2xl text-primary/60">Loading your sanctuary...</p>
      </div>
    </div>
  );
}
