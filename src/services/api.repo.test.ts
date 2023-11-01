import { Task } from '../models/task';
import { ApiRepo } from './api.repo';

describe('Given ApiRepo class', () => {
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getTask should be used', async () => {
      const repo = new ApiRepo();
      const expected: Task[] = [];
      const result = await repo.getTasks();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });

  describe('When we instantiate it and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then method getTask should be used', async () => {
      const repo = new ApiRepo();
      expect(repo.getTasks()).rejects.toThrow();
    });
  });
});
