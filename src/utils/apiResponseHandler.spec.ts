import { ApiResponseHandler } from './apiResponseHandler';

describe('Api response handler', () => {
  const apiResponseHandler = new ApiResponseHandler();

  it('should handled success response', () => {
    const res = apiResponseHandler.handleSuccess('message', 'data', 200);
    expect(res).toMatchObject({
      message: 'message',
      data: 'data',
      status: 200,
      success: true,
    });
  });

  it('should handled success response', () => {
    const res = apiResponseHandler.handleFailed('message', 'data', 400);
    expect(res).toMatchObject({
      message: 'message',
      error: 'data',
      status: 400,
      success: false,
    });
  });
});
