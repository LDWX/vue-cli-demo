exports.install = function (Vue, options) {
  Vue.prototype.returnList = function (list) {
    if (Object.prototype.toString.call(list) !== "[object Array]") {
      return []
    } else {
      return list
    }
  }

  Vue.prototype.GetQueryString = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
      context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
  }

}
