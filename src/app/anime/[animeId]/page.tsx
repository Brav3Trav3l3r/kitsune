export default function Anime({ params }: { params: { animeId: string } }) {
  return <div>{params.animeId}</div>;
}
