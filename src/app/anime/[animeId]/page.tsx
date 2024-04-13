import Container from "@/app/_components/container";

export default function Anime({ params }: { params: { animeId: string } }) {
  return (
    <div>
      <Container>{params.animeId}</Container>
    </div>
  );
}
