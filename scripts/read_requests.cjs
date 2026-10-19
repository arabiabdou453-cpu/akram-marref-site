const fs = require('fs');
const readline = require('readline');

async function main() {
  const fileStream = fs.createReadStream('C:/Users/genious pc/.gemini/antigravity/brain/3e6d80ca-9f94-46d2-99cd-191df4eb3bdf/.system_generated/logs/transcript.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  for await (const line of rl) {
    if (line.includes('"USER_INPUT"')) {
      try {
        const obj = JSON.parse(line);
        console.log(`=== STEP ${obj.step_index} (${obj.created_at}) ===`);
        console.log(obj.content);
      } catch (e) {}
    }
  }
}
main();
