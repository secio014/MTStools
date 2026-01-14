import '@testing-library/jest-dom';
import { vi } from 'vitest';

const IntersectionObserverMock = function () {
  return {
    observe: vi.fn(),
    disconnect: vi.fn(),
    unobserve: vi.fn(),
  };
};

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

