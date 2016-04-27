// background.js

// Reset Omnibox suggestion and utilize dynamic suggestion for searching
function resetDefaultSuggestion() {
	chrome.omnibox.setDefaultSuggestion({
		description: 'flix: Search your favorite streaming services for %s'
	});
}
resetDefaultSuggestion();

// 
function navigate(url) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.update(tabs[0].id, {url: url});
	});
}

// Searching canistream it for movies
chrome.omnibox.onInputEntered.addListener(function(text) {
	  navigate("http://www.canistream.it/search/movie/" + text);
});

