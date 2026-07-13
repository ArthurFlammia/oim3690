// The conversation so far. Each entry has a role and content,
// which is the format the OpenAI API expects.
const conversation = [];

const chatBox = document.getElementById("chat-box");
const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

// Adds one message bubble to the page
function addMessage(role, text) {
  const p = document.createElement("p");
  p.className = role;
  p.textContent = text;
  chatBox.appendChild(p);
}

// Sends the whole conversation to the API, returns the reply text
async function askAI() {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + CONFIG.OPENAI_API_KEY
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: conversation
    })
  });
  const data = await response.json();
  return data.choices[0].message.content;
}

// Extension: wire the helper into a chat page
async function sendMessage() {
  const text = input.value.trim();
  if (text === "") return;

  addMessage("user", text);
  conversation.push({ role: "user", content: text });
  input.value = "";
  sendBtn.disabled = true;

  try {
    const reply = await askAI();
    conversation.push({ role: "assistant", content: reply });
    addMessage("assistant", reply);
  } catch (error) {
    addMessage("assistant", "Error: " + error.message);
  } finally {
    sendBtn.disabled = false;
  }
}

sendBtn.addEventListener("click", sendMessage);

// config.js is gitignored, so warn if it is missing
if (typeof CONFIG === "undefined") {
  addMessage("assistant", 'No config.js found. Create ai-chat/config.js locally with: const CONFIG = { OPENAI_API_KEY: "the-class-key" };');
  sendBtn.disabled = true;
}
