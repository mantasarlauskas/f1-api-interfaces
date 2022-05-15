import { Constructor } from './constructor';
import { Driver } from './driver';
import { Time } from './time';
import { FastestLap } from './fastest-lap';

export interface RaceResultsRow {
    number?: string;
    position: string;
    positionText: string;
    points: string;
    Driver: Driver;
    Constructor: Constructor;
    grid: string;
    laps: string;
    status: string;
    Time: Time;
    FastestLap: FastestLap;
}
