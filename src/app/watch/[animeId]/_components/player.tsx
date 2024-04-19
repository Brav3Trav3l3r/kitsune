import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

interface Source {
  src: string;
  type: "application/x-mpegurl" | "video/mp4";
}

export default function Player({
  sources,
  title,
}: {
  sources: Source[];
  title?: string;
}) {
  return (
    <div>
      <MediaPlayer title={title} src={sources}>
        <MediaProvider />
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
}
