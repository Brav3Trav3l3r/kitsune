import Link from "next/link";
import { BsDiscord, BsReddit } from "react-icons/bs";
import Container from "./container";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground/50 mt-20 p-10">
      <Container>
        <div className="flex items-center flex-col gap-4">
          <Link className="" href="/">
            <span className="sr-only">Home</span>
            <div className="w-28 h-28">
              <img
                src={"/image/logo.png"}
                alt="Kitsune logo"
                className="h-full w-full object-contain"
              />
            </div>
          </Link>

          <div className="flex gap-4">
            <BsDiscord size={20} />
            <BsReddit size={20} />
          </div>

          <div className="flex gap-6">
            <p>Terms of Service</p>
            <p>DMCA</p>
            <p>Contact</p>
            <p>Deletion Privacy</p>
            <p>Privacy Policy</p>
          </div>

          <p className="text-sm">
            Kitsune does not store any files on our server, we only linked to
            the media which is hosted on 3rd party services.
          </p>
        </div>
      </Container>
    </footer>
  );
}
