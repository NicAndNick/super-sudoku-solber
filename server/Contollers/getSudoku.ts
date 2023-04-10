import { RequestHandler } from "express"
import { generateSudoku } from "../../src/utils/generateSudoku"

export  const getSudoku: RequestHandler = (req, res, next) => {
    const newSudoku = generateSudoku();
    res.locals.sudoku = newSudoku;
    return next();
}