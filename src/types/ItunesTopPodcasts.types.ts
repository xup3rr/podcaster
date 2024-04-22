export type TopPodcast = {
  feed: Feed;
};

export type Feed = {
  author: Author;
  entry: Entry[];
  updated: Label;
  rights: Label;
  title: Label;
  icon: Label;
  link: Link[];
  id: Label;
};

export type Author = {
  name: Label;
  uri: Label;
};

export type Label = {
  label: string;
};

export type Entry = {
  "im:name": Label;
  "im:image": IMImage[];
  summary: Label;
  "im:price": IMPrice;
  "im:contentType": IMContentType;
  rights?: Label;
  title: Label;
  link: Link;
  id: ID;
  "im:artist": IMArtist;
  category: Category;
  "im:releaseDate": IMReleaseDate;
};

export type Category = {
  attributes: CategoryAttributes;
};

export type CategoryAttributes = {
  "im:id": string;
  term: PurpleLabel;
  scheme: string;
  label: PurpleLabel;
};

export type PurpleLabel =
  | "Music"
  | "Music History"
  | "Music Commentary"
  | "Music Interviews";

export type ID = {
  label: string;
  attributes: IDAttributes;
};

export type IDAttributes = {
  "im:id": string;
};

export type IMArtist = {
  label: string;
  attributes?: IMArtistAttributes;
};

export type IMArtistAttributes = {
  href: string;
};

export type IMContentType = {
  attributes: IMContentTypeAttributes;
};

export type IMContentTypeAttributes = {
  term: "Podcast";
  label: "Podcast";
};

export type IMImage = {
  label: string;
  attributes: IMImageAttributes;
};

export type IMImageAttributes = {
  height: string;
};

export type IMPrice = {
  label: "Get";
  attributes: IMPriceAttributes;
};

export type IMPriceAttributes = {
  amount: string;
  currency: "USD";
};

export type IMReleaseDate = {
  label: string;
  attributes: Label;
};

export type Link = {
  attributes: LinkAttributes;
};

export type LinkAttributes = {
  rel: Rel;
  type?: "text/html";
  href: string;
};

export type Rel = "alternate" | "self";
