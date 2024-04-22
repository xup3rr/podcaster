import PodcastCard from "@/components/ui/PodcastCard/PodcastCard";
import { Entry } from "@/types/ItunesTopPodcasts.types";

type PodcastListProps = {
  entries?: Entry[];
};

/**
 * A list of podcasts
 */
const PodcastList: React.FC<PodcastListProps> = ({ entries }) => {
  if (entries?.length === 0)
    return (
      <div className="text-center">
        <h1>No podcasts found</h1>
      </div>
    );

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-28 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {entries?.map((entry) => (
        <PodcastCard key={entry.id.attributes["im:id"]} entry={entry} />
      ))}
    </div>
  );
};

export default PodcastList;
