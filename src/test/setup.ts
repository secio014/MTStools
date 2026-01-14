import '@testing-library/jest-dom';

const IntersectionObserverMock = function () {
  return {
    observe: vi.fn(),
    disconnect: vi.fn(),
    unobserve: vi.fn(),
  };
};

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

