fetch('/noticias')
    .then(res => res.json())
    .then(data => {
        const noticiasForaDePauta = document.getElementById('left-panel');

        data.forEach(noticia => {
            const noticiaId = noticia["noticia_id"];
            const titulo = noticia["titulo_pt"];
            const resumo = noticia["resumo_pt"];
            const link = noticia["link"];
            const fonte = noticia["fonte"];
            const publicacao = noticia["publicacao"];

            const newsElem = document.createElement('div');
            newsElem.classList.add('news');
            newsElem.id = noticiaId;

            const tituloElem = document.createElement('h3');
            tituloElem.classList.add('titulo');
            tituloElem.textContent = titulo;
            newsElem.appendChild(tituloElem);

            const resumoElem = document.createElement('p');
            resumoElem.classList.add('resumo');
            resumoElem.textContent = resumo;
            newsElem.appendChild(resumoElem);

            const linkElem1 = document.createElement('p');
            const linkElem2 = document.createElement('a');
            linkElem1.classList.add('link');
            linkElem2.href = link;
            linkElem2.textContent = link;
            linkElem2.target = '_blank';
            linkElem1.appendChild(linkElem2);
            newsElem.appendChild(linkElem1);

            const fonteElem = document.createElement('p');
            fonteElem.classList.add('fonte');
            fonteElem.textContent = fonte;
            newsElem.appendChild(fonteElem);

            const publicacaoElem = document.createElement('p');
            publicacaoElem.classList.add('publicacao');
            publicacaoElem.textContent = publicacao;
            newsElem.appendChild(publicacaoElem);

            const buttonElem1 = document.createElement('button');
            const iconElem1 = document.createElement('i');
            iconElem1.setAttribute('data-lucide', 'circle-plus');
            buttonElem1.classList.add('button', 'add-remove');
            buttonElem1.onclick = function() { adiconarAPauta(noticiaId) };
            buttonElem1.appendChild(iconElem1);
            newsElem.appendChild(buttonElem1);

            const buttonElem2 = document.createElement('button');
            const iconElem2 = document.createElement('i');
            iconElem2.setAttribute('data-lucide', 'clipboard');
            buttonElem2.classList.add('button', 'clipboard');
            // buttonElem1.onclick = function() { adiconarAPauta(noticiaId) };
            buttonElem2.appendChild(iconElem2);
            newsElem.appendChild(buttonElem2);

            noticiasForaDePauta.appendChild(newsElem);
        });

        lucide.createIcons();
    })

function adiconarAPauta(noticiaId) {
    const noticia = document.getElementById(noticiaId);
    const button = noticia.querySelector('.add-remove');
    const iconElem = document.createElement('i');
    iconElem.setAttribute('data-lucide', 'circle-minus');
    button.replaceChildren(iconElem);
    button.onclick = function() { removerDaPauta(noticiaId); };
    document.getElementById('right-panel').appendChild(noticia);

    lucide.createIcons();
}

function removerDaPauta(noticiaId) {
    const noticia = document.getElementById(noticiaId);
    const button = noticia.querySelector('.add-remove');
    const iconElem = document.createElement('i');
    iconElem.setAttribute('data-lucide', 'circle-plus');
    button.replaceChildren(iconElem);
    button.onclick = function() { adiconarAPauta(noticiaId); };
    document.getElementById('left-panel').appendChild(noticia);

    lucide.createIcons();
}