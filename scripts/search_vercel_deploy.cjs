const fs = require('fs');
const readline = require('readline');

async function search() {
  const fileStream = fs.createReadStream('C:/Users/genious pc/.gemini/antigravity/brain/3e6d80ca-9f94-46d2-99cd-191df4eb3bdf/.system_generated/logs/transcript.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  for await (const line of rl) {
    if (line.includes('vercel') || line.includes('deploy')) {
      try {
        const obj = JSON.parse(line);
        if (obj.tool_calls) {
          for (const tc of obj.tool_calls) {
            if (tc.name === 'run_command' && (tc.args.CommandLine.includes('vercel') || tc.args.CommandLine.includes('deploy'))) {
              console.log(`Step ${obj.step_index}: ${tc.args.CommandLine}`);
            }
          }
        }
      } catch (e) {}
    }
  }
}
search();
