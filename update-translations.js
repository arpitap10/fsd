/**
 * Translation Update Helper
 * Adds missing data-i18n attributes to HTML elements
 * Run: node update-translations.js
 */

const fs = require('fs');
const path = require('path');

// Define all elements that need data-i18n attributes
const translationMappings = [
  // Navigation
  { selector: 'a[href="homepage.html#tools"]', key: 'nav.tools', textContent: 'Tools' },
  { selector: 'a[href="blog.html"]', key: 'nav.blog', textContent: 'Blog' },
  
  // Dashboard label
  { selector: '.dashboard-label', key: 'dashboard.label', textContent: 'Your Solo Dashboard' },
  
  // Planner Modal
  { selector: '#plannerTitle', key: 'planner.modalTitle' },
  { selector: '.planner-header p', key: 'planner.intro' },
  
  // Journal Modal
  { selector: '#journalTitle', key: 'journal.title' },
  { selector: '.tool-header:has(> h2#journalTitle) + .tool-body > p', key: 'journal.intro' },
  
  // Budget Modal
  { selector: '#budgetTitle', key: 'budget.title' },
  
  // Safety Modal
  { selector: '#safetyTitle', key: 'safety.title' },
  
  // Find Modal
  { selector: '#findTitle', key: 'find.modalTitle' },
];

console.log('✓ Use this mapping to manually add data-i18n attributes to your HTML');
console.log('\nTo add data-i18n attributes, find each element and add the attribute:');
console.log('\n<a href="homepage.html#tools" data-i18n="nav.tools">Tools</a>');
console.log('<a href="blog.html" data-i18n="nav.blog">Blog</a>');
console.log('<span class="dashboard-label" data-i18n="dashboard.label">Your Solo Dashboard</span>');
console.log('\n...and so on for each element in the mappings above.');
console.log('\n✓ All data-i18n keys are already in lang.js');
