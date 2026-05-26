/**
 * Test Configuration for J. Douglas Works Portfolio
 *
 * This file contains all content-specific values used in E2E tests.
 * Update these values when portfolio content changes.
 */

export const testConfig = {
  /**
   * Mission Video Configuration
   * Used in: tests/mission-video.spec.ts
   * NOTE: Mission video is not present in this portfolio — tests are skipped.
   */
  missionVideo: {
    ariaLabel: 'Mission video',
    title: 'Mission video',
  },

  /**
   * Application Form Configuration
   * Used in: tests/application-form.spec.ts
   * NOTE: Application form is not present in this portfolio — tests are skipped.
   */
  applicationForm: {
    buttonText: 'Apply',
    modalTitle: 'Application Form',
    loadingText: 'Loading application form...',
    closeButtonAriaLabel: 'Close application form',
  },

  /**
   * Events Section Configuration
   * Used in: tests/events.spec.ts
   * NOTE: Events section is not present in this portfolio — tests are skipped.
   */
  events: {
    sectionId: 'events',
    heading: 'Upcoming Events',
    footerLinkText: 'Events',
    iframeTitle: 'Facebook Events',
    facebookLinkText: 'View all events on Facebook',
    facebookUrl: 'https://www.facebook.com/',
    descriptionText: 'events',
  },

  /**
   * Social Media Links Configuration
   * Used in: tests/social-links.spec.ts
   */
  socialLinks: {
    linkedin: {
      url: 'linkedin.com/in/dworks/',
      ariaLabel: 'LinkedIn',
    },
    github: {
      url: 'github.com/jdouglasworks',
      ariaLabel: 'GitHub',
    },
  },

  /**
   * Copyright Configuration
   * Used in: tests/copyright.spec.ts
   */
  copyright: {
    text: 'J. Douglas Works. All rights reserved.',
    searchText: 'J. Douglas Works',
  },

  /**
   * Animated Numbers Configuration
   * Used in: tests/animated-numbers.spec.ts
   */
  animatedNumbers: {
    sectionHeading: 'Career Highlights',
    statistics: [
      { description: 'Years of DoD programming and cybersecurity experience', value: '20' },
      { description: 'Professional certifications', value: '13' },
      { description: "Master's degrees", value: '2' },
      {
        description: 'Years of experience in data warehousing and project management',
        value: '10',
      },
    ],
  },

  /**
   * Google Tag Manager Configuration
   * Used in: tests/google-tag-manager.spec.ts
   */
  googleTagManager: {
    id: 'GTM-TQ5H8HPR',
  },

  /**
   * Logo Configuration
   * Used in: tests/logo.spec.ts
   * headerAlt: the text displayed in the header nav link (text span, not img)
   * heroAlt: the alt text on the hero section <img> (also "J. Douglas Works")
   */
  logo: {
    headerAlt: 'J. Douglas Works',
    heroAlt: 'J. Douglas Works',
    navBarAriaLabel: 'J. Douglas Works home',
  },

  /**
   * Cookie Consent Configuration
   * Used in: tests/cookie-consent.spec.ts
   */
  cookieConsent: {
    bannerHeading: 'We Value Your Privacy',
    modalHeading: 'Cookie Preferences',
    buttons: {
      acceptAll: 'Accept All',
      declineAll: 'Decline All',
      customize: 'Customize',
      savePreferences: 'Save Preferences',
      cancel: 'Cancel',
    },
  },
}
