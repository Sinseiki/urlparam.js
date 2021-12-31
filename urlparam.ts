function urlparam(params?:string[]|string){
  if(location.href.indexOf('?') > 0){
    const _paramPart = location.href.substring(location.href.indexOf('?')+1);
    const _paramArray = _paramPart.split('&');
    if(typeof(params) === 'undefined'){  
      for(const item of _paramArray){
        const _aParam = item.split('=');
        window[_aParam[0]] = _aParam[1];
      };
    } else if (typeof(params) === 'string'){
      for(const item of _paramArray){
        const _aParam = item.split('=');
        if(params === _aParam[0]){
          window[_aParam[0]] = _aParam[1];
        }
      };
    } else if (typeof(params) === 'object'){
      for(const item of _paramArray){
        const _aParam = item.split('=');
        for(const paramsItem of params){
          if(_aParam[0] === paramsItem){
            window[_aParam[0]] = _aParam[1];
          }
        }
      };
    }
  };
}