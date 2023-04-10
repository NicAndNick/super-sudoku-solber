import { Router } from "express";
import { getSudoku } from "../Contollers/getSudoku"; 

export const apiRouter = Router();

apiRouter.get("/get-sudoku", getSudoku, (req, res) => {
    res.json(res.locals.sudoku);
})