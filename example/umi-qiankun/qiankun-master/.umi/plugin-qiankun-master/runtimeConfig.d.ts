// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import { MasterOptions } from './types'
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T);
interface Config {
  master?: MasterOptions;
}
export interface IRuntimeConfig {
  qiankun?: XOR<MasterOptions, Config>;
  useQiankunStateForSlave?: () => Record<string, any>;
}