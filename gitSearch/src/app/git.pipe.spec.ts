import { GitPipe } from './git.pipe';

describe('GitPipe', () => {
  it('create an instance', () => {
    const pipe = new GitPipe();
    expect(pipe).toBeTruthy();
  });
});
