"use client";

import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

export function AnimatedBackground() {
  const { theme } = useTheme();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  // Generate initial particles only on client-side
  useEffect(() => {
    setMounted(true);
    const initialParticles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 15 : 30;

    for (let i = 0; i < particleCount; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5, // Increased size range
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.6 + 0.2, // Increased opacity range
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5,
      });
    }

    setParticles(initialParticles);

    // Animation loop
    const interval = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Move particles upward
          let newY = particle.y - particle.speed;
          // If particle goes off screen, reset to bottom
          if (newY < -10) {
            newY = 110;
            particle.x = Math.random() * 100;
          }

          return {
            ...particle,
            y: newY,
            rotation: (particle.rotation + particle.rotationSpeed) % 360,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      {/* Light mode background */}
      <div
        className="absolute inset-0 transition-opacity duration-700 bg-gradient-to-br from-[#FFF8F0] via-[#fff5f8] to-[#f8e8ff] opacity-0"
        style={{ opacity: theme === "light" ? 0.8 : 0 }}
      />

      {/* Dark mode background */}
      <div
        className="absolute inset-0 transition-opacity duration-700 bg-gradient-to-br from-[#0f0c29] via-[#181440] to-[#24243e] opacity-0"
        style={{ opacity: theme === "dark" ? 1 : 0 }}
      />

      {/* Animated particles */}
      {particles.map((particle) => {
        // Create more varied and distinct colors for light mode
        const lightModeColors = [
          "bg-gradient-to-br from-pink-300 to-pink-400",
          "bg-gradient-to-br from-purple-300 to-purple-400",
          "bg-gradient-to-br from-indigo-300 to-indigo-400",
          "bg-gradient-to-br from-pink-300 to-purple-400",
          "bg-gradient-to-br from-purple-300 to-indigo-400",
        ];

        const lightModeGradientMap = [
          "linear-gradient(to bottom right, #f9a8d4, #f472b6)", // pink
          "linear-gradient(to bottom right, #d8b4fe, #a855f7)", // purple
          "linear-gradient(to bottom right, #a5b4fc, #6366f1)", // indigo
          "linear-gradient(to bottom right, #f9a8d4, #a855f7)", // pink-purple
          "linear-gradient(to bottom right, #d8b4fe, #6366f1)", // purple-indigo
        ];

        // Assign a color based on particle ID for consistency
        const colorIndex = particle.id % lightModeColors.length;
        const lightModeColor = lightModeColors[colorIndex];

        return (
          <div
            key={particle.id}
            className={`absolute rounded-full transition-colors duration-300 ${
              theme === "light" ? lightModeColor : "bg-pink-400"
            }`}
            // style={{
            //   left: `${particle.x}%`,
            //   top: `${particle.y}%`,
            //   width: `${particle.size}rem`,
            //   height: `${particle.size}rem`,
            //   opacity: theme === "light" ? particle.opacity + 0.2 : particle.opacity,
            //   transform: `rotate(${particle.rotation}deg)`,
            //   boxShadow:
            //     theme === "light"
            //       ? `0 0 ${particle.size * 5}px ${
            //           lightModeColors[colorIndex].includes("pink")
            //             ? "rgba(244, 114, 182, 0.7)"
            //             : lightModeColors[colorIndex].includes("purple")
            //               ? "rgba(168, 85, 247, 0.7)"
            //               : "rgba(99, 102, 241, 0.7)"
            //         }`
            //       : "0 0 15px rgba(244, 114, 182, 0.6)",
            // }}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}rem`,
              height: `${particle.size}rem`,
              opacity:
                theme === "light" ? particle.opacity + 0.2 : particle.opacity,
              transform: `rotate(${particle.rotation}deg)`,
              backgroundImage:
                theme === "light"
                  ? lightModeGradientMap[colorIndex]
                  : undefined,
              backgroundColor: theme !== "light" ? "#f472b6" : undefined,
              boxShadow:
                theme === "light"
                  ? `0 0 ${particle.size * 5}px ${
                      lightModeGradientMap[colorIndex].includes("#f472b6")
                        ? "rgba(244, 114, 182, 0.7)"
                        : lightModeGradientMap[colorIndex].includes("#a855f7")
                        ? "rgba(168, 85, 247, 0.7)"
                        : "rgba(99, 102, 241, 0.7)"
                    }`
                  : "0 0 15px rgba(244, 114, 182, 0.6)",
            }}
          />
        );
      })}

      {/* Additional decorative elements */}
      <div
        className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-[100px] transition-colors duration-500 ${
          theme === "light" ? "bg-pink-300/40" : "bg-purple-700/20"
        }`}
      />
      <div
        className={`absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-[120px] transition-colors duration-500 ${
          theme === "light" ? "bg-purple-300/30" : "bg-indigo-700/20"
        }`}
      />
    </div>
  );
}
