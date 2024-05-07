module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        hologram: {
          '0%': { transform: 'rotateY(-5deg)' },
          '50%': { transform: 'rotateY(5deg)' },
          '100%': { transform: 'rotateY(-5deg)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
        hologram: 'hologram 3s ease-in-out infinite alternate',
      },
      
    },
  },
  plugins: [],
}