var _paramPart = '';
if (location.href.indexOf('?') > 0) {
    _paramPart = location.href.substr(location.href.indexOf('?') + 1);
}
;
var _paramArray = _paramPart.split('&');
for (var _i = 0, _paramArray_1 = _paramArray; _i < _paramArray_1.length; _i++) {
    var item = _paramArray_1[_i];
    var _aParam = item.split('=');
    window[_aParam[0]] = _aParam[1];
}
;
