import { Server } from "@modelcontextprotocol/sdk/server";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/node";
import { PlaywrightMcp } from "@playwright/mcp";

// 1. Create MCP server instance
const server = new Server(
  { name: "playwright-mcp", version: "1.0.0" },
  { capabilities: {} }
);

// 2. Register Playwright MCP connection
const playwrightMcp = new PlaywrightMcp();
server.tool(playwrightMcp);

// 3. Add a custom helper tool
server.tool({
  name: "sayHello",
  description: "Replies with a hello message",
  run: async ({ params }) => {
    const name = params?.name ?? "World";
    return { content: [{ type: "text", text: `Hello, ${name}! 👋` }] };
  }
});

// 4. Start the server with stdio transport
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error("❌ MCP server failed:", err);
  process.exit(1);
});
