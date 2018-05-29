
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

var str = tab.url;
    var res = str.split("/");
    var url = "";
    for(var i = 0; i < res.length ; i++)
    {
      if(i == 0)
      {
		res[i] = res[i].replaceAll(".","-")
        url += res[i] + '/';
       }
      else if(i == 2)
      {
		res[i] = res[i].replaceAll(".","-")
        url += (res[i] + '.ezproxy.lib.monash.edu.au/')
      }
      else
       {
					res[i] = res[i].replaceAll(".","-")
					url += res[i];
					if(i != (res.length -1))
					{
							url += '/';
					}
       }
     }
  chrome.tabs.update(tab.id, {url: url});
});
