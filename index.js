class MusicStreamingApp {
  constructor() {
    this.songs = [];
    this.playlists = [];
    this.users = [];
  }

  addSong(song) {
    this.songs.push(song);
  }

  createPlaylist(name) {
    const playlist = new Playlist(name);
    this.playlists.push(playlist);
    return playlist;
  }

  addUser(user) {
    this.users.push(user);
  }

  getUser(username) {
    return this.users.find(user => user.username === username);
  }

  getSong(title) {
    return this.songs.find(song => song.title === title);
  }

  addToPlaylist(song, playlist) {
    playlist.addSong(song);
  }

  playSong(song) {
    console.log(`Now playing: ${song.title} - ${song.artist}`);
  }
}

class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
  }

  removeSong(song) {
    const index = this.songs.indexOf(song);
    if (index !== -1) {
      this.songs.splice(index, 1);
    }
  }
}

// 示例用法
const app = new MusicStreamingApp();

const song1 = new Song("Song 1", "Artist 1", "3:45");
const song2 = new Song("Song 2", "Artist 2", "4:20");
const song3 = new Song("Song 3", "Artist 3", "2:55");

app.addSong(song1);
app.addSong(song2);
app.addSong(song3);

const playlist1 = app.createPlaylist("My Playlist");
const playlist2 = app.createPlaylist("Favorites");

app.addToPlaylist(song1, playlist1);
app.addToPlaylist(song2, playlist1);
app.addToPlaylist(song3, playlist2);

app.playSong(song1);
