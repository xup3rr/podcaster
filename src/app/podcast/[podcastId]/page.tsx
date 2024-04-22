"use client";

import { useQueries } from "@tanstack/react-query";
import { fetchPodcast, fetchTopPodcasts } from "@/utils/fetchItunesPodcasts";
import ArtistCard from "@/components/ui/ArtistCard/ArtistCard";
import EpisodeList from "@/components/ui/EpisodeList/EpisodeList";
import { Entry } from "@/types/ItunesTopPodcasts.types";
import { ArtistInfoEntry } from "@/types/ItunesPodcastArtist.types";
import { ArtistInfo, PodcastEpisode } from "@/types/ItunesPodcast.types";

/**
 * This page displays a podcast details and its episodes
 */
const PodcastPage = ({
  params: { podcastId },
}: {
  params: { podcastId: string };
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

  const artistInfoFeed: ArtistInfoEntry = { ...artistInfo, ...artistEntry };

  return (
    <div className="flex gap-x-6 px-4 md:gap-x-16">
      <ArtistCard info={artistInfoFeed} />
      <div className="flex-1">
        <EpisodeList baseUrl={`/podcast/${podcastId}`} episodes={episodes} />
      </div>
    </div>
  );
};

export default PodcastPage;
