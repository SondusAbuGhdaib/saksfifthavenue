declare module '@modelcontextprotocol/sdk/dist/esm/server/stdio.js' {
  export class StdioServerTransport {
    constructor(stdin?: any, stdout?: any);
    start(): Promise<void>;
    close(): Promise<void>;
    send(message: any): Promise<void>;
    onclose?: () => void;
    onerror?: (error: Error) => void;
    onmessage?: (message: any) => void;
  }
}







