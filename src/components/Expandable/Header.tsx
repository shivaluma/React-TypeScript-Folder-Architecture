import React, { useContext } from 'react';
import { ExpandContext, ProviderValue } from './index';
import { FaChevronRight } from 'react-icons/fa';
export interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = ({ children }) => {
  const providedValue: ProviderValue | null = useContext(ExpandContext);
  if (providedValue === null) {
    throw new Error('Cannot find parent context');
  }
  const { expanded, handleChange } = providedValue;
  return (
    <button className="Expandable__header" onClick={handleChange}>
      <FaChevronRight className={`icon ${expanded ? 'icon__rotate' : ''}`} />
      {children}
    </button>
  );
};

export default Header;
