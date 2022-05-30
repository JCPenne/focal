const library = {
  tracks: {
    t01: {
      id: 't01',
      name: 'Code Monkey',
      artist: 'Jonathan Coulton',
      album: 'Thing a Week Three',
    },
    t02: {
      id: 't02',
      name: 'Model View Controller',
      artist: 'James Dempsey',
      album: 'WWDC 2003',
    },
    t03: {
      id: 't03',
      name: 'Four Thirty-Three',
      artist: 'John Cage',
      album: 'Woodstock 1952',
    },
  },
  playlists: {
    p01: { id: 'p01', name: 'Coding Music', tracks: ['t01', 't02'] },
    p02: { id: 'p02', name: 'Other Playlist', tracks: ['t03'] },
  },
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function (array) {
  for (element of array) {
    return `${element}: ${library['playlists'][element]['name']} - ${library['playlists'][element]['tracks'].length} tracks`;
  }
};
//printPlaylists(['p01', 'p02']);

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function (playlist) {
  let result = '';
  const tracks = Object.values(library['playlists'][playlist]['tracks']);
  console.log(tracks);
  for (track of tracks) {
    const trackName = library['tracks'][track]['name'];
    const artist = library['tracks'][track]['artist'];
    const album = library['tracks'][track]['album'];
    result += `${track}: ${trackName} by ${artist} (${album}) \n `;
  }
  return result;
};
//printTracks(library);

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function (playlistId) {
  const playlist = printPlaylists(playlistId);
  const tracks = printTracks(playlistId);
  console.log(`${playlist} \n ${tracks}`);
};
//printPlaylist(['p02']);

// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
  const tracks = library['playlists'][playlistId]['tracks'];
  tracks.push(trackId);
  library['playlists'][playlistId]['tracks'].sort();
};
addTrackToPlaylist('t01', 'p02');

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// adds a track to the library
const addTrack = function (name, artist, album) {
  let id = generateUid();
  let trackArr = Object.keys(library['tracks']);
  let trackNum = trackArr.length + 1;
  let trackId = 't' + 0 + trackNum;

  library['tracks'][trackId] = {
    id: id,
    name: name,
    artist: artist,
    album: album,
  };
};
addTrack('Road To Nowhere', 'Jimmy Lynch', 'The All That');
// adds a playlist to the library
const addPlaylist = function (name) {
  let id = generateUid();
  let playlistArr = Object.keys(library['playlists']);
  let playlistNum = playlistArr.length + 1;
  let playlistId = 'p' + 0 + playlistNum;
  library['playlists'][playlistId] = {
    id: id,
    name: name,
    tracks: [],
  };
};
addPlaylist('Chill House');

console.log(library);
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {};
