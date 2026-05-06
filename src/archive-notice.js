(function () {
  "use strict";

  const STORAGE_KEY = "comparteix_archive_notice_seen";

  const topNotice = document.createElement("div");
  topNotice.id = "top-notice";
  topNotice.innerHTML = `
        <div class="content">
            Atenció! Esteu visitant una còpia estàtica de Comparteix.net, podeu obtenir més informació <a id="show-info">ací</a>.
        </div>
    `;

  const dialog = document.createElement("dialog");
  dialog.id = "archive-dialog";
  dialog.innerHTML = `
        <button class="close-btn" aria-label="Tancar">&times;</button>
        <h4>Companys i companyes,</h4>
        <p>Després de nou anys en línia, vull anunciar-vos <strong>el tancament</strong> d'aquest lloc web. La decisió no ha estat gens fàcil.</p>
        <p>La principal raó per al tancament és que la web funciona amb una <strong>tecnologia obsoleta</strong> i necessita molt d'amor per a poder sobreviure. El codi font actual està <strong>ple de forats i és un perill potencial</strong> tant per al servidor com per a les usuàries. Reparar-lo i actualitzar-lo costaria moltíssimes hores de feina, i degut a la pèrdua d'interès personal, m'ha paregut que era més sensat tancar la web.</p>
        <p>Totes les pàgines que hi ha a comparteix sobreviuran en forma de pàgina estàtica, de manera que deixaran de ser un perill però continuaran essent accessibles a Internet.</p>
        <p>Si esteu interessades en la base de dades, o el codi font de comparteix, podeu descarregar-los des dels següent enllaços:</p>
        <ul>
            <li><a href='https://db.tt/ssYzYvTJ' rel='nofollow'>comparteix.sql.xz</a>, 3.11M md5:285b6c6509fd9f1710fd8980bacc84a1</li>
            <li><a href='https://db.tt/ewXCCwmt' rel='nofollow'>comparteix_src.tar.xz</a>, 118.87M md5:df8bd9853d8643e53a26f89b41b89a55</li>
        </ul>
        <p>Torne a remarcar que aquest codi font és extremadament insegur, <strong>per favor, no el feu servir en un servidor públic!</strong></p>
        <p>Podeu contactar amb mi a l'adreça de correu <a href='mailto:esroyo@gmail.com'><strong>esroyo@gmail.com</strong></a>.</p>
        <p>Gràcies per a haver estat amb nosaltres tot este temps. Rebeu un cordial salut.</p>
        <div class="signature">
            --simkin, webmaster de comparteix<br>
            Castelló de la Plana, 18 de novembre de 2013
        </div>
    `;

  function init() {
    document.body.insertBefore(topNotice, document.body.firstChild);
    document.body.appendChild(dialog);

    if (!localStorage.getItem(STORAGE_KEY)) {
      dialog.showModal();
      localStorage.setItem(STORAGE_KEY, "true");
    }

    document.getElementById("show-info").addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        dialog.showModal();
      },
    );

    dialog.querySelector(".close-btn").addEventListener("click", function () {
      dialog.close();
    });

    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) {
        dialog.close();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
