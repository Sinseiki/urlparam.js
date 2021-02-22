function urlparam(){
  let _paramPart = '';

  if(location.href.indexOf('?') > 0){
    _paramPart = location.href.substr(location.href.indexOf('?')+1);
  };

  const _paramArray = _paramPart.split('&');

  for(const item of _paramArray){
    const _aParam = item.split('=');
    window[_aParam[0]] = _aParam[1];
  };
}

urlparam();