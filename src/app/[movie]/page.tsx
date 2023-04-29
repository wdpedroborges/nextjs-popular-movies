import Image from "next/image"

export async function generateStaticParams() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    return res.results.map((movie: any) => ({
        movie: movie.id.toString()
    }))
}

const API_KEY = '3e4bf398d7d2a57f8488b0a20ad48185'
export default async function MovieDetail({ params }: any) {
    const imgPath = 'https://image.tmdb.org/t/p/w500'
    const { movie } = params
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
    const info = await data.json()

    return (
        <div className="flex flex-col justify-space-around items-center my-10 h-screen p-10">
            <h2 className="text-lg font-bold">{info.original_title}</h2>
            <h2 className="text-yellow-400">{info.release_date?.replaceAll('-', '/')}</h2>
            <h2 className="text-yellow-400">{info.runtime} minutes</h2>
            <Image className="my-5 rounded-md" src={imgPath + info.backdrop_path} width={1000} height={1000} alt={'Movie poster'} priority/>
            <p className="my-10 max-w-md text-justify text-yellow-400">{info.overview}</p>
        </div>
    )
}