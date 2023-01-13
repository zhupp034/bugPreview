// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
// @ts-nocheck
import { useModel } from '@@/plugin-model';
import React from 'react';

const noop = () => {};

const connectMaster = <T extends object>(Component: React.ComponentType<T>) => {
  return (props: T, ...rest: any[]) => {
    const masterProps = (useModel || noop)('@@qiankunStateFromMaster') || {};
    return <Component {...props} {...rest} {...masterProps} />;
  };
};

export { connectMaster };
