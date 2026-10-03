import os
import sys
sys.path.append(os.path.dirname(__file__))
from helpers import build_lesson, save_course

# ==============================================================================
# COURSE 74: function-calling
# ==============================================================================
def make_course_74():
    lessons = [
        build_lesson(
            1, "what-is-function-calling-dispatcher", "What Is Function Calling? The Model as a Dispatcher", "Function Calling",
            "The foundational concept: language models do not execute code; they act as intelligent dispatchers emitting tool arguments.",
            "Does a language model directly execute database queries or API requests when performing function calling?",
            ["No; the model emits structured JSON arguments specifying which function to call, leaving execution strictly to your application code", "Yes; the model runs the code inside its neural network", "Yes; the model connects directly to the database socket", "No; models can only call Python scripts"],
            0, "The model acts as an intelligent reasoning dispatcher: it decides to call a tool and formats arguments, but the host application executes it.",
            [
                "<p>A common misconception about AI agents is that the model itself connects to databases, runs SQL queries, or makes Stripe charges. In reality, a language model is an isolated matrix multiplication engine with zero network sockets or disk permissions.</p>",
                "<p><strong>Function Calling (Tool Use)</strong> transforms the model into an <strong>Intelligent Dispatcher</strong>:</p>",
                "<ul><li><strong>1. Provide Tool Definitions:</strong> You pass a list of available tools (names, descriptions, and JSON Schemas) to the model API.</li><li><strong>2. The Model Decides:</strong> Based on the user's prompt, the model decides whether to answer in natural language or request a tool call.</li><li><strong>3. Emitting Arguments:</strong> If a tool is needed, the model emits a structured tool call object specifying the function name and arguments (e.g. <code>get_weather(city=\"Paris\")</code>).</li><li><strong>4. Application Execution:</strong> Your backend application reads the request, executes the real function in the real world, and feeds the result back to the model!</li></ul>",
                "<pre><code># The Function Calling Dispatch Loop:\n# 1. User: \"What is the stock price of Apple?\"\n# 2. Model emits tool call:\n{\n  \"name\": \"get_stock_quote\",\n  \"arguments\": \"{\\\"ticker\\\": \\\"AAPL\\\"}\"\n}\n# 3. Your Backend executes real API: quote = stock_api.fetch(\"AAPL\") -> 220.50\n# 4. Feed result back to model -> Model answers: \"Apple (AAPL) is currently $220.50.\"</code></pre>",
                "<div class=\"callout\"><p><strong>The Security Shield:</strong> Because your backend executes the tool, you retain absolute authority to enforce authentication, validate parameters, and block unauthorized operations before anything runs.</p></div>"
            ],
            "The Dispatcher Architecture", "Separating reasoning from physical execution",
            [
                {"title": "1. User Prompt", "lines": ["'Check order ORD-412'", "User submits query to app"]},
                {"title": "2. Model (Dispatcher)", "lines": ["Selects tool: get_order", "Emits arguments: {id: 'ORD-412'}"]},
                {"title": "3. Backend (Executor)", "lines": ["Executes SQL query in DB", "Captures JSON result"]},
                {"title": "4. Model (Synthesizer)", "lines": ["Receives result in context", "Synthesizes friendly answer"]}
            ],
            "Security Boundary Isolation", "Preventing unauthorized direct access",
            [
                {"title": "Neural Network Core", "lines": ["Zero socket / disk permissions", "Outputs structured text only"]},
                {"title": "Host Application Gate", "lines": ["Validates caller permissions", "Executes tool with strict safety controls"]}
            ],
            "Complete the function calling sentence",
            "In function calling, the model acts as an intelligent {1} that emits structured arguments, while the host application acts as the {2}.",
            [
                {"answer": "dispatcher", "hint": "Decides which tool to invoke and formats args", "options": ["dispatcher", "compiler", "database"]},
                {"answer": "executor", "hint": "Physically runs the function and captures output", "options": ["executor", "browser", "keyboard"]}
            ],
            [
                {"q": "What component of an AI application is responsible for physically executing a tool call?",
                 "a": ["The developer's host backend application code", "The OpenAI cloud neural network", "The user's web browser", "The internet service provider"],
                 "c": 0, "why": "The model only formats the function call request; execution happens strictly in the host environment."},
                {"q": "Can a model choose to answer a question directly without calling any tools?",
                 "a": ["Yes; if the user query does not require external data or actions, the model responds with standard natural language", "No; once tools are provided, the model must always call one", "Only if temperature is 0", "Only in Python"],
                 "c": 0, "why": "Models evaluate whether the prompt requires tools, responding directly if tools are unnecessary."},
                {"q": "What setting in the OpenAI API forces the model to call a specific tool unconditionally?",
                 "a": ["tool_choice={\"type\": \"function\", \"function\": {\"name\": \"my_tool\"}}", "force_tool=True", "must_call=1", "tools=all"],
                 "c": 0, "why": "The tool_choice parameter allows forcing the model to invoke a designated function."},
                {"q": "Why is function calling vastly superior to asking a model to 'write Python code that I will eval()'?",
                 "a": ["Executing arbitrary model-generated Python code with eval() is an extreme remote code execution (RCE) security vulnerability", "eval() is slow", "Python does not have eval", "Function calling only works on Tuesdays"],
                 "c": 0, "why": "Predefined tool schemas restrict the model to safe, auditable function signatures, preventing arbitrary RCE."}
            ],
            "You understand the dispatcher architecture behind LLM function calling.",
            "Defining Tool Schemas: Names, Descriptions, and Parameters", "Author precise tool schemas that models can invoke accurately."
        ),
        build_lesson(
            2, "defining-tool-schemas", "Defining Tool Schemas: Names, Descriptions, and Parameters", "Tool Schemas",
            "Authoring production tool schemas: function names, detailed descriptions, parameter typing, and JSON Schema definitions.",
            "What part of a tool schema is most critical for helping the model understand WHEN to invoke that specific tool?",
            ["The tool description: a clear explanation of what the tool does and in what situations it should be used", "The length of the function name", "The number of parameters", "The author's email address"],
            0, "The description acts as the primary instruction telling the model when and why to select that tool.",
            [
                "<p>A language model chooses which tool to invoke based on one thing: <strong>The Tool Schema</strong>. If your function name is cryptic (e.g. <code>tool_7()</code>) and lacks a description, the model will never know when to call it.</p>",
                "<p>A production tool definition follows the OpenAI/Anthropic standard format:</p>",
                "<ul><li><strong>1. Function Name:</strong> Clear, snake_case, action-oriented name (e.g. `get_weather`, `search_knowledge_base`, `create_github_issue`).</li><li><strong>2. Function Description:</strong> Detailed explanation of the tool's purpose and trigger conditions: <em>'Retrieve the current real-time stock quote for a public company ticker symbol.'</em></li><li><strong>3. Parameters (JSON Schema):</strong> The parameters object defining every argument, its type (`string`, `integer`), constraints, and <code>required</code> list.</li><li><strong>4. Parameter Descriptions:</strong> Micro-prompts explaining each parameter: <em>'The 1-5 character stock ticker symbol (e.g. AAPL, MSFT).'</em></li></ul>",
                "<pre><code># Defining a Tool Schema in Python (OpenAI Tools Format):\ntools = [{\n    \"type\": \"function\",\n    \"function\": {\n        \"name\": \"get_product_inventory\",\n        \"description\": \"Lookup available warehouse stock and pricing for a product by SKU.\",\n        \"parameters\": {\n            \"type\": \"object\",\n            \"properties\": {\n                \"sku\": {\"type\": \"string\", \"description\": \"Product SKU like PROD-8492\"},\n                \"warehouse_id\": {\"type\": \"string\", \"description\": \"Optional warehouse code (e.g. US-EAST)\"}\n            },\n            \"required\": [\"sku\"]\n        }\n    }\n}]</code></pre>",
                "<div class=\"callout\"><p><strong>The Pydantic Shortcut:</strong> In modern Python, you don't write raw JSON Schema dictionaries by hand. Decorate a standard Python function, and let Pydantic extract the schema automatically!</p></div>"
            ],
            "The 4 Elements of a Tool Schema", "How models perceive available tools",
            [
                {"title": "1. Name (Action)", "lines": ["'get_product_inventory'", "Descriptive, snake_case identifier"]},
                {"title": "2. Description (When)", "lines": ["'Lookup available stock for SKU'", "Model reads to determine intent"]},
                {"title": "3. Parameters (What)", "lines": ["sku: string, warehouse: string", "Types and required property list"]},
                {"title": "4. Field Details (How)", "lines": ["'Format: PROD-1234'", "Micro-prompt guiding argument generation"]}
            ],
            "Pydantic Tool Compilation", "Generating schemas from Python type hints",
            [
                {"title": "Python Function", "lines": ["def search(query: str, limit: int = 10):", "Docstring explains behavior"]},
                {"title": "Compiled JSON Schema", "lines": ["OpenAI tool definition generated", "100% type-safe, zero manual JSON dictionaries"]}
            ],
            "Complete the tool schema sentence",
            "A tool definition provides a descriptive {1} explaining when to use the tool, and a {2} schema specifying required arguments and types.",
            [
                {"answer": "description", "hint": "Explanation of tool purpose", "options": ["description", "password", "compiler"]},
                {"answer": "parameters", "hint": "Arguments and JSON schema properties", "options": ["parameters", "hardware", "network"]}
            ],
            [
                {"q": "What happens if a tool schema omits field descriptions on its parameters?",
                 "a": ["The model must guess what values to provide, leading to formatted arguments that may violate expected formats", "The model crashes", "The tool is deleted", "The parameters become negative"],
                 "c": 0, "why": "Parameter descriptions inform the model of the expected format, units, and valid examples."},
                {"q": "How does the 'required' list in a tool schema constrain the model?",
                 "a": ["It specifies which parameters must be present in the generated arguments object for the call to be valid", "It requires the user to pay fees", "It forces the tool to run 10 times", "It requires Python 3"],
                 "c": 0, "why": "The required array defines non-optional parameters that the model must supply."},
                {"q": "Why is using enums inside parameter schemas beneficial for tools?",
                 "a": ["It restricts parameter values to a fixed set of approved options (e.g. units: ['celsius', 'fahrenheit'])", "It makes the network faster", "It converts text to numbers", "It is required by git"],
                 "c": 0, "why": "Enums prevent the model from passing invalid synonyms for categorical settings."},
                {"q": "Can you provide multiple tools (e.g. 10 tools) in a single API call?",
                 "a": ["Yes; modern models accept lists of dozens of tools and intelligently select the right one based on the prompt", "No; models can only have 1 tool", "Only on Linux", "Only if all tools have the same name"],
                 "c": 0, "why": "Models evaluate tool lists in parallel, choosing the most relevant tool for the active prompt."}
            ],
            "You know how to author expressive, bulletproof tool schemas for LLMs.",
            "Inspecting the Tool Call Response from the Model", "Parse the model's tool call request and extract arguments."
        ),
        build_lesson(
            3, "inspecting-tool-call-response", "Inspecting the Tool Call Response from the Model", "Tool Response",
            "Parsing tool call responses: finish_reason='tool_calls', extracting tool_call_id, and parsing JSON arguments.",
            "What finish_reason value does the model return when it decides to invoke a tool rather than emitting normal text?",
            ["finish_reason='tool_calls'", "finish_reason='stop'", "finish_reason='length'", "finish_reason='error'"],
            0, "When requesting a tool, the model returns finish_reason='tool_calls' and populates the tool_calls array.",
            [
                "<p>When you pass tools to an API call, you must inspect the response object to determine what the model decided to do. Did it finish talking, or is it asking you to execute a tool?</p>",
                "<p>When a model requests a tool, two things happen:</p>",
                "<ul><li><strong>1. `finish_reason == 'tool_calls'`:</strong> This status indicates that generation paused because a tool call was requested.</li><li><strong>2. `message.tool_calls`:</strong> A list of tool call objects containing the unique <code>id</code>, function <code>name</code>, and serialized JSON <code>arguments</code>.</li></ul>",
                "<pre><code># Inspecting a Tool Call Response in Python:\nresponse = client.chat.completions.create(\n    model=\"gpt-4o\",\n    messages=messages,\n    tools=tools\n)\nmessage = response.choices[0].message\n\nif response.choices[0].finish_reason == \"tool_calls\":\n    for tool_call in message.tool_calls:\n        print(f\"Tool ID:   {tool_call.id}\")           # e.g. 'call_91823ab'\n        print(f\"Function:  {tool_call.function.name}\") # e.g. 'get_product_inventory'\n        # Parse the JSON arguments string:\n        args = json.loads(tool_call.function.arguments)\n        print(f\"Arguments: {args}\")                   # e.g. {'sku': 'PROD-8492'}</code></pre>",
                "<div class=\"callout\"><p><strong>The Tool Call ID:</strong> Note the unique `tool_call_id`! You must save this ID because you will need to attach it to the tool execution result when sending it back to the model.</p></div>"
            ],
            "Tool Call Response Anatomy", "Inspecting the model's execution request",
            [
                {"title": "finish_reason: 'tool_calls'", "lines": ["Indicates model paused for tool execution", "Not a standard text response"]},
                {"title": "tool_call.id", "lines": ["Unique string identifier (e.g. call_8492)", "Must be paired with result"]},
                {"title": "tool_call.function.name", "lines": ["Exact function to dispatch", "Matches your schema definition"]},
                {"title": "tool_call.function.arguments", "lines": ["Serialized JSON string", "Parsed via json.loads()"]}
            ],
            "Branching Execution Flow", "Handling tool call vs text completion",
            [
                {"title": "If finish_reason == 'tool_calls'", "lines": ["Dispatch tool execution in backend", "Prepare tool response message"]},
                {"title": "If finish_reason == 'stop'", "lines": ["Model finished speaking", "Deliver text to user"]}
            ],
            "Complete the tool response sentence",
            "When requesting a tool, the model sets finish_reason to {1} and emits a unique tool {2} that must be paired with the result.",
            [
                {"answer": "tool_calls", "hint": "The tool call finish reason string", "options": ["tool_calls", "stop", "length"]},
                {"answer": "id", "hint": "Unique call identifier", "options": ["id", "password", "compiler"]}
            ],
            [
                {"q": "What datatype is message.tool_calls[0].function.arguments in the OpenAI API response?",
                 "a": ["A serialized JSON string that must be parsed using json.loads() in Python", "A Python dictionary", "An integer", "A binary byte stream"],
                 "c": 0, "why": "Arguments are returned as a JSON string and must be parsed into an object."},
                {"q": "Why is the unique 'tool_call_id' required when sending results back to the model?",
                 "a": ["It allows the model to match which result corresponds to which specific tool request, especially during parallel calls", "It is used for billing", "It encrypts the response", "It resets the session"],
                 "c": 0, "why": "IDs bind tool results to their original requests, essential for multi-tool parallel calls."},
                {"q": "What should your code do if json.loads(tool_call.function.arguments) raises a JSONDecodeError?",
                 "a": ["Catch the error and return an error message to the model in the tool response so the model can correct its arguments", "Crash the server", "Delete the database", "Ignore the error"],
                 "c": 0, "why": "Passing parsing errors back to the model allows it to self-correct its arguments."},
                {"q": "Can a model emit both text content and a tool call in the same response?",
                 "a": ["Yes; modern models can emit an optional text thought or explanation alongside the tool call", "No; it is strictly one or the other", "Only in C++", "Only on Mondays"],
                 "c": 0, "why": "Models often include conversational context or thinking text alongside tool requests."}
            ],
            "You know how to inspect and parse tool call responses from language models.",
            "Executing the Tool and Formatting the Tool Result", "Execute the function safely and return results in the tool role format."
        ),
        build_lesson(
            4, "executing-tool-and-formatting-result", "Executing the Tool and Formatting the Tool Result", "Tool Results",
            "Executing the requested function, capturing outputs, and feeding results back using the 'tool' message role.",
            "What message role is used when appending a tool's execution result back into the conversation array?",
            ["role='tool' (with tool_call_id specified)", "role='system'", "role='user'", "role='assistant'"],
            0, "Tool results are passed as messages with role='tool' accompanied by the corresponding tool_call_id.",
            [
                "<p>Once you parse the tool name and arguments, your application executes the real code. But how do you return the result to the model so it can formulate its final answer?</p>",
                "<p>You append <strong>two sequential messages</strong> to the conversation array:</p>",
                "<ul><li><strong>1. The Assistant's Tool Call Request:</strong> You must append the model's message (containing the `tool_calls` array) to the conversation history.</li><li><strong>2. The Tool Result Message:</strong> You append a message with <code>role: \"tool\"</code>, the matching <code>tool_call_id</code>, and the serialized JSON <code>content</code> representing the function's output.</li></ul>",
                "<pre><code># Executing and Formatting Tool Results:\n# Step 1: Execute real Python function:\nresult_data = execute_database_query(args[\"sku\"])\n\n# Step 2: Append Assistant request to history:\nmessages.append(message) # The model's own response object!\n\n# Step 3: Append Tool result message to history:\nmessages.append({\n    \"role\": \"tool\",\n    \"tool_call_id\": tool_call.id, # MUST MATCH THE REQUEST ID!\n    \"content\": json.dumps(result_data) # Serialized result payload\n})\n\n# Step 4: Call model again to synthesize final answer!\nfinal_response = client.chat.completions.create(model=\"gpt-4o\", messages=messages)</code></pre>",
                "<div class=\"callout\"><p><strong>The Pairing Invariant:</strong> Every `tool` message in history must correspond to a preceding `tool_call_id` in an assistant message. If IDs are missing or mismatched, the API rejects the request.</p></div>"
            ],
            "The Tool Result Message Sequence", "Pairing requests with tool results in history",
            [
                {"title": "1. User Message", "lines": ["role: 'user', content: 'Check inventory'"]},
                {"title": "2. Assistant Message", "lines": ["role: 'assistant', tool_calls: [{id: 'call_1', name: 'check_stock'}]"]},
                {"title": "3. Tool Result Message", "lines": ["role: 'tool', tool_call_id: 'call_1', content: '{\"stock\": 42}'"]},
                {"title": "4. Final Assistant Answer", "lines": ["role: 'assistant', content: 'We have 42 items in stock!'"]}
            ],
            "String Serialization Requirement", "Passing data back as JSON strings",
            [
                {"title": "Python Dictionary Output", "lines": ["{'status': 'available', 'qty': 42}"]},
                {"title": "json.dumps() Serialization", "lines": ["content: '{\"status\": \"available\", \"qty\": 42}'", "String payload required by API"]}
            ],
            "Complete the tool result sentence",
            "Tool results are returned in messages with role {1}, linked to the request by {2}, and serialized as JSON text strings.",
            [
                {"answer": "tool", "hint": "The dedicated tool message role", "options": ["tool", "user", "system"]},
                {"answer": "tool_call_id", "hint": "Matching call identifier", "options": ["tool_call_id", "password", "compiler"]}
            ],
            [
                {"q": "What happens if you omit the assistant's tool_call message from history and only append the tool result?",
                 "a": ["The API throws an HTTP 400 error because tool messages must be preceded by an assistant message containing the matching tool_call_id", "The API works anyway", "The model guesses the call", "The server restarts"],
                 "c": 0, "why": "APIs enforce strict structural pairing: an assistant tool_call must precede its corresponding tool result."},
                {"q": "What datatype must the 'content' field be in a role='tool' message?",
                 "a": ["A string (typically JSON serialized via json.dumps())", "A Python dictionary", "An integer", "A binary file"],
                 "c": 0, "why": "Message content in chat completion arrays is always a string."},
                {"q": "Can tool results contain error messages if the physical tool failed?",
                 "a": ["Yes; passing error details in the tool content allows the model to explain the failure or try a different approach", "No; tools are forbidden from failing", "Errors crash the API", "Errors must be hidden from models"],
                 "c": 0, "why": "Feeding execution errors back to the model enables graceful error handling and self-correction."},
                {"q": "What does the model do once it receives the tool result message in context?",
                 "a": ["It synthesizes a natural language response answering the user's original query based on the data provided", "It calls the tool again in an infinite loop", "It deletes the result", "It closes the connection"],
                 "c": 0, "why": "The model uses the newly provided tool data to complete its answer for the user."}
            ],
            "You know how to execute tools and format result messages correctly.",
            "The Execution Loop: Multi-Turn Tool Interactions", "Build iterative agent loops that execute tools until goals are met."
        ),
        build_lesson(
            5, "execution-loop-multi-turn", "The Execution Loop: Multi-Turn Tool Interactions", "Agent Loops",
            "Building the full agentic loop: while finish_reason == 'tool_calls', execute tools, feed results, and repeat until done.",
            "How does an AI agent execute multi-step workflows (e.g. search for user, get their orders, process refund)?",
            ["By running an automated while-loop that executes tools and feeds results back to the model until finish_reason is 'stop'", "By predicting all steps in one single turn", "By asking human permission for every keystroke", "By running three models at once"],
            0, "The agent loop iterates through tool calls and observations until the model determines the goal is satisfied.",
            [
                "<p>A single tool call is useful, but real engineering tasks require <strong>multi-turn sequences</strong>: search for a customer by email $\\rightarrow$ get their order ID $\\rightarrow$ inspect order status $\\rightarrow$ issue refund $\\rightarrow$ send confirmation. This multi-step agency is driven by the <strong>Execution Loop</strong>.</p>",
                "<p>The Universal Agent Loop Algorithm:</p>",
                "<ul><li><strong>1. Call Model:</strong> Send conversation history and tool schemas.</li><li><strong>2. Check Finish Reason:</strong> If `finish_reason == 'stop'`, break the loop and return the final text to the user!</li><li><strong>3. Execute Tools:</strong> If `finish_reason == 'tool_calls'`, iterate through all requested tools, execute them, and append results.</li><li><strong>4. Repeat:</strong> Loop back to Step 1 with updated history!</li><li><strong>5. Circuit Breaker:</strong> Limit the loop to a maximum iteration count (e.g. `max_turns = 10`) to prevent runaway infinite loops!</li></ul>",
                "<pre><code># The Autonomous Agent Loop in Python:\ndef run_agent_loop(user_query, max_turns=10):\n    messages = [{\"role\": \"user\", \"content\": user_query}]\n    \n    for turn in range(max_turns):\n        response = client.chat.completions.create(model=\"gpt-4o\", messages=messages, tools=tools)\n        msg = response.choices[0].message\n        messages.append(msg) # Record model turn\n        \n        if response.choices[0].finish_reason == \"stop\":\n            return msg.content # Goal accomplished! Return final answer!\n            \n        if response.choices[0].finish_reason == \"tool_calls\":\n            for call in msg.tool_calls:\n                result = dispatch_tool(call.function.name, json.loads(call.function.arguments))\n                messages.append({\"role\": \"tool\", \"tool_call_id\": call.id, \"content\": json.dumps(result)})\n    raise RuntimeError(\"Agent exceeded maximum turn limit!\")</code></pre>",
                "<div class=\"callout\"><p><strong>The Circuit Breaker:</strong> Never write a `while True` loop without a hard turn ceiling. A runaway agent loop can burn thousands of dollars in minutes.</p></div>"
            ],
            "The Autonomous Agent Loop", "The repeating while finish_reason == 'tool_calls' cycle",
            [
                {"title": "1. Model Turn", "lines": ["Evaluates state & prompt", "Emits tool request or final answer"]},
                {"title": "2. Decision Gate", "lines": ["If 'stop' -> Return answer to user!", "If 'tool_calls' -> Proceed to execution"]},
                {"title": "3. Dispatch & Append", "lines": ["Execute tool in backend", "Append tool result to history"]},
                {"title": "4. Loop Back", "lines": ["Repeat with updated context", "Bounded by max_turns circuit breaker"]}
            ],
            "Multi-Step Workflow Trace", "Executing a sequence of connected actions",
            [
                {"title": "Turn 1", "lines": ["Call: find_user(email='bob@...')", "Result: user_id = 42"]},
                {"title": "Turn 2", "lines": ["Call: get_orders(user_id=42)", "Result: order_id = ORD-99"]},
                {"title": "Turn 3", "lines": ["Call: refund_order(ORD-99)", "Result: status = 'refunded'"]},
                {"title": "Turn 4 (Stop)", "lines": ["Emits: 'I refunded order ORD-99.'", "Goal complete!"]}
            ],
            "Complete the agent loop sentence",
            "The agent execution loop repeatedly dispatches tools and feeds results back to the model until finish_reason is {1}, bounded by a maximum {2} limit.",
            [
                {"answer": "stop", "hint": "Normal completion status", "options": ["stop", "pause", "error"]},
                {"answer": "turn", "hint": "Maximum iteration circuit breaker", "options": ["turn", "character", "file"]}
            ],
            [
                {"q": "Why is a hard turn ceiling (e.g. max_turns = 10) mandatory in autonomous agent loops?",
                 "a": ["It prevents infinite loops and catastrophic token billing if the agent gets trapped in a cycle or encounters a persistent error", "It is required by Python syntax", "GPUs shut down after 10 turns", "Tokens expire after 10 turns"],
                 "c": 0, "why": "Circuit breakers protect against runaway loops and unbounded API financial costs."},
                {"q": "How does the model know when to stop calling tools and deliver the final answer?",
                 "a": ["The model evaluates its prompt goal and determines that all required information has been gathered, emitting text with finish_reason='stop'", "The user presses enter", "The computer processor stops", "The database closes"],
                 "c": 0, "why": "The model's internal reasoning detects goal completion, shifting from tool calls to final answer generation."},
                {"q": "What happens to the conversation history array as the agent loop iterates?",
                 "a": ["It grows with each turn, accumulating all tool calls and tool results as shared context for subsequent steps", "It shrinks to zero", "It deletes past messages", "It encrypts older turns"],
                 "c": 0, "why": "Accumulated tool calls and observations provide the working memory for multi-step reasoning."},
                {"q": "What should the agent loop do if a tool execution throws an uncaught Python exception?",
                 "a": ["Catch the exception, format it as an informative error string, and feed it back in a tool result message for self-correction", "Crash the entire application immediately", "Delete the database", "Ignore the exception"],
                 "c": 0, "why": "Feeding errors back to the model allows it to adjust parameters or choose an alternative tool."}
            ],
            "You know how to build autonomous, multi-turn tool execution loops.",
            "Multiple Tool Calls in a Single Turn (Parallel Calling)", "Execute independent tools concurrently to slash latency."
        ),
        build_lesson(
            6, "parallel-tool-calling", "Multiple Tool Calls in a Single Turn (Parallel Calling)", "Parallel Tools",
            "Parallel tool execution: how models emit multiple tool calls in a single turn, and executing them concurrently with asyncio.",
            "Why is Parallel Tool Calling significantly faster than sequential tool execution?",
            ["The model requests multiple independent tools in one turn, allowing the backend to execute them concurrently with asyncio.gather()", "Parallel calling runs on quantum computers", "Parallel calling deletes the database", "Parallel tools are free"],
            0, "Concurrent execution slashes latency by executing multiple independent queries or API calls simultaneously.",
            [
                "<p>If a user asks: <em>'Compare the stock price of Apple, Microsoft, and Google'</em>, an old sequential agent would require three full round trips: Call Apple $\\rightarrow$ Wait $\\rightarrow$ Call Microsoft $\\rightarrow$ Wait $\\rightarrow$ Call Google $\\rightarrow$ Wait. Total latency: 9 seconds.</p>",
                "<p>Modern models support <strong>Parallel Tool Calling</strong>: the model analyzes the prompt and emits <strong>all three tool calls in a single response turn</strong>!</p>",
                "<pre><code># The Parallel Tool Call Response:\n# message.tool_calls contains THREE items simultaneously:\n# - call_1: get_stock(ticker=\"AAPL\")\n# - call_2: get_stock(ticker=\"MSFT\")\n# - call_3: get_stock(ticker=\"GOOGL\")\n\n# Your backend executes all three CONCURRENTLY using asyncio:\nresults = await asyncio.gather(\n    fetch_stock(\"AAPL\"),\n    fetch_stock(\"MSFT\"),\n    fetch_stock(\"GOOGL\")\n)\n# Total execution time drops from 9 seconds to 1 second!</code></pre>",
                "<p>To return results, you append a <code>role: \"tool\"</code> message for <strong>every individual tool_call_id</strong> before calling the model again. The model then synthesizes all three results together!</p>",
                "<div class=\"callout\"><p><strong>The Async Rule:</strong> Always execute multiple tool calls concurrently using `asyncio.gather()` or thread pools. Never run independent tool calls serially in a for-loop.</p></div>"
            ],
            "Sequential vs Parallel Tool Execution", "Slashing multi-tool latency by 3x-5x",
            [
                {"title": "Sequential Execution (Slow)", "lines": ["Turn 1: Call AAPL -> Wait 1s", "Turn 2: Call MSFT -> Wait 1s", "Turn 3: Call GOOGL -> Wait 1s (Total: 6s)"]},
                {"title": "Parallel Execution (Fast)", "lines": ["Model emits all 3 calls in Turn 1", "Backend runs all 3 in parallel via asyncio", "Finished in 1s (3x speedup!)"]}
            ],
            "Parallel Result Resolution Flow", "Matching multiple results to request IDs",
            [
                {"title": "Model Requests", "lines": ["call_A: AAPL, call_B: MSFT"]},
                {"title": "Parallel Execution", "lines": ["fetch_quote() runs concurrently"]},
                {"title": "Tool Messages Appended", "lines": ["tool_msg(call_A, 220), tool_msg(call_B, 410)", "All IDs satisfied -> Model answers!"]}
            ],
            "Complete the parallel tool sentence",
            "Parallel tool calling emits multiple tool requests in one turn, allowing backends to execute them concurrently with {1} to slash {2}.",
            [
                {"answer": "asyncio", "hint": "Python asynchronous concurrency library", "options": ["asyncio", "bash", "HTML"]},
                {"answer": "latency", "hint": "Total wait time for execution", "options": ["latency", "font size", "license"]}
            ],
            [
                {"q": "How does an application know if the model emitted multiple tool calls in a single turn?",
                 "a": ["By checking len(message.tool_calls): if greater than 1, multiple tool calls were requested", "By checking if the text has commas", "By waiting 5 seconds", "By counting words"],
                 "c": 0, "why": "The message.tool_calls list contains all individual tool call objects emitted in that turn."},
                {"q": "What happens if a backend only returns results for 2 out of 3 requested parallel tool calls?",
                 "a": ["The API will return an error because every tool_call_id emitted by the assistant must have a matching tool response message", "The model ignores the missing tool", "The computer restarts", "The third tool runs automatically"],
                 "c": 0, "why": "API contracts require that all tool_call_ids in a turn must be resolved before proceeding."},
                {"q": "What Python function runs multiple asynchronous coroutines concurrently?",
                 "a": ["asyncio.gather(*tasks)", "time.sleep()", "os.fork()", "thread.stop()"],
                 "c": 0, "why": "asyncio.gather fires all coroutines concurrently, awaiting until all have finished."},
                {"q": "Can a model call two different tools in parallel (e.g. check_weather and check_traffic simultaneously)?",
                 "a": ["Yes; parallel tool calling supports calling different functions with different schemas in the same turn", "No; parallel calls must be the same function", "Only in JavaScript", "Only on Sundays"],
                 "c": 0, "why": "Models can interleave completely different tool definitions in a single parallel turn."}
            ],
            "You know how to execute multiple tool calls concurrently using asynchronous pipelines.",
            "Tool Error Handling: Passing Errors Back to the Model", "Enable agents to self-correct by feeding execution errors into context."
        ),
        build_lesson(
            7, "tool-error-handling-self-correction", "Tool Error Handling: Passing Errors Back to the Model", "Error Feedback",
            "Turning tool failures into learning loops: capturing exceptions, formatting error payloads, and model self-correction.",
            "What should a backend do when a tool fails with an error (e.g. 'City not found' or 'Database connection timeout')?",
            ["Return an informative JSON error message in the tool result content so the model can understand the failure and self-correct", "Crash the entire backend application", "Hide the error and return an empty string", "Delete the user account"],
            0, "Passing structured error details back in the tool result allows the model to adjust parameters or explain the issue.",
            [
                "<p>In traditional programming, an unhandled exception crashes the process. But in an AI agent loop, <strong>a tool failure is an observation</strong>. If an agent calls <code>get_weather(city=\"Phily\")</code>, and your weather API returns a 404 error, you don't crash the server.</p>",
                "<p>You return the error as a <strong>first-class tool result</strong>:</p>",
                "<pre><code># Feeding Tool Errors Back to the Model:\n# Tool execution caught an error:\ntool_result = {\n    \"status\": \"error\",\n    \"error_code\": \"CITY_NOT_FOUND\",\n    \"message\": \"City 'Phily' was not found. Did you mean 'Philadelphia'?\"\n}\n\n# Return this error payload as the tool message content!\nmessages.append({\n    \"role\": \"tool\",\n    \"tool_call_id\": tool_call.id,\n    \"content\": json.dumps(tool_result)\n})</code></pre>",
                "<p>What does the model do when it reads this error? It exhibits <strong>Autonomous Self-Correction</strong>: it says: <em>'Oh, let me try searching for Philadelphia instead!'</em> and issues a corrected tool call in the next turn!</p>",
                "<div class=\"callout\"><p><strong>The Helpful Error Rule:</strong> Write your tool error messages for the model to read! Include actionable guidance: <em>'Invalid date format. Expected YYYY-MM-DD, received MM/DD/YYYY.'</em></p></div>"
            ],
            "The Self-Correction Error Loop", "Transforming exceptions into actionable observations",
            [
                {"title": "1. Flawed Tool Call", "lines": ["get_weather(city='Phily')", "Typo in city name parameter"]},
                {"title": "2. Informative Error Result", "lines": ["'CITY_NOT_FOUND. Did you mean Philadelphia?'", "Returned in role: 'tool' content"]},
                {"title": "3. Autonomous Recovery", "lines": ["Model issues corrected tool call", "get_weather(city='Philadelphia') -> SUCCESS!"]}
            ],
            "Uninformative vs Actionable Errors", "Guiding model self-correction",
            [
                {"title": "Uninformative: 'Error 500'", "lines": ["Model has zero clue what failed", "Trashes blindly or hallucinates"]},
                {"title": "Actionable: 'SKU must start with PROD-'", "lines": ["Pinpoints exact formatting requirement", "Model corrects syntax immediately"]}
            ],
            "Complete the tool error handling sentence",
            "Capturing tool exceptions and returning informative {1} payloads enables the model to perform autonomous {2} in subsequent turns.",
            [
                {"answer": "error", "hint": "Actionable diagnostic feedback", "options": ["error", "credit", "license"]},
                {"answer": "self-correction", "hint": "Fixing its own parameters", "options": ["self-correction", "deletion", "compilation"]}
            ],
            [
                {"q": "Why is returning 'Invalid date format. Expected YYYY-MM-DD' better than raising an unhandled exception?",
                 "a": ["It allows the model to read the expected format, correct its arguments, and retry successfully without crashing the app", "It saves hard drive space", "It makes Python run faster", "Exceptions are illegal in web APIs"],
                 "c": 0, "why": "Explicit format feedback gives the model the exact information needed to formulate a valid retry."},
                {"q": "What should the agent do if a tool repeatedly returns a permanent permission error (e.g. '403 Forbidden')?",
                 "a": ["Stop calling the tool and explain to the user in natural language that access to that resource is denied", "Retry 1,000 times", "Delete the user's files", "Invent a fake answer"],
                 "c": 0, "why": "Permanent permission failures should be communicated clearly to the user rather than retried."},
                {"q": "How does formatting tool errors as structured JSON objects benefit the model?",
                 "a": ["It provides clean key-value separation between error codes, messages, and suggestions that models parse reliably", "It turns off the terminal", "It encrypts the error", "It reduces GPU voltage"],
                 "c": 0, "why": "Structured error dictionaries provide unambiguous diagnostic signals."},
                {"q": "What circuit breaker should wrap tool execution error loops?",
                 "a": ["A retry count limit (e.g. max 3 retries per tool) to prevent the agent from thrashing indefinitely on unfixable errors", "A physical fuse", "A battery backup", "A software license"],
                 "c": 0, "why": "Capping retries prevents infinite loops when an underlying dependency is broken."}
            ],
            "You know how to design self-correcting tool error feedback loops.",
            "Security: Guardrails, Confirmations, and Read-Only Boundaries", "Safeguard production systems from unauthorized tool actions."
        ),
        build_lesson(
            8, "security-guardrails-confirmations-boundaries", "Security: Guardrails, Confirmations, and Read-Only Boundaries", "Tool Security",
            "Tool security engineering: human confirmation gates, read-only vs write boundaries, and preventing rogue tool actions.",
            "Why must destructive tool actions (like deleting records or executing financial charges) require human confirmation?",
            ["Language models are probabilistic; a prompt injection or hallucinated argument could trigger irreversible real-world damage", "Models do not have credit cards", "Destructive actions take too much memory", "Computers refuse to delete data"],
            0, "Probabilistic models must never have unconstrained authority to execute irreversible, destructive operations.",
            [
                "<p>When you give an AI model tools, you give it <strong>the power to alter the real physical and financial world</strong>. If an agent has a tool named <code>delete_all_users()</code> or <code>send_wire_transfer()</code>, an indirect prompt injection attack can trick the agent into executing catastrophic actions.</p>",
                "<p>Professional tool security enforces three non-negotiable boundaries:</p>",
                "<ul><li><strong>1. Read vs Write Separation:</strong> Separate tools into safe read-only queries (`search_orders`, `view_balance`) and sensitive write operations (`cancel_order`, `refund_charge`). Read operations run autonomously; write operations require authorization.</li><li><strong>2. Human-in-the-Loop Confirmation Gates:</strong> For sensitive tools, the backend does NOT execute the action immediately! It halts, generates a confirmation dialog for the user (<em>'Confirm refund of $150 to Customer A?'</em>), and executes only after explicit human approval!</li><li><strong>3. Scope and Permission Scoping:</strong> Tools must only operate with the credentials of the authenticated user, never as an unconstrained root superuser.</li></ul>",
                "<pre><code># Secure Human Confirmation Gate Pattern:\ndef dispatch_tool(tool_name, args, current_user):\n    # 1. Safe Read-Only Tool -> Execute autonomously!\n    if tool_name == \"search_invoices\":\n        return execute_search(args, user_id=current_user.id)\n        \n    # 2. High-Consequence Write Tool -> Require Human Confirmation!\n    if tool_name == \"issue_refund\":\n        confirmation_token = generate_confirmation_token(args)\n        return {\n            \"status\": \"confirmation_required\",\n            \"message\": f\"A refund of ${args['amount']} requires human approval.\",\n            \"confirmation_url\": f\"/confirm?token={confirmation_token}\"\n        }</code></pre>",
                "<div class=\"callout\"><p><strong>The Principle of Least Privilege:</strong> Never give an agent a tool it does not strictly need. And never give an agent unconstrained authority to destroy data or spend money without human verification.</p></div>"
            ],
            "Tool Security Classification", "Safe read tools vs high-consequence write tools",
            [
                {"title": "Safe Read-Only Tools (Autonomous)", "lines": ["search_catalog(), view_orders()", "Zero state mutation, safe to execute automatically"]},
                {"title": "Sensitive Write Tools (Gated)", "lines": ["delete_account(), transfer_funds()", "Irreversible blast radius -> Mandatory human confirmation!"]}
            ],
            "Human Confirmation Architecture", "Pausing execution for authorization",
            [
                {"title": "Agent Requests Action", "lines": ["issue_refund(amount=500)", "Model attempts write action"]},
                {"title": "Backend Intercepts Gate", "lines": ["Halts execution, generates token", "Presents confirmation UI to human"]},
                {"title": "Human Confirms / Denies", "lines": ["User clicks 'Approve'", "Action executes safely"]}
            ],
            "Complete the tool security sentence",
            "Destructive tool actions enforce human {1} gates and the principle of least {2} to prevent unauthorized operations.",
            [
                {"answer": "confirmation", "hint": "Manual approval checkpoint", "options": ["confirmation", "formatting", "typing"]},
                {"answer": "privilege", "hint": "Granting only minimum required permissions", "options": ["privilege", "hardware", "bandwidth"]}
            ],
            [
                {"q": "What is the 'Principle of Least Privilege' in AI tool design?",
                 "a": ["Granting the agent access only to the minimal set of tools and data permissions strictly necessary to accomplish its specific task", "Giving the agent root access to everything", "Making tools free of charge", "Writing tools in Python"],
                 "c": 0, "why": "Least privilege minimizes the potential attack surface and blast radius of failures."},
                {"q": "How can an attacker exploit an unconstrained email-sending tool via indirect prompt injection?",
                 "a": ["By hiding malicious instructions in a webpage that trick the agent into using the tool to send spam or exfiltrate private data", "By changing the email font", "By deleting the email server", "By unplugging the computer"],
                 "c": 0, "why": "Prompt injections can hijack tool calling to dispatch unauthorized emails or exfiltrate secrets."},
                {"q": "Why should tool database queries always be scoped to the authenticated user's ID?",
                 "a": ["To prevent Insecure Direct Object References (IDOR), ensuring the agent cannot view or modify another user's data", "To make queries run 10x faster", "Because databases require user IDs", "To reduce RAM usage"],
                 "c": 0, "why": "Enforcing user ownership in queries blocks cross-tenant data leaks and unauthorized access."},
                {"q": "What is the ultimate role of the human engineer in tool-connected AI systems?",
                 "a": ["The security architect who designs guardrails, defines permission boundaries, and acts as the final confirmation authority", "The person who types every database row manually", "A spectator with no authority", "The person who pays the electricity bill"],
                 "c": 0, "why": "Engineers build the security fences and verification gates that keep automated systems safe."}
            ],
            "You have completed the Function Calling & Tool Use course.",
            "Next Course: Retrieval-Augmented Generation (RAG)", "Learn how to ground AI models in your own private knowledge bases with vector search."
        )
    ]

    glossary = [
        {"id": "dispatch", "title": "Dispatch & Schemas", "terms": [
            {"term": "Function Calling", "def": "A mechanism where models emit structured JSON arguments to invoke external host application tools.", "lesson": 1, "tags": ["tools", "architecture"]},
            {"term": "Tool Schema", "def": "A formal JSON Schema specifying a tool's name, purpose description, and parameter types.", "lesson": 2, "tags": ["schemas", "tools"]},
            {"term": "Tool Call ID", "def": "A unique string identifier binding a model's tool execution request to its subsequent result message.", "lesson": 3, "tags": ["api", "protocols"]}
        ]},
        {"id": "execution", "title": "Execution & Concurrency", "terms": [
            {"term": "Tool Message Role", "def": "The dedicated message role (role='tool') used to return function results back into conversation context.", "lesson": 4, "tags": ["api", "roles"]},
            {"term": "Parallel Tool Calling", "def": "The capability of a model to request multiple independent tools in a single turn for concurrent execution.", "lesson": 6, "tags": ["performance", "concurrency"]},
            {"term": "Agent Execution Loop", "def": "An iterative cycle executing tool calls and feeding results back until the model determines completion.", "lesson": 5, "tags": ["agents", "loops"]}
        ]},
        {"id": "resilience", "title": "Resilience & Recovery", "terms": [
            {"term": "Circuit Breaker", "def": "A maximum turn ceiling (e.g. 10 turns) halting agent loops to prevent infinite execution and runaway bills.", "lesson": 5, "tags": ["safety", "limits"]},
            {"term": "Autonomous Self-Correction", "def": "The ability of a model to read tool error feedback and emit corrected arguments in a subsequent turn.", "lesson": 7, "tags": ["agents", "resilience"]},
            {"term": "Actionable Error", "def": "An error message containing explicit guidance and expected formats that allows models to self-correct.", "lesson": 7, "tags": ["debugging", "tools"]}
        ]},
        {"id": "security", "title": "Security & Boundaries", "terms": [
            {"term": "Confirmation Gate", "def": "A mandatory manual approval checkpoint requiring human authorization before executing destructive write tools.", "lesson": 8, "tags": ["security", "governance"]},
            {"term": "Least Privilege", "def": "Restricting an agent's available tools and data access strictly to what is necessary for the active task.", "lesson": 8, "tags": ["security", "architecture"]},
            {"term": "Read-Only Boundary", "def": "Separating autonomous read queries from sensitive state-mutating write operations.", "lesson": 8, "tags": ["architecture", "security"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "OpenAI Tool Definition Schema",
            "label": "Standard tool specification",
            "code": "tools = [{\n    \"type\": \"function\",\n    \"function\": {\n        \"name\": \"fetch_customer_order\",\n        \"description\": \"Retrieve order details and shipping status by order ID.\",\n        \"parameters\": {\n            \"type\": \"object\",\n            \"properties\": {\n                \"order_id\": {\"type\": \"string\", \"description\": \"Format ORD-12345\"}\n            },\n            \"required\": [\"order_id\"]\n        }\n    }\n}]",
            "lessonN": 2, "lessonSlug": "defining-tool-schemas", "lessonTitle": "Defining Tool Schemas: Names, Descriptions, and Parameters"
        },
        {
            "title": "Complete Agent Tool Execution Loop",
            "label": "Iterative while loop",
            "code": "while True:\n    res = client.chat.completions.create(model=\"gpt-4o\", messages=messages, tools=tools)\n    msg = res.choices[0].message\n    messages.append(msg)\n    if res.choices[0].finish_reason == \"stop\": break\n    for call in msg.tool_calls:\n        result = dispatch(call.function.name, json.loads(call.function.arguments))\n        messages.append({\"role\": \"tool\", \"tool_call_id\": call.id, \"content\": json.dumps(result)})",
            "lessonN": 5, "lessonSlug": "execution-loop-multi-turn", "lessonTitle": "The Execution Loop: Multi-Turn Tool Interactions"
        },
        {
            "title": "Parallel Tool Execution with AsyncIO",
            "label": "Concurrent execution",
            "code": "import asyncio\n# Execute multiple tool calls concurrently:\ntasks = [dispatch_async(c.function.name, json.loads(c.function.arguments)) for c in tool_calls]\nresults = await asyncio.gather(*tasks)",
            "lessonN": 6, "lessonSlug": "parallel-tool-calling", "lessonTitle": "Multiple Tool Calls in a Single Turn (Parallel Calling)"
        },
        {
            "title": "Self-Correcting Tool Error Return",
            "label": "Returning exceptions as observations",
            "code": "try:\n    result = run_query(args)\nexcept Exception as e:\n    result = {\"status\": \"error\", \"message\": f\"Query failed: {str(e)}. Check column names.\"}\nmessages.append({\"role\": \"tool\", \"tool_call_id\": call.id, \"content\": json.dumps(result)})",
            "lessonN": 7, "lessonSlug": "tool-error-handling-self-correction", "lessonTitle": "Tool Error Handling: Passing Errors Back to the Model"
        }
    ]

    course_data = {
        "id": "function-calling",
        "title": "Function Calling & Tool Use",
        "num": 74,
        "emoji": "🛠️",
        "desc": "Letting a model request actions: tool schemas, arguments, results and the loop that ties them together.",
        "topics": ["Function Calling", "Tool Use", "Tool Schemas", "Dispatcher Pattern", "Agent Loops", "Parallel Calling", "Self-Correction", "Tool Security"],
        "mission": "# Mission — Function Calling & Tool Use\n\nTransform passive language models into active computational agents with tools. Master the dispatcher architecture separating reasoning from execution, author robust tool schemas with parameter constraints, inspect tool call responses and extract arguments, format tool result messages with matching call IDs, build multi-turn execution loops with circuit breakers, execute parallel tool calls with asyncio, return self-correcting error feedback, and enforce strict human confirmation gates.",
        "notes": "# Notes — Function Calling & Tool Use\n\nThe model is the brain; the application is the hands. Never execute destructive write actions without explicit human authorization gates.",
        "resources": "# Resources — Function Calling & Tool Use\n\n- OpenAI, *Function Calling & Tools Documentation*\n- Anthropic, *Tool Use (Function Calling) Guide*\n- LangChain / LangGraph, *Agent & Tool Orchestration*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# ==============================================================================
# COURSE 75: rag (Retrieval-Augmented Generation)
# ==============================================================================
def make_course_75():
    lessons = [
        build_lesson(
            1, "why-llms-need-external-knowledge", "Why LLMs Need External Knowledge: Hallucinations and Knowledge Cutoffs", "Knowledge Limits",
            "Why foundation models need external knowledge: static knowledge cutoffs, hallucination risks, and private enterprise data.",
            "What are the two primary limitations of foundation models that Retrieval-Augmented Generation (RAG) resolves?",
            ["Static knowledge cutoffs (models don't know current events) and lack of access to private, proprietary enterprise data", "Models cannot generate text", "Models run out of RAM after 5 minutes", "Models cannot multiply numbers"],
            0, "RAG connects models to current, external, and private data without expensive model re-training.",
            [
                "<p>A pre-trained foundation model is an extraordinary reasoning engine, but its factual memory has two profound flaws:</p>",
                "<ul><li><strong>1. The Knowledge Cutoff:</strong> A model trained up to October 2023 knows nothing about events, security patches, or market prices in 2026. Re-training the model every week would cost millions of dollars!</li><li><strong>2. Private Data Blindness:</strong> A frontier model knows everything on the public internet, but it knows zero facts about your company's internal wiki, private GitHub code, or customer contracts.</li></ul>",
                "<p><strong>Retrieval-Augmented Generation (RAG)</strong> solves this elegantly: instead of trying to cram all human facts into neural weights, we treat the model as an <strong>open-book reasoning engine</strong>.</p>",
                "<pre><code># The Open-Book Analogy:\n# Closed-Book (No RAG): Memorize 10,000 encyclopedia volumes.\n#                       Prone to forgetting, mixing up dates, and hallucination.\n#\n# Open-Book (RAG):      Keep the encyclopedias on a fast library shelf (Vector DB).\n#                       When a question is asked, fetch the 2 most relevant pages,\n#                       hand them to the student, and say: \"Answer using these pages!\"</code></pre>",
                "<p>By retrieving real documents and injecting them into the prompt, the model's outputs are grounded in verifiable, private, and up-to-date facts with near-zero hallucination.</p>",
                "<div class=\"callout\"><p><strong>The Core RAG Rule:</strong> Separate <em>reasoning capability</em> (which lives in model weights) from <em>factual information</em> (which lives in your external database).</p></div>"
            ],
            "Closed-Book vs Open-Book (RAG)", "Parametric memory vs external retrieval",
            [
                {"title": "Closed-Book (Pure LLM)", "lines": ["Relies solely on training weights", "Suffers from knowledge cutoffs & hallucinations", "Blind to private company data"]},
                {"title": "Open-Book (RAG Pipeline)", "lines": ["Retrieves fresh documents from Vector DB", "Injects facts into prompt context", "Grounded, verifiable, zero cutoff lag"]}
            ],
            "The Three RAG Pillars", "Why RAG dominates enterprise AI",
            [
                {"title": "Freshness", "lines": ["Updated in real-time as docs change", "Zero multi-million dollar retraining"]},
                {"title": "Privacy", "lines": ["Internal data stays in your database", "Enforces access-control perms"]},
                {"title": "Verifiability", "lines": ["Model cites exact source documents", "Humans can audit the underlying evidence"]}
            ],
            "Complete the RAG foundation sentence",
            "Retrieval-Augmented Generation treats the language model as an open-book reasoning engine by injecting retrieved {1} directly into the {2}.",
            [
                {"answer": "documents", "hint": "Text chunks and source facts", "options": ["documents", "compilers", "passwords"]},
                {"answer": "prompt", "hint": "Active context window input", "options": ["prompt", "hardware", "keyboard"]}
            ],
            [
                {"q": "What is 'Parametric Memory' in a language model?",
                 "a": ["Knowledge and patterns encoded directly into the neural network weights during training", "A hard drive attached to the server", "The user's conversation history", "An external database table"],
                 "c": 0, "why": "Parametric memory refers to knowledge baked into the model's parameters (weights)."},
                {"q": "How does RAG solve the problem of private company data confidentiality?",
                 "a": ["Private documents remain stored securely in internal databases and are retrieved selectively per authorized user request", "It open-sources all company documents", "It trains a new model on the public internet", "It deletes private files"],
                 "c": 0, "why": "RAG queries internal databases under strict access control, sharing only necessary chunks in context."},
                {"q": "Why is fine-tuning an LLM inferior to RAG for frequently changing factual knowledge?",
                 "a": ["Fine-tuning is expensive, takes hours to days, and is prone to hallucinating facts rather than retrieving exact text", "Fine-tuning is illegal for text", "Fine-tuning deletes the model", "Fine-tuning only works on images"],
                 "c": 0, "why": "Fine-tuning teaches style and behavior, but is inefficient and unreliable for memorizing dynamic facts."},
                {"q": "What is 'Source Attribution' in a RAG system?",
                 "a": ["The ability of the system to cite the specific document title, page number, or URL that supports each generated claim", "The copyright license of the code", "The name of the software engineer", "The server IP address"],
                 "c": 0, "why": "Source attribution allows human auditors to verify the exact evidence behind every generated statement."}
            ],
            "You understand why RAG is the foundational architecture for enterprise AI knowledge retrieval.",
            "The RAG Pipeline Architecture: Ingest, Embed, Retrieve, Generate", "Deconstruct the four sequential phases of the RAG pipeline."
        ),
        build_lesson(
            2, "rag-pipeline-architecture", "The RAG Pipeline Architecture: Ingest, Embed, Retrieve, Generate", "Pipeline Architecture",
            "The four foundational phases of RAG: Ingestion (parsing), Embedding (vectorization), Retrieval (search), and Generation (synthesis).",
            "What are the two major operational phases of any RAG architecture?",
            ["The Offline Ingestion Pipeline (preparing documents) and the Online Query Pipeline (retrieving and answering)", "The Input Phase and the Delete Phase", "The Python Phase and the C Phase", "The Training Phase and the Testing Phase"],
            0, "RAG divides into an offline ingestion pipeline (parse, chunk, embed, index) and an online query loop (embed query, search, prompt, generate).",
            [
                "<p>A production Retrieval-Augmented Generation system operates across two separate operational timelines: the <strong>Offline Ingestion Pipeline</strong> and the <strong>Online Query Pipeline</strong>.</p>",
                "<p><strong>1. The Offline Ingestion Pipeline (Document Preparation):</strong></p>",
                "<ul><li><strong>Parse:</strong> Extract clean raw text from diverse formats (PDFs, Markdown, Word docs, HTML).</li><li><strong>Chunk:</strong> Split long documents into small, cohesive passages (e.g. 300 to 500 tokens).</li><li><strong>Embed:</strong> Convert each chunk into a vector using an embedding model (e.g. `text-embedding-3-small`).</li><li><strong>Index:</strong> Store the vectors and chunk text in a Vector Database with metadata tags.</li></ul>",
                "<p><strong>2. The Online Query Pipeline (Runtime Inference):</strong></p>",
                "<ul><li><strong>Embed Query:</strong> When a user asks a question, embed their query using the <em>exact same embedding model</em>.</li><li><strong>Retrieve (Top-K):</strong> Query the vector database for the top $K$ chunks (e.g. $K=5$) with the highest cosine similarity.</li><li><strong>Synthesize (Generate):</strong> Inject the retrieved chunks into a prompt template alongside the user's question, instructing the LLM to generate a grounded answer!</li></ul>",
                "<pre><code># The Complete RAG Flow in Pseudocode:\n# OFFLINE:\nchunks = chunk_document(raw_pdf)\nvectors = embedding_model.encode(chunks)\nvector_db.insert(vectors, chunks)\n\n# ONLINE:\nquery_vector = embedding_model.encode(user_query)\ntop_chunks = vector_db.search(query_vector, top_k=3)\nprompt = f\"Answer using these facts:\\n{top_chunks}\\n\\nQuestion: {user_query}\"\nfinal_answer = llm.generate(prompt)</code></pre>",
                "<div class=\"callout\"><p><strong>The Symmetry Rule:</strong> You must always use the <em>exact same embedding model</em> for querying that you used for indexing. If you index with BGE and query with OpenAI, the vector spaces are incompatible!</p></div>"
            ],
            "The Complete RAG Architecture", "Offline ingestion vs Online query pipeline",
            [
                {"title": "Offline Ingestion Pipeline", "lines": ["PDF / Markdown -> Chunking -> Embedding Model", "Stored in Vector DB (pgvector / Chroma)"]},
                {"title": "Online Query Pipeline", "lines": ["User Query -> Embed Query -> Vector Search", "Top-K Chunks + Prompt -> LLM -> Grounded Answer"]}
            ],
            "Embedding Model Symmetry", "Incompatible coordinate spaces",
            [
                {"title": "Symmetric (Correct)", "lines": ["Index with Model A (1,536D)", "Query with Model A (1,536D) -> 100% Match!"]},
                {"title": "Asymmetric (Broken!)", "lines": ["Index with Model A (1,536D)", "Query with Model B (768D) -> Total Failure!"]}
            ],
            "Complete the RAG pipeline sentence",
            "The RAG architecture consists of an offline {1} pipeline to chunk and embed documents, and an online {2} pipeline to retrieve and synthesize answers.",
            [
                {"answer": "ingestion", "hint": "Document processing and indexing", "options": ["ingestion", "formatting", "licensing"]},
                {"answer": "query", "hint": "Real-time user search and generation", "options": ["query", "hardware", "terminal"]}
            ],
            [
                {"q": "What happens if a developer indexes documents using OpenAI text-embedding-3 but queries the database using Cohere embed?",
                 "a": ["Search fails completely because the two models use different coordinate dimensions and incompatible semantic vector spaces", "It works with 50% accuracy", "The database automatically translates vectors", "The computer restarts"],
                 "c": 0, "why": "Different embedding models construct incompatible geometric spaces; query and index models must match."},
                {"q": "Why must large documents be broken into chunks before indexing in a vector database?",
                 "a": ["Embedding a 100-page book as one vector blurs distinct topics into an indistinct average; chunks isolate specific facts", "Vector databases only store 10 words", "PDF files cannot be read without chunking", "To save hard drive space"],
                 "c": 0, "why": "Chunking preserves localized semantic specificity, enabling precise retrieval."},
                {"q": "What is 'Top-K' in a vector database query?",
                 "a": ["The number of most similar candidate document chunks returned by the vector search (e.g. top 3 or top 5)", "The top-ranked developer on the team", "The temperature setting of the database", "The number of CPU cores used"],
                 "c": 0, "why": "Top-K specifies how many nearest-neighbor chunks to retrieve for prompt context."},
                {"q": "What role does the LLM play in the final stage of the RAG pipeline?",
                 "a": ["It reads the retrieved context passages, synthesizes the relevant information, and composes a fluent answer answering the user's query", "It indexes the PDF files", "It computes the cosine similarity matrix", "It calculates database storage fees"],
                 "c": 0, "why": "The LLM acts as the linguistic synthesizer and reasoning engine over the retrieved context."}
            ],
            "You understand the complete four-stage RAG pipeline architecture.",
            "Document Parsing and Chunking Strategies", "Master fixed-size, recursive, and semantic document chunking."
        ),
        build_lesson(
            3, "document-parsing-and-chunking", "Document Parsing and Chunking Strategies", "Chunking Strategies",
            "Chunking text effectively: fixed-size chunking, recursive character splitting, markdown-aware splitting, and semantic boundary chunking.",
            "Why is 'Recursive Character Text Splitting' superior to naive fixed-character chunking (e.g. slicing every 500 characters)?",
            ["It attempts to split on natural document boundaries (paragraphs, then sentences, then words) rather than slicing in the middle of a sentence", "It compiles text into WebAssembly", "It uses no RAM", "It runs 10x faster"],
            0, "Recursive splitters prioritize structural boundaries (newlines, periods), keeping coherent thoughts intact.",
            [
                "<p>The single most underestimated component of RAG performance is <strong>Chunking</strong>. If you chunk poorly, your retrieval will fail: split in the middle of a sentence, and you cut the subject from its verb; make chunks too large, and you dilute semantic specificity.</p>",
                "<p>The three dominant chunking strategies in production engineering:</p>",
                "<ul><li><strong>1. Fixed-Size Chunking (Naive):</strong> Slicing text into fixed token blocks (e.g. 500 tokens). Simple, but chops sentences in half and ignores document structure.</li><li><strong>2. Recursive Character Splitting (Industry Standard):</strong> Splits on a prioritized list of separators: first trying double newlines (`\\n\\n` - paragraphs), then single newlines (`\\n` - lines), then sentence endings (`. `), and finally spaces. Keeps complete thoughts intact!</li><li><strong>3. Document-Aware / Markdown Splitting:</strong> Splits on semantic markdown headers (`#`, `##`, `###`). Keeps code blocks, tables, and sections intact as self-contained units.</li><li><strong>4. Semantic Chunking (Advanced):</strong> Calculates embedding similarity between consecutive sentences; inserts a chunk break whenever similarity drops significantly (indicating a topic shift!).</li></ul>",
                "<pre><code># Recursive Character Splitting with LangChain in Python:\nfrom langchain_text_splitters import RecursiveCharacterTextSplitter\n\nsplitter = RecursiveCharacterTextSplitter(\n    chunk_size=500,        # Target chunk size in characters\n    chunk_overlap=50,      # Overlap between consecutive chunks\n    separators=[\"\\n\\n\", \"\\n\", \". \", \" \", \"\"]  # Priority hierarchy!\n)\nchunks = splitter.split_text(raw_document)</code></pre>",
                "<div class=\"callout\"><p><strong>The Markdown Rule:</strong> For technical documentation and codebases, always use Markdown-aware splitters that preserve code blocks and header hierarchies intact!</p></div>"
            ],
            "Chunking Strategies Compared", "From naive slicing to semantic boundaries",
            [
                {"title": "Fixed Slicing (Naive)", "lines": ["Chops every 500 chars", "Cuts sentences in half: 'The price is $... [CHUNK END]'"]},
                {"title": "Recursive Splitting (Standard)", "lines": ["Splits on \\n\\n, then \\n, then period", "Preserves complete paragraphs & sentences"]},
                {"title": "Markdown Aware (Technical)", "lines": ["Splits on # Header 1 and ## Header 2", "Preserves code blocks and tables intact"]}
            ],
            "The Structure Hierarchy", "How recursive splitters choose boundaries",
            [
                {"title": "Priority 1: Paragraph (\\n\\n)", "lines": ["Ideal boundary, keeps full idea"]},
                {"title": "Priority 2: Sentence ('. ')", "lines": ["Used if paragraph exceeds chunk_size"]},
                {"title": "Priority 3: Word (' ')", "lines": ["Last resort before character slicing"]}
            ],
            "Complete the chunking sentence",
            "Recursive text splitters prioritize natural linguistic boundaries like {1} and sentences to prevent cutting coherent {2} in half.",
            [
                {"answer": "paragraphs", "hint": "Double newline breaks \\n\\n", "options": ["paragraphs", "passwords", "cables"]},
                {"answer": "thoughts", "hint": "Semantic concepts and statements", "options": ["thoughts", "compilers", "licenses"]}
            ],
            [
                {"q": "What happens when fixed-character chunking slices a sentence like 'The system must NEVER allow unauthorized access' right after 'NEVER'?",
                 "a": ["The negative constraint is separated from the predicate, creating two confusing and contradictory chunk fragments", "The text turns into numbers", "The computer crashes", "The model fixes it automatically"],
                 "c": 0, "why": "Chopping sentences across chunk boundaries severs context and inverts semantic meaning."},
                {"q": "What chunk size (in tokens) is generally considered the sweet spot for dense semantic retrieval?",
                 "a": ["250 to 512 tokens (roughly 1 to 2 paragraphs)", "Exactly 1 token", "50,000 tokens", "10,000 tokens"],
                 "c": 0, "why": "250-512 tokens provides sufficient contextual depth while maintaining high semantic specificity."},
                {"q": "Why is preserving code blocks (```python ... ```) inside a single chunk essential when chunking documentation?",
                 "a": ["Slicing a code block in half produces syntactically broken code that an agent cannot compile or understand", "Code blocks cannot be vectorized", "Markdown code blocks are illegal in RAG", "Code blocks use too many tokens"],
                 "c": 0, "why": "Partial code snippets lack imports, definitions, and syntax closure, breaking downstream agent reasoning."},
                {"q": "How does Semantic Chunking determine where to split text?",
                 "a": ["It monitors embedding vector similarity between adjacent sentences, splitting whenever similarity drops below a threshold", "By counting words", "By using a timer", "By checking punctuation marks"],
                 "c": 0, "why": "Significant drops in sentence embedding similarity signal natural shifts in topic."}
            ],
            "You know how to select and tune document chunking strategies for diverse data types.",
            "Chunk Overlap and Metadata Tagging", "Preserve context across seams and enrich chunks with metadata filters."
        ),
        build_lesson(
            4, "chunk-overlap-and-metadata-tagging", "Chunk Overlap and Metadata Tagging", "Chunk Enrichment",
            "Preventing boundary blindness with chunk overlap (10-20%) and enriching chunks with structured metadata tags.",
            "Why is adding a 10% to 20% 'Chunk Overlap' between consecutive passages critical in RAG?",
            ["It ensures that concepts, pronouns, and sentences spanning the boundary between two chunks are preserved in both chunks", "It makes documents 10x longer", "It reduces database storage costs", "It translates text into French"],
            0, "Overlap guarantees that boundary-spanning sentences and pronoun antecedents are captured completely.",
            [
                "<p>Even with the best text splitters, boundaries must occur somewhere. If a vital fact spans the seam between Chunk 1 and Chunk 2, a query might fail to retrieve either chunk because the complete thought is divided. The simple, universal defense is <strong>Chunk Overlap</strong>.</p>",
                "<p>By configuring a <strong>10% to 20% overlap</strong> (e.g. a 500-token chunk with a 50-token overlap), the ending of Chunk 1 is repeated at the beginning of Chunk 2:</p>",
                "<pre><code># The Overlapping Chunk Seam:\n# Chunk 1: [Tokens 0   -> 500]\n# Chunk 2: [Tokens 450 -> 950]  (Tokens 450-500 exist in BOTH chunks!)\n# Chunk 3: [Tokens 900 -> 1400] (Tokens 900-950 exist in BOTH chunks!)</code></pre>",
                "<p>In addition to overlap, high-performance RAG enriches every chunk with <strong>Structured Metadata</strong>:</p>",
                "<ul><li><strong>Document Provenance:</strong> `source: \"docs/billing.md\"`, `title: \"Invoice API Guide\"`.</li><li><strong>Hierarchy:</strong> `header: \"Refund Calculations\"`, `section_id: \"3.2\"`.</li><li><strong>Access Control & Filtering:</strong> `tenant_id: \"org_42\"`, `role: \"admin\"`, `updated_at: \"2026-03-31\"`.</li></ul>",
                "<p>Metadata allows your vector database to perform <strong>Filtered Vector Search</strong>: <em>'Find chunks semantically similar to \"refund\", BUT ONLY where tenant_id == org_42 and role == admin.'</em></p>",
                "<div class=\"callout\"><p><strong>Security Law:</strong> Never rely on vector similarity alone for multi-tenant data isolation! Always filter by tenant_id using explicit database metadata filters.</p></div>"
            ],
            "Chunk Overlap Architecture", "Carrying context across boundary seams",
            [
                {"title": "Chunk 1 (Tokens 0-500)", "lines": ["Contains first paragraph", "Ending 50 tokens overlap into Chunk 2"]},
                {"title": "Overlapping Seam (Tokens 450-500)", "lines": ["Repeated in both chunks", "Guarantees complete boundary thoughts"]},
                {"title": "Chunk 2 (Tokens 450-950)", "lines": ["Begins with overlapping context", "Maintains pronoun & entity continuity"]}
            ],
            "Metadata-Enriched Document Chunk", "Structured tags attached to vector",
            [
                {"title": "Vector Embedding", "lines": ["[0.14, -0.42, 0.88, ... 1536D]", "Used for cosine similarity search"]},
                {"title": "Payload & Metadata", "lines": ["text: 'To process refunds...'", "tenant_id: 'acme_corp', role: 'admin'", "source: 'billing_policy_v2.pdf'"]}
            ],
            "Complete the chunk enrichment sentence",
            "Chunk overlap preserves context across boundaries, while structured {1} enables hard filtering by tenant ID and access {2}.",
            [
                {"answer": "metadata", "hint": "Structured tags attached to chunks", "options": ["metadata", "hardware", "cables"]},
                {"answer": "permissions", "hint": "Role-based access control rules", "options": ["permissions", "compilers", "keyboards"]}
            ],
            [
                {"q": "What is the recommended percentage of overlap when chunking text for RAG?",
                 "a": ["10% to 20% of the chunk size (e.g. 50 tokens overlap on a 500-token chunk)", "100% overlap (every chunk is identical)", "Zero overlap is always best", "80% overlap"],
                 "c": 0, "why": "10-20% overlap reliably preserves boundary context without causing excessive index bloat."},
                {"q": "Why is metadata filtering essential in multi-tenant SaaS applications using RAG?",
                 "a": ["It mathematically guarantees that users can only retrieve chunks belonging to their own organization (preventing cross-tenant data leaks)", "It speeds up Python", "It encrypts the hard drive", "It reduces electricity costs"],
                 "c": 0, "why": "Metadata filtering enforces strict multi-tenant boundaries at the database query level."},
                {"q": "What metadata attribute helps users verify where an answer came from?",
                 "a": ["The source file path, document title, and page number or URL", "The CPU temperature", "The database port number", "The author's phone number"],
                 "c": 0, "why": "Source paths and page numbers provide verifiable citation provenance."},
                {"q": "How does prepending the document title or section header to the chunk text improve embedding quality?",
                 "a": ["It contextualizes the chunk's vector with global document topic information, preventing ambiguous chunks from floating in isolation", "It makes the file smaller", "It compiles the text", "It turns off logging"],
                 "c": 0, "why": "Adding section context anchors isolated paragraphs to their overarching document theme."}
            ],
            "You know how to configure chunk overlap and enrich vector records with structured metadata.",
            "Retrieving the Top-K Chunks with Vector Similarity", "Query the vector index and retrieve the most relevant passages."
        ),
        build_lesson(
            5, "retrieving-top-k-chunks", "Retrieving the Top-K Chunks with Vector Similarity", "Vector Retrieval",
            "Executing vector search: embedding the query, cosine similarity search, setting K thresholds, and similarity cutoffs.",
            "How does a vector database find the most relevant document chunks for a user's query?",
            ["It embeds the query into a vector and finds the K stored document vectors with the highest cosine similarity (nearest neighbors)", "It searches alphabetically by first letter", "It scans the database using regular expressions", "It generates random chunks"],
            0, "Vector search converts the query into a vector and retrieves the nearest neighbors in embedding space.",
            [
                "<p>Once your documents are chunked, embedded, and stored in a vector database, the runtime retrieval phase begins. When a user asks: <em>'How do I cancel my annual subscription and get a refund?'</em>, the system executes <strong>Nearest-Neighbor Semantic Search</strong>.</p>",
                "<p>The Retrieval Step-by-Step Execution:</p>",
                "<ul><li><strong>1. Embed the User Query:</strong> Pass the query string through the exact same embedding model used during ingestion: $\\vec{v}_{query} = \\text{embed}(text)$.</li><li><strong>2. Execute Nearest-Neighbor Search:</strong> Compute the cosine similarity between $\\vec{v}_{query}$ and millions of stored chunk vectors using an Approximate Nearest Neighbor (ANN) index (e.g. HNSW).</li><li><strong>3. Apply Similarity Score Threshold:</strong> Filter out irrelevant junk! If a chunk has a similarity score below a confidence threshold (e.g. $&lt; 0.70$), discard it.</li><li><strong>4. Return Top-K Candidates:</strong> Return the top $K$ highest-scoring chunks (typically $K=3$ to $5$) with their source metadata.</li></ul>",
                "<pre><code># Querying ChromaDB / pgvector in Python:\nquery_text = \"How do I process a refund for order ORD-412?\"\n\n# Query the vector collection for the Top 3 most similar chunks:\nresults = collection.query(\n    query_texts=[query_text],\n    n_results=3,\n    where={\"tenant_id\": current_user.tenant_id} # Metadata filter!\n)\n\nfor i, doc in enumerate(results['documents'][0]):\n    score = results['distances'][0][i]\n    print(f\"Chunk {i+1} (Score: {score:.3f}): {doc[:100]}...\")</code></pre>",
                "<div class=\"callout\"><p><strong>The Score Cutoff:</strong> Always inspect similarity scores! If your top match has a cosine similarity of only 0.45, that means your database contains ZERO relevant information. Don't send garbage to the LLM!</p></div>"
            ],
            "Vector Search Nearest Neighbors", "Finding semantic proximity in hyperspace",
            [
                {"title": "User Query Vector", "lines": ["v_query = embed('How to refund?')", "Coordinates in 1,536D space"]},
                {"title": "Nearest Neighbor Search", "lines": ["Scans HNSW index in 2ms", "Finds 3 closest document vectors"]},
                {"title": "Top-3 Chunks Retrieved", "lines": ["Chunk 1: Refund policy (Score: 0.92)", "Chunk 2: Billing FAQ (Score: 0.88)", "Chunk 3: Payment gateways (Score: 0.81)"]}
            ],
            "Similarity Score Filtering", "Discarding irrelevant search noise",
            [
                {"title": "High Match (Score > 0.75)", "lines": ["Strong semantic relevance", "Injected safely into prompt context"]},
                {"title": "Poor Match (Score < 0.65)", "lines": ["Irrelevant background noise", "Discarded to prevent model confusion"]}
            ],
            "Complete the vector retrieval sentence",
            "Vector retrieval embeds the user query and searches the index for the top {1} nearest neighbors whose cosine similarity exceeds the {2} threshold.",
            [
                {"answer": "K", "hint": "Number of candidate chunks (e.g. top 3)", "options": ["K", "N", "pi"]},
                {"answer": "score", "hint": "Minimum similarity cutoff threshold", "options": ["score", "font", "license"]}
            ],
            [
                {"q": "What happens if you set Top-K too high (e.g. K=50) in a RAG prompt?",
                 "a": ["You flood the model context window with low-relevance noise, increasing token costs and diluting attention on the real answer", "The database catches fire", "The query runs 100x faster", "The model achieves 100% precision"],
                 "c": 0, "why": "High K introduces irrelevant chunks that distract model attention and increase cost."},
                {"q": "What is the typical value for K in standard document RAG systems?",
                 "a": ["Between 3 and 7 chunks", "Exactly 1,000 chunks", "500 chunks", "0 chunks"],
                 "c": 0, "why": "3 to 7 chunks provide sufficient evidence without saturating context capacity."},
                {"q": "What should the system do if all retrieved chunks have very low similarity scores (e.g. < 0.50)?",
                 "a": ["Conclude that the knowledge base lacks relevant data and inform the user honestly, rather than prompting the model with irrelevant text", "Send all chunks anyway and hope for the best", "Delete the knowledge base", "Restart the server"],
                 "c": 0, "why": "Filtering on score cutoffs prevents hallucination when no relevant information exists."},
                {"q": "How fast does an Approximate Nearest Neighbor (ANN) index like HNSW search across 1 million vectors?",
                 "a": ["Sub-millisecond to a few milliseconds (typically 1-5ms)", "Over 2 hours", "10 minutes", "100 seconds"],
                 "c": 0, "why": "Graph-based ANN indexes like HNSW search million-scale vector collections in single-digit milliseconds."}
            ],
            "You know how to execute vector similarity queries and filter top-K candidates effectively.",
            "Prompt Construction: Grounding the Model in Retrieved Context", "Assemble the final prompt that forces models to cite retrieved facts."
        ),
        build_lesson(
            6, "prompt-construction-grounding-context", "Prompt Construction: Grounding the Model in Retrieved Context", "Grounding Prompts",
            "Synthesizing retrieved chunks into the prompt: grounding templates, system constraints, and the 'I don't know' fallback.",
            "What prompt instruction is essential in a RAG system to prevent the model from guessing when retrieved documents do not contain the answer?",
            ["'Answer the question using ONLY the provided context. If the context does not contain the answer, reply: I do not have enough information.'", "'Guess the answer if you don't know'", "'Look up the answer on Google'", "'Be as creative as possible'"],
            0, "Explicitly instructing the model to reply 'I do not have enough information' stops it from falling back on hallucinations.",
            [
                "<p>Retrieving the right chunks is only half the battle. If your prompt template is weak, the model might ignore the retrieved chunks entirely and hallucinate from its pre-training memory!</p>",
                "<p>A production <strong>RAG Prompt Template</strong> enforces strict grounding:</p>",
                "<ul><li><strong>1. Explicit Grounding Directive:</strong> State clearly in the system prompt: <em>'You are an assistant who answers questions using strictly the provided &lt;context&gt; documents. Do NOT extrapolate or assume.'</em></li><li><strong>2. The Honest Fallback Clause:</strong> <em>'If the provided context does not contain sufficient information to answer the question, state honestly: \"I do not have enough information in the provided documentation to answer that question.\"'</em></li><li><strong>3. Structural Context Brackets:</strong> Enclose each retrieved chunk in clean XML tags with its source ID: `&lt;doc id=\"1\" source=\"billing.md\"&gt; ... &lt;/doc&gt;`.</li></ul>",
                "<pre><code># Production RAG Prompt Construction in Python:\ncontext_str = \"\\n\".join([\n    f'<doc id=\"{i+1}\" source=\"{meta[\"source\"]}\">\\n{chunk}\\n</doc>'\n    for i, (chunk, meta) in enumerate(retrieved_pairs)\n])\n\nsystem_prompt = \"\"\"You are a corporate knowledge assistant.\nAnswer the user's question using ONLY the facts in the <context> below.\nIf the answer cannot be deduced from the context, reply:\n\"I am sorry, but the provided documentation does not contain that information.\"\nDo NOT use outside knowledge.\"\"\"\n\nuser_message = f\"\"\"<context>\n{context_str}\n</context>\n\nQuestion: {user_query}\"\"\"</code></pre>",
                "<div class=\"callout\"><p><strong>The Golden Grounding Rule:</strong> An AI system that honestly says 'I don't know' builds trust. An AI system that makes up plausible lies destroys trust.</p></div>"
            ],
            "The Grounded RAG Prompt Architecture", "Enclosing retrieved evidence inside explicit boundaries",
            [
                {"title": "System Directive", "lines": ["'Answer using ONLY the provided <context>'", "'If absent, reply: I do not have enough info'"]},
                {"title": "Context Block (<context>)", "lines": ["<doc id='1' source='billing.md'> ... </doc>", "<doc id='2' source='faq.md'> ... </doc>"]},
                {"title": "User Query", "lines": ["'How do I cancel my subscription?'", "Model answers strictly from docs 1 and 2"]}
            ],
            "Preventing Extrapolation", "Stopping the model from using unverified memory",
            [
                {"title": "Ungrounded Prompt", "lines": ["Model uses pre-training weights", "Hallucinates outdated or external policies"]},
                {"title": "Strictly Grounded Prompt", "lines": ["Constrained strictly to <context>", "Zero hallucination, 100% verifiable"]}
            ],
            "Complete the grounding prompt sentence",
            "Grounding prompts prevent hallucinations by requiring models to answer using only the provided context and providing an explicit fallback when information is {1}.",
            [
                {"answer": "absent", "hint": "Missing from the retrieved documents", "options": ["absent", "compiled", "encrypted"]},
                {"answer": "facts", "hint": "Verified information pieces", "options": ["facts", "emojis", "passwords"]}
            ],
            [
                {"q": "Why is enclosing retrieved chunks in explicit tags like <doc id='1'> useful for both the model and the user?",
                 "a": ["It allows the model to reference and cite specific document IDs directly in its answer (e.g. 'According to [Doc 1]...')", "It makes the text colorful", "It saves hard drive space", "It compiles the text to HTML"],
                 "c": 0, "why": "Tagged document chunks give the model explicit references to cite in its explanations."},
                {"q": "What happens if a RAG prompt omits an explicit 'I do not have enough information' instruction?",
                 "a": ["The model will attempt to be helpful and fall back on its pre-training memory, frequently hallucinating plausible false answers", "The API throws an error", "The server crashes", "The model shuts down"],
                 "c": 0, "why": "Without a permitted fallback, models feel compelled to answer, leading to ungrounded hallucinations."},
                {"q": "Why should retrieved context documents be placed before the user query in the prompt?",
                 "a": ["It provides the factual evidence first, ensuring the user query sits at the high-recall end of the context window", "It is required by Python syntax", "Queries cannot be at the top", "To save internet bandwidth"],
                 "c": 0, "why": "Placing the query last allows the model's generation to immediately address the user question with context in view."},
                {"q": "How does prompt grounding change how users perceive system reliability?",
                 "a": ["Users trust the system because answers are consistent, verifiable, and the system admits when it does not know something", "Users think the system is slow", "Users stop using the software", "Users demand refunds"],
                 "c": 0, "why": "Honest admissions of ignorance build immense enterprise user trust."},
            ],
            "You know how to construct strictly grounded RAG prompt templates.",
            "Citation and Source Attribution in Generated Answers", "Implement inline citations so users can verify every claim against source docs."
        ),
        build_lesson(
            7, "citation-and-source-attribution", "Citation and Source Attribution in Generated Answers", "Citations",
            "Enforcing verifiable citations: inline source attribution, document IDs, and building clickable reference links in UIs.",
            "Why are inline source citations (e.g. '[Doc 1]', '[Page 4]') essential in enterprise RAG systems?",
            ["They allow human users to audit the exact source passage supporting every claim, providing complete transparency and auditability", "They make the response longer", "Citations are required by copyright law", "They prevent computers from crashing"],
            0, "Citations provide auditability, allowing users to verify claims against the underlying source documents.",
            [
                "<p>In enterprise software, an AI that cannot cite its sources is unusable. In legal analysis, medical diagnosis, or compliance auditing, a user cannot accept an answer on faith; they must be able to click a reference and inspect the <strong>exact paragraph of the source policy</strong>.</p>",
                "<p>Implementing <strong>Inline Citations</strong> in RAG:</p>",
                "<ul><li><strong>1. Tag Documents in Prompt:</strong> Tag each retrieved chunk with a clear numerical identifier: `[Doc 1: Title]`, `[Doc 2: Title]`.</li><li><strong>2. Mandate In-Text Citations:</strong> Instruct the model: <em>'For every claim you make, cite the supporting document using bracketed numbers (e.g. \"Refunds are processed within 5 days [Doc 1]\").'</em></li><li><strong>3. Frontend Citation Mapping:</strong> In your UI, parse `[Doc 1]` into clickable badges that open a sidebar displaying the exact chunk text, document title, and page number!</li></ul>",
                "<pre><code># The Citation Instruction Pattern:\n\"Every factual statement you make must include an inline citation to its source document ID.\nExample format: 'Users can export up to 10,000 rows [Doc 2]. Pro users have no limit [Doc 1].'\nDo NOT make any claim that cannot be attributed to a specific document ID.\"</code></pre>",
                "<div class=\"callout\"><p><strong>Citation Verification:</strong> In automated evals, write assertion tests that check whether cited document IDs actually contain the claims made in the sentence!</p></div>"
            ],
            "Inline Citation Architecture", "Connecting generated sentences to source documents",
            [
                {"title": "Generated Sentence", "lines": ["'Annual plans receive a 20% discount [Doc 2].'", "Contains explicit inline citation"]},
                {"title": "UI Clickable Badge", "lines": ["User clicks '[Doc 2]'", "Sidebar opens showing 'PricingPolicy.pdf', Page 3"]},
                {"title": "Audit Verification", "lines": ["User reads original legal paragraph", "100% confidence & transparency"]}
            ],
            "Citations Build Enterprise Trust", "Eliminating the AI black box",
            [
                {"title": "Uncited AI Answer", "lines": ["'Refunds take 3 days'", "User wonders: Is this real or a hallucination?"]},
                {"title": "Cited RAG Answer", "lines": ["'Refunds take 3 days [Doc 1]'", "Backed by verifiable policy evidence"]}
            ],
            "Complete the citation sentence",
            "Inline source citations provide complete transparency by linking every generated claim directly to its underlying source {1} in the {2}.",
            [
                {"answer": "document", "hint": "Original source text passage", "options": ["document", "hardware", "keyboard"]},
                {"answer": "UI", "hint": "User interface presentation", "options": ["UI", "compiler", "terminal"]}
            ],
            [
                {"q": "How can a web frontend turn raw text citations like '[Doc 1]' into interactive UI elements?",
                 "a": ["By using regex to replace '[Doc N]' with clickable badge components that trigger preview modals displaying the source chunk", "By deleting the citation", "By converting the text to PDF", "By playing an audio file"],
                 "c": 0, "why": "Parsing citation brackets into interactive components provides seamless document inspection."},
                {"q": "What is 'Citation Hallucination' in RAG systems?",
                 "a": ["When a model cites a document ID (e.g. [Doc 3]) that does not actually contain the information claimed in the sentence", "A citation written in Latin", "A citation with too many numbers", "A broken URL link"],
                 "c": 0, "why": "Models occasionally hallucinate citation tags that do not substantiate the claim."},
                {"q": "How can you programmatically detect citation hallucinations in an automated test?",
                 "a": ["Check whether key named entities and numbers in the cited sentence appear in the text of the referenced chunk", "Ask the user if they agree", "Count the number of characters", "Check the server uptime"],
                 "c": 0, "why": "Entity and keyword overlap verifies whether the cited chunk actually supports the claim."},
                {"q": "Why do legal and medical professionals require source citations in AI tools?",
                 "a": ["Because professionals are legally and ethically liable for their decisions and must verify facts against authoritative primary sources", "Because citations look decorative", "Because legal text requires numbers", "Because models run faster with citations"],
                 "c": 0, "why": "Professional liability demands verifiable source backing for all claims."}
            ],
            "You know how to enforce and render verifiable source citations in RAG applications.",
            "Common RAG Failure Modes: Irrelevant Retrieval and Lost Context", "Diagnose and resolve the classic failure points of RAG systems."
        ),
        build_lesson(
            8, "common-rag-failure-modes", "Common RAG Failure Modes: Irrelevant Retrieval and Lost Context", "RAG Triage",
            "Diagnosing RAG failures: retrieval misses, chunk boundary fragmentation, prompt dilution, and semantic drift.",
            "When a RAG system provides an incorrect or unhelpful answer, what are the two distinct failure categories to diagnose?",
            ["Retrieval Failure (did the system fetch the wrong chunks?) vs Generation Failure (did the LLM receive the right chunks but misinterpret them?)", "Hardware Failure vs Internet Failure", "Python Failure vs C Failure", "Database Failure vs Monitor Failure"],
            0, "Debugging RAG requires diagnosing whether the failure happened during Retrieval (bad chunks) or Generation (bad reasoning).",
            [
                "<p>When a RAG system answers poorly, naive developers tweak the system prompt randomly. An expert RAG engineer performs <strong>Systematic Root Cause Triage</strong> by bifurcating the problem into two halves:</p>",
                "<ul><li><strong>1. Retrieval Failures (Did we get the right data?):</strong> Inspect the retrieved chunks directly! Did the vector search fetch the wrong documents? (Cause: poor embedding model, bad chunk size, lack of hybrid keyword search). If the right chunk was never retrieved, no prompt will fix it!</li><li><strong>2. Generation Failures (Did the model reason correctly?):</strong> If the retrieved chunks <em>do</em> contain the right answer, why did the model fail? (Cause: attention degradation from too many chunks, ambiguous prompt instructions, or confusing chunk formatting).</li></ul>",
                "<pre><code># The RAG Triage Decision Tree:\nQuestion: \"What is the cancellation fee?\"\nInspect Retrieved Chunks:\n├── Case A: Chunks talk about \"Billing addresses\" (Wrong chunks!)\n│   └── Root Cause: RETRIEVAL FAILURE -> Fix chunking, add hybrid BM25 search.\n└── Case B: Chunk 2 explicitly states: \"Cancellation fee is $50\"\n    └── Root Cause: GENERATION FAILURE -> Fix prompt, reduce K from 10 to 3!</code></pre>",
                "<p>Common RAG Failure Modes and Fixes:</p>",
                "<ul><li><strong>Problem: Out-of-Context Chunks:</strong> A chunk says <em>'It costs $50'</em>, but lacks the subject! <em>Fix: Prepend document title and section headers to chunk text before embedding.</em></li><li><strong>Problem: Keyword Mismatch:</strong> User searches for exact error code <code>ERR_849</code>; vector search returns generic error articles. <em>Fix: Use Hybrid Search (combining BM25 keyword matching with vector search).</em></li></ul>",
                "<div class=\"callout\"><p><strong>The Final Synthesis:</strong> You have mastered Retrieval-Augmented Generation: from ingestion and chunking to vector similarity, strict grounding, citations, and systematic failure triage.</p></div>"
            ],
            "The RAG Triage Decision Tree", "Separating retrieval failure from generation failure",
            [
                {"title": "Inspect Retrieved Chunks First", "lines": ["Never tweak prompts blindly!", "Verify if right facts are present in context"]},
                {"title": "Retrieval Failure (Bad Chunks)", "lines": ["Right facts missing from Top-K", "Fix: Chunking, hybrid BM25, embedding model"]},
                {"title": "Generation Failure (Right Chunks)", "lines": ["Right facts present, model misinterprets", "Fix: Prompt grounding, reduce K, CoT reasoning"]}
            ],
            "Common RAG Pitfalls and Solutions", "Targeted architectural remedies",
            [
                {"title": "Pitfall: Exact Keyword Miss", "lines": ["Vector search misses exact error codes", "Remedy: Hybrid Search (BM25 + Dense)"]},
                {"title": "Pitfall: Context Amnesia", "lines": ["Chunk lacks parent document context", "Remedy: Header prepending / Metadata injection"]}
            ],
            "Complete the RAG triage sentence",
            "Debugging RAG failures begins by determining whether the root cause is a {1} failure in finding documents or a {2} failure in synthesizing the answer.",
            [
                {"answer": "retrieval", "hint": "Finding the right chunks", "options": ["retrieval", "formatting", "licensing"]},
                {"answer": "generation", "hint": "LLM reasoning and output synthesis", "options": ["generation", "hardware", "cabling"]}
            ],
            [
                {"q": "Why does vector search sometimes fail when a user queries an exact error code like 'ERR_4092'?",
                 "a": ["Embedding models focus on broad semantic meaning and often treat specific alphanumeric serial codes as obscure rare tokens", "Vector search is broken", "Error codes are encrypted", "Computers cannot read numbers"],
                 "c": 0, "why": "Vector embeddings represent semantic concepts; exact serial strings require lexical BM25 keyword matching."},
                {"q": "What is 'Hybrid Search' in modern retrieval architecture?",
                 "a": ["Combining sparse lexical keyword search (BM25) with dense semantic vector search to capture both exact keywords and concepts", "Searching on two different computers", "Searching in two languages", "Using Google and Yahoo together"],
                 "c": 0, "why": "Hybrid search combines the exact keyword precision of BM25 with the conceptual understanding of vectors."},
                {"q": "What is 'Chunk Fragmentation' in RAG?",
                 "a": ["When a critical multi-step explanation is severed across two different chunks, leaving neither chunk with sufficient context to answer", "When a hard drive breaks", "When a file is deleted", "When text has spelling errors"],
                 "c": 0, "why": "Poor chunking divides explanations, preventing the retriever from capturing the complete thought."},
                {"q": "What should an engineer do if a RAG system retrieves the correct chunks but the LLM still ignores them?",
                 "a": ["Reduce Top-K to eliminate distracting noise, place the user query at the very bottom, and enforce strict grounding instructions", "Delete all documents", "Switch to an older model", "Write the prompt in uppercase"],
                 "c": 0, "why": "Reducing noise and positioning the query last eliminates attention dilution over the retrieved facts."}
            ],
            "You have completed the Retrieval-Augmented Generation (RAG) course.",
            "Next Course: Vector Databases & Semantic Search", "Explore the specialized storage engines powering million-scale vector retrieval."
        )
    ]

    glossary = [
        {"id": "fundamentals", "title": "RAG Fundamentals", "terms": [
            {"term": "RAG", "def": "Retrieval-Augmented Generation — augmenting LLM prompts with relevant external documents retrieved from a database.", "lesson": 1, "tags": ["rag", "architecture"]},
            {"term": "Parametric Memory", "def": "Factual knowledge encoded directly into the neural network weights during pre-training.", "lesson": 1, "tags": ["ai", "memory"]},
            {"term": "Knowledge Cutoff", "def": "The chronological date when a model's pre-training dataset ended, after which it has zero knowledge.", "lesson": 1, "tags": ["models", "limits"]}
        ]},
        {"id": "pipeline", "title": "Pipeline & Chunking", "terms": [
            {"term": "Ingestion Pipeline", "def": "The offline workflow that parses, chunks, embeds, and indexes documents into a vector database.", "lesson": 2, "tags": ["data", "pipeline"]},
            {"term": "Recursive Splitting", "def": "A chunking algorithm that splits on a prioritized hierarchy of natural boundaries (\\n\\n, \\n, period).", "lesson": 3, "tags": ["chunking", "nlp"]},
            {"term": "Chunk Overlap", "def": "Repeating a small percentage (10-20%) of text across adjacent chunks to preserve boundary context.", "lesson": 4, "tags": ["chunking", "context"]}
        ]},
        {"id": "retrieval", "title": "Retrieval & Grounding", "terms": [
            {"term": "Top-K Retrieval", "def": "Retrieving the K nearest neighbor document chunks with the highest vector similarity scores.", "lesson": 5, "tags": ["retrieval", "search"]},
            {"term": "Grounding Directive", "def": "A strict system prompt instruction requiring the model to answer using only provided context documents.", "lesson": 6, "tags": ["prompting", "safety"]},
            {"term": "Source Attribution", "def": "Inline citations linking generated statements directly to verifiable source document IDs and pages.", "lesson": 7, "tags": ["citations", "auditability"]}
        ]},
        {"id": "triage", "title": "Search & Triage", "terms": [
            {"term": "Hybrid Search", "def": "Combining sparse lexical keyword search (BM25) with dense semantic vector search for balanced retrieval.", "lesson": 8, "tags": ["search", "hybrid"]},
            {"term": "Retrieval Failure", "def": "A RAG defect where the vector database fails to include the correct supporting documents in Top-K.", "lesson": 8, "tags": ["debugging", "rag"]},
            {"term": "Generation Failure", "def": "A RAG defect where the model receives the correct chunks but misinterprets or ignores them.", "lesson": 8, "tags": ["debugging", "rag"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Minimal RAG Ingestion Pipeline",
            "label": "Chunking and vectorizing",
            "code": "from langchain_text_splitters import RecursiveCharacterTextSplitter\n# 1. Chunk document:\nsplitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)\nchunks = splitter.split_text(raw_document)\n# 2. Vectorize and insert into database:\nvector_db.add(documents=chunks, ids=[f'doc_{i}' for i in range(len(chunks))])",
            "lessonN": 3, "lessonSlug": "document-parsing-and-chunking", "lessonTitle": "Document Parsing and Chunking Strategies"
        },
        {
            "title": "Grounded RAG Prompt Template",
            "label": "Defeating hallucinations",
            "code": "prompt = f\"\"\"Answer using ONLY the provided <context>.\nIf the context does not contain the answer, reply: 'Information not found.'\n\n<context>\n{retrieved_context_chunks}\n</context>\n\nQuestion: {user_query}\"\"\"",
            "lessonN": 6, "lessonSlug": "prompt-construction-grounding-context", "lessonTitle": "Prompt Construction: Grounding the Model in Retrieved Context"
        },
        {
            "title": "Metadata Filtered Query",
            "label": "Multi-tenant tenant isolation",
            "code": "# Enforce tenant boundary during vector query:\nresults = collection.query(\n    query_texts=[\"company vacation policy\"],\n    n_results=3,\n    where={\"tenant_id\": current_user.tenant_id} # Hard security boundary!\n)",
            "lessonN": 4, "lessonSlug": "chunk-overlap-and-metadata-tagging", "lessonTitle": "Chunk Overlap and Metadata Tagging"
        },
        {
            "title": "Inline Citation Prompt Directive",
            "label": "Source attribution enforcement",
            "code": "\"Every claim must cite its source using bracketed IDs (e.g. [Doc 1]).\nDo NOT make any claim that cannot be attributed to a specific doc ID.\"",
            "lessonN": 7, "lessonSlug": "citation-and-source-attribution", "lessonTitle": "Citation and Source Attribution in Generated Answers"
        }
    ]

    course_data = {
        "id": "rag",
        "title": "Retrieval-Augmented Generation (RAG)",
        "num": 75,
        "emoji": "📚",
        "desc": "Retrieve relevant text, put it in the prompt, and ground the answer in sources you control.",
        "topics": ["RAG", "Knowledge Cutoffs", "Pipeline Architecture", "Chunking", "Chunk Overlap", "Vector Retrieval", "Grounding", "Citations", "RAG Triage"],
        "mission": "# Mission — Retrieval-Augmented Generation (RAG)\n\nMaster the art of grounding language models in private, up-to-date knowledge. Separate parametric reasoning from external facts, build offline ingestion and online query pipelines, implement recursive character chunking with overlap, enrich records with metadata filters, execute nearest-neighbor vector search, construct strictly grounded prompt templates, enforce verifiable inline source citations, and diagnose retrieval vs generation failures.",
        "notes": "# Notes — Retrieval-Augmented Generation (RAG)\n\nNever tweak prompts until you inspect retrieved chunks. If the right facts are not in the Top-K context, prompt engineering cannot solve the problem.",
        "resources": "# Resources — Retrieval-Augmented Generation (RAG)\n\n- Patrick Lewis et al., *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Meta AI)*\n- LangChain Documentation, *Retrieval Concepts*\n- Jerry Liu, *LlamaIndex Architecture Guide*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# ==============================================================================
# COURSE 76: vector-databases
# ==============================================================================
def make_course_76():
    lessons = [
        build_lesson(
            1, "why-relational-databases-struggle-vectors", "Why Relational Databases Struggle with Vector Similarity at Scale", "Vector Scale",
            "The curse of dimensionality: why standard B-tree indexes fail on high-dimensional vectors and demand specialized indexes.",
            "Why can standard relational B-tree indexes (like those in PostgreSQL or MySQL) not index 1,536-dimensional vectors?",
            ["B-trees rely on a 1D scalar ordering (greater than / less than), which does not exist in high-dimensional vector spaces", "B-trees cannot store floating point numbers", "B-trees are prohibited by SQL standards", "Relational databases cannot store arrays"],
            0, "B-trees require a total scalar ordering; in 1,536 dimensions, there is no single greater-than direction.",
            [
                "<p>Relational databases are the bedrock of software engineering. For decades, standard <strong>B-Tree indexes</strong> made queries over numbers, strings, and dates lightning fast: <code>WHERE age > 21</code> runs in $O(\\log N)$ time by traversing a sorted tree.</p>",
                "<p>However, when you store 1,536-dimensional embedding vectors, traditional B-tree indexing fails completely due to the <strong>Curse of Dimensionality</strong>:</p>",
                "<ul><li><strong>No 1D Scalar Order:</strong> Is $[0.2, 0.8]$ 'greater than' $[0.7, 0.1]$? There is no single linear order in high dimensions. A B-tree cannot sort multi-dimensional vectors!</li><li><strong>The Linear Scan Collapse:</strong> Without an index, finding the nearest neighbor requires a <strong>Brute-Force Flat Scan ($O(N)$)</strong>: computing cosine similarity against every single row in the table! At 10 million rows, a single search takes 45 seconds and consumes 100% CPU.</li></ul>",
                "<pre><code># The Brute-Force Collapse at Scale (Flat Search):\n# 1,000 vectors:        Takes 0.002s (Fast)\n# 100,000 vectors:      Takes 0.25s  (Sluggish)\n# 10,000,000 vectors:   Takes 25.0s  (Unusable in production!)\n#\n# Solution: Specialized Vector Indexes (HNSW, IVFFlat)\n# Trade exact precision for 99% accuracy at 2 milliseconds!</code></pre>",
                "<p>To search millions of vectors in single-digit milliseconds, computer science invented <strong>Approximate Nearest Neighbor (ANN)</strong> indexing.</p>",
                "<div class=\"callout\"><p><strong>The Trade-off:</strong> Vector databases trade a tiny fraction of accuracy (1-2% recall) for a 1,000x speedup, making million-scale semantic search instantaneous.</p></div>"
            ],
            "B-Trees vs High Dimensions", "The curse of dimensionality",
            [
                {"title": "1D Scalar Data (B-Tree)", "lines": ["Numbers: 1 < 5 < 12 < 42", "B-tree sorts linearly in O(log N)"]},
                {"title": "1,536D Vector Space", "lines": ["No greater-than scalar order", "B-tree fails -> Collapses to O(N) full table scan!"]}
            ],
            "Exact Flat vs Approximate Search (ANN)", "The scaling threshold",
            [
                {"title": "Exact Flat Search (Brute Force)", "lines": ["100% accuracy, but scans every row", "Takes 30 seconds at 10M vectors (Unusable)"]},
                {"title": "Approximate Nearest Neighbor (ANN)", "lines": ["Graph / Cluster navigation in 2ms", "99% recall, 1,000x faster throughput"]}
            ],
            "Complete the vector scale sentence",
            "Relational B-tree indexes fail on high-dimensional vectors because multidimensional space lacks a single {1} order, forcing brute-force {2} scans.",
            [
                {"answer": "scalar", "hint": "One-dimensional greater-than order", "options": ["scalar", "hardware", "binary"]},
                {"answer": "table", "hint": "Checking every row sequentially", "options": ["table", "font", "license"]}
            ],
            [
                {"q": "What is an Approximate Nearest Neighbor (ANN) algorithm?",
                 "a": ["An index algorithm that finds vectors close to a query in milliseconds by searching a structured graph or cluster, trading slight precision for massive speed", "An algorithm that guesses randomly", "A tool for finding lost neighbors", "A relational database join"],
                 "c": 0, "why": "ANN indexes navigate sub-spaces to find nearest neighbors in sub-linear time."},
                {"q": "What is 'Recall@K' in vector search benchmarking?",
                 "a": ["The percentage of true nearest neighbors found by the approximate ANN index compared to an exhaustive brute-force search", "The speed of the network cable", "The cost of the cloud server", "The number of rows in the table"],
                 "c": 0, "why": "Recall@K evaluates how accurately an approximate index approximates exact brute-force search."},
                {"q": "Why does a flat vector search (without an index) work acceptably on small datasets of 500 rows?",
                 "a": ["Modern CPUs can compute 500 dot products in microseconds using SIMD instructions; scale only becomes problematic past tens of thousands of rows", "Flat search is powered by AI", "Small datasets use 2D vectors", "500 rows bypass linear algebra"],
                 "c": 0, "why": "SIMD hardware acceleration handles small vector collections easily without indexing overhead."},
                {"q": "What happens to the computational cost of brute-force vector search as the dataset size N doubles?",
                 "a": ["The search duration doubles linearly: O(N) complexity", "The search duration quadruples", "The search duration is cut in half", "The search duration stays constant"],
                 "c": 0, "why": "Brute-force comparison checks every vector, scaling linearly with row count."},
            ],
            "You understand why high-dimensional vectors require specialized index architectures.",
            "Vector Index Algorithms: Flat vs HNSW vs IVFFlat", "Master the leading vector index algorithms: HNSW and IVFFlat."
        ),
        build_lesson(
            2, "vector-index-algorithms-hnsw-ivfflat", "Vector Index Algorithms: Flat vs HNSW vs IVFFlat", "Index Algorithms",
            "The workhorses of vector search: Inverted File Index (IVFFlat) and Hierarchical Navigable Small World (HNSW).",
            "What is the dominant, state-of-the-art vector indexing algorithm used by modern vector databases?",
            ["HNSW (Hierarchical Navigable Small World)", "B-Tree", "Binary Search Tree", "Linked List"],
            0, "HNSW is the industry standard for fast, high-recall approximate nearest neighbor search.",
            [
                "<p>Vector databases do not use magic to search millions of vectors in 2 milliseconds. They use sophisticated <strong>Approximate Nearest Neighbor (ANN) Index Algorithms</strong>. The two most important algorithms in production are <strong>IVFFlat</strong> and <strong>HNSW</strong>.</p>",
                "<p><strong>1. IVFFlat (Inverted File Flat Index):</strong></p>",
                "<ul><li><strong>Clustering:</strong> Partitions vector space into $C$ clusters (Voronoi cells) using K-Means.</li><li><strong>Querying:</strong> When a query arrives, find the nearest cluster centroids, and search only the vectors inside those specific clusters!</li><li><strong>Trade-off:</strong> Very fast build times and low memory usage, but lower recall if the query falls near cluster boundaries.</li></ul>",
                "<p><strong>2. HNSW (Hierarchical Navigable Small World):</strong></p>",
                "<ul><li><strong>Skip-List Graph:</strong> Builds a multi-layer graph inspired by skip-lists. Top layers have long-range connections between distant hubs; bottom layers have dense local connections.</li><li><strong>Greedy Graph Navigation:</strong> The search starts at the top layer, takes giant leaps toward the target region, drops down a layer, and zooms in with local fine-grained hops!</li><li><strong>Trade-off:</strong> <strong>Supreme query speed and 99%+ recall</strong>, but consumes more RAM to store graph edges and takes longer to build.</li></ul>",
                "<pre><code># HNSW Navigation Metaphor:\n# Layer 2 (Expressway): San Francisco ----------> New York\n# Layer 1 (Highway):    New York ------> Manhattan\n# Layer 0 (Local St):   Manhattan -> 5th Avenue -> Exact Address (Found in 2ms!)</code></pre>",
                "<div class=\"callout\"><p><strong>The Production Standard:</strong> Default to <strong>HNSW</strong> for high-throughput, low-latency applications. Use <strong>IVFFlat</strong> when RAM is severely constrained and slow build times cannot be tolerated.</p></div>"
            ],
            "HNSW Multi-Layer Skip Graph", "Hierarchical navigation from macro to micro",
            [
                {"title": "Layer 2: Expressway (Sparse)", "lines": ["Distant long-range connections", "Takes giant macro hops across space"]},
                {"title": "Layer 1: Arterial (Medium)", "lines": ["Regional neighborhood edges", "Zooms into target cluster"]},
                {"title": "Layer 0: Local Street (Dense)", "lines": ["Fine-grained nearest neighbors", "Pinpoints exact semantic matches in 2ms!"]}
            ],
            "IVFFlat Voronoi Clustering", "Partitioning space into centroid cells",
            [
                {"title": "K-Means Centroids", "lines": ["Clusters vectors into cells", "Query checks nearest centroid"]},
                {"title": "Low RAM Footprint", "lines": ["No graph edge pointers", "Fast indexing, moderate recall"]}
            ],
            "Complete the vector index sentence",
            "HNSW navigates multi-layer {1} graphs to achieve 99% recall in milliseconds, while IVFFlat partitions space using K-Means {2}.",
            [
                {"answer": "skip", "hint": "Multi-tiered highway graph structure", "options": ["skip", "binary", "terminal"]},
                {"answer": "clusters", "hint": "Centroid-based spatial cells", "options": ["clusters", "cables", "licenses"]}
            ],
            [
                {"q": "Why does HNSW consume more RAM than IVFFlat?",
                 "a": ["HNSW must store millions of graph edge connections (pointers between neighboring nodes) in memory alongside the vectors", "HNSW uses uncompressed images", "HNSW is written in Python", "HNSW stores duplicate vectors"],
                 "c": 0, "why": "Maintaining multi-layer graph topology requires storing bidirectional edge pointer arrays in RAM."},
                {"q": "What parameter in HNSW controls the trade-off between index build time and search accuracy?",
                 "a": ["M (number of bi-directional links per node) and efSearch / efConstruction", "The screen brightness", "The database password", "The room temperature"],
                 "c": 0, "why": "M governs graph density; ef parameters dictate how many candidates to explore during construction and search."},
                {"q": "What happens if a query in IVFFlat falls directly on the boundary between two Voronoi cluster cells?",
                 "a": ["It may miss the true nearest neighbor if that neighbor sits just across the boundary in an adjacent unsearched cluster", "The query crashes", "The database deletes the cell", "The vectors turn into text"],
                 "c": 0, "why": "Searching only one centroid cell risks boundary misses; increasing nprobe checks neighboring centroids to compensate."},
                {"q": "Why is HNSW considered the gold standard for real-time semantic search?",
                 "a": ["It consistently delivers single-digit millisecond query latency with over 98-99% recall on multi-million vector collections", "It is free on all cloud providers", "It runs on paper", "It was invented by Google in 1990"],
                 "c": 0, "why": "HNSW provides the best empirical speed-recall Pareto frontier in modern vector search benchmarks."}
            ],
            "You understand the mechanics, trade-offs, and graph topology of HNSW and IVFFlat indexes.",
            "Distance Metrics: Cosine, L2 (Euclidean), and Inner Product", "Align distance metrics with model training requirements."
        ),
        build_lesson(
            3, "vector-database-distance-metrics", "Distance Metrics: Cosine, L2 (Euclidean), and Inner Product", "Metric Alignment",
            "Configuring vector index metrics: Cosine Distance, Euclidean (L2), and Inner Product (IP), and why metric matching is mandatory.",
            "What happens if an embedding model was trained using Cosine Distance, but you configure your vector index to use Euclidean L2 distance on unnormalized vectors?",
            ["Search results will be corrupted by document length differences, returning suboptimal or completely irrelevant nearest neighbors", "The database will refuse to start", "The computer processor will overheat", "Vectors will be deleted"],
            0, "Index distance metrics must match the training objective of the embedding model to preserve semantic geometry.",
            [
                "<p>When initializing a vector index in pgvector, Chroma, or Pinecone, you must specify the <strong>Distance Metric</strong>. Configuring the wrong metric is a silent bug: the database runs smoothly, returns 20 results in 2ms, but the results are semantically wrong!</p>",
                "<p>The three standard vector index metrics:</p>",
                "<ul><li><strong>1. Cosine Distance ($1 - \\cos(\\theta)$):</strong> Measures the angular divergence between vectors. In pgvector: <code><=></code> operator. Standard for text embeddings because it ignores document length differences.</li><li><strong>2. Inner Product / Dot Product ($- u \\cdot v$):</strong> In pgvector: <code><#></code> operator. The raw dot product (multiplied by $-1$ so smaller is closer). Fastest to compute on hardware!</li><li><strong>3. Euclidean Distance (L2) ($\\sqrt{\\sum (u_i - v_i)^2}$):</strong> In pgvector: <code><-></code> operator. Straight-line distance. Used in computer vision (facial recognition) and clustering.</li></ul>",
                "<pre><code># Creating an HNSW Index with Cosine Distance in PostgreSQL (pgvector):\nCREATE TABLE document_chunks (\n    id SERIAL PRIMARY KEY,\n    content TEXT,\n    embedding vector(1536) -- OpenAI embedding dimension\n);\n\n-- Create HNSW index using cosine distance operator (<=>):\nCREATE INDEX ON document_chunks \nUSING hnsw (embedding vector_cosine_ops)\nWITH (m = 16, ef_construction = 64);</code></pre>",
                "<div class=\"callout\"><p><strong>The Normalization Shortcut:</strong> If you L2-normalize all vectors (length = 1.0) before inserting them, Euclidean Distance, Cosine Distance, and Dot Product become mathematically monotonic equivalents!</p></div>"
            ],
            "pgvector Distance Operators", "PostgreSQL vector distance syntax",
            [
                {"title": "<=> (Cosine Distance)", "lines": ["vector_cosine_ops", "1.0 - cosine_similarity", "Standard for text embeddings"]},
                {"title": "<#> (Negative Inner Product)", "lines": ["vector_ip_ops", "- (u . v)", "Blazing fast on normalized unit vectors"]},
                {"title": "<-> (Euclidean L2 Distance)", "lines": ["vector_l2_ops", "Straight line distance in hyperspace", "Standard for vision embeddings"]}
            ],
            "The Normalization Equivalence", "When metrics become mathematically identical",
            [
                {"title": "Unnormalized Vectors", "lines": ["Lengths vary widely", "Cosine != Dot Product != L2"]},
                {"title": "Unit Normalized (||v|| = 1)", "lines": ["All vectors on unit sphere surface", "L2^2 = 2 - 2*(u . v) -> Metric equivalence!"]}
            ],
            "Complete the distance metric sentence",
            "In pgvector, text embeddings standardly use {1} distance using vector_cosine_ops, which simplifies to dot product when vectors are {2}.",
            [
                {"answer": "cosine", "hint": "Angular directional distance", "options": ["cosine", "alphabetical", "random"]},
                {"answer": "normalized", "hint": "Scaled to unit length 1.0", "options": ["normalized", "encrypted", "compressed"]}
            ],
            [
                {"q": "What pgvector operator computes cosine distance between two vector columns?",
                 "a": ["<=>", "<->", "<#>", "=="],
                 "c": 0, "why": "<=> represents cosine distance in pgvector."},
                {"q": "Why does Inner Product (IP) search run faster on hardware than Cosine Distance?",
                 "a": ["It requires only multiplication and addition, avoiding expensive square root and vector norm divisions", "It runs on paper", "It uses no RAM", "It is written in assembly"],
                 "c": 0, "why": "Dot product avoids computing vector lengths at query time."},
                {"q": "What happens if you query an index built with 'vector_l2_ops' using the '<=>' cosine operator?",
                 "a": ["PostgreSQL cannot use the HNSW index and falls back to a slow, brute-force sequential table scan", "The query crashes the database", "The table is deleted", "The server reboots"],
                 "c": 0, "why": "Index operator classes must match query operators for the database planner to use the index."},
                {"q": "Why is Euclidean L2 distance commonly used in facial recognition embeddings?",
                 "a": ["Face embedding models (like FaceNet) are explicitly trained with triplet loss to map faces to absolute Euclidean coordinates", "Faces are flat", "Cameras only measure L2 distance", "Humans look like Euclidean geometry"],
                 "c": 0, "why": "FaceNet models train directly using Euclidean distance loss on the unit hypersphere."}
            ],
            "You know how to configure and match distance metrics in vector databases.",
            "Metadata Filtering: Pre-Filtering vs Post-Filtering", "Solve filtered vector search: pre-filtering vs post-filtering vs single-stage."
        ),
        build_lesson(
            4, "metadata-filtering-pre-vs-post", "Metadata Filtering: Pre-Filtering vs Post-Filtering", "Filtered Search",
            "The filtered vector search challenge: Pre-filtering (filter then search) vs Post-filtering (search then filter) vs Single-Stage HNSW.",
            "Why does naive 'Post-Filtering' (searching Top-K vectors first, then filtering by metadata) fail when filters are restrictive?",
            ["If you search Top-10 vectors and then filter by tenant_id, all 10 candidates might belong to other tenants, returning zero results!", "Post-filtering is illegal in SQL", "Metadata cannot be filtered", "Post-filtering crashes the GPU"],
            0, "Post-filtering risks returning zero results if none of the top-K nearest neighbors match the metadata filter.",
            [
                "<p>In real-world enterprise software, you never do raw vector search alone. You do <strong>Filtered Vector Search</strong>: <em>'Find the 5 most similar documents, BUT ONLY where `department == \"finance\"` AND `created_year >= 2024`.'</em></p>",
                "<p>Combining metadata filtering with vector indexing is notoriously difficult:</p>",
                "<ul><li><strong>1. Post-Filtering (Naive & Flawed):</strong> Run vector search first to find the top 50 candidates, then filter by metadata. <em>Fatal Flaw:</em> If only 1% of your documents belong to 'finance', all 50 candidates might be engineering docs! The user gets an empty result even though finance docs exist in the database!</li><li><strong>2. Pre-Filtering (Slow):</strong> Find all matching metadata rows first, then do a flat brute-force vector search over the filtered subset. <em>Flaw:</em> Bypasses the fast HNSW index, resulting in slow sequential scans.</li><li><strong>3. Single-Stage Filtered HNSW (Modern Standard):</strong> Used by pgvector, Qdrant, and Pinecone. The HNSW graph traversal is <strong>filter-aware in real time</strong>: as the search hops from node to node, it inspects metadata masks, exploring only nodes that satisfy the metadata filter!</li></ul>",
                "<pre><code># Single-Stage Filtered Vector Search in SQL (pgvector):\nSELECT id, content, 1 - (embedding <=> :query_vector) AS similarity\nFROM documents\nWHERE tenant_id = 'acme_corp'          -- Relational metadata filter\n  AND status = 'published'\nORDER BY embedding <=> :query_vector  -- HNSW vector similarity\nLIMIT 5;</code></pre>",
                "<div class=\"callout\"><p><strong>The Engineering Choice:</strong> Modern vector engines solve this through single-stage filtered HNSW or payload-indexing, ensuring you get both sub-second graph speed AND 100% strict metadata filtering.</p></div>"
            ],
            "Filtered Vector Search Strategies", "Post-filtering vs Pre-filtering vs Filtered HNSW",
            [
                {"title": "Post-Filtering (Flawed)", "lines": ["Find top 20 vectors first -> Filter by tenant", "Fails if no top vectors match filter (Empty results!)"]},
                {"title": "Pre-Filtering (Slow)", "lines": ["Filter 5,000 rows first -> Brute-force scan", "Bypasses fast HNSW graph index"]},
                {"title": "Single-Stage Filtered HNSW", "lines": ["Graph navigation respects metadata mask in real time", "Fast, accurate, and 100% compliant"]}
            ],
            "Multi-Tenant Isolation", "Hard security enforcement at query time",
            [
                {"title": "User Query (Tenant A)", "lines": ["WHERE tenant_id = 'org_A'", "Database masks out all Tenant B vectors"]},
                {"title": "Secure Result", "lines": ["100% isolated to Tenant A", "Zero cross-tenant data leakage"]}
            ],
            "Complete the metadata filtering sentence",
            "Single-stage filtered vector search navigates the HNSW graph while checking metadata {1} in real time, preventing empty results from {2} filtering.",
            [
                {"answer": "masks", "hint": "Filter bitmasks during graph traversal", "options": ["masks", "cables", "tokens"]},
                {"answer": "post", "hint": "Filtering after vector search", "options": ["post", "pre", "binary"]}
            ],
            [
                {"q": "What happens in post-filtering if a user searches for a rare topic with a very restrictive metadata filter?",
                 "a": ["The vector search fills the Top-K with popular irrelevant documents, and filtering removes them all, returning an empty result", "The database creates fake documents", "The server crashes", "The user is charged double"],
                 "c": 0, "why": "Post-filtering fails when the intersection between vector nearest neighbors and metadata filters is small."},
                {"q": "How does Qdrant or pgvector implement single-stage filtered vector search?",
                 "a": ["By creating an inverted payload index and consulting the filter mask during the HNSW graph traversal hops", "By running two separate databases", "By converting text into SQL", "By asking human operators to filter"],
                 "c": 0, "why": "Filter-aware graph traversal only explores nodes that satisfy the pre-computed metadata mask."},
                {"q": "Why is multi-tenant metadata filtering critical for enterprise security in RAG?",
                 "a": ["It prevents customer A from accidentally retrieving and viewing sensitive private documents belonging to customer B", "It makes the database faster", "It reduces electric bills", "It is required by Python syntax"],
                 "c": 0, "why": "Metadata filtering enforces hard cross-tenant isolation boundaries in shared database tables."},
                {"q": "Can you filter on multiple metadata fields simultaneously (e.g. tenant_id AND date AND author)?",
                 "a": ["Yes; vector databases support standard SQL Boolean combinations (AND, OR, NOT) over metadata attributes", "No; only one filter is allowed", "Only in JavaScript", "Only on weekends"],
                 "c": 0, "why": "Modern vector engines support rich Boolean filtering expressions alongside similarity search."}
            ],
            "You understand the challenges and solutions of filtered vector search across enterprise databases.",
            "Hybrid Search: Combining BM25 Keyword Search with Vector Search", "Pair exact keyword precision with semantic vector search."
        ),
        build_lesson(
            5, "hybrid-search-bm25-vectors", "Hybrid Search: Combining BM25 Keyword Search with Vector Search", "Hybrid Search",
            "The pinnacle of retrieval: why combining BM25 keyword search with dense vector embeddings outperforms either method alone.",
            "What is 'Hybrid Search' in modern retrieval architecture?",
            ["Combining sparse lexical keyword search (BM25) with dense semantic vector search to capture both exact terminology and conceptual meaning", "Searching in two languages simultaneously", "Using two different web browsers", "Searching on both a laptop and a phone"],
            0, "Hybrid search unifies the exact keyword matching of BM25 with the conceptual understanding of dense vector embeddings.",
            [
                "<p>Vector search is magical at understanding synonyms and concepts: search for <em>'canine illness'</em>, and it finds articles about <em>'sick dogs'</em>. But vector search has a notorious blind spot: <strong>Exact Alphanumeric Keywords</strong>.</p>",
                "<p>If a developer searches for an exact error code like <code>ERR_AUTH_8492</code>, a specific product part number (<code>SKU-9912-B</code>), or an unusual acronym, vector search often returns generic articles about errors because the specific code was blurred in embedding space.</p>",
                "<p><strong>Hybrid Search</strong> combines the best of both worlds:</p>",
                "<ul><li><strong>1. Sparse Lexical Search (BM25):</strong> Best-Matching 25. The battle-tested TF-IDF algorithm used by Elasticsearch. Exceptional at exact keyword matches, serial numbers, acronyms, and rare proper nouns!</li><li><strong>2. Dense Vector Search (HNSW / Embeddings):</strong> Exceptional at conceptual meaning, synonyms, cross-lingual retrieval, and fuzzy human intent.</li><li><strong>3. Unified Fusion:</strong> Merges both result lists into a single, superior ranking.</li></ul>",
                "<pre><code># The Hybrid Search Advantage:\n# Query: \"Fix PostgreSQL error 42P01 relation does not exist\"\n# Vector Search: Retrieves generic articles about database tables (Fuzzy).\n# BM25 Search:   Finds the EXACT documentation page for error code 42P01!\n# Hybrid Fusion: Places the exact error 42P01 page at Rank #1 with 100% confidence!</code></pre>",
                "<div class=\"callout\"><p><strong>The Industry Standard:</strong> Every production search engine (Elasticsearch, Pinecone, Qdrant, Azure AI Search) now recommends Hybrid Search as the default architecture for enterprise RAG.</p></div>"
            ],
            "Dense Vector vs Sparse Lexical (BM25)", "The complementary strengths of hybrid search",
            [
                {"title": "Sparse BM25 (Exact Match)", "lines": ["Finds exact codes: 'ERR_42P01'", "Matches rare proper nouns & SKUs", "Blind to synonyms & concepts"]},
                {"title": "Dense Vector (Semantic)", "lines": ["Matches 'puppy' to 'dog'", "Understands intent & meaning", "Fuzzy on exact serial codes"]},
                {"title": "Hybrid Fusion (The Winner)", "lines": ["Combines both search engines", "Superior retrieval accuracy across all queries!"]}
            ],
            "Hybrid Query Flow", "Dual retrieval and fusion",
            [
                {"title": "User Query Input", "lines": ["Dispatched to BM25 and Vector DB simultaneously"]},
                {"title": "Dual Candidate Lists", "lines": ["BM25 returns top 20 exact matches", "Vector DB returns top 20 semantic matches"]},
                {"title": "Fusion Ranking", "lines": ["RRF merges candidates into final top 5", "Best of both worlds!"]}
            ],
            "Complete the hybrid search sentence",
            "Hybrid search combines sparse lexical {1} search for exact keywords with dense {2} search for semantic concepts.",
            [
                {"answer": "BM25", "hint": "Best-Matching 25 keyword algorithm", "options": ["BM25", "HTML5", "CSS3"]},
                {"answer": "vector", "hint": "Dense semantic embedding search", "options": ["vector", "binary", "terminal"]}
            ],
            [
                {"q": "Why does BM25 keyword search succeed where vector search fails on product part numbers like 'PART-9812-X'?",
                 "a": ["BM25 matches exact inverted-index token strings, whereas embedding models blur rare alphanumeric codes into generic representations", "BM25 uses AI", "Vector search is prohibited for parts", "BM25 runs on paper"],
                 "c": 0, "why": "Lexical inverted indexes match exact character tokens with high precision."},
                {"q": "What is the primary benefit of hybrid search over pure vector search?",
                 "a": ["It prevents embarrassing search failures on exact keywords while retaining the ability to understand conceptual synonyms", "It cuts database storage costs in half", "It eliminates the need for embeddings", "It runs without a CPU"],
                 "c": 0, "why": "Hybrid search covers the blind spots of both lexical and semantic retrieval systems."},
                {"q": "What open-source search engine natively supports both BM25 and vector search in a single cluster?",
                 "a": ["Elasticsearch or OpenSearch", "Microsoft Paint", "Git bash", "Notepad"],
                 "c": 0, "why": "Elasticsearch and OpenSearch support native hybrid search combining Lucene BM25 with HNSW vectors."},
                {"q": "How does hybrid search impact overall search recall?",
                 "a": ["It consistently increases retrieval recall across diverse real-world user queries compared to either method alone", "It reduces recall to zero", "It has no impact on recall", "It only works on English queries"],
                 "c": 0, "why": "Empirical benchmarks prove hybrid fusion achieves higher recall across diverse query types."}
            ],
            "You understand the complementary power and mechanics of hybrid search.",
            "Reciprocal Rank Fusion (RRF) and Re-ranking Models", "Merge search results with RRF and re-rank with Cross-Encoders."
        ),
        build_lesson(
            6, "rrf-and-reranking-models", "Reciprocal Rank Fusion (RRF) and Re-ranking Models", "Re-ranking",
            "Fusing and scoring results: Reciprocal Rank Fusion (RRF) mathematics and Cross-Encoder re-ranking (Cohere, BGE).",
            "How does Reciprocal Rank Fusion (RRF) merge two different search result lists (e.g. BM25 and Vector Search) without normalizing scores?",
            ["By scoring each document based on the reciprocal of its rank position in each list: RRF_score = sum(1 / (k + rank))", "By averaging their prices", "By sorting by file size", "By flipping a coin"],
            0, "RRF scores documents based purely on rank positions, eliminating the need to normalize incompatible score scales.",
            [
                "<p>When you run hybrid search, BM25 returns scores like <code>14.2</code>, while vector search returns cosine similarity scores like <code>0.84</code>. You cannot simply add <code>14.2 + 0.84</code>; their mathematical scales are completely incompatible!</p>",
                "<p>How do you merge two different candidate rankings fairly? Using <strong>Reciprocal Rank Fusion (RRF)</strong> (Cormack et al., 2009):</p>",
                "$$\\text{RRF}(d) = \\sum_{m \\in \\text{systems}} \\frac{1}{k + \\text{rank}_m(d)}$$",
                "<p>Where $k$ is a constant (typically $60$) and $\\text{rank}_m(d)$ is the position of document $d$ in system $m$. Documents that rank high in <em>both</em> lists get a massive boost, while documents that rank high in only one list still get considered!</p>",
                "<p>The Final Quality Polish: <strong>Cross-Encoder Re-Ranking</strong>:</p>",
                "<ul><li><strong>Stage 1 (Fast Hybrid Retrieval):</strong> Retrieve the top 50 candidates using BM25 and vector search merged with RRF (takes 5ms).</li><li><strong>Stage 2 (Cross-Encoder Re-Ranking):</strong> Pass the query and each of the 50 candidates into a dedicated <strong>Cross-Encoder Re-Ranker</strong> (e.g. Cohere Re-rank, BGE-Reranker). The cross-encoder evaluates full cross-attention between query and document, outputting an ultra-precise relevance score!</li></ul>",
                "<pre><code># The Two-Stage Retrieval Pipeline:\n# 1. Broad Hybrid Search: BM25 + Vector -> RRF -> Top 50 Candidates (Fast: 5ms)\n# 2. Deep Re-Ranker: Cohere Re-Rank -> Scrutinizes Top 50 -> Emits Top 5 Gold Chunks (Accurate!)</code></pre>",
                "<div class=\"callout\"><p><strong>The Winning Pattern:</strong> Bi-encoders cast a wide, fast net to find the top 50; cross-encoder re-rankers perform deep scrutiny to deliver the top 5 gold nuggets to your LLM.</p></div>"
            ],
            "The Two-Stage Retrieval Pipeline", "Wide net retrieval followed by deep cross-encoder re-ranking",
            [
                {"title": "Stage 1: Hybrid Retrieval (Fast)", "lines": ["BM25 + Vector Search (HNSW)", "Merged via RRF -> 50 candidates in 5ms"]},
                {"title": "Stage 2: Cross-Encoder Re-Ranker", "lines": ["Full cross-attention on 50 pairs", "Outputs top 5 gold-standard chunks"]}
            ],
            "Reciprocal Rank Fusion Math", "Merging rankings without score scale headaches",
            [
                {"title": "Document A Ranks", "lines": ["BM25 Rank: #1, Vector Rank: #3", "Score = 1/(60+1) + 1/(60+3) = 0.032 (High!)"]},
                {"title": "Document B Ranks", "lines": ["BM25 Rank: #40, Vector Rank: #2", "Score = 1/(60+40) + 1/(60+2) = 0.026"]}
            ],
            "Complete the re-ranking sentence",
            "Reciprocal Rank Fusion merges candidate lists using rank {1}, while Cross-Encoders re-rank the top candidates using deep cross-{2}.",
            [
                {"answer": "positions", "hint": "Document rank order (1st, 2nd, 3rd)", "options": ["positions", "passwords", "tokens"]},
                {"answer": "attention", "hint": "Full attention between query and text", "options": ["attention", "compilation", "formatting"]}
            ],
            [
                {"q": "Why is Reciprocal Rank Fusion (RRF) immune to the problem of incompatible score scales?",
                 "a": ["It ignores raw scores entirely and computes fusion scores based strictly on the relative rank positions of documents in each list", "It converts scores to dollars", "It multiplies scores by zero", "It runs on paper"],
                 "c": 0, "why": "RRF operates on ordinal rankings rather than arbitrary scalar score values."},
                {"q": "Why don't we run Cross-Encoder re-rankers across all 1 million documents in a database directly?",
                 "a": ["Cross-encoders must process the query and document together through a transformer, which is 1,000x too slow to run across millions of rows", "Cross-encoders are illegal for large databases", "Databases refuse to store cross-encoders", "Cross-encoders delete documents"],
                 "c": 0, "why": "Cross-encoders have heavy pairwise computational overhead; they are only viable for re-ranking small candidate sets (20-100)."},
                {"q": "What is the standard value for the smoothing constant k in the RRF formula?",
                 "a": ["Approximately 60", "1,000,000", "0", "Negative 5"],
                 "c": 0, "why": "Cormack et al. proved k=60 balances top-rank rewards while avoiding outlier dominance."},
                {"q": "What commercial API provides state-of-the-art cross-encoder re-ranking as a service?",
                 "a": ["Cohere Rerank API", "Photoshop", "Google Sheets", "GitHub Copilot"],
                 "c": 0, "why": "Cohere's Rerank API is an industry-leading hosted cross-encoder service."}
            ],
            "You know how to merge search results with RRF and polish accuracy with cross-encoder re-rankers.",
            "Popular Vector Stores: pgvector, Chroma, Qdrant, Pinecone", "Compare the leading vector databases and choose the right engine."
        ),
        build_lesson(
            7, "popular-vector-stores-comparison", "Popular Vector Stores: pgvector, Chroma, Qdrant, Pinecone", "Vector Stores",
            "Comparing vector database engines: pgvector (Postgres extension), Chroma (local embedded), Qdrant (Rust high-performance), and Pinecone (cloud managed).",
            "What is the primary architectural advantage of using pgvector (PostgreSQL vector extension) over dedicated standalone vector databases?",
            ["It allows storing relational business tables, user accounts, and vector embeddings in a single database with ACID transactions", "It makes PostgreSQL free", "It requires no memory", "It only runs on Macs"],
            0, "pgvector consolidates relational data, metadata, and vector search into your existing PostgreSQL infrastructure.",
            [
                "<p>The vector database market has matured into distinct architectural categories. Choosing the right vector store depends on your existing tech stack, scale, and operational maturity:</p>",
                "<ul><li><strong>1. pgvector (The Pragmatic Postgres Extension):</strong> An open-source extension for PostgreSQL. <em>Best for:</em> Teams already using Postgres. You keep your users, orders, and embeddings in <strong>one single database</strong> with ACID transactions, standard SQL joins, and existing backups. Handles millions of vectors with HNSW indexing!</li><li><strong>2. ChromaDB (The Embedded Python Native):</strong> An open-source embedded vector database that runs inside your Python process (like SQLite). <em>Best for:</em> Local prototypes, notebooks, desktop apps, and lightweight microservices. Zero server setup required!</li><li><strong>3. Qdrant (The High-Performance Rust Engine):</strong> An open-source, purpose-built vector engine written in Rust. <em>Best for:</em> Extreme performance, advanced payload filtering, billion-scale deployments, and high-throughput production clusters.</li><li><strong>4. Pinecone (The Managed Serverless Cloud):</strong> A proprietary, fully-managed cloud vector database. <em>Best for:</em> Teams wanting zero infrastructure management, automatic scaling, and enterprise SOC2 compliance.</li></ul>",
                "<pre><code># The Vector Store Selection Matrix:\n# Already using PostgreSQL?         -> pgvector (Consolidate tech stack!)\n# Building a prototype or local app? -> ChromaDB (pip install chromadb, zero setup!)\n# Extreme scale (> 50M vectors)?    -> Qdrant / Milvus (Dedicated Rust performance)\n# Zero-DevOps enterprise cloud?     -> Pinecone / Weaviate Cloud</code></pre>",
                "<div class=\"callout\"><p><strong>The Boring Technology Rule:</strong> Default to <strong>pgvector</strong> if you already use Postgres. You probably don't need a separate dedicated vector database cluster until you exceed tens of millions of vectors.</p></div>"
            ],
            "Vector Database Archetypes", "Comparing the leading storage engines",
            [
                {"title": "pgvector (PostgreSQL)", "lines": ["Relational + Vector in 1 DB", "ACID transactions & standard SQL", "Zero new infrastructure to manage"]},
                {"title": "ChromaDB (Embedded)", "lines": ["Runs in-process like SQLite", "pip install chromadb -> instant start", "Ideal for prototypes & local tools"]},
                {"title": "Qdrant (Dedicated Rust)", "lines": ["High-throughput Rust engine", "Advanced single-stage filtering", "Billion-scale clustering"]},
                {"title": "Pinecone (Cloud Managed)", "lines": ["Serverless managed cloud", "Zero DevOps, automatic scaling", "Proprietary pay-per-use"]}
            ],
            "Tech Stack Consolidation", "The power of pgvector",
            [
                {"title": "Two Databases (Messy)", "lines": ["Postgres for Users + Pinecone for Vectors", "Requires distributed transaction sync"]},
                {"title": "Unified pgvector (Clean)", "lines": ["JOIN users WITH embeddings in 1 SQL query", "Atomic updates, single backup pipeline"]}
            ],
            "Complete the vector stores sentence",
            "While Chroma provides embedded in-process storage for prototypes, {1} allows consolidating relational data and vector search into a single {2} database.",
            [
                {"answer": "pgvector", "hint": "PostgreSQL vector extension", "options": ["pgvector", "Photoshop", "Word"]},
                {"answer": "PostgreSQL", "hint": "Standard enterprise relational database", "options": ["PostgreSQL", "browser", "keyboard"]}
            ],
            [
                {"q": "Why is keeping relational tables and vector embeddings in the same PostgreSQL database (via pgvector) operationally cleaner?",
                 "a": ["It eliminates the need to synchronize data across two separate databases and allows standard SQL JOINs across users and embeddings", "Postgres runs faster than all other software", "Postgres uses no RAM", "Postgres deletes duplicate vectors"],
                 "c": 0, "why": "Unified storage prevents distributed consistency bugs between relational data and vector search."},
                {"q": "What makes ChromaDB popular for quick prototyping and local agent development?",
                 "a": ["It installs via 'pip install chromadb' and runs in-memory or persists to a local folder with zero external servers to configure", "It is written in assembly", "It requires no CPU", "It was invented by Apple"],
                 "c": 0, "why": "Chroma operates as an embedded database with zero infrastructure setup friction."},
                {"q": "What programming language powers the high-performance Qdrant vector database?",
                 "a": ["Rust", "Python", "JavaScript", "PHP"],
                 "c": 0, "why": "Qdrant is implemented in Rust for memory safety, low latency, and high concurrency."},
                {"q": "When is migrating from pgvector to a dedicated vector database (like Qdrant or Pinecone) justified?",
                 "a": ["When vector collection size exceeds tens of millions of records or search query throughput overwhelms the primary relational database", "When you want to spend more money", "When switching from Python to Java", "After 100 queries"],
                 "c": 0, "why": "Dedicated engines scale to tens or hundreds of millions of vectors without competing for relational database resources."}
            ],
            "You know how to evaluate and select the optimal vector database for your application architecture.",
            "Scaling and Maintenance: Index Build Times, Memory, and Updates", "Manage vector indexes in production: maintenance, memory, and updates."
        ),
        build_lesson(
            8, "scaling-and-maintenance-production", "Scaling and Maintenance: Index Build Times, Memory, and Updates", "Production Operations",
            "Operating vector databases at scale: managing index build times, memory sizing, dynamic updates, and quantization.",
            "Why can building an HNSW index on a table with 5 million vectors cause high CPU and memory spikes?",
            ["Constructing HNSW graphs requires computing millions of distance calculations to establish nearest-neighbor graph edges", "HNSW compiles the operating system", "Building indexes requires downloading the internet", "HNSW deletes table rows"],
            0, "Building graph indexes requires dense distance calculations across all nodes to establish edge topologies.",
            [
                "<p>Operating a vector database in production is an infrastructure discipline. While inserting 1,000 vectors is trivial, scaling to 10 million vectors introduces serious <strong>Operational and Scaling Constraints</strong>:</p>",
                "<ul><li><strong>1. Memory Sizing (RAM is Non-Negotiable):</strong> An HNSW index <em>must live entirely in RAM</em> to achieve millisecond latency. If an index exceeds physical memory and pages to disk, query latency explodes from 2ms to 2,000ms!</li><li><strong>2. Index Build Time Management:</strong> Building an HNSW index on 10 million vectors can take hours of 100% CPU utilization. In PostgreSQL, always set <code>maintenance_work_mem = '8GB'</code> before building indexes!</li><li><strong>3. Dynamic Updates & Graph Fragmentation:</strong> Deleting and updating vectors leaves 'tombstones' in HNSW graphs. Over time, graph connectivity degrades. Production databases require periodic re-indexing or background compaction.</li><li><strong>4. Scalar & Product Quantization (PQ):</strong> Compressing stored vectors from 32-bit floats to 8-bit or 1-bit inside the index reduces RAM usage by 4x to 8x, allowing 4x more vectors to fit on the same hardware.</li></ul>",
                "<pre><code># PostgreSQL Maintenance Optimization for pgvector Index Creation:\nSET maintenance_work_mem = '8GB'; -- Allocate sufficient RAM for HNSW graph build\nSET max_parallel_maintenance_workers = 4; -- Leverage 4 CPU cores\n\n-- Build index concurrently to prevent locking read queries:\nCREATE INDEX CONCURRENTLY ON documents \nUSING hnsw (embedding vector_cosine_ops)\nWITH (m = 16, ef_construction = 64);</code></pre>",
                "<div class=\"callout\"><p><strong>The Scale Rule:</strong> Size your vector server RAM so that: `Total RAM > (Vector_Data_Size + Index_Size) * 1.3`. Keep your index in memory, and your semantic search will remain blazing fast forever.</p></div>"
            ],
            "Production Vector Index Operations", "Managing RAM, build times, and updates",
            [
                {"title": "In-Memory Requirement", "lines": ["HNSW must reside in RAM", "Paging to disk degrades latency 1,000x"]},
                {"title": "Index Build Optimization", "lines": ["Allocate maintenance_work_mem", "Build CONCURRENTLY to prevent locking"]},
                {"title": "Vector Quantization (PQ)", "lines": ["Compresses vectors 4x-8x in RAM", "Enables scaling on affordable hardware"]}
            ],
            "Graph Compaction and Tombstones", "Preventing index fragmentation",
            [
                {"title": "Frequent Deletes & Updates", "lines": ["Leaves dead tombstone nodes", "Degrades graph connectivity over time"]},
                {"title": "Periodic Maintenance", "lines": ["Run VACUUM / Reindex in off-hours", "Restores pristine graph topology"]}
            ],
            "Complete the scaling operations sentence",
            "HNSW vector indexes must reside in {1} to maintain millisecond latency, and large builds should run {2} to prevent locking tables.",
            [
                {"answer": "RAM", "hint": "High-speed volatile system memory", "options": ["RAM", "hard drive", "tape"]},
                {"answer": "concurrently", "hint": "Background non-blocking execution", "options": ["concurrently", "offline", "randomly"]}
            ],
            [
                {"q": "What happens to vector search query latency if an HNSW index exceeds available RAM and pages to SSD disk?",
                 "a": ["Latency explodes from single-digit milliseconds to multiple seconds due to slow disk I/O bottlenecks", "Latency improves by 10x", "The database automatically turns off", "The vectors are converted to integers"],
                 "c": 0, "why": "Graph traversal requires random memory access; reading non-contiguous nodes from disk is catastrophically slow."},
                {"q": "What PostgreSQL parameter should be temporarily increased before building a large pgvector HNSW index?",
                 "a": ["maintenance_work_mem", "shared_buffers", "max_connections", "port"],
                 "c": 0, "why": "maintenance_work_mem allocates dedicated memory for index building, speeding up construction."},
                {"q": "How does Product Quantization (PQ) reduce memory consumption in vector databases?",
                 "a": ["It divides vectors into sub-vectors and quantizes them into compact codebook centroids, slashing RAM usage by up to 75-90%", "It deletes half the database rows", "It turns off the database server", "It removes all vowels from text"],
                 "c": 0, "why": "Product quantization compresses vectors into compact integer cluster codes in memory."},
                {"q": "What is the benefit of the 'CREATE INDEX CONCURRENTLY' command in PostgreSQL?",
                 "a": ["It builds the index in the background without acquiring exclusive table locks that block ongoing user reads and writes", "It makes the index 10x smaller", "It compiles Python code", "It reduces electricity costs"],
                 "c": 0, "why": "CONCURRENTLY avoids locking tables, allowing production traffic to proceed during long index builds."}
            ],
            "You have completed the Vector Databases & Semantic Search course.",
            "Course Completed: 30 Advanced Courses Finished!", "You have mastered the complete journey across Testing, AI Engineering, ML Foundations, and RAG Systems."
        )
    ]

    glossary = [
        {"id": "curse", "title": "Curse of Dimensionality", "terms": [
            {"term": "Curse of Dimensionality", "def": "The phenomenon where geometric distance becomes sparse and B-trees fail in high-dimensional spaces.", "lesson": 1, "tags": ["math", "vectors"]},
            {"term": "Approximate Nearest Neighbor", "def": "Index algorithms (ANN) trading a tiny fraction of accuracy for 1,000x speedups over brute-force search.", "lesson": 1, "tags": ["search", "algorithms"]},
            {"term": "Flat Index", "def": "Brute-force exhaustive search computing exact distance against every vector in O(N) linear time.", "lesson": 1, "tags": ["search", "indexing"]}
        ]},
        {"id": "algorithms", "title": "Index Algorithms", "terms": [
            {"term": "HNSW", "def": "Hierarchical Navigable Small World — a multi-layer graph index providing state-of-the-art speed and recall.", "lesson": 2, "tags": ["algorithms", "hnsw"]},
            {"term": "IVFFlat", "def": "Inverted File Index — clustering vector space using K-Means to search only relevant centroid cells.", "lesson": 2, "tags": ["algorithms", "clustering"]},
            {"term": "Skip-List Graph", "def": "A hierarchical graph with sparse highway connections on top and dense local connections on bottom.", "lesson": 2, "tags": ["data-structures", "hnsw"]}
        ]},
        {"id": "metrics-search", "title": "Metrics & Hybrid Search", "terms": [
            {"term": "Cosine Distance", "def": "Angular distance metric (1 - cos(theta)), represented by the <=> operator in pgvector.", "lesson": 3, "tags": ["metrics", "pgvector"]},
            {"term": "Single-Stage Filtered Search", "def": "Navigating the HNSW graph while checking metadata filter masks in real time to prevent empty results.", "lesson": 4, "tags": ["search", "filtering"]},
            {"term": "Reciprocal Rank Fusion", "def": "An algorithm merging disparate search rankings based on reciprocal rank positions: sum(1 / (k + rank)).", "lesson": 6, "tags": ["algorithms", "hybrid"]}
        ]},
        {"id": "operations", "title": "Stores & Operations", "terms": [
            {"term": "pgvector", "def": "An open-source PostgreSQL extension adding vector data types, HNSW indexing, and similarity search to Postgres.", "lesson": 7, "tags": ["databases", "postgres"]},
            {"term": "ChromaDB", "def": "An open-source embedded vector database that runs inside Python processes with zero server configuration.", "lesson": 7, "tags": ["databases", "embedded"]},
            {"term": "Product Quantization", "def": "Compressing vectors into compact codebook centroids to slash index RAM footprint by 75-90%.", "lesson": 8, "tags": ["compression", "memory"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "PostgreSQL HNSW Index Creation (pgvector)",
            "label": "Production vector index setup",
            "code": "-- Increase maintenance memory for fast build:\nSET maintenance_work_mem = '8GB';\n-- Create HNSW index with cosine distance (<=>):\nCREATE INDEX CONCURRENTLY ON document_chunks\nUSING hnsw (embedding vector_cosine_ops)\nWITH (m = 16, ef_construction = 64);",
            "lessonN": 3, "lessonSlug": "vector-database-distance-metrics", "lessonTitle": "Distance Metrics: Cosine, L2 (Euclidean), and Inner Product"
        },
        {
            "title": "Reciprocal Rank Fusion (RRF) Formula",
            "label": "Merging hybrid search rankings",
            "code": "def rrf_score(ranks_dict, k=60):\n    # ranks_dict = {doc_id: [rank_in_bm25, rank_in_vector]}\n    return sum(1.0 / (k + rank) for rank in ranks_dict.values())",
            "lessonN": 6, "lessonSlug": "rrf-and-reranking-models", "lessonTitle": "Reciprocal Rank Fusion (RRF) and Re-ranking Models"
        },
        {
            "title": "ChromaDB Local Embedded Query",
            "label": "Zero-infrastructure local store",
            "code": "import chromadb\nclient = chromadb.PersistentClient(path=\"./chroma_db\")\ncollection = client.get_or_create_collection(\"documents\")\nresults = collection.query(query_texts=[\"my query\"], n_results=5)",
            "lessonN": 7, "lessonSlug": "popular-vector-stores-comparison", "lessonTitle": "Popular Vector Stores: pgvector, Chroma, Qdrant, Pinecone"
        },
        {
            "title": "Single-Stage Filtered SQL Query",
            "label": "Metadata filter + HNSW search",
            "code": "SELECT id, content, 1 - (embedding <=> :query_vec) AS sim\nFROM documents\nWHERE tenant_id = 'org_42' AND status = 'active'\nORDER BY embedding <=> :query_vec\nLIMIT 5;",
            "lessonN": 4, "lessonSlug": "metadata-filtering-pre-vs-post", "lessonTitle": "Metadata Filtering: Pre-Filtering vs Post-Filtering"
        }
    ]

    course_data = {
        "id": "vector-databases",
        "title": "Vector Databases & Semantic Search",
        "num": 76,
        "emoji": "🔍",
        "desc": "Storing and querying embeddings at scale: indexes, similarity metrics and hybrid search.",
        "topics": ["Vector Databases", "ANN Search", "HNSW", "IVFFlat", "pgvector", "Metadata Filtering", "Hybrid Search", "RRF", "Re-ranking", "Product Quantization"],
        "mission": "# Mission — Vector Databases & Semantic Search\n\nMaster the storage and search engines powering modern AI retrieval at scale. Understand why relational B-trees fail on high-dimensional vectors, navigate Approximate Nearest Neighbor (ANN) index algorithms (HNSW, IVFFlat), configure distance metrics (Cosine, Dot Product, L2), solve filtered search with single-stage HNSW, combine BM25 and vector search with Reciprocal Rank Fusion, evaluate leading vector stores (pgvector, Chroma, Qdrant, Pinecone), and manage production scaling.",
        "notes": "# Notes — Vector Databases & Semantic Search\n\nDefault to pgvector if you already use PostgreSQL. Use HNSW for sub-second latency, and always combine vector search with BM25 keyword matching for hybrid enterprise resilience.",
        "resources": "# Resources — Vector Databases & Semantic Search\n\n- Yu. A. Malkov & D. A. Yashunin, *Efficient and Robust Approximate Nearest Neighbor Search Using HNSW Graphs*\n- pgvector Documentation (github.com/pgvector/pgvector)\n- Gordon V. Cormack et al., *Reciprocal Rank Fusion Outperforms Condorcet and Individual Rank Learning Methods*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

if __name__ == "__main__":
    make_course_74()
    make_course_75()
    make_course_76()

