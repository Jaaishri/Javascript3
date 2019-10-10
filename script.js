'use strict'




{

    function createAndAppend(name, parent, options = {}) {
        const elem = document.createElement(name);

        parent.appendChild(elem);
        Object.keys(options).forEach(key => {

            const value = options[key];

            if (key === 'text') {

                elem.textContent = value;
            } else {
                elem.setAttribute(key, value);
            }
        });
        return elem;
    }

    function collectRepo(url) {
        fetch(url)
            .then((resp) => resp.json())
            .then(data => {
                const root = document.getElementById('repo-select');

                for (let index = 0; index < data.length; index++) {

                    const repoName = JSON.parse(JSON.stringify(data[index].name));

                    createAndAppend('option', root, {
                        text: repoName
                    });

                }

                const showRepositoriesList = () => {
                    const summary = document.getElementById('repo-select');
                    const columnright = document.getElementById('column-right');
                    const columnleft = document.getElementById('column-left');
                    const repolist = document.getElementById('repo-column');
                    const right = document.getElementById('right');
                    const left = document.getElementById('left');
                    const center = document.getElementById('center');
                    const container = document.getElementById('container');
                    const link = document.getElementById('link');
                    summary.addEventListener('change', () => {
                        for (let index = 0; index < data.length; index++) {
                            if (data[index].name === summary.value) {

                                left.innerHTML = '';
                                center.innerHTML = '';
                                right.innerHTML = '';
                                columnleft.innerHTML = '';
                                columnright.innerHTML = '';

                                const link = document.createElement('a');
                                columnright.appendChild(link);


                                createAndAppend('h3', columnleft, {
                                    text: 'name: '

                                });
                                createAndAppend('h3', columnleft, {
                                    text: '   description: '

                                });
                                createAndAppend('h3', columnleft, {
                                    text: 'forks: '

                                });
                                createAndAppend('h3', columnleft, {
                                    text: '  updated_at: '

                                });
                                createAndAppend('a', columnright, {
                                    text: link

                                });
                                link.setAttribute('href', data[index].html_url);
                                link.setAttribute('target', '_blank')
                                link.innerHTML = summary.value;



                                createAndAppend('p', columnright, {
                                    text: data[index].description
                                });
                                createAndAppend('p', columnright, {
                                    text: data[index].forks
                                });
                                createAndAppend('p', columnright, {
                                    text: data[index].updated_at
                                });

                                fetch(data[index].contributors_url)
                                    .then((resp2) => resp2.json())
                                    .then(data2 => {

                                        for (let item = 0; item < data2.length; item++) {



                                            const image = document.createElement('img');
                                            image.setAttribute('src', data2[item].avatar_url)
                                            left.appendChild(image);

                                            createAndAppend('p', center, {
                                                text: data2[item].login
                                            });
                                            createAndAppend('p', right, {
                                                text: data2[item].contributions,
                                            });



                                        }

                                    });




                            }


                        }

                    });
                };
                return showRepositoriesList();


            });
    }

    const REPO_URL = 'https://api.github.com/orgs/foocoding/repos?per_page=100';

    collectRepo(REPO_URL);
}