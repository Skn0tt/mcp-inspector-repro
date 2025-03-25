1. `npx @modelcontextprotocol/inspector node mcp.mjs``
2. Click "Connect"
3. Observe that the server starts continuously emitting the current date to `$pid.log`. As long as this log file is updated, the server is running.
4. Click "Connect" again

Expected behaviour: the existing log file is not updated anymore, because the server was stopped.
Actual behaviour: there's two servers with one log file each, and both are updated.
