import { OrderBy } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderBy();
    expect(pipe).toBeTruthy();
  });
});
