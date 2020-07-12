import React from 'react';
import { render, queryByText } from '@testing-library/react';
import { Pagination } from './Pagination';
import { BrowserRouter } from 'react-router-dom';

describe('Pagination', () => {

    it('does not render previous on pageNumber=0', () => {
        const { queryByText } = render(
            <BrowserRouter>
                <Pagination pageNumber={0} pageCount={10} />
            </BrowserRouter>
        )
        const previousLink = queryByText(/Previous/i)
        expect(previousLink).not.toBeInTheDocument()
    })
    it('render previous on pageNumber!=0', () => {
        const { queryByText } = render(
            <BrowserRouter>
                <Pagination pageNumber={1} pageCount={10} />
            </BrowserRouter>
        )
        const previousLink = queryByText(/Previous/i)
        expect(previousLink).toBeInTheDocument()
    })
    it('render both previous and next on pageNumber!=0 and pageNumber!=lastPage', () => {
        const { queryByText } = render(
            <BrowserRouter>
                <Pagination pageNumber={8} pageCount={10} />
            </BrowserRouter>
        )
        const previousLink = queryByText(/Previous/i)
        expect(previousLink).toBeInTheDocument()
        const nextLink = queryByText(/Next/i)
        expect(nextLink).toBeInTheDocument()
    })
    it('render next on pageNumber!=lastPage', () => {
        const { queryByText } = render(
            <BrowserRouter>
                <Pagination pageNumber={8} pageCount={10} />
            </BrowserRouter>
        )
        const nextLink = queryByText(/Next/i)
        expect(nextLink).toBeInTheDocument()
    })
    it('does not render next on pageNumber==lastPage', () => {
        const { queryByText } = render(
            <BrowserRouter>
                <Pagination pageNumber={9} pageCount={10} />
            </BrowserRouter>
        )
        const nextLink = queryByText(/Next/i)
        expect(nextLink).not.toBeInTheDocument()
    })
})

