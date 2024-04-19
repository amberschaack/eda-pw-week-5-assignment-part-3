console.log('***** Music Collection *****');
// Safe Zone -- Write code below this line

let myCollection = [];

const badlandsTracks = [
  { number: 1, name: 'Drive', duration: '4:19' },
  { number: 2, name: 'Castle', duration: '4:38' },
  { number: 3, name: 'Ghost', duration: '2:34' },
];

const anonymousTracks = [
  { number: 1, name: 'PINK ROLEX', duration: '4:19' },
  { number: 2, name: 'MAKE A MESS', duration: '4:38' },
  { number: 3, name: 'CHANGES', duration: '2:34' },
];

const rollTracks = [
  { number: 1, name: 'Unlucky Sin', duration: '4:19' },
  { number: 2, name: 'Georgia Moon', duration: '4:38' },
  { number: 3, name: 'Built to Roam', duration: '2:34' },
];

const funhouseTracks = [
  { number: 1, name: 'So What', duration: '4:19' },
  { number: 2, name: 'Sober', duration: '4:38' },
  { number: 3, name: 'Crystal Ball', duration: '2:34' },
];

const purgatoryTracks = [
  { number: 1, name: 'I Swear', duration: '4:19' },
  { number: 2, name: 'Tattoos', duration: '4:38' },
  { number: 3, name: 'Whitehouse Road', duration: '2:34' },
];

const happierTracks = [
  { number: 1, name: 'Getting Older', duration: '4:19' },
  { number: 2, name: 'Oxytocin', duration: '4:38' },
  { number: 3, name: 'Lost Cause', duration: '2:34' },
];

const countryTracks = [
  { number: 1, name: 'House Fire', duration: '4:19' },
  { number: 2, name: 'Creeker', duration: '4:38' },
  { number: 3, name: 'Peace of Mind', duration: '2:34' },
];

const digitalTracks = [
  { number: 1, name: 'wish u the best', duration: '4:19' },
  { number: 2, name: 'double', duration: '4:38' },
  { number: 3, name: 'moodz', duration: '2:34' },
];

function addToCollection(collection, title, artist, yearPublished) {
  const album = {
    collection,
    title,
    artist,
    yearPublished,
  };
  collection.push(album);
  return album;
}

console.log(addToCollection(myCollection, 'Badlands', 'Halsey', 2015));
console.log(addToCollection(myCollection, 'ANONYMOUS', 'blackbear', 2019));
console.log(
  addToCollection(myCollection, 'Roll the Bones', 'Shakey Graves', 2011)
);
console.log(
  addToCollection(myCollection, 'Funhouse', 'Pink', 2008, funhouseTracks)
);
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

// extra stretchy addToCollection
/*
function addToCollection(collection, title, artist, yearPublished, tracks) {
  const album = {
    collection: collection,
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks,
  };
  collection.push(album);
  return album;
}

console.log(
  addToCollection(myCollection, 'Badlands', 'Halsey', 2015, badlandsTracks)
);
console.log(
  addToCollection(myCollection, 'ANONYMOUS', 'blackbear', 2019, anonymousTracks)
);
console.log(
  addToCollection(
    myCollection,
    'Roll the Bones',
    'Shakey Graves',
    2011,
    rollTracks
  )
);
console.log(
  addToCollection(myCollection, 'Funhouse', 'Pink', 2008, funhouseTracks)
);
console.log(
  addToCollection(
    myCollection,
    'Purgatory',
    'Tyler Childers',
    2017,
    purgatoryTracks
  )
);
console.log(
  addToCollection(
    myCollection,
    'Happier Than Ever',
    'Billie Eilish',
    2021,
    happierTracks
  )
);
console.log(
  addToCollection(
    myCollection,
    'Country Squire',
    'Tyler Childers',
    2019,
    countryTracks
  )
);
console.log(
  addToCollection(
    myCollection,
    'digital druglord',
    'blackbear',
    2017,
    digitalTracks
  )
);

console.log(myCollection);
*/

function showCollection(collection) {
  for (i = 0; i < collection.length; i++) {
    console.log(
      `${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`
    );
  }
}
showCollection(myCollection);

// extra stretchy showCollection
/*
function showCollection(collection) {
  for (i = 0; i < collection.length; i++) {
    console.log(
      `${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`
    );
    for (let track of collection[i].tracks) {
      console.log(`\t\t${track.number}. ${track.name}: ${track.duration}`);
    }
  }
}
showCollection(myCollection);
*/

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

// extra stretchy searchCriteria

/*
let searchCriteria = { artist: 'blackbear', year: 2017, track: 'moodz' };
function search(collection, searchCriteria) {
  for (i = 0; i < collection.length; i++) {
    console.log(
      `${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`
    );
    for (let track of collection[i].tracks) {
      // console.log(track);
      if (track.name === searchCriteria.track) {
        return track.name;
      }
    }
  }
}

console.log(search(myCollection, searchCriteria));
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
