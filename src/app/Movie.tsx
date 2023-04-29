import Image from 'next/image'
import Link from 'next/link'

export function Movie({ title, id, releaseDate, imgSrc }) {
    const imgPath = 'https://image.tmdb.org/t/p/w500'
    return (
      <div>
        <Link href={`/${id}`}>
            <h1 className="font-bold text-lg">{title}</h1>
            <h2 className="text-yellow-400">{releaseDate.replaceAll('-', '/')}</h2>
            <Image className="my-3" src={imgPath + imgSrc} width={1000} height={1000} alt={'Movie poster'}/>
        </Link>
      </div>
    )
  }