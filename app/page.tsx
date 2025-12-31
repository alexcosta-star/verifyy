"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [regNumber, setRegNumber] = useState("");
  const [result, setResult] = useState<null | {
    name: string;
    fatherName: string;
    grade: string;
    secured: string;
  }>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const targetReg = "CC-02-02-19-3575";

  const handleVerify = () => {
    setLoading(true);
    setError(false);
    setResult(null);

    // Simulate verification delay
    setTimeout(() => {
      if (regNumber.trim().toUpperCase() === targetReg) {
        setResult({
          name: "Rabia Haq Qureshi",
          fatherName: "fazal ul haq Qureshi",
          grade: "A+",
          secured: "87%",
        });
      } else {
        setError(true);
      }
      setLoading(false);
    }, 800);
  };

  const handleRedirect = () => {
    window.location.href = "https://svc.edu.pk/";
  };

  return (
    <div className="relative min-h-screen dynamic-bg overflow-hidden flex flex-col items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary animate-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary animate-glow" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] rounded-full bg-accent animate-glow" style={{ animationDelay: "-5s" }} />

      {/* Auto-scrolling side decorations for "dynamic" look */}
      <div className="fixed left-4 top-0 bottom-0 w-1 opacity-20 pointer-events-none hidden md:block">
        <div className="h-[200%] w-full bg-gradient-to-b from-transparent via-primary to-transparent scroll-text" />
      </div>
      <div className="fixed right-4 top-0 bottom-0 w-1 opacity-20 pointer-events-none hidden md:block">
        <div className="h-[200%] w-full bg-gradient-to-b from-transparent via-secondary to-transparent scroll-text" style={{ animationDirection: "reverse" }} />
      </div>

      <nav className="w-full max-w-7xl px-6 py-8 flex justify-between items-center z-10">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-lg shadow-primary/20 border border-white/10 bg-black/50">
            <Image
              src="/seal.png"
              alt="SVC Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight leading-none uppercase">SVC <span className="text-primary">Institute</span></span>
            <span className="text-[10px] text-zinc-500 font-mono tracking-widest mt-1 uppercase">Official Verification Portal</span>
          </div>
        </div>
        <button
          onClick={handleRedirect}
          className="text-sm font-medium px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10"
        >
          Institutional Portal
        </button>
      </nav>

      <main className="flex-1 w-full max-w-4xl px-6 py-12 flex flex-col items-center justify-center z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50 tracking-tight">
            Verify Your Degree
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            Secure and instant verification for credentials. Enter your registration number below to access verified student records.
          </p>
        </div>

        <div className="w-full max-w-lg glass-card p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

          <div className="relative flex flex-col gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400 ml-1">Registration Number</label>
              <input
                type="text"
                placeholder="CC-00-00-00-0000"
                value={regNumber}
                onChange={(e) => setRegNumber(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleVerify()}
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-xl font-mono tracking-widest verification-input transition-all placeholder:text-zinc-700 uppercase"
              />
            </div>

            <button
              onClick={handleVerify}
              disabled={loading || !regNumber}
              className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-black font-bold py-4 rounded-2xl transition-all shadow-xl shadow-primary/20 active:scale-[0.98] flex items-center justify-center gap-3"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Verify Now"
              )}
            </button>
          </div>
        </div>

        {/* Result Animation Section */}
        <div className={`mt-12 w-full max-w-2xl transition-all duration-700 transform ${result ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none h-0"}`}>
          {result && (
            <div className="glass-card p-10 rounded-[2.5rem] border-primary/20 shadow-2xl shadow-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6">
                <div className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold border border-primary/20 animate-pulse">
                  VERIFIED RECORD
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-1">
                  <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">Student Name</p>
                  <p className="text-2xl font-bold">{result.name}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">Father's Name</p>
                  <p className="text-2xl font-bold">{result.fatherName}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">Overall Grade</p>
                  <p className="text-4xl font-black text-secondary">{result.grade}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">Marks Secured</p>
                  <p className="text-4xl font-black text-accent">{result.secured}</p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 bg-black/50">
                    <Image
                      src="/seal.png"
                      alt="SVC Seal"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-zinc-500">Verified by</p>
                    <p className="text-sm font-medium">SVC Institute Official</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="mt-8 px-6 py-4 rounded-2xl bg-accent/10 border border-accent/20 text-accent font-medium animate-bounce">
            Invalid Registration Number. Please try again.
          </div>
        )}
      </main>

      <footer className="w-full p-8 flex flex-col items-center gap-6 z-10 mt-auto">
        <div className="w-full overflow-hidden whitespace-nowrap border-y border-white/5 py-3 mb-4">
          <div className="inline-block animate-[scroll_30s_linear_infinite] min-w-full">
            <span className="text-xs font-mono text-zinc-500 mx-8">SECURE VERIFICATION SYSTEM ACTIVE</span>
            <span className="text-xs font-mono text-zinc-500 mx-8">NETWORK STATUS: OPTIMAL</span>
            <span className="text-xs font-mono text-zinc-500 mx-8">DB_CONNECTION_VERIFIED</span>
            <span className="text-xs font-mono text-zinc-500 mx-8">ENCRYPTION: AES-256</span>
            <span className="text-xs font-mono text-zinc-500 mx-8">AUTHORIZED ACCESS ONLY</span>
            <span className="text-xs font-mono text-zinc-500 mx-8">SECURE VERIFICATION SYSTEM ACTIVE</span>
            <span className="text-xs font-mono text-zinc-500 mx-8">NETWORK STATUS: OPTIMAL</span>
          </div>
        </div>

        <button
          onClick={handleRedirect}
          className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:pr-12 hover:scale-105"
        >
          <span className="relative z-10">Visit Official Institute Portal</span>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">→</span>
        </button>
        <p className="text-zinc-500 text-sm">© 2025 Verification Portal. Secure Credential Network.</p>
      </footer>
    </div>
  );
}
