var Searcher = "https://cn.bing.com/search?q=";

function search() {
    if (document.getElementById("search_input").value != "") {
        window.location.href = Searcher + document.getElementById("search_input").value;
        document.getElementById("search_input").value = "";
    }
    return false;
}

function trueValue(){
    var change = document.getElementById("seletValue");
    if(change.value == "Bing"){
        Searcher = "https://cn.bing.com/search?q=";
    }
    else if(change.value == "百度"){
        Searcher = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=";
    }
    else if(change.value == "360"){
        Searcher = "https://www.so.com/s?ie=utf-8&fr=none&src=home_none&ssid=&nlpv=basesc&q=";
    }
    return false;
}

function showinfo(){
    window.open("Infomation.html");
}