"use client";

import PodcastList from "@/components/ui/PodcastList/PodcastList";
import SearchInput from "@/components/ui/SearchInput/SearchInput";
import { fetchTopPodcasts } from "@/utils/fetchItunesPodcasts";
import { Entry } from "@/types/ItunesTopPodcasts.types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

/**
 * The home page that displays and filter the top podcasts
 */
export default function Home() {
  const { data, error } = useQuery({
    queryKey: ["topPodcasts"],
    queryFn: () => fetchTopPodcasts(),
  });

  const [filteredEntries, setFilteredEntries] = useState<Entry[]>();

  useEffect(() => {
    if (data) setFilteredEntries(data?.feed.entry);
  }, [data]);

  const filterEntries = (searchTerm: string) => {
    setFilteredEntries(() =>
      data?.feed.entry?.filter((entry) => {
        return (
          entry["im:name"].label
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          entry["im:artist"].label
            .toLocaleLowerCase()
            .includes(searchTerm.toLowerCase())
        );
      }),
    );
  };

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="flex items-center justify-end gap-x-4">
        <span className="rounded-xl bg-blue-400 px-2 font-bold text-white">
          {filteredEntries?.length}
        </span>
        {filteredEntries && <SearchInput onChange={filterEntries} />}
      </div>
      <div className="mt-24">
        <PodcastList entries={filteredEntries} />
      </div>
    </>
  );
}
