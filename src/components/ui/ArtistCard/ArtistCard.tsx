import Image from "next/image";
import LinkWrapper from "../LinkWrapper/LinkWrapper";
import { ArtistInfoEntry } from "@/types/ItunesPodcastArtist.types";

/**
 * Displays the artist card with the podcast artwork, name, and description
 */
const ArtistCard: React.FC<{ info: ArtistInfoEntry; podcastLink?: string }> = ({
  info,
  podcastLink,
}) => {
  return (
    <div className="box h-min w-72">
      <div className="border-b p-4">
        <LinkWrapper href={podcastLink}>
          <Image
            className="aspect-square w-60"
            width={300}
            height={300}
            src={info.artworkUrl600}
            alt={info.artistName}
            priority
            unoptimized
          />
        </LinkWrapper>
      </div>

      <div className="border-b p-[1rem_.5rem] text-sm">
        <LinkWrapper href={podcastLink}>
          <h1 className="font-bold">{info.collectionName}</h1>
          <h2 className="font-light italic">by {info.artistName}</h2>
        </LinkWrapper>
      </div>

      <div className="flex flex-col gap-2 overflow-hidden pb-4 pt-4 text-sm">
        <p className="font-semibold">Description:</p>
        <p className="font-light italic">{info.summary.label}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
