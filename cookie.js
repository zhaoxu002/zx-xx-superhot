// cookie 操作
var cookie = {
  setCookie : function (key, value, expires, path, domain, secure) {
    var expires_string = "";
    if (expires !== undefined) {
      expires_string = ";expires="+expires.toUTCString();
    }

    var path_string = "";
    if (path !== undefined) {
      path_string = ";path="+path;
    }

    var domain_string = "";
    if (domain !== undefined) {
      domain_string = ";domain"+domain;
    }

    var secure_string = "";
    if (secure !== false) {
      secure_string = ";true";
    }

    document.cookie = key+"="+value+expires_string+path_string+domain_string+secure_string;
  },

  getCookie : function (key) {
    var cookie_list = document.cookie.split("; ");

    for (var i in cookie_list) {
      var cookie_item = cookie_list[i].split("=");
      if (cookie_item[0] === key) {
        return cookie_item[1];
      }
    }
  },

  deleteCookie : function (key, path) {
    var path_string = undefined;
    if (path !== undefined) {
      path_string = ";path="+path;
    }

    var date = new Date();
    date.setTime(date.getTime() - 1);

    setCookie(key, "", date, path_strings);
  }
}
