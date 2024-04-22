import { PodcastEpisode } from "@/types/ItunesPodcast.types";
import { formatDate, formatTime } from "@/utils/formatDates";
import Link from "next/link";

type EpisodeListProps = {
  episodes: PodcastEpisode[];
  baseUrl: string;
};

/**
 * Displays the list of episodes for a podcast
 */
const EpisodeList: React.FC<EpisodeListProps> = ({ baseUrl, episodes }) => {
  return (
    <>
      <p className="box mb-6 text-2xl font-bold">Episodes: {episodes.length}</p>
      <table className="box min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">Title</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((episode) => {
            return (
              <tr
                key={episode.episodeUrl}
                className="odd:bg-gray-100 even:bg-white"
              >
                <td className="px-4 py-3 text-left">
                  <Link
                    className="text-blue-500 hover:underline"
                    href={`${baseUrl}/episode/${episode.trackId}`}
                  >
                    {episode.trackName}
                  </Link>
                </td>
                <td className="px-4 py-3 text-left">
                  {formatDate(episode.releaseDate)}
                </td>
                <td className="px-4 py-3 text-left">
                  {formatTime(episode.trackTimeMillis)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default EpisodeList;
