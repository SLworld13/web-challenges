import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import Link from "next/link";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find((vol) => vol.slug === slug);

  if (!volume) {
    return null;
  }

  return (
    <div>
      <Link href="/volumes">All volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>

      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
