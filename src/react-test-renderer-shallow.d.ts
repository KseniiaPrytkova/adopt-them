import { ShallowRenderer } from 'react-test-renderer/shallow';

declare module 'react-test-renderer/shallow' {
    export function createRenderer(): ShallowRenderer;
}

// interface MockSetPage {
//     (...args: unknown[]): void;
//     mock: {
//         calls: [SetPageCallback][];
//     };
// }

// const mockSetPage: MockSetPage = ((...args: unknown[]): void => {
//     mockSetPage.mock.calls.push(args as [SetPageCallback]);
// }) as MockSetPage;

// mockSetPage.mock = {
//     calls: []
// };
