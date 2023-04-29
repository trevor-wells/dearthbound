import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import { getCharacter, getShop, getEnemies } from "/src/util/gets"
import App from '/src/App'
import TitleScreen from "/src/routes/title-screen/TitleScreen"
import ErrorScreen from "/src/routes/error-screen/ErrorScreen"
import FightScreen from "/src/routes/fight-screen/FightScreen"
import CharacterScreen, { action as characterPatchAction } from "/src/routes/character-screen/CharacterScreen"
import ShopScreen from "/src/routes/shop-screen/ShopScreen"
import GameOverScreen from "/src/routes/game-over-screen/GameOverScreen"
import '/src/nes.css'
import '/src/index.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route
    id="root"
    element={<App />}
    errorElement={<ErrorScreen />}
    loader={getCharacter}
  >
    <Route
      id="title"
      path="/"
      element={<TitleScreen />}
    />
    <Route
      id="character"
      path="/character"
      element={<CharacterScreen />}
      action={characterPatchAction}
    />
    <Route
      id="fight"
      path="/fight"
      element={<FightScreen />}
      loader={getEnemies}
    />
    <Route
      id="shop"
      path="/shop"
      element={<ShopScreen />}
      loader={getShop}
    />
    <Route
      id="game-over"
      path="/game-over"
      element={<GameOverScreen />}
    />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
