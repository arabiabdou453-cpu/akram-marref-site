const fs = require('fs');
const readline = require('readline');

async function main() {
  const fileStream = fs.createReadStream('C:/Users/genious pc/.gemini/antigravity/brain/3e6d80ca-9f94-46d2-99cd-191df4eb3bdf/.system_generated/logs/transcript.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  for await (const line of rl) {
    try {
      const obj = JSON.parse(line);
      if (obj.step_index >= 7851 && obj.step_index <= 7920) {
        if (obj.tool_calls) {
          console.log(`STEP ${obj.step_index}:`, obj.tool_calls[0].name, JSON.stringify(obj.tool_calls[0].args).slice(0, 200));
        }
      }
    } catch (e) {}
  }
}
main();
