import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../Pages/HomePage';
import { PokedexPage } from '../Pages/PokedexPage';
import { DetailsPage } from '../Pages/DetailsPage';


function Router() {
  return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <HomePage />}/>
                <Route path="/" element={<HomePage />}/>
                <Route path="/PokedexPage" element={<PokedexPage />}/>
                <Route path="/PokedexPage/DetailsPage" element={<DetailsPage />}/>

            </Routes>
        </BrowserRouter>

    );
}

export default Router