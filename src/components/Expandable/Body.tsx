import React, { useContext } from 'react';
import { ExpandContext, ProviderValue } from './index';
export interface IBodyProps {}

const Body: React.FC<IBodyProps> = ({ children }) => {
  const providedValue: ProviderValue | null = useContext(ExpandContext);
  if (providedValue === null) {
    throw new Error('Cannot find parent context');
  }
  const { expanded } = providedValue;
  return (
    <div
      className={`Expandable__body ${
        expanded ? 'Expandable__body--expanded' : ''
      }`}
    >
      {children}
    </div>
  );
};

export default Body;
