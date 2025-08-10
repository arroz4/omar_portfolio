// Enhanced common styles for modern design
import { COLORS } from './colors';

export const TYPOGRAPHY = {
  fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  }
} as const;

export const SPACING = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
} as const;

export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  gradient: '0 25px 50px -12px rgba(244, 143, 177, 0.25)',
} as const;

export const COMMON_STYLES = {
  // Enhanced card styles
  card: {
    backgroundColor: COLORS.backgroundCard,
    border: `1px solid ${COLORS.border}`,
    borderRadius: '16px',
    padding: SPACING.xl,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: SHADOWS.md,
    position: 'relative' as const,
    overflow: 'hidden' as const,
  },

  cardHover: {
    transform: 'translateY(-8px)',
    boxShadow: SHADOWS.gradient,
    borderColor: COLORS.primary,
  },

  // Enhanced button styles
  primaryButton: {
    display: 'inline-flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    padding: '12px 24px',
    background: COLORS.gradientPrimary,
    color: COLORS.textWhite,
    textDecoration: 'none',
    borderRadius: '12px',
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.fontWeights.semibold,
    fontFamily: TYPOGRAPHY.fontFamily,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: 'none',
    cursor: 'pointer',
    boxShadow: SHADOWS.md,
  },

  secondaryButton: {
    display: 'inline-flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    padding: '12px 24px',
    backgroundColor: 'transparent',
    color: COLORS.primary,
    textDecoration: 'none',
    borderRadius: '12px',
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.fontWeights.medium,
    fontFamily: TYPOGRAPHY.fontFamily,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: `2px solid ${COLORS.primary}`,
    cursor: 'pointer',
  },

  // Section styles
  section: {
    padding: `${SPACING['4xl']} 0`,
    position: 'relative' as const,
  },

  sectionTitle: {
    fontSize: TYPOGRAPHY.sizes['4xl'],
    fontWeight: TYPOGRAPHY.fontWeights.bold,
    color: COLORS.textPrimary,
    textAlign: 'center' as const,
    marginBottom: SPACING['2xl'],
    fontFamily: TYPOGRAPHY.fontFamily,
  },

  sectionSubtitle: {
    fontSize: TYPOGRAPHY.sizes.xl,
    fontWeight: TYPOGRAPHY.fontWeights.normal,
    color: COLORS.textSecondary,
    textAlign: 'center' as const,
    marginBottom: SPACING['3xl'],
    fontFamily: TYPOGRAPHY.fontFamily,
    maxWidth: '600px',
    margin: `0 auto ${SPACING['3xl']} auto`,
  },

  // Social links with enhanced styling
  socialIcon: {
    fontSize: '28px',
    padding: '12px',
    borderRadius: '12px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    backgroundColor: COLORS.backgroundWhite,
    boxShadow: SHADOWS.sm,
    border: `1px solid ${COLORS.border}`,
    display: 'inline-flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    margin: '0 8px',
  },

  // Container styles
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `0 ${SPACING.md}`,
  },

  // Animation utilities
  fadeInUp: {
    animation: 'fadeInUp 0.6s ease-out',
  },

  // Background patterns
  backgroundPattern: {
    backgroundImage: `
      radial-gradient(circle at 25% 25%, ${COLORS.primary}15 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, ${COLORS.secondary}15 0%, transparent 50%)
    `,
  },
} as const;
