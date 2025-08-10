// Common styles used throughout the application
import { COLORS } from './colors';

export const COMMON_STYLES = {
  // Card styles
  card: {
    backgroundColor: COLORS.backgroundWhite,
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    padding: '20px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },

  // Button styles
  primaryButton: {
    display: 'inline-block' as const,
    padding: '10px 20px',
    backgroundColor: COLORS.primary,
    color: COLORS.backgroundWhite,
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold' as const,
    transition: 'background-color 0.3s',
    border: 'none',
    cursor: 'pointer'
  },

  // Section styles
  section: {
    marginBottom: '40px'
  },

  sectionTitle: {
    color: COLORS.secondary,
    borderBottom: `2px solid ${COLORS.primary}`,
    paddingBottom: '5px',
    marginBottom: '20px'
  },

  // Social links
  socialIcon: {
    fontSize: '24px',
    margin: '0 10px',
    transition: 'transform 0.3s ease'
  }
} as const;
