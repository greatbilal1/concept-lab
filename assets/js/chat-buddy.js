(function(global) {
  "use strict";
  if (global.TeachChatBuddy) return;

  // We need to figure out the root path to load data/courses.js if missing
  var rootPath = "../../";
  var myScript = document.querySelector('script[src*="chat-buddy.js"]');
  if (myScript) {
    rootPath = myScript.src.split('assets/js/chat-buddy.js')[0];
  }

  // Load courses if needed
  if (!global.COURSES) {
    var s = document.createElement("script");
    s.src = rootPath + "data/courses.js";
    document.head.appendChild(s);
  }

  var jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "A SQL query goes into a bar, walks up to two tables and asks... 'Can I join you?'",
    "Why do Java developers wear glasses? Because they don't C#.",
    "There are 10 types of people in the world: those who understand binary, and those who don't."
  ];

  function getCourseId() {
    var b = document.body;
    return (b && b.dataset && b.dataset.course) || "";
  }

  function renderUI() {
    var style = document.createElement("style");
    style.innerHTML = `
      #chat-buddy-container {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
        font-family: var(--font-sans, system-ui, sans-serif);
      }
      #chat-buddy-toggle {
        width: 56px;
        height: 56px;
        border-radius: 28px;
        background: var(--c-brand, #2563eb);
        color: white;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        transition: transform 0.2s;
      }
      #chat-buddy-toggle:hover {
        transform: scale(1.05);
      }
      #chat-buddy-window {
        display: none;
        position: absolute;
        bottom: 72px;
        right: 0;
        width: 320px;
        height: 440px;
        background: var(--bg, #ffffff);
        border: 1px solid var(--border, #e5e7eb);
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        flex-direction: column;
        overflow: hidden;
      }
      @media (prefers-color-scheme: dark) {
        #chat-buddy-window {
          background: var(--bg, #1f2937);
          border-color: var(--border, #374151);
        }
      }
      #chat-buddy-header {
        background: var(--c-brand, #2563eb);
        color: white;
        padding: 12px 16px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      #chat-buddy-controls {
        display: flex;
        gap: 12px;
      }
      .chat-btn {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 16px;
        opacity: 0.8;
      }
      .chat-btn:hover { opacity: 1; }
      #chat-buddy-messages {
        flex: 1;
        padding: 16px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      #chat-buddy-settings {
        display: none;
        flex: 1;
        padding: 16px;
        overflow-y: auto;
        background: var(--bg-alt, #f9fafb);
      }
      @media (prefers-color-scheme: dark) {
        #chat-buddy-settings { background: var(--bg-alt, #111827); }
      }
      .settings-group { margin-bottom: 12px; }
      .settings-group label { display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px; color: var(--text-muted, #6b7280); }
      .settings-group input { width: 100%; padding: 8px; font-size: 13px; border: 1px solid var(--border, #d1d5db); border-radius: 6px; background: var(--bg, #fff); color: inherit; box-sizing: border-box; }
      @media (prefers-color-scheme: dark) {
        .settings-group input { border-color: #4b5563; background: #1f2937; }
        .settings-group label { color: #9ca3af; }
      }
      .msg {
        max-width: 85%;
        padding: 10px 14px;
        border-radius: 16px;
        font-size: 14px;
        line-height: 1.4;
      }
      .msg.bot {
        background: var(--bg-alt, #f3f4f6);
        color: var(--text, #111827);
        align-self: flex-start;
        border-bottom-left-radius: 4px;
      }
      @media (prefers-color-scheme: dark) {
        .msg.bot {
          background: var(--bg-alt, #374151);
          color: var(--text, #f9fafb);
        }
      }
      .msg.user {
        background: var(--c-brand, #2563eb);
        color: white;
        align-self: flex-end;
        border-bottom-right-radius: 4px;
      }
      #chat-buddy-input-area {
        padding: 12px;
        border-top: 1px solid var(--border, #e5e7eb);
        display: flex;
        gap: 8px;
        background: var(--bg, #ffffff);
      }
      @media (prefers-color-scheme: dark) {
        #chat-buddy-input-area {
          background: var(--bg, #1f2937);
          border-color: var(--border, #374151);
        }
      }
      #chat-buddy-input {
        flex: 1;
        padding: 8px 12px;
        border: 1px solid var(--border, #d1d5db);
        border-radius: 20px;
        outline: none;
        background: transparent;
        color: inherit;
      }
      @media (prefers-color-scheme: dark) {
        #chat-buddy-input { border-color: #4b5563; }
      }
      #chat-buddy-send {
        background: var(--c-brand, #2563eb);
        color: white;
        border: none;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .course-link {
        display: inline-block;
        margin-top: 6px;
        color: var(--c-brand, #2563eb);
        text-decoration: underline;
        font-weight: 600;
      }
      @media (prefers-color-scheme: dark) {
        .course-link { color: #60a5fa; }
      }
      #chat-buddy-save-settings {
        background: var(--c-brand, #2563eb);
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        width: 100%;
        margin-top: 8px;
      }
      #chat-buddy-save-settings:hover { opacity: 0.9; }
      @keyframes cb-typing-bounce {
        0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
        40% { transform: translateY(-4px); opacity: 1; }
      }
      .cb-typing {
        display: inline-flex;
        gap: 4px;
        align-items: center;
        height: 20px;
        padding: 0 4px;
      }
      .cb-typing span {
        width: 6px;
        height: 6px;
        background-color: currentColor;
        border-radius: 50%;
        animation: cb-typing-bounce 1.4s infinite ease-in-out both;
      }
      .cb-typing span:nth-child(1) { animation-delay: -0.32s; }
      .cb-typing span:nth-child(2) { animation-delay: -0.16s; }
      @keyframes cb-cursor-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      .cb-cursor { font-weight: bold; animation: cb-cursor-blink 1s infinite; display: inline-block; margin-left: 2px; }
    `;
    document.head.appendChild(style);

    var container = document.createElement("div");
    container.id = "chat-buddy-container";
    container.innerHTML = `
      <div id="chat-buddy-window">
        <div id="chat-buddy-header">
          <span>🤖 Labby</span>
          <div id="chat-buddy-controls">
            <button id="chat-buddy-settings-btn" class="chat-btn" title="Settings">⚙️</button>
            <button id="chat-buddy-close" class="chat-btn" title="Close">✖</button>
          </div>
        </div>
        <div id="chat-buddy-messages"></div>
        <div id="chat-buddy-settings">
          <h3 style="margin-top:0;font-size:15px;margin-bottom:12px;">API Settings</h3>
          <p style="font-size:12px;color:var(--text-muted);margin-bottom:16px;">
            Configure your AI provider. Keys are saved securely in your browser's local storage and never sent to our servers.
          </p>
          <div class="settings-group">
            <label>Provider URL</label>
            <input type="text" id="cb-api-url" placeholder="https://api.openai.com/v1/chat/completions">
          </div>
          <div class="settings-group">
            <label>Model</label>
            <input type="text" id="cb-api-model" placeholder="gpt-4o-mini">
          </div>
          <div class="settings-group">
            <label>API Key (Optional for Local Models)</label>
            <input type="password" id="cb-api-key" placeholder="sk-...">
          </div>
          <button id="chat-buddy-save-settings">Save & Close</button>
        </div>
        <form id="chat-buddy-input-area">
          <input type="text" id="chat-buddy-input" placeholder="Ask Labby..." autocomplete="off">
          <button type="submit" id="chat-buddy-send">➤</button>
        </form>
      </div>
      <button id="chat-buddy-toggle">🤖</button>
    `;
    document.body.appendChild(container);

    var windowEl = document.getElementById("chat-buddy-window");
    var toggleEl = document.getElementById("chat-buddy-toggle");
    var closeEl = document.getElementById("chat-buddy-close");
    var settingsBtn = document.getElementById("chat-buddy-settings-btn");
    var formEl = document.getElementById("chat-buddy-input-area");
    var inputEl = document.getElementById("chat-buddy-input");
    var messagesEl = document.getElementById("chat-buddy-messages");
    var settingsEl = document.getElementById("chat-buddy-settings");
    
    var cbApiUrl = document.getElementById("cb-api-url");
    var cbApiModel = document.getElementById("cb-api-model");
    var cbApiKey = document.getElementById("cb-api-key");
    var saveSettingsBtn = document.getElementById("chat-buddy-save-settings");

    var isOpen = false;
    var showingSettings = false;

    // Load saved settings
    cbApiUrl.value = localStorage.getItem("labby_api_url") || "https://api.openai.com/v1/chat/completions";
    cbApiModel.value = localStorage.getItem("labby_api_model") || "gpt-4o-mini";
    cbApiKey.value = localStorage.getItem("labby_api_key") || "";

    function addMessage(text, sender, html) {
      var msg = document.createElement("div");
      msg.className = "msg " + sender;
      if (html) {
        msg.innerHTML = html;
      } else {
        msg.textContent = text;
      }
      messagesEl.appendChild(msg);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    toggleEl.addEventListener("click", function() {
      isOpen = !isOpen;
      windowEl.style.display = isOpen ? "flex" : "none";
      if (isOpen) {
        if (!showingSettings) inputEl.focus();
        if (messagesEl.children.length === 0) {
          var cid = getCourseId();
          var welcome = "Hi! I'm Labby! 🐾 How can I help you learn today?";
          if (cid) {
            welcome = "Hi! I'm Labby! 🐾 I see you're checking out our **" + cid + "** course! Having fun?";
          }
          addMessage(welcome, "bot");
        }
      }
    });

    closeEl.addEventListener("click", function() {
      isOpen = false;
      windowEl.style.display = "none";
    });

    settingsBtn.addEventListener("click", function() {
      showingSettings = !showingSettings;
      if (showingSettings) {
        messagesEl.style.display = "none";
        formEl.style.display = "none";
        settingsEl.style.display = "block";
      } else {
        settingsEl.style.display = "none";
        messagesEl.style.display = "flex";
        formEl.style.display = "flex";
      }
    });

    saveSettingsBtn.addEventListener("click", function() {
      localStorage.setItem("labby_api_url", cbApiUrl.value.trim());
      localStorage.setItem("labby_api_model", cbApiModel.value.trim());
      localStorage.setItem("labby_api_key", cbApiKey.value.trim());
      
      settingsEl.style.display = "none";
      messagesEl.style.display = "flex";
      formEl.style.display = "flex";
      showingSettings = false;
      
      addMessage(null, "bot", "Settings saved successfully! 🚀");
    });

    var chatHistory = [];

    function getSystemPrompt() {
      var courseList = global.COURSES ? global.COURSES.map(function(c) {
        return "- " + c.id + ": " + c.title;
      }).join("\\n") : "";
      return "You are Labby 🐾, a fun, highly engaging, and smart learning assistant for Concept Lab. " +
        "You love programming puns, using emojis, and keeping learners motivated. " +
        "You have memory of this conversation. " +
        "When relevant, recommend courses to the user. Here are the available courses:\\n" +
        courseList + "\\n\\n" +
        (getCourseId() ? "The user is currently viewing the course ID: '" + getCourseId() + "'. " : "The user is currently on the main hub page, not a specific course. ") +
        "Format responses using Markdown (e.g. **bold**, `code`, and [Course Title](" + rootPath + "courses/ID/course.html)). Keep responses concise and helpful.";
    }

    formEl.addEventListener("submit", async function(e) {
      e.preventDefault();
      var text = inputEl.value.trim();
      if (!text) return;
      inputEl.value = "";
      
      addMessage(text, "user");

      var apiUrl = localStorage.getItem("labby_api_url") || "https://api.openai.com/v1/chat/completions";
      var apiModel = localStorage.getItem("labby_api_model") || "gpt-4o-mini";
      var apiKey = localStorage.getItem("labby_api_key") || "";

      if (!apiKey && apiUrl.includes("openai.com")) {
        addMessage(null, "bot", "To make me smart, please click the ⚙️ Settings icon above and enter your OpenAI API key, or configure a local LLM URL.");
        return;
      }

      if (chatHistory.length === 0) {
        chatHistory.push({ role: "system", content: getSystemPrompt() });
      }
      chatHistory.push({ role: "user", content: text });

      var loadingId = "msg-" + Date.now();
      addMessage(null, "bot", "<div id='" + loadingId + "' class='cb-typing'><span></span><span></span><span></span></div>");

      try {
        var response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiKey
          },
          body: JSON.stringify({
            model: apiModel,
            messages: chatHistory,
            temperature: 0.7,
            stream: true
          })
        });

        var loadEl = document.getElementById(loadingId);
        var msgContainer = loadEl ? loadEl.parentNode : null;

        if (!response.ok) {
          var errData = await response.json();
          if (msgContainer) msgContainer.innerHTML = "Oops! API Error: " + (errData.error ? errData.error.message : response.statusText);
          chatHistory.pop();
          return;
        }

        if (msgContainer) msgContainer.innerHTML = "";
        
        var reader = response.body.getReader();
        var decoder = new TextDecoder("utf-8");
        var botReply = "";

        while (true) {
          var { done, value } = await reader.read();
          if (done) break;
          var chunk = decoder.decode(value, { stream: true });
          var lines = chunk.split('\n');
          for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            if (line.startsWith("data: ") && line !== "data: [DONE]") {
              try {
                var parsed = JSON.parse(line.substring(6));
                if (parsed.choices && parsed.choices[0].delta && parsed.choices[0].delta.content) {
                  botReply += parsed.choices[0].delta.content;
                  if (msgContainer) {
                    var formattedReply = botReply
                      .replace(/\n/g, "<br>")
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/`(.*?)`/g, "<code>$1</code>")
                      .replace(/\[(.*?)\]\((.*?)\)/g, '<a class="course-link" href="$2">$1</a>');
                    msgContainer.innerHTML = formattedReply + '<span class="cb-cursor">|</span>';
                    messagesEl.scrollTop = messagesEl.scrollHeight;
                  }
                }
              } catch (e) {}
            }
          }
        }
        
        // Finalize (remove cursor and save to history)
        if (msgContainer) {
          var formattedReply = botReply
            .replace(/\n/g, "<br>")
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/`(.*?)`/g, "<code>$1</code>")
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a class="course-link" href="$2">$1</a>');
          msgContainer.innerHTML = formattedReply;
        }
        chatHistory.push({ role: "assistant", content: botReply });
      } catch (err) {
        var loadEl2 = document.getElementById(loadingId);
        if (loadEl2) loadEl2.parentNode.innerHTML = "Oops! Network error connecting to the API. Are you offline or is the provider URL wrong?";
        chatHistory.pop();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderUI);
  } else {
    renderUI();
  }

  global.TeachChatBuddy = true;

})(window);
