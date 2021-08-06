chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        //contentscript.jsにlocal strogeを返す
        if (request.name == "get") {
            var systemid_list = localStorage["pref"];
            var prefName = localStorage["prefName"];
            var url_pc = localStorage["url_pc"];
            var address = localStorage["address"];
            var systemid_list02 = localStorage["pref02"];
            var prefName02 = localStorage["prefName02"];
            var url_pc02 = localStorage["url_pc02"];
            var address02 = localStorage["address02"];
            var library = localStorage["library"];
            sendResponse({
                pref: systemid_list,
                prefName: prefName,
                url_pc: url_pc,
                address: address,
                pref02: systemid_list02,
                prefName02: prefName02,
                url_pc02: url_pc02,
                address02: address02,
                library: library
            });
        }
    }
);

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === 'fetchCalil') {
        var params = new URLSearchParams();
        params.set('appkey', message.appkey);
        params.set('isbn', message.isbn.replace(/[^0-9]/g, ''));
        params.set('systemid', message.systemid);
        params.set('format', message.format);
        params.set('callback', message.callback);
        if (message.session != null) {
            params.set('session', message.session);
        }
        var url = "https://api.calil.jp/check?" + params.toString();
        fetch(url, {
            method: 'GET',
        }).then(function(response) {
            return response.json();
        }).then(function(json) {
            chrome.tabs.sendMessage(sender.tab.id, json);
            return false;
        });
    }

    return true;
});