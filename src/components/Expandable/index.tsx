import React, { ReactNode, useState, useMemo, useCallback } from 'react';
import './Expandable.scss';
import Header, { IHeaderProps } from './Header';
import Body, { IBodyProps } from './Body';
interface Props {
  children: ReactNode;
}

interface Expandable extends React.FC<Props> {
  Body: React.FC<IBodyProps>;
  Header: React.FC<IHeaderProps>;
}

export interface ProviderValue {
  expanded: boolean;
  handleChange: () => void;
}

export const ExpandContext = React.createContext<ProviderValue | null>(null);
const { Provider } = ExpandContext;

const Expandable: Expandable = ({ children }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleChange = useCallback(() => setExpanded(!expanded), [expanded]);
  const value: ProviderValue = useMemo(
    () => ({ expanded: expanded, handleChange: handleChange }),
    [expanded, handleChange]
  );
  return (
    <div className="Expandable">
      <Provider value={value}>{children}</Provider>
    </div>
  );
};

Expandable.Header = Header;
Expandable.Body = Body;

export default Expandable;
