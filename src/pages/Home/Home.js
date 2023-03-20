
import './Home.css';
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Category } from './interfaces/Category';
import { Player } from './interfaces/Player';
import { Game } from './interfaces/Game';
import { useUser } from '../../lib/customHooks';
import NavBar from '../../components/NavBar/NavBar';

function Home() {
  
  const { user, authenticated } = useUser();

  /* States */
  const [platformIndex, setPlatform] = useState(0);

  const [categoryIndex, setCategory] = useState(6);

  const [gameIndex, setGame] = useState(0);

  const [gamerIndex, setGamer] = useState(0);


  /* Data */
  const players = [new Player('Dr team'), new Player('Mia Plays'), new Player('Xeoxer'), 
                  new Player('Nickmerc'), new Player('Nadie'), new Player('Inter')]

  const games = [new Game('COD', players), new Game('Fortnite'), new Game('Halo')]
  
  const categories = [new Category('Action'), new Category('Sport'), new Category('Adventre'),
                      new Category('Arcade'), new Category('Fantasy'), new Category('Strategy'),
                      new Category('Shooter', games)];

  /* Consult to get games list */
  let gameslist = []

  if(categoryIndex<categories.length){
    gameslist = categories[categoryIndex].games;
  }
  else{
    for(let i=0; i<categories.length;i++)
    gameslist = gameslist.concat(categories[i].games);
  }
  
  return (
  <div className='Home'>
    
    {/* navbar */}

    <NavBar />

    <div className='MainBoard'>

      {/* Section 1 */}
      
      <div className='PlayerSection'>
        <div className='Section'>
          <h3 className='PlayerSetionTitle'>Start <span className='ContrastSpan'>Streaming</span> Games Differently</h3>
          <span className='Text'>gamor now has <span className='PlayerSectionPlatform'>{platformIndex === 0 ? 'stream party' : platformIndex === 1 ? 'stream match' : 'Stream'}</span> platform</span>
          <div className='Auth'>
            <Link className='CreateButton' to="/Register">Create Account</Link>
            {(user || authenticated) ? <Link className='SignButton' to="/Logout">Sign out</Link> : <Link className='SignButton' to="/Login">Sign in</Link> }
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <div className='CoverSection'>
        <div className='Section'>
          <h3 className='CoverSectionTitle'>Fortnite new Season</h3>
          <span className='Text'>Join Live Stream</span>
          <span className='Hour'>10:30</span>
          {/* <img src={require("../../img/COD.png")} alt="Game Img" /> */}
        </div>
        <span className='CoverGamer'>{gameslist[gameIndex].gamers[gamerIndex].name}</span>
      </div>

      {/* Section 3 */}

      <div className='SearchSection'>
        <div className='Section'>
          <h3>Choose platform</h3>
          <div className='ChoosePlatformBtn'>
            <button className = {platformIndex === 0 ? 'SelectedPlatform' : 'NotSelected'} onClick={()=>setPlatform(0)}>Party</button>
            <button className = {platformIndex === 1 ? 'SelectedPlatform' : 'NotSelected'}  onClick={()=>setPlatform(1)}>Match</button>
            <button className = {platformIndex === 2 ? 'SelectedPlatform' : 'NotSelected'}  onClick={()=>setPlatform(2)}>Stream</button>
          </div>
        </div>

        {/* Search */}

        <div className='SearchingGame Section'>
          <h3>Searching game</h3>
          <div className='SearchingGameBox'>
            <select className='SelectGame' name="game"  onChange={(e)=>{setGame(e.target.value); setGamer(0);}}>
              {gameslist.map((game, index) => 
                <option className='OptionGame' key={index} value={index}>{game.name}</option>)}
            </select>
            
            <ul className='PlayersList'>
              {gameslist[gameIndex].gamers.map((gamer, index) => 
              <li className='Player' key={index}> 
                <span> {index+1} {gamer.name} </span> 
                <button className='PlusBtn' onClick={()=>{setGamer(index)}}> + </button>
              </li>)}
            </ul>
            <button className='SearchBtn'>Search Now</button>
          </div>
        </div>
      </div>
    </div>

    {/* Categories */}

    <div className='CategoriesSection'>
      <h3>Trending Categories</h3>
      <div className='CategoriesList'>
        {categories.map((Category, index) => 
          <div className={categoryIndex === index ? 'Category CategorySelected': 'Category'} key={index} onClick={()=>{setCategory(index); setGame(0); setGamer(0);}}> 
            <span>/ {index + 1}</span> 
            <span>{Category.name} Games</span> 
            <span>{'->'}</span>
          </div>)}
        <div className={categoryIndex === categories.length ? 'Category CategorySelected': 'Category'} onClick={()=>setCategory(categories.length)}>
          <span>/VIEW ALL</span> 
          <span>All Categories</span> 
          <span>{'->'}</span>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;
