import { Inter } from 'next/font/google'
import { Movie } from './Movie'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  const movies = res.results

  return (
    <>
      <div className="grid gap-16 lg:grid-cols-3 sm:grid-cols-1 p-10">
        {
          movies.map((movie: any, index: number) => {
            return <Movie
                key={index}
                title={movie.original_title}
                id={movie.id}
                releaseDate={movie.release_date}
                imgSrc={movie.poster_path}
              />
          })
        }
      </div>
    </>
  )
}
