import Link from "next/link";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function VolumesOverview() {
  const router = useRouter();

  function handleRandomVolume() {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <div>
      <h1>Loard of the rings</h1>
      <p>All volumes:</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button
        style={{ color: "blue", fontSize: "20px" }}
        onClick={handleRandomVolume}
      >
        show rendom volume
      </button>
    </div>
  );
}
