import {
  ALL_ORIGINS,
  ITUNES_PODCAST_LOOKUP,
  ITUNES_PODCAST_TOP,
} from "@/constants/ItunesPodcastApi";
import { TopPodcast } from "../types/ItunesTopPodcasts.types";
import { PodcastApiResponse } from "../types/ItunesPodcast.types";

/**
 * Fetches the top podcasts from the iTunes API
 */
export const fetchTopPodcasts = async (
  limit: number = 100,
): Promise<TopPodcast> => {
  const response = await fetch(
    ITUNES_PODCAST_TOP.replace("::limit::", limit.toString()),
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json() as Promise<TopPodcast>;
};

/**
 * Fetches a single podcast by its id
 */
export const fetchPodcast = async (id: string): Promise<PodcastApiResponse> => {
  const itunesUrl = ITUNES_PODCAST_LOOKUP.replace("::id::", id);
  const response = await fetch(ALL_ORIGINS + encodeURIComponent(itunesUrl));
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const json = await response.json();
  return JSON.parse(json.contents);
};
