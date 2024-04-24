import { Entry } from "@/types/ItunesTopPodcasts.types";
import Image from "next/image";
import Link from "next/link";
import { useIsFetching } from "@tanstack/react-query";

type PodcastCardProps = {
  entry: Entry;
};

/**
 * Displays the podcast card with the podcast artwork, name, and artist
 */
const PodcastCard: React.FC<PodcastCardProps> = ({ entry }) => {
  const podcastId = entry.id.attributes["im:id"];

  const isFetching = useIsFetching({
    queryKey: ["podcast", podcastId],
  });

  return (
    <Link href={`/podcast/${podcastId}`}>
      <div className="box group h-full w-full hover:shadow-lg">
        <div className="relative flex flex-col items-center justify-center px-4 pb-4 pt-14">
          <div className="absolute -top-14 aspect-square w-28 rounded-full transition-all duration-300 ease-in-out group-hover:w-32 group-hover:-translate-y-2">
            {!!isFetching && (
              <div className="h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            )}
            <Image
              className="absolute top-0 rounded-full"
              width={Number(entry["im:image"][2].attributes.height)}
              height={Number(entry["im:image"][2].attributes.height)}
              src={entry["im:image"][2].label}
              alt={entry["im:name"].label}
              unoptimized
              priority
            />
          </div>
          <h3 className="mb-1 mt-2 font-bold">{entry["im:name"].label}</h3>
          <p className="text-sm">{entry["im:artist"].label}</p>
        </div>
      </div>
    </Link>
  );
};

export default PodcastCard;
