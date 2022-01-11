# urlparam.js
URLParam.js is a Javascript Plugin to use URL Parameters as Javascript Variables.

Download js file → <a id="raw-url" href="https://sinseiki.github.io/urlparam.js/urlparam.js" download target="_blank">urlparam.js</a>


https://sinseiki.github.io/urlparam.js
(You can see 2 examples on this page)

If you add parameters end of URL, you can use these as javascript variables.

Using this JS file, call parameter manually by using 'urlparam' function.



Getting a parameter → urlparam('a string parameter');

Getting parameters → urlparam(['string parameter', 'string parameter', 'string parameter', ...]);

Getting all parameters → urlparam();


<hr>
example

In this https://sinseiki.github.io/urlparam.js/index.html?a=1&b=abc

you can use variables "a='1'", "b='abc'" because of running 'urlparam()'
