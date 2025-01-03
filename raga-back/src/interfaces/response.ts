export interface ResponseInterface {
  message: string;
  statusCode: number;
  timestamp: string;
  data: any[] | null;
  error: any;
}
