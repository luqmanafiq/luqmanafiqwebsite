import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Surface System
        surface: {
          DEFAULT: "hsl(var(--surface))",
          elevated: "hsl(var(--surface-elevated))",
          glass: "hsl(var(--surface-glass))",
        },
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          glow: "hsl(var(--secondary-glow))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          glow: "hsl(var(--accent-glow))",
        },
        
        // Status Colors
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          border: "hsl(var(--card-border))",
        },
      },
      
      // 3D System
      perspective: {
        'none': 'none',
        '500': '500px',
        '1000': '1000px', 
        '1200': 'var(--perspective)',
        '1500': '1500px',
        '2000': '2000px',
      },
      
      // Box Shadow for 3D Effects
      boxShadow: {
        '3d-sm': 'var(--shadow-3d-small)',
        '3d': 'var(--shadow-3d-medium)',
        '3d-lg': 'var(--shadow-3d-large)',
        '3d-xl': 'var(--shadow-3d-xl)',
        'glow-primary': 'var(--glow-primary)',
        'glow-secondary': 'var(--glow-secondary)',
        'glow-accent': 'var(--glow-accent)',
      },
      
      // Background Gradients
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-surface': 'var(--gradient-surface)',
        'gradient-glass': 'var(--gradient-glass)',
      },
      
      // Transform Origins for 3D
      transformOrigin: {
        'center-deep': 'center center -100px',
        'center-far': 'center center -200px',
      },
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      
      // 3D Animation Keyframes
      keyframes: {
        // 3D Rotation Effects
        "rotate-3d-x": {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(360deg)" }
        },
        "rotate-3d-y": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" }
        },
        "rotate-cube": {
          "0%": { transform: "rotateX(-15deg) rotateY(0deg)" },
          "25%": { transform: "rotateX(-15deg) rotateY(90deg)" },
          "50%": { transform: "rotateX(-15deg) rotateY(180deg)" },
          "75%": { transform: "rotateX(-15deg) rotateY(270deg)" },
          "100%": { transform: "rotateX(-15deg) rotateY(360deg)" }
        },
        
        // Slider Animations
        "slide-3d-left": {
          "0%": { transform: "translateX(0) rotateY(0deg) translateZ(0)" },
          "100%": { transform: "translateX(-100%) rotateY(-30deg) translateZ(-100px)" }
        },
        "slide-3d-right": {
          "0%": { transform: "translateX(0) rotateY(0deg) translateZ(0)" },
          "100%": { transform: "translateX(100%) rotateY(30deg) translateZ(-100px)" }
        },
        
        // Glow Pulse
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "var(--glow-primary), var(--shadow-3d-medium)" 
          },
          "50%": { 
            boxShadow: "0 0 40px hsl(270 100% 70% / 0.6), var(--shadow-3d-large)" 
          }
        },
        
        // Floating Effect
        "float-3d": {
          "0%, 100%": { 
            transform: "translateY(0px) rotateX(0deg)" 
          },
          "50%": { 
            transform: "translateY(-20px) rotateX(5deg)" 
          }
        },
        
        // Accordion animations (keeping existing)
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      
      animation: {
        // 3D Animations
        "rotate-3d-x": "rotate-3d-x 10s linear infinite",
        "rotate-3d-y": "rotate-3d-y 15s linear infinite",
        "rotate-cube": "rotate-cube 20s linear infinite",
        "slide-3d-left": "slide-3d-left 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
        "slide-3d-right": "slide-3d-right 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float-3d": "float-3d 6s ease-in-out infinite",
        
        // Existing animations
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      
      // Transition Timing
      transitionTimingFunction: {
        '3d': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
