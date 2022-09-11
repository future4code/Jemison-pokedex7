import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PokedexPage } from '../Pages/PokedexPage/PokedexPage';
import { DetailsPage } from '../Pages/DetailsPage/DetailsPage';
import {HomePage} from '../Pages/HomePage/HomePage'


export function Router() {
  return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <HomePage />}/>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/PokedexPage" element={<PokedexPage />}/>
                <Route path="DetailsPage/:id" element={<DetailsPage/>}/>

            </Routes>
        </BrowserRouter>

    );
}

//export default Router