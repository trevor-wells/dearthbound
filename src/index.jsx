import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import App from '/src/App'
import TitleScreen from "/src/routes/title-screen/TitleScreen"
import ErrorPage from "/src/routes/error-screen/ErrorScreen"
import FightScreen, {loader as fightScreenLoader} from "/src/routes/fight-screen/FightScreen"
import CharacterScreen, {loader as characterScreenLoader, action as characterPatchAction} from "/src/routes/character-screen/CharacterScreen"
import ShopScreen, {loader as shopScreenLoader, action as shopScreenAction} from "/src/routes/shop-screen/ShopScreen"
import GameOverScreen from "/src/routes/game-over-screen/GameOverScreen"
import '/src/nes.css'
import '/src/index.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<App />} errorElement={<ErrorPage />}>
    <Route
      path="/"
      element={<TitleScreen />}
    />
    <Route
      path="/character"
      element={<CharacterScreen />}
      loader={characterScreenLoader}
      action={characterPatchAction}
    />
    <Route
      path="/fight"
      element={<FightScreen />}
      loader={fightScreenLoader}
    />
    <Route
      path="/shop"
      element={<ShopScreen />}
      loader={shopScreenLoader}
      action={shopScreenAction}
    />
    <Route
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
