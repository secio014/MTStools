import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MachiningCalculator } from './MachiningCalculator';

describe('MachiningCalculator', () => {
  it('renders correctly', () => {
    render(<MachiningCalculator />);
    expect(screen.getByText(/Calculadora de/i)).toBeInTheDocument();
    expect(screen.getByText(/Usinagem/i)).toBeInTheDocument();
  });

  it('calculates RPM correctly', () => {
    render(<MachiningCalculator />);
    
    const vcInput = screen.getByPlaceholderText('Ex: 120');
    const diameterInput = screen.getByPlaceholderText('Ex: 10');
    const calculateButton = screen.getByText('Calcular RPM');

    fireEvent.change(vcInput, { target: { value: '120' } });
    fireEvent.change(diameterInput, { target: { value: '10' } });
    fireEvent.click(calculateButton);

    // RPM = (120 * 1000) / (PI * 10) = 3819.7
    expect(screen.getByText('3820')).toBeInTheDocument();
  });

  it('calculates Feed Rate correctly', () => {
    render(<MachiningCalculator />);
    
    // First calculate RPM
    const vcInput = screen.getByPlaceholderText('Ex: 120');
    const diameterInput = screen.getByPlaceholderText('Ex: 10');
    const calcRpmButton = screen.getByText('Calcular RPM');
    
    fireEvent.change(vcInput, { target: { value: '120' } });
    fireEvent.change(diameterInput, { target: { value: '10' } });
    fireEvent.click(calcRpmButton);

    // Then calculate Feed
    const fzInput = screen.getByPlaceholderText('Ex: 0.05');
    const zInput = screen.getByPlaceholderText('Ex: 4');
    const calcFeedButton = screen.getByText('Calcular Avanço');

    fireEvent.change(fzInput, { target: { value: '0.05' } });
    fireEvent.change(zInput, { target: { value: '4' } });
    fireEvent.click(calcFeedButton);

    // Feed = 3820 * 0.05 * 4 = 764
    expect(screen.getByText('764')).toBeInTheDocument();
  });
});
