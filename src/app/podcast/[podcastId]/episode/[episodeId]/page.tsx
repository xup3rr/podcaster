"use client";

import { fetchPodcast, fetchTopPodcasts } from "@/utils/fetchItunesPodcasts";
import { useQueries } from "@tanstack/react-query";
import ArtistCard from "@/components/ui/ArtistCard/ArtistCard";
import { ArtistInfo, PodcastEpisode } from "@/types/ItunesPodcast.types";
import { Entry } from "@/types/ItunesTopPodcasts.types";
import EpisodeDetail from "@/components/ui/EpisodeDetail/EpisodeDetail";
import { ArtistInfoEntry } from "@/types/ItunesPodcastArtist.types";

/**
 * This page displays a podcast episode details
 */
const EpisodePage = ({
  params: { podcastId, episodeId },
}: {
  params: { podcastId: string; episodeId: string };
}) => {
  const [
    { data: data_topPodcast, error: error_topPodcast },
    { data: data_podcast, error: error_podcast },
  ] = useQueries({
    queries: [
      {
        queryKey: ["topPodcasts"],
        queryFn: () => fetchTopPodcasts(),
      },
      {
        queryKey: ["podcast", podcastId],
        queryFn: () => fetchPodcast(podcastId),
      },
    ],
  });

  if (error_podcast || error_topPodcast)
    return (
      <div>Error: {error_podcast?.message || error_topPodcast?.message}</div>
    );

  if (!data_podcast || !data_topPodcast) return null;

  // split the results into the artist info and the episodes
  const artistInfo = data_podcast.results[0] as ArtistInfo;
  const episodes = data_podcast.results.slice(1) as PodcastEpisode[];

  // find the artist entry by the podcastId
  const artistEntry = data_topPodcast.feed.entry.find(
    (entry) => entry.id.attributes["im:id"] === podcastId,
  ) as Entry;

  // find the episode by the episodeId
  const episode = episodes.find(
    (episode) => episode.trackId === Number(episodeId),
  ) as PodcastEpisode;

  const artistInfoFeed: ArtistInfoEntry = { ...artistInfo, ...artistEntry };

  return (
    <div className="flex gap-x-6 px-4 md:gap-x-16">
      <ArtistCard info={artistInfoFeed} podcastLink={`/podcast/${podcastId}`} />
      <div className="flex-1">
        <EpisodeDetail episode={episode} />
      </div>
    </div>
  );
};

export default EpisodePage;
