jQuery(function($) {
    var progSrc; //画像パス
    var options_page;
    var apiKey;
    var session = null;
    var libraryDatas = new Array();
    var page_flg;
    var url = new Url();
    var prams = url.getUrlVars(); //パラメータ
    var urls = url.getUrlArray(); //URLs
    var libsBooks = {}; // 検索取得したデータ
    //保存された図書館情報
    var systemid;
    var prefName;
    var url_pc;
    var address;
    var systemid02;
    var prefName02;
    var url_pc02;
    var address02;
    var storage;

    // background.jsでAPIを検索するイベント
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        searchCalilCheck(message, message.continue, message.session);
	});

    // localstrogeに保存されたデータを取得する
    chrome.extension.sendRequest({
        name: "get"
    }, function(response) {
        // storage = modifyOldData(response);
        storage = response;
        init();
    });

    function init() {
        //画像パス
        progSrc = chrome.extension.getURL("images/ajax-loader.gif");
        options_page = chrome.extension.getURL("options.html");
        // APIキー
        if (Math.floor(Math.random() * 2) == 0) {
            apiKey = 'b9c13324e6420f8408f09cfc8925bc8a';
        } else {
            apiKey = 'a7dc4defc7b1eaaffdfcfb98d4138b60';
        }
        //ページ種類を判定
        for (var i = 0; i < urls.length; i++) {
            if (urls[i] == 'dp' || urls[i] == 'gp' || urls[i] == 'o') {
                page_flg = 'dp'; //詳細ページ
            } else if (urls[i] == 'wishlist') {
                page_flg = 'wishlist'; //お気に入りリスト
            }
        }
        //詳細、お気に入り以外なら終了
        if (page_flg == null) {
            return;
        }
        //図書館IDを入れる
        systemid = storage.pref;
        prefName = storage.prefName;
        url_pc = storage.url_pc;
        address = storage.address;
        systemid02 = storage.pref02;
        prefName02 = storage.prefName02;
        url_pc02 = storage.url_pc02;
        address02 = storage.address02;
        //図書館の配列作成
        libraryDatas = [
            [systemid, prefName],
            [systemid02, prefName02]
        ];

        main();
    }

    function main() {
        var prefName_str;
        //図書館2があればカンマ区切りに
        if (systemid02 != null) {
            systemid = systemid + ',' + systemid02;
        }
        //図書館2があれば名前連結
        if (prefName02 != null) {
            prefName_str = prefName + 'と' + prefName02;
        } else {
            prefName_str = prefName;
        }
        /**
         * 詳細ページの時
         */
        if (page_flg == 'dp') {
            //開いているamazon からISBN13を取得
            var ISBN13 = $("#detailBullets_feature_div").find("li:contains('ISBN-13')").text();

            //ISBNがなければ終了
            if (!ISBN13) {
                return;
            }
            ISBN13 = replaceAll(ISBN13, " ", "");
            ISBN13 = replaceAll(ISBN13, "ISBN-13", "");
            ISBN13 = replaceAll(ISBN13, ":", "");
            ISBN13 = replaceAll(ISBN13, "-", "");
            ISBN13 = replaceAll(ISBN13, "\n", "");
            var isbn_list = '';
            // //ISBN判定
            var pattern = /\d{13}/;
            if (pattern.test(ISBN13)) {
                //変数に代入
                isbn_list = ISBN13;
            } else {
                return;
            }

            //amazonにdiv追加
            var html = '<div id="output"><p id="libLead">この本が図書館にあるか検索<span class="calilName">by <a href="https://sonohon.com/" target="_blank">その本、図書館にあります。</a></span></p><div id="prog"><img src="' + progSrc + '" width="56" height="21" /><p>"' + prefName_str + '"から検索中</p></div><table id="disTable"></table></div>';
            if ($("#olpDivId").length > 0) {
                $("#olpDivId").after(html);
            } else if ($("#outer_postBodyPS").length > 0) {
                $("#outer_postBodyPS").after(html);
            } else {
                $("#MediaMatrix").after(html);
            }
            //図書館IDがセットされているかどうか
            if (systemid == null) {
                $('#prog img').fadeOut(function() {
                    $('#prog').html('<p class="optionLink">右上のアイコンから、利用する図書館を設定しください。</p>');
                });
                return;
            }
            //図書館API検索開始
            if (isbn_list != '') {
                searchCalil(systemid, isbn_list, session);
            }
        }
    }

    /* * *
     * 図書館API検索
     * * */

    function searchCalil(systemid, isbn_list, session) {
        //1回目の検索かどうか
        if (session == null) {
            var data = {
                type: 'fetchCalil',
                appkey: apiKey,
                isbn: isbn_list,
                systemid: systemid,
                format: 'json',
                callback: 'no',
                session: null,
                continue: 1,
            };
        } else {
            var data = {
                type: 'fetchCalil',
                appkey: apiKey,
                isbn: isbn_list,
                systemid: systemid,
                format: 'json',
                callback: 'no',
                session: session,
            };
        }
        chrome.runtime.sendMessage(data);
    }


    /**
     * リクエストの戻りをチェック
     */

    function searchCalilCheck(books, _continue, _session) {
        libsBooks = Object.assign(libsBooks, books);
        //検索できたなかった時はポーリング
        if (_continue == 1) {
            setTimeout(searchCalil(systemid, isbn_list, session), 2500);
        } else if (_continue == 0) {
            //検索できれば結果描画へ
            callback();
        }
    }

    /**
     * josnpのコールバック
     */
    function callback() {
        // console.log(libsBooks);
        /**
         * 詳細ページ
         */
        if (page_flg == 'dp') {
            //ローディングを消す
            $('#prog').fadeOut();
            // domを取得と描画
            for (var i in libsBooks.books) {
                var book = libsBooks.books[i];
                for (var n in book) {
                    var lib = book[n];

                    // 図書館名を取得
                    for (var i = 0; i < libraryDatas.length; i++) {
                        if (libraryDatas[i][0] == n) {
                            var libName = libraryDatas[i][1];
                        }
                    }
                    // 見出しのHTML
                    var html = '<tr><th colspan="2" class="tHead"><span id="reserveURL">「' + libName + '」の貸出状況';
                    if (Object.keys(lib.libkey).length != 0) {
                        html = html + '<a href="' + lib.reserveurl + '" target="_blank">予約する &gt;</a>';
                    }
                    html = html + '</span><td></tr>';
                    // HTMLを描画
                    if (Object.keys(lib.libkey).length != 0) {
                        for (var key in lib.libkey) {
                            //貸出可の時だけ色を変える
                            var libState = lib.libkey[key];
                            if (libState == "貸出可") {
                                var font_color = "#9a0000";
                            } else if (libState == "貸出中") {
                                var font_color = "#59a057";
                            } else if (libState == "蔵書あり") {
                                var font_color = "#9a0000";
                            } else {
                                var font_color = "#666";
                            }
                            html = html + '<tr><th>' + key + '：</th><td><b style="color: ' + font_color + '">' + libState + '</b><td></tr>';
                        }
                    } else {
                        html = html + '<tr><td colspan="2">この図書館からは検索されませんでした。<td></tr>';
                    }
                    // HTML出力
                    $('#disTable').append(html);
                }
            }

        }
    }

    /**
     * 文字列expressionの org を dest に置き換える
     */
    function replaceAll(expression, org, dest) {
        return expression.split(org).join(dest);
    }

    /**
     * スリープ
     */
    function sleep(time, callback) {
        setTimeout(callback, time);
    }

    /**
     * 過去データを移行する
     */
    function modifyOldData(response) {
        if (typeof response.pref !== 'undefined' || response.pref02 !== 'undefined') {
            localStorage.removeItem('library');
            var library = [{
                    "pref": response.pref,
                    "prefName": response.prefName,
                    "url_pc": response.url_pc,
                    "address": response.address
                },
                {
                    "pref": response.pref02,
                    "prefName": response.prefName02,
                    "url_pc": response.url_pc02,
                    "address": response.address02
                }
            ];
            localStorage.setItem("library", JSON.stringify(library));
            return library;
        }
        return response;
    }

    /**
     * Class Url
     */
    function Url() {
        //URLのパラメーター取得
        this.getUrlVars = function() {
            var vars = [],
                hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        }
        //URLをスラッシュ区切りで配列に
        this.getUrlArray = function() {
            var url = document.URL;
            url = url.split("http://").join(""); //http://を削除
            url = url.split('/');
            return url;
        }
    }

    /**
     * Class Cookie
     */
    function Cookie() {
        //プライベート
        var _deadtime = 24; //期限20時間
        //読み込み｜ex：http://blog.wonder-boys.net/?p=208
        this.get = function(value) {
            if (value) {
                var c_data = document.cookie + ";";
                c_data = unescape(c_data);
                var n_point = c_data.indexOf(value);
                var v_point = c_data.indexOf("=", n_point) + 1;
                var end_point = c_data.indexOf(";", n_point);
                if (n_point > -1) {
                    c_data = c_data.substring(v_point, end_point);
                    //alert("cookieは" + c_data + "です");
                    return c_data;
                }
            }
        }
        //書き込み
        this.set = function(cookie_name, value) {
            var ex = new Date();
            ex.setHours(ex.getHours() + _deadtime);
            ex = ex.toGMTString();
            var c = escape(cookie_name) + "=" + escape(value) + ";expires=" + ex;
            document.cookie = c;
        }
    }
});