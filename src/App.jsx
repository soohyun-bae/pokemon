import './App.scss'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { lazy, Suspense, useEffect } from 'react'
import { fetchMultiplePokemonById } from './RTK/thunk'

const Main = lazy(() => import('./pages/Main'))
const Detail = lazy(() => import('./pages/Detail'))
const Search = lazy(() => import('./pages/Search'))
const Favorite = lazy(() => import('./pages/Favorite'))

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151))
  }, [])


  return (
    <>
      <h1 className='text-center text-[30px] p-[5px] font-semibold text-[#F6CC4B]'>Pokemon</h1>
      <nav className='flex justify-center gap-[20px] font-semibold text-[#4160A3]'>
        <Link to={'/'}>Main</Link>
        <Link to={'/favorite'}>Favorite</Link>
        <input
          onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
          className='border-b border-[darkgray] px-2'></input>
        <span>🔎</span>
      </nav>
      <main className='flex flex-wrap gap-[20px] justify-center pt-[10px] '>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path={'/'} element={<Main />} />
            {/* 아 진짜 개 화나네 파라미터계속 pokemon으로 해두고 파라미터 찾을때는 pokemonId로 찾음
          아 욕나오네 진짜 정신차리셈;;;;;;;;; */}
            <Route path={'/detail/:pokemonId'} element={<Detail />} />
            <Route path={'/search'} element={<Search />} />
            <Route path={'/favorite'} element={<Favorite />} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

export default App
