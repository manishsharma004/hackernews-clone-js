import React from 'react';
import { render } from '@testing-library/react';
import { HideButton } from './HideButton';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function Wrapper({ children, initialState, reducer }) {
    const store = createStore(reducer, initialState)

    return (
        <Provider store={store}>{children}</Provider>
    )
}

describe('HideButton', () => {

    it('renders learn react link', () => {
        const { getByText } = render(
            <Wrapper
                initialState={{}}
                reducer={() => {}}
            >
                <HideButton />
            </Wrapper>
        )
          const spanElement = getByText(/hide/i);
          expect(spanElement).toBeInTheDocument();
    });
})

