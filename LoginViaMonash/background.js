
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	
var str = tab.url;
    var res = str.split("/");
    var url = "";
    for(var i = 0; i < res.length ; i++)
    {
      if(i == 0)
      {
        url += res[i] + '/';
       }
      else if(i == 2)
      {
        url += (res[i] + '.ezproxy.lib.monash.edu.au/')
      }
      else
       {
         url += res[i] + '/'
       }
     }
  chrome.tabs.update(tab.id, {url: url});
});
