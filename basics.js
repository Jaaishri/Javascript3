let myBooks = ['One_flew_over_cuckoos_nest','how_far_are_we_unwilling_to_go','pride_and_prejudice','the_silence_of_lambs','black_cat','the_great_fire_of_london','the_right_chemistry','bridget_jones_diary','engineering_mathematics','harry_potter_chamber_secrets'];
console.log(myBooks);
 
//3
let myBooks = ['One_flew_over_cuckoos_nest','how_far_are_we_unwilling_to_go','pride_and_prejudice','the_silence_of_lambs','black_cat','the_great_fire_of_london','the_right_chemistry','bridget_jones_diary','engineering_mathematics','harry_potter_chamber_secrets'];
    var ul = document.createElement('ul');
		document.getElementById('myBookList').appendChild(ul);
      myBooks.forEach(function(name){
			var li = document.createElement('li');
			ul.appendChild(li);
			li.innerHTML += name;
		}); 
<div id="myBookList"></div>

/*One_flew_over_cuckoos_nest
how_far_are_we_unwilling_to_go
pride_and_prejudice
the_silence_of_lambs
black_cat
the_great_fire_of_london
the_right_chemistry
bridget_jones_diary
engineering_mathematics
harry_potter_chamber_secrets*/
