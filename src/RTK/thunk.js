import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplePokemonById = createAsyncThunk(
  // 첫 번째 인자 : 액션 타입이다. pending, fulfilled, rejected 상태를 관리하는 데 사용됨
  // 보통 '{sliceName}/actinName'형식으로 작성
  // 두 번째 인자 : 포켓몬 가져오기
  'pokemon/fetchMultiplePokemonById',
  async (maxPokemonId) => {
    // Array.from : 첫 번째 인자로 배열을 생성할 길이 지정, 두 번째 인자로 배열의 각 항목을 어떻게 변환할지 지정하는 함수
    // 두 번째 인자의 매개변수 : 1. 배열 요소의 값 2. 인덱스 
    const numberArray = Array.from({ length: maxPokemonId }, (_, i) => i + 1)

    // 각 포켓몬에 대해 API를 호출하여 필요한 데이터를 받아오는 비동기 함수
    const fetchAPI = async (pokemonId) => {

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
      const data = await response.json()

      const pokemonData = {
        id: pokemonId,
        name: data.names.find(el => el.language.name === 'ko').name,
        description: data.flavor_text_entries.find(el => el.language.name === 'ko').flavor_text,
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`
      }
      return pokemonData
    }
    // .all : 모든 프로미스가 완료되면 배열로 반환
    // 이 데이터는 createAsyncThunk에 의해 redux상태에 저장될 수 있다. 
    return await Promise.all(numberArray.map((el) => fetchAPI(el)))
  }
)