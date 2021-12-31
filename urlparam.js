function urlparam(params) {
    if (location.href.indexOf('?') > 0) {
        var _paramPart = location.href.substring(location.href.indexOf('?') + 1);
        var _paramArray = _paramPart.split('&');
        if (typeof (params) === 'undefined') {
            for (var _i = 0, _paramArray_1 = _paramArray; _i < _paramArray_1.length; _i++) {
                var item = _paramArray_1[_i];
                var _aParam = item.split('=');
                window[_aParam[0]] = _aParam[1];
            }
            ;
        }
        else if (typeof (params) === 'string') {
            for (var _a = 0, _paramArray_2 = _paramArray; _a < _paramArray_2.length; _a++) {
                var item = _paramArray_2[_a];
                var _aParam = item.split('=');
                if (params === _aParam[0]) {
                    window[_aParam[0]] = _aParam[1];
                }
            }
            ;
        }
        else if (typeof (params) === 'object') {
            for (var _b = 0, _paramArray_3 = _paramArray; _b < _paramArray_3.length; _b++) {
                var item = _paramArray_3[_b];
                var _aParam = item.split('=');
                for (var _c = 0, params_1 = params; _c < params_1.length; _c++) {
                    var paramsItem = params_1[_c];
                    if (_aParam[0] === paramsItem) {
                        window[_aParam[0]] = _aParam[1];
                    }
                }
            }
            ;
        }
    }
    ;
}
