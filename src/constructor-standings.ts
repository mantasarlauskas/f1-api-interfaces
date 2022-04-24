import { Standings } from './standings';
import { Constructor } from './constructor';

export interface ConstructorStandings extends Standings {
    Constructor: Constructor;
}
