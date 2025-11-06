export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: any;
}

export const successResponse = <T>(
  res: any,
  data: T,
  message = "Success",
  statusCode = 200
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  } as ApiResponse<T>);
};

export const errorResponse = (
  res: any,
  message = "Failure",
  error: any = null,
  statusCode = 500
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error,
  } as ApiResponse);
};
