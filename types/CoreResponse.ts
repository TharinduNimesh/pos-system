export interface CoreResponse {
  status: "success" | "error";
  message?: string;
  messages?: any[];
}
