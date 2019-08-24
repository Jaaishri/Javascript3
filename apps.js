'use strict';
{
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'one_flew_over_cuckoos_nest',
    'pride_and_prejudice',
    'the_silence_of_lambs',
    'black_cat',
    'the_great_fire_of_london',
    'bridget_jones_diary',
    'sun_also_rises',
    'what_if',
    'alive',
  ];



  const imgs = {
    harry_potter_chamber_secrets: 'imgs1.jpg',
    one_flew_over_cuckoos_nest: 'imgs2.jpg',
    pride_and_prejudice: 'imgs3.jpg',
    the_silence_of_lambs: 'imgs4.jpg',
    black_cat: 'imgs5.jpg',
    the_great_fire_of_london: 'imgs6.jpg',
    bridget_jones_diary: 'imgs7.jpg',
    sun_also_rises: 'imgs8.jpg',
    what_if: 'imgs9.jpg',
    alive: 'imgs10.jpg',

  }

  const books = {
    harry_potter_chamber_secrets: {
      title: 'Harry potter Chamber of secrets ',
      author: 'J.K. Rowling',
      language: 'English',

    },
    one_flew_over_cuckoos_nest: {
      title: "One Flew Over the Cuckoo's Nest",
      author: 'Ken Kesey',
      language: 'English',
    },
    pride_and_prejudice: {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      language: 'English',
    },
    the_silence_of_lambs: {
      title: 'The Silence of the Lambs',
      author: 'Thomas Harris',
      language: 'English',
    },
    black_cat: {
      title: 'The Black Cat ',
      author: 'Edgar Allan Poe',
      language: 'English ',
    },
    the_great_fire_of_london: {
      title: 'The Great Fire of London',
      author: 'Peter Ackroyd',
      language: 'English',
    },
    bridget_jones_diary: {
      title: 'Bridget Jones Diary',
      author: 'Jon Krakauer',
      language: 'English',
    },
    sun_also_rises : {
      title: ' The Sun Also Rises',
      author: 'Ernest Hemingway',
      language: 'English',
    },
    what_if: {
      title: " Alice's Adventures in Wonderland",
      author: 'Lewis Carroll',
      language: 'English',
    },
    alive: {
      title: 'Alive ',
      author: 'Piers Paul Read',
      language: 'English',
    }

  };

  // // Replace with your own code
  // console.log(books);
  const array = bookTitles.length;

  function myBooksList() {
    let main = document.getElementById('content');
    let list = document.createElement('ul');
    main.appendChild(list);

    for (let i = 0; i < array; i++) {
      let listChild = document.createElement('li');
      list.appendChild(listChild);

      let text = document.createTextNode(' ' + Object.values(books)[i].title);
      let h1 = document.createElement('h1');
      listChild.appendChild(h1);
      h1.appendChild(text);

      let text2 = document.createTextNode('Author:  ' + Object.values(books)[i].author);
      let h2 = document.createElement('h2');
      listChild.appendChild(h2);
      h2.appendChild(text2);

      let text3 = document.createTextNode('Language: ' + Object.values(books)[i].language);
      let anotherH2 = document.createElement('h2');
      listChild.appendChild(anotherH2);
      anotherH2.appendChild(text3);

      let covers = document.createElement('img');
      listChild.appendChild(covers);
      covers.setAttribute('src', Object.values(imgs)[i]);


    }
  }
  myBooksList();


}

