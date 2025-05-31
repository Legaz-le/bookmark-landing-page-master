import { StrictMode,useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import { Observer } from "tailwindcss-intersect";

export default function ObserverProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    Observer.start();
  }, []);
 
  return <>{children}</>;
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ObserverProvider>
    <App />
    </ObserverProvider>
  </StrictMode>,
)
