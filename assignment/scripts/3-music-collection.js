console.log('***** Music Collection *****');
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  const album = {
    collection: collection,
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(album);
  return album;
}
console.log(addToCollection(myCollection, 'Badlands', 'Halsey', 2015));
console.log(addToCollection(myCollection, 'ANONYMOUS', 'blackbear', 2019));
console.log(
  addToCollection(myCollection, 'Roll the Bones', 'Shakey Graves', 2011)
);
console.log(addToCollection(myCollection, 'Funhouse', 'Pink', 2008));
console.log(addToCollection(myCollection, 'Purgatory', 'Tyler Childers', 2017));
console.log(
  addToCollection(myCollection, 'Happier Than Ever', 'Billie Eilish', 2021)
);
console.log(
  addToCollection(myCollection, 'Country Squire', 'Tyler Childers', 2019)
);
console.log(
  addToCollection(myCollection, 'digital druglord', 'blackbear', 2017)
);

console.log(myCollection);

function showCollection(collection) {
  for (i = 0; i < collection.length; i++) {
    console.log(
      `${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`
    );
  }
}
showCollection(myCollection);

function findByArtist(collection, artist) {
  let matches = [];
  for (i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      matches.push(collection[i]);
    }
  }
  return matches;
}

console.log(findByArtist(myCollection, 'Halsey'));
console.log(findByArtist(myCollection, 'blackbear'));

// end required goals

// begin stretch goals

let searchCriteria = { artist: 'blackbear', year: 2019 };
function search(collection, searchCriteria) {
  let newCollection = [];
  if (
    !searchCriteria ||
    Object.keys(searchCriteria).length === 0 ||
    !searchCriteria.artist ||
    !searchCriteria.year
  ) {
    return collection;
  }
  for (i = 0; i < collection.length; i++) {
    if (
      collection[i].artist === searchCriteria.artist &&
      collection[i].yearPublished === searchCriteria.year
    ) {
      newCollection.push(collection[i]);
    }
  }
  return newCollection;
}

console.log(search(myCollection, searchCriteria));

/*
let tracks0 = [{name: ['Drive', 'Castle', 'Ghost']}, {duration: ['4:19', '4:38', '2:34']}];
let tracks1 = [{name: ['PINK ROLEX', 'MAKE A MESS', 'CHANGES'] }, {duration: ['2:17', '2:40', '2:34']}];
let tracks2 = [{name: ['Unlucky Sin', 'Georgia Moon', 'Built to Roam']}, {duration: ['3:18', '2:43', '3:11']}];
let tracks3 = [{name: ['So What', 'Sober', 'Crystal Ball']}, {duration: ['3:35', '4:12', '3:26']}];
let tracks4 = [{name: ['I Swear', 'Tattoos', 'Whitehouse Road']}, {duration: ['3:21', '3:23', '4:41']}];
let tracks5 = [{name: ['Getting Older', 'Oxytocin', 'Lost Cause']}, {duration: ['4:04', '3:30', '3:32']}];
let tracks6 = [{name: ['Creeker', 'House Fire', 'Peace of Mind']}, {duration: ['5:01', '3:52', '4:42']}];
let tracks7 = [{name: ['wish u the best', 'double', 'moodz']}, {duration: ['2:34', '3:00', '3:41']}];

Obj['tracks'].myCollection[0].push(tracks0);
console.log(myCollection[0]);
myCollection[1].push(tracks1);
myCollection[2].push(tracks2);
myCollection[3].push(tracks3);
myCollection[4].push(tracks4);
myCollection[5].push(tracks5);
myCollection[6].push(tracks6);
myCollection[7].push(tracks7);
*/

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection:
      typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  };
} catch (e) {
  // Do nothing
}
