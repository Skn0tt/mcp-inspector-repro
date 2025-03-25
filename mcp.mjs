import fs from "fs"
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"

const server = new McpServer({
    name: 'repro',
    version: '0.0.1',
})

await server.connect(new StdioServerTransport())

setInterval(() => {
    fs.appendFileSync(process.pid + ".log", Date.now() + "\n")
}, 1000)