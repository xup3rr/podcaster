import { PodcastEpisode } from "@/types/ItunesPodcast.types";

/**
 * Displays the episode details with the episode name, description, and audio player
 */
const EpisodeDetail: React.FC<{ episode: PodcastEpisode }> = ({ episode }) => {
  const description = episode.description?.replace(/(?:\r\n|\r|\n)/g, "<br />");
  return (
    <div className="box flex flex-col gap-y-4">
      <h3 className="text-2xl font-bold">{episode.trackName}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <audio
        className="mt-4 w-full"
        controls
        autoPlay
        src={episode.episodeUrl}
      />
    </div>
  );
};

export default EpisodeDetail;
