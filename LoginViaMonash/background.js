
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

var str = tab.url;
    var url = 'https://go.openathens.net/redirector/unimelb.edu.au?url='+str;
  chrome.tabs.update(tab.id, {url: url});
});
