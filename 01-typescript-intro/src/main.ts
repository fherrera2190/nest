import { charmander } from "./bases/03-classes";
import "./style.css";
//import {age, name} from './bases/01-types.ts'
//import { pokemonsIds,bulbasaur, pokemons } from './bases/02-objects'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello ${charmander.name}</h1>
`
