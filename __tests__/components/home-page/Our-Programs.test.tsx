import React from 'react'
import { render, screen } from '@testing-library/react'
import OurPrograms from '../../../src/components/home-page/Our-Programs'

describe('Our-Programs', () => {
  it('renders the section heading', () => {
    render(<OurPrograms />)
    expect(screen.getByRole('heading', { name: /Experience/i })).toBeInTheDocument()
  })

  it('mounts under the #experience section landmark id', () => {
    const { container } = render(<OurPrograms />)
    expect(container.querySelector('#experience')).not.toBeNull()
  })
})
