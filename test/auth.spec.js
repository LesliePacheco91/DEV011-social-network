import {
  registerNewUser, loginUser, registerGoogle, loginGoogle, createNewPost, paintRealTtime, deletePost, UpdatePost,
} from '../src/lib/auth';

describe('registerNewUser', () => {
  it('registerNewUser is a function', () => {
    expect(typeof registerNewUser).toBe('function');
  });
});

describe('loginUser', () => {
  it('loginUser is a function', () => {
    expect(typeof loginUser).toBe('function');
  });
});

describe('registerGoogle', () => {
  it('registerGoogle is a function', () => {
    expect(typeof registerGoogle).toBe('function');
  });
});

describe('loginGoogle', () => {
  it('loginGoogle is a function', () => {
    expect(typeof loginGoogle).toBe('function');
  });
});

describe('createNewPost', () => {
  it('createNewPost is a function', () => {
    expect(typeof createNewPost).toBe('function');
  });
});

describe('paintRealTtime', () => {
  it('paintRealTtime is a function', () => {
    expect(typeof paintRealTtime).toBe('function');
  });
});

describe('deletePost', () => {
  it('deletePost is a function', () => {
    expect(typeof deletePost).toBe('function');
  });
});

describe('UpdatePost', () => {
  it('UpdatePost is a function', () => {
    expect(typeof UpdatePost).toBe('function');
  });
});
