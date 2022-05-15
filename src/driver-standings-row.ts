import { StandingsInfo } from './standings-info';
import { Constructor } from './constructor';
import { Driver } from './driver';

export interface DriverStandingsRow extends StandingsInfo {
    Driver: Driver;
    Constructors: Constructor[];
}
