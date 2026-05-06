document.write('<link href="/mirror/avis.css" type="text/css" rel="stylesheet" />');
document.write('<script src="/mirror/jquery.min.js"></script>');
(function() {
var init = setInterval( function() {
    if (!window.jQuery) { return; }
    clearInterval(init);
    jQuery('body').prepend('<div id="top-avis"><div class="center_auto">Atenció! Esteu visitant una còpia estàtica de Comparteix.net, podeu obtenir més informació <a id="mes-info">ací</a>.</div></div>');
    jQuery('body').append("<div id='avis-navegants'><p>Companys i companyes,</p><p>Després de nou anys en línia, vull anunciar-vos <strong>el tancament</strong> d'aquest lloc web. La decisió no ha estat gens fàcil.</p><p>La principal raó per al tancament és que la web funciona amb una <strong>tecnologia obsoleta</strong> i necessita molt d'amor per a poder sobreviure. El codi font actual està <strong>ple de forats i és un perill potencial</strong> tant per al servidor com per a les usuàries. Reparar-lo i actualitzar-lo costaria moltíssimes hores de feina, i degut a la pèrdua d'interès personal, m'ha paregut que era més sensat tancar la web.</p><p>Totes les pàgines que hi ha a comparteix sobreviuran en forma de pàgina estàtica, de manera que deixaran de ser un perill però continuaran essent accessibles a Internet.</p><p>Si esteu interessades en la base de dades, o el codi font de comparteix, podeu descarregar-los des dels següent enllaços:</p><ul><li><a href='https://db.tt/ssYzYvTJ' rel='nofollow'>comparteix.sql.xz</a>, 3.11M md5:285b6c6509fd9f1710fd8980bacc84a1</li><li><a href='https://db.tt/ewXCCwmt' rel='nofollow'>comparteix_src.tar.xz</a>, 118.87M md5:df8bd9853d8643e53a26f89b41b89a55</li></ul><p>Torne a remarcar que aquest codi font és extremadament insegur, <strong>per favor, no el feu servir en un servidor públic!</strong></p><p>Podeu contactar amb mi a l'adreça de correu <a href='mailto:esroyo (a) gmail (punt) com'><strong>esroyo (a) gmail (punt) com</strong></a>.</p><p>Gràcies per a haver estat amb nosaltres tot este temps. Rebeu un cordial salut.</p><p style='text-align:right;'>--simkin, webmaster de comparteix<br />Castelló de la Plana, 18 de novembre de 2013</p></div>");
    $('#avis-navegants').firstVisitPopup({
        cookieName : 'comparteix',
        showAgainSelector: '#mes-info'
    });
}, 200);
}());
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-52026418-4', 'auto');
ga('send', 'pageview');
