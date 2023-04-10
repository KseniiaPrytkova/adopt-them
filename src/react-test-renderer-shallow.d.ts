import { ShallowRenderer } from 'react-test-renderer/shallow';

declare module 'react-test-renderer/shallow' {
    export function createRenderer(): ShallowRenderer;
}
