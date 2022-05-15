import { StandingsInfo } from './standings-info';
import { Constructor } from './constructor';

export interface ConstructorStandingsRow extends StandingsInfo {
    Constructor: Constructor;
}
