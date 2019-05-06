// 获取url的参数
export const queryString = () => {
  let _queryString: any;
  const _query = window.location.search.substr(1);
  const _vars = _query.split('&');
  _vars.forEach((v, i) => {
    const _pair = v.split('=');
    if (!_queryString.hasOwnProperty(_pair[0])) {
      _queryString[_pair[0]] = decodeURIComponent(_pair[1]);
    } else if (typeof _queryString[_pair[0]] === 'string') {
      const _arr = [_queryString[_pair[0]], decodeURIComponent(_pair[1])];
      _queryString[_pair[0]] = _arr;
    } else {
      _queryString[_pair[0]].push(decodeURIComponent(_pair[1]));
    }
  });
  return _queryString;
};

export const getCookie = (name: string) => {
  let str = '';
  if (name) {
    let cookies = document.cookie.split('; ');
    for (let value of cookies) {
      let name_array = value.split('=');
      if (name === name_array[0]) {
        str =  name_array[1];
        break;
      }
      continue;
    }
  }
  return str;
};
