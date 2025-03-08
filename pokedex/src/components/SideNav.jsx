import { first151Pokemon, getFullPokedexNumber } from "../utils"
import { useState } from 'react'

export default function SideNav(props) {
    const {selectedPokemon , setSelectedPokemon, handleToggleMenu , showSideMenu, handleCloseMenu} = props
    const[searchValue, setSearchValue ] = useState("")

    const filteredPokemon =first151Pokemon.filter((item,itemIndex)=>{
        //if full pokedex number includes the current search value,return true
        if((getFullPokedexNumber(itemIndex)).includes(searchValue)){
            return true
        }

        //if name includes the current searchvalue return true
        if(item.toLowerCase().includes(searchValue.toLowerCase())){
            return true
        }
        //otherwise exclude from array
        return false

    })
    return(
        <nav className={' ' + (!showSideMenu? " open" : '')}>
            
                <div className= {"header" + (!showSideMenu? " open" : '')} >
                    <button onClick={handleToggleMenu} className="open-nav-button">
                    <i className="fa-solid fa-arrow-left-long"></i>
                   </button>
                    <h1 className="text-gradient">Pokedex</h1>
               </div>
               <input placeholder="E.g. 001 or Bul.. " value ={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}} />
                {
                filteredPokemon.map((pokemon, pokemonIndex)=>{
                    const truePokedeNumber = first151Pokemon.indexOf(pokemon)
                    return(
                        <button onClick ={()=>{
                            setSelectedPokemon(truePokedeNumber)
                            handleCloseMenu()
                        }}key = {pokemonIndex} className= {"nav-card" + (pokemonIndex === selectedPokemon? 'nav-card-selection' : ' ')  }>
                        <p>{getFullPokedexNumber(truePokedeNumber)}</p>
                         <p>{pokemon}</p>
                        </button>

                    )
                })}
            
        </nav>
    )
    
}