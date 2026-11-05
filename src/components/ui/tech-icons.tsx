import React from "react";

export function TechIcon({ name }: { name: string }) {
  switch (name.toLowerCase()) {
    case "typescript":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-9 md:w-9">
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path d="M40 50h48v12H68v46H52V62H40V50zm46 30c4 4 10 7 17 7 6 0 9-3 9-6 0-11-28-5-28-24 0-12 10-20 25-20 8 0 16 3 20 7l-5 10c-4-3-10-5-15-5-6 0-9 2-9 6 0 10 28 5 28 23 0 12-10 21-26 21-10 0-19-4-24-9l5-10z" fill="#FFF" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-9 md:w-9">
          <rect width="128" height="128" rx="16" fill="#F7DF1E" />
          <path d="M72 88c2 4 6 7 12 7 6 0 10-3 10-7 0-12-25-6-25-24 0-11 9-18 22-18 7 0 14 3 18 7l-5 9c-3-3-8-4-13-4-5 0-8 2-8 5 0 9 25 5 25 24 0 11-9 19-23 19-9 0-16-4-20-9l7-9zm-38 3c2 1 5 2 8 2 8 0 12-4 12-14V46h13v34c0 17-9 24-24 24-7 0-13-2-16-4l7-9z" fill="#000" />
        </svg>
      );
    case "kotlin":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-9 md:w-9">
          <defs>
            <linearGradient id="kg" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E4485D" />
              <stop offset="50%" stopColor="#C757BC" />
              <stop offset="100%" stopColor="#7F52FF" />
            </linearGradient>
          </defs>
          <path d="M128 128H0V0h128L64 64l64 64zM0 128l64-64L0 0v128z" fill="url(#kg)" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-8 w-8 md:h-9 md:w-9">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "next.js":
      return (
        <svg viewBox="0 0 180 180" className="h-8 w-8 md:h-9 md:w-9">
          <circle cx="90" cy="90" r="90" fill="#000" />
          <path d="M149.5 159.2L74.8 62H58v56h12.5V78.2l67.3 87.2c3.8-1.9 7.4-4 10.8-6.2z" fill="#FFF" />
          <path d="M110.5 62h12.5v56h-12.5z" fill="#FFF" />
        </svg>
      );
    case "tailwind css":
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8 md:h-9 md:w-9" fill="#06B6D4">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case "mysql":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-9 md:w-9">
          <path d="M96 48c-12-18-36-24-52-16C31 38 20 54 22 72c2 17 18 32 36 32 15 0 28-8 34-21l-10-5c-4 9-14 14-24 14-12 0-23-10-24-22-2-12 6-24 17-29 12-5 31-1 40 12l9-5z" fill="#00758F" />
          <path d="M80 60c-8 0-14 6-14 14s6 14 14 14 14-6 14-14-6-14-14-14zm0 20c-3 0-6-3-6-6s3-6 6-6 6 3 6 6-3 6-6 6z" fill="#F29111" />
        </svg>
      );
    case "postgresql":
    case "sql":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-9 md:w-9">
          <path d="M64 12c-29 0-52 23-52 52s23 52 52 52 52-23 52-52-23-52-52-52zm0 88c-20 0-36-16-36-36s16-36 36-36 36 16 36 36-16 36-36 36z" fill="#336791" />
          <path d="M72 40c-10 0-18 8-18 18v22h12V58c0-3 3-6 6-6s6 3 6 6v22h12V58c0-10-8-18-18-18z" fill="#336791" />
        </svg>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-9 md:w-9">
          <path d="M64 12c-2 2-30 40-20 74 6 20 20 28 20 30 0-2 14-10 20-30 10-34-18-72-20-74z" fill="#47A248" />
          <path d="M64 12v104c0-2 14-10 20-30 10-34-18-72-20-74z" fill="#499D4A" />
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-9 md:w-9">
          <path d="M63 12c-15 0-25 7-25 18v12h25v4H28c-12 0-20 8-20 20 0 14 9 20 20 20h8v-11c0-10 8-17 18-17h25c8 0 14-6 14-14V26c0-9-8-14-26-14zm-7 8c2 0 4 2 4 4s-2 4-4 4-4-2-4-4 2-4 4-4z" fill="#3776AB" />
          <path d="M65 116c15 0 25-7 25-18V86H65v-4h35c12 0 20-8 20-20 0-14-9-20-20-20h-8v11c0 10-8 17-18 17H49c-8 0-14 6-14 14v18c0 9 8 14 26 14zm7-8c-2 0-4-2-4-4s2-4 4-4 4 2 4 4-2 4-4 4z" fill="#FFD43D" />
        </svg>
      );
    case "php":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-9 md:w-9">
          <ellipse cx="64" cy="64" rx="60" ry="34" fill="#777BB4" />
          <text x="64" y="74" fill="#FFF" fontSize="32" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">PHP</text>
        </svg>
      );
    case "java":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-9 md:w-9">
          <path d="M52 92c14 1 29-3 36-9-10 0-23 2-36 9zm-2 11c18 1 36-2 46-12-14 1-30 3-46 11zm36-39c8 10-4 19-4 19s14-6 8-18c-7-12-12-18 16-36-28 7-30 23-20 35z" fill="#EA2D2E" />
          <path d="M42 115c24 1 50-3 64-16-18 1-42 4-64 15z" fill="#5382A1" />
        </svg>
      );
    case "c":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-9 md:w-9">
          <path d="M112 42c-7-9-17-16-30-18-28-5-54 13-59 40s13 54 40 59c16 3 32-2 43-13l-10-9c-8 8-20 12-32 9-19-4-32-22-29-41s22-32 41-29c9 2 17 7 22 14l15-12z" fill="#A8B9CC" />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-9 md:w-9" fill="#2496ED">
          <path d="M120 54c-3-2-8-3-12-1-1-6-4-11-9-15l-4 3c4 4 6 9 6 15-4-1-8 0-11 2-5-4-12-6-20-6h-3V40h12v-9H67v9h12v10H50v-9H38v9H26v-9H14v9H2v17c0 23 16 42 40 44 32 3 66-12 76-47 3 0 5-1 6-2 2-2 3-5 3-7l-7-1z" />
        </svg>
      );
    case "git":
    case "github":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-9 md:w-9" fill="#F05032">
          <path d="M124 57L71 4c-4-4-10-4-14 0L4 57c-4 4-4 10 0 14l53 53c4 4 10 4 14 0l53-53c4-4 4-10 0-14zM66 84v-9c-10 1-17-4-17-14 0-4 2-8 5-11l8 8c-2 2-3 4-3 6 0 4 4 7 11 6v-8l12 12-16 10z" />
        </svg>
      );
    case "html":
    case "html5":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-9 md:w-9">
          <path d="M19 116L9 4h110l-10 112-45 12z" fill="#E44D26" />
          <path d="M64 118l37-10 8-94H64v104z" fill="#F16529" />
          <path d="M64 45H43l2 20h19v18H46l-2-19H24l4 43 36 10V45z" fill="#EBEBEB" />
          <path d="M64 45h21l-2 20H64v18h19l-3 34-16 4V45z" fill="#FFF" />
        </svg>
      );
    case "prolog":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-9 md:w-9">
          <rect width="128" height="128" rx="16" fill="#742F37" />
          <text x="64" y="78" fill="#FFF" fontSize="38" fontWeight="bold" textAnchor="middle" fontFamily="monospace">:-</text>
        </svg>
      );
    case "clerk":
      return (
        <svg viewBox="0 0 128 128" className="h-8 w-8 md:h-9 md:w-9">
          <circle cx="64" cy="64" r="52" fill="#6C47FF" />
          <path d="M43 40h42v16H59v32h26v16H43V40z" fill="#FFF" />
        </svg>
      );
    default:
      return (
        <div className="h-8 w-8 md:h-9 md:w-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}
