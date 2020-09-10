import React from 'react';
import { render } from '@testing-library/react';

import Expandable from '.';

describe('Expandable Testing', () => {
  test('Test Expandable Compount component render correctly.', () => {
    const { getByText } = render(
      <Expandable>
        <Expandable.Header>Section one</Expandable.Header>

        <Expandable.Body>
          Wao wao wao wao wao wao wao wao wao wao wwao, Wao wao wao wao wao wao
          wao wao wao wao wwao,Wao wao wao wao wao wao wao wao wao wao wwao
        </Expandable.Body>
      </Expandable>
    );

    const HeaderElement = getByText(/Section one/i);
    expect(HeaderElement).toBeInTheDocument();

    const BodyElement = getByText(/Wao wao wao/i);
    expect(BodyElement).toBeInTheDocument();
    expect(BodyElement).not.toHaveClass('Expandable__body--expanded');
    expect(BodyElement).toHaveClass('Expandable__body');
  });
});
