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
