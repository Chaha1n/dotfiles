(function(){function e(){var a=f.primeVideoStoreFrontURL(c)+"?tag="+f.getAffiliateId(c);document.body.innerHTML='<div style="width:150px;"><ul><li><a href="'+a+'" target="_blank">'+g("Go to Prime Video")+'</a></li><li><a href="https://www.subtitlesfll.com/form?lang='+encodeURIComponent(d.replace(/-.*/g,""))+'" target="_blank">'+g("Bug report")+'</a></li><li><a href="https://twitter.com/SubtitlesForLL" target="_blank">Twitter</a></li></ul></div>'}function g(a){return b[a]?b[a][d]||b[a][d.replace(/-.+$/m,
"")]||b[a].default||a:a}var d=(window.navigator.languages&&window.navigator.languages[0]||window.navigator.language||window.navigator.userLanguage||window.navigator.browserLanguage).toLowerCase(),b={"Go to Prime Video":{ja:"Prime Video\u3078\u884c\u304f"},"Bug report":{ja:"\u30d0\u30b0\u5831\u544a"}},f=new SubtitlesForLLAmazon,c=null;chrome.storage.sync.get("amazonRegion",function(a){a&&a.amazonRegion&&(c=a.amazonRegion);"complete"===document.readyState||"interactive"===document.readyState?e():document.addEventListener("DOMContentLoaded",
e,!1)})})();