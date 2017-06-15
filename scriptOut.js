//-------------------------------------------------------------------------
// Установка аккаунта
//-------------------------------------------------------------------------

/**
 * _gaq - аккаунт игрока
 * ga - google analytics
 * s - записи google
 * 
 * @var _gaq, 
 * @var ga, 
 * @var s;
 */

var _gaq = _gaq || [];

_gaq.push(['_setAccount', 'UA-46814492-2']);
_gaq.push(['_trackPageview']);
(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ?
            'https://ssl' : 'http://www') +
        '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
}) ();
