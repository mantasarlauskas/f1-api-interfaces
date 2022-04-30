import { AverageSpeed } from './average-speed';
import { Time } from './time';

export interface FastestLap {
    rank: string;
    lap: string;
    Time: Time;
    AverageSpeed: AverageSpeed;
}
