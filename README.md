# PlayrightProject
Project for basic verification

> **Note:** The setup and test instructions below work for Windows, macOS, and Linux. Just use your system's terminal (Command Prompt, PowerShell, Terminal, etc.) with Node.js installed.

## Setup Instructions

1. **Install dependencies:**
	```bash
	npm install
	```

2. **Install Playwright browsers:**
	```bash
	npx playwright install
	```

## Running Tests

To run all Playwright tests:

```bash
npx playwright test
```

Or use the npm script:

```bash
npm test
```

---
**Note:** Do not commit `node_modules`, `test-results`, or `package-lock.json` to version control. These are not required for sharing or running tests on other machines.
