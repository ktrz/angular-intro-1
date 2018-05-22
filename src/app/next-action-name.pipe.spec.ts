import { NextActionNamePipe } from './next-action-name.pipe';

describe('NextActionNamePipe', () => {
  it('create an instance', () => {
    const pipe = new NextActionNamePipe();
    expect(pipe).toBeTruthy();
  });
});
