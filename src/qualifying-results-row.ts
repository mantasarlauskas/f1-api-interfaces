import { Driver } from './driver';
import { Constructor } from './constructor';

export interface QualifyingResultsRow {
    number?: string;
    position: string,
    Driver: Driver;
    Constructor: Constructor;
    Q1?: string;
    Q2?: string;
    Q3?: string;
}
