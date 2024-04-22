export type PodcastApiResponse = {
  resultCount: number;
  results: Array<ArtistInfo | PodcastEpisode>;
};

export type ArtistInfo = {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds: string[];
  genres: string[];
};

export type PodcastEpisode = {
  country: string;
  collectionViewUrl: string;
  trackTimeMillis: number;
  artworkUrl600: string;
  previewUrl: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  releaseDate: string;
  artistIds: number[];
  trackId: number;
  trackName: string;
  shortDescription: string;
  feedUrl: string;
  genres: Genre[];
  episodeGuid: string;
  description: string;
  trackViewUrl: string;
  artworkUrl60: string;
  artistViewUrl: string;
  contentAdvisoryRating: string;
  episodeUrl: string;
  artworkUrl160: string;
  episodeFileExtension: string;
  episodeContentType: string;
  kind: string;
  wrapperType: string;
};

export type Genre = {
  name: string;
  id: string;
};
