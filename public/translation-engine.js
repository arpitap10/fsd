/**
 * SoloSafar Dynamic Translation Engine
 * Automatically translates all content dynamically
 * Supports smooth transitions between languages
 */

const TranslationEngine = {
  LANGUAGE_KEY: 'soloSafarLanguage',
  DEFAULT_LANGUAGE: 'en',
  ANIMATION_DURATION: 300, // ms
  
  // Language configuration
  LANGUAGES: {
    'en': { name: 'English', nativeName: 'English' },
    'hi': { name: 'Hindi', nativeName: 'हिन्दी' },
    'kn': { name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    'ta': { name: 'Tamil', nativeName: 'தமிழ்' },
    'te': { name: 'Telugu', nativeName: 'తెలుగు' },
    'ml': { name: 'Malayalam', nativeName: 'മലയാളം' },
    'mr': { name: 'Marathi', nativeName: 'मराठी' },
    'bn': { name: 'Bengali', nativeName: 'বাংলা' }
  },

  /**
   * Get the current language setting
   */
  getCurrentLanguage() {
    return localStorage.getItem(this.LANGUAGE_KEY) || this.DEFAULT_LANGUAGE;
  },

  /**
   * Set language and translate page
   */
  setLanguage(lang) {
    if (!this.TRANSLATIONS[lang]) {
      console.warn(`Language ${lang} not found, using default`);
      lang = this.DEFAULT_LANGUAGE;
    }
    localStorage.setItem(this.LANGUAGE_KEY, lang);
    this.translatePageSmooth(lang);
  },

  /**
   * Get translation for a key
   */
  t(key, defaultValue = key) {
    const lang = this.getCurrentLanguage();
    const translations = this.TRANSLATIONS[lang] || this.TRANSLATIONS[this.DEFAULT_LANGUAGE];
    return translations[key] || defaultValue;
  },

  /**
   * Translate page with smooth fade transition
   */
  translatePageSmooth(lang) {
    const html = document.documentElement;
    
    // Add fade-out class
    html.style.opacity = '0.7';
    html.style.transition = `opacity ${this.ANIMATION_DURATION}ms ease-in-out`;
    
    // Perform translation
    setTimeout(() => {
      this.translatePageImmediate(lang);
      html.style.opacity = '1';
    }, this.ANIMATION_DURATION / 2);
  },

  /**
   * Translate page immediately without animation
   */
  translatePageImmediate(lang) {
    const translations = this.TRANSLATIONS[lang] || this.TRANSLATIONS[this.DEFAULT_LANGUAGE];
    
    // Set document language
    document.documentElement.lang = lang;
    
    // Translate all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = translations[key];
      if (translation) {
        el.textContent = translation;
      }
    });

    // Translate all elements with data-i18n-html (for HTML content)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const translation = translations[key];
      if (translation) {
        el.innerHTML = translation;
      }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = translations[key];
      if (translation) {
        el.placeholder = translation;
      }
    });

    // Translate titles and aria-labels
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const translation = translations[key];
      if (translation) {
        el.title = translation;
      }
    });

    // Translate aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      const translation = translations[key];
      if (translation) {
        el.setAttribute('aria-label', translation);
      }
    });

    // Update document title
    const titleKey = document.documentElement.getAttribute('data-page-title');
    if (titleKey) {
      document.title = translations[titleKey] || titleKey;
    }

    // Dispatch custom event for any dynamic content
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang, translations } }));
  },

  /**
   * Translate a string dynamically (for JavaScript-generated content)
   */
  translate(text) {
    const key = text.toLowerCase().replace(/\s+/g, '.');
    return this.t(key, text);
  },

  /**
   * Initialize language selector on page load
   */
  initLanguageSelector() {
    const selector = document.getElementById('languageSelect');
    if (!selector) return;

    const currentLang = this.getCurrentLanguage();
    selector.value = currentLang;

    // Translate the page immediately
    this.translatePageImmediate(currentLang);

    // Listen for language changes
    selector.addEventListener('change', (e) => {
      this.setLanguage(e.target.value);
    });
  },

  /**
   * Register translations (can be called multiple times)
   */
  addTranslations(lang, translations) {
    if (!this.TRANSLATIONS[lang]) {
      this.TRANSLATIONS[lang] = {};
    }
    Object.assign(this.TRANSLATIONS[lang], translations);
  },

  /**
   * Translate newly added DOM elements
   */
  translateNewElement(element, lang = null) {
    lang = lang || this.getCurrentLanguage();
    const translations = this.TRANSLATIONS[lang] || this.TRANSLATIONS[this.DEFAULT_LANGUAGE];

    if (element.hasAttribute('data-i18n')) {
      const key = element.getAttribute('data-i18n');
      const translation = translations[key];
      if (translation) element.textContent = translation;
    }

    if (element.hasAttribute('data-i18n-html')) {
      const key = element.getAttribute('data-i18n-html');
      const translation = translations[key];
      if (translation) element.innerHTML = translation;
    }

    if (element.hasAttribute('data-i18n-placeholder')) {
      const key = element.getAttribute('data-i18n-placeholder');
      const translation = translations[key];
      if (translation) element.placeholder = translation;
    }

    // Recursively translate children
    element.querySelectorAll('[data-i18n], [data-i18n-html], [data-i18n-placeholder]').forEach(child => {
      this.translateNewElement(child, lang);
    });
  }
};

/**
 * Initialize on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // Load translations from lang.js (they should be available globally)
  if (typeof TRANSLATIONS !== 'undefined') {
    TranslationEngine.TRANSLATIONS = TRANSLATIONS;
  }
  TranslationEngine.initLanguageSelector();
});

// Make available globally
window.TranslationEngine = TranslationEngine;
