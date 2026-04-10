import { useMobile } from './useMobile';

/**
 * Custom hook to manage animation performance and complexity across devices.
 * 
 * DESKTOP: Maintains full premium animated experience (parallax, floating, heavy motion).
 * MOBILE: Simplifies animations to basic fade-ins/slide-ups, disables heavy parallax, 
 * and stops continuous floating loops to ensure smooth performance and fast interaction.
 */
export const useAnimationSettings = () => {
  const isMobile = useMobile();
  
  return {
    isMobile,
    // Whether to enable continuous floating animations (e.g. y: [0, -10, 0])
    floating: isMobile ? false : { y: [0, -10, 0] },
    // Simplified floating for mobile (still elegant but less CPU heavy)
    floatingSimple: isMobile ? { y: [0, -5, 0] } : { y: [0, -15, 0] },
    // Scroll-based parallax intensity
    parallaxIntensity: isMobile ? 0 : 1,
    // Particle count multiplier
    particleDensity: isMobile ? 0.3 : 1.0,
    // Animation transition duration (slightly faster on mobile)
    duration: isMobile ? 0.4 : 0.8,
    // Transition ease
    ease: [0.16, 1, 0.3, 1],
    // Whether to hide heavy physics bodies
    physicsEnabled: !isMobile,
  };
};
