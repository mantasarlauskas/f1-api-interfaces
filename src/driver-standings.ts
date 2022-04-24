import { Standings } from './standings';
import { Constructor } from './constructor';
import { Driver } from './driver';

export interface DriverStandings extends Standings {
    Driver: Driver;
    Constructors: Constructor[];
}
