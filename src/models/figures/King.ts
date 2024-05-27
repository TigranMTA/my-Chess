import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'
import { Rook } from "./Rook";

export class King extends Figure {

    isFirstStep: boolean = true;

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }


    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }

        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);
        const castlingRight = 2;

        if ((dx === 1 && dy === 1) || (dx === 1 && dy === 1) || (dx === 0 && dy === 1) || (dx === 1 && dy === 0)) {
            return true;
        }
        if (this.cell.x === 4 && this.isFirstStep ) {
            if ((target.x === this.cell.x + castlingRight) && (target.y === this.cell.y) ||
                (target.x === this.cell.x - castlingRight) && (target.y === this.cell.y)) {
              return true;                
            }
            
            
        }


        return false;

    }


}