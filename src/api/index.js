import React from 'react';
import axios from "axios";
import { data } from '../utils/data';

const BASE_URL = "https://opentdb.com/api.php?amount=15";

export const getQuestions = () => {
    try {
       const data =  axios.get(BASE_URL);
       return data;
    } catch(e) {
        console.log("error", e)
        return e;
    }
}