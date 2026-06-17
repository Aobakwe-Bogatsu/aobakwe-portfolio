import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aobakwe Bogatsu
        </p>
       {/* <p className="font-mono text-xs text-muted-foreground">
          Made with React + Tailwind
        </p>*/}
      </div>
    </footer>
  );
}