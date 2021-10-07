/* eslint-disable */

'use strict';

{
  function fetchJSON(url, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onload = () => {
      if (xhr.status < 400) {
        cb(null, xhr.response);
      } else {
        cb(new Error(`Network error: ${xhr.status} - ${xhr.statusText}`));
      }
    };
    xhr.onerror = () => cb(new Error('Network request failed'));
    xhr.send();
  }

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

  function repoCollect(url) {
    fetchJSON(url, (err, data) => {
      const root = document.getElementById('repo-select');

      for (let index = 0; index < data.length; index++) {
        if (err) {
          createAndAppend('div', root, {
            text: err.message,
            class: 'alert-error'
          });
        } else {
          const repoName = JSON.parse(JSON.stringify(data[index].name));

          createAndAppend('option', root, {
            text: repoName
          });
        }
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
          left.innerHTML = '';
          center.innerHTML = '';
          right.innerHTML = '';
          columnleft.innerHTML='';
          columnright.innerHTML='';


          for (let index = 0; index < data.length; index++) {
            if (data[index].name === summary.value) {

              //link.setAttribute('href', data[index].html_url);
              //link.innerHTML = summary.value;
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


              createAndAppend('p', columnright, {
                text: summary.value

              });
              createAndAppend('p', columnright, {
                text: data[index].description
              });
              createAndAppend('p', columnright, {
                text: data[index].forks
              });
              createAndAppend('p', columnright, {
                text: data[index].updated_at
              });

              fetchJSON(data[index].contributors_url, (err2, data2) => {

                for (let item = 0; item < data2.length; item++) {

                  if (err2) {
                    console.log('hello');
                  } else {


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

  repoCollect(REPO_URL);

  
}
