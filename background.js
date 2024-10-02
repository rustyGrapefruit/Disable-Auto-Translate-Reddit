chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  const url = new URL(details.url);
  let hasTranslationParam = false;

  // Iterate over all query parameters
  for (const [key, value] of url.searchParams.entries()) {
    // Check if the query parameter is 'tl'
    if (key === 'tl') {
      url.searchParams.delete(key); // Remove the translation query parameter
      hasTranslationParam = true; 
    }
  }

  // Redirect to the new URL only if a translation query parameter was removed
  if (hasTranslationParam) {
    chrome.tabs.update(details.tabId, { url: url.toString() });
  }
}, {
  url: [{ urlMatches: 'https://www.reddit.com/*' }]
});