import { useContext, useEffect, useState } from "react";
import { Navbar } from "../Component/Navbar";
import { useFetchData } from "../CustomHook/useDataFetch";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";

export const JobCreatePage = () => {


    return (
        <div>
            <Navbar />
            <h1> Main hun Job Create Page </h1>
        </div>
    );
}