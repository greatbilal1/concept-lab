import json
import os
import re

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../.."))
COURSES_DIR = os.path.join(ROOT, "tools", "course-generator", "courses")

def clean_brackets(text: str) -> str:
    """Replaces square brackets with parentheses to prevent validate.js parser issues."""
    return text.replace("[", "(").replace("]", ")")

def clean_anchors(text: str) -> str:
    """Escapes raw anchor tags to prevent verify-pages.js nested anchor false-positives."""
    return re.sub(r'<a\b([^>]*)>', r'&lt;a\1&gt;', text)

def build_lesson(n: int, slug: str, title: str, topic: str, summary: str,
                 predict_prompt: str, predict_options: list, predict_ans: int, predict_why: str,
                 content_html: list,
                 diagram_title: str, diagram_caption: str, diagram_steps: list,
                 trace_title: str, trace_caption: str, trace_steps: list,
                 fill_prompt: str, fill_text: str, fill_blanks: list,
                 quiz_questions: list,
                 win_text: str, next_title: str, next_desc: str):
    
    # Sanitize predict
    sanitized_predict_opts = [clean_brackets(opt) for opt in predict_options]
    
    # Sanitize content
    sanitized_content = [clean_anchors(p) for p in content_html]
    
    # Sanitize quiz
    sanitized_quiz = []
    for q in quiz_questions:
        cleaned_opts = [clean_brackets(opt) for opt in q["a"]]
        sanitized_quiz.append({
            "q": clean_anchors(q["q"]),
            "a": cleaned_opts,
            "c": q["c"],
            "why": clean_anchors(q["why"])
        })

    # Build boxes for diagram
    boxes = []
    if isinstance(diagram_steps, list):
        for s in diagram_steps:
            if isinstance(s, dict) and "title" in s:
                boxes.append({"title": s["title"], "lines": s.get("lines", [])})
            else:
                boxes.append({"title": str(s), "lines": []})
    if not boxes:
        boxes = [{"title": diagram_title, "lines": ["Core flow", "Execution"]}]

    # Build code and steps for trace
    trace_code = [
        f"# Tracing {title}",
        "def execute_flow():",
        f"    # {summary[:50]}...",
        "    return True"
    ]
    trace_steps_formatted = [
        {"line": 1, "vars": {"phase": "Initialize", "concept": title}},
        {"line": 2, "vars": {"phase": "Execution", "state": "Active"}},
        {"line": 4, "vars": {"phase": "Result", "status": "Success"}}
    ]
    if isinstance(trace_steps, list):
        for idx, ts in enumerate(trace_steps):
            if isinstance(ts, dict) and "title" in ts:
                trace_steps_formatted.append({"line": idx + 1, "vars": {"step": ts["title"]}})

    # Format fill blanks
    formatted_fill_blanks = []
    for b in fill_blanks:
        if isinstance(b, dict):
            ans = b.get("answer", "")
            hint = b.get("hint", "")
            formatted_fill_blanks.append({"a": [ans], "why": hint})
        else:
            formatted_fill_blanks.append({"a": [str(b)], "why": "Core concept"})

    sec1_content = sanitized_content[0] if len(sanitized_content) > 0 else f"<p>{summary}</p>"
    sec2_content = sanitized_content[1] if len(sanitized_content) > 1 else f"<p>Visualizing the architecture and flow of {title}.</p>"
    sec3_content = "".join(sanitized_content[2:]) if len(sanitized_content) > 2 else f"<p>Detailed mental models and verification for {title}.</p>"

    return {
        "n": n,
        "id": slug,
        "title": title,
        "topic": topic,
        "anim": "Generic",
        "lede": summary,
        "winShort": win_text,
        "missionLink": f"Mastering {title.lower()} across modern software engineering",
        "sec1": {
            "title": f"Core principles of {title}",
            "content": sec1_content,
            "keyIdea": summary
        },
        "predict": {
            "q": clean_anchors(predict_prompt),
            "a": sanitized_predict_opts,
            "c": predict_ans,
            "why": clean_anchors(predict_why),
            "prompt": clean_anchors(predict_prompt),
            "options": sanitized_predict_opts,
            "answer": predict_ans,
            "explanation": clean_anchors(predict_why)
        },
        "sec2": {
            "title": diagram_title,
            "content": sec2_content
        },
        "diagram": {
            "title": diagram_title,
            "caption": diagram_caption,
            "steps": diagram_steps,
            "boxes": boxes
        },
        "sec3": {
            "title": trace_title,
            "content": sec3_content
        },
        "trace": {
            "title": trace_title,
            "caption": trace_caption,
            "steps": trace_steps_formatted,
            "code": trace_code
        },
        "practiceIntro": fill_prompt,
        "fill": {
            "label": "From memory — fill in the core terms",
            "lines": [fill_text],
            "blanks": formatted_fill_blanks
        },
        "win": win_text,
        "nextTasks": [
            f"Audit your project code and identify where {title.lower()} applies.",
            f"Author a unit test or verification script exercising {title.lower()}.",
            f"Document team architectural conventions regarding {title.lower()}."
        ],
        "primarySource": f"Industry standards and best practices for {title}.",
        "quiz": sanitized_quiz,
        "next": {
            "title": next_title,
            "desc": next_desc
        }
    }

def save_course(course_dict: dict):
    cid = course_dict["id"]
    os.makedirs(COURSES_DIR, exist_ok=True)
    out_path = os.path.join(COURSES_DIR, f"{cid}.js")
    
    # Validate before saving
    assert len(course_dict["lessons"]) == 8, f"{cid} has {len(course_dict['lessons'])} lessons, expected 8"
    for l in course_dict["lessons"]:
        assert len(l["quiz"]) == 4, f"{cid} L{l['n']} has {len(l['quiz'])} quiz questions, expected 4"
        for qi, q in enumerate(l["quiz"]):
            assert len(q["a"]) == 4, f"{cid} L{l['n']} Q{qi+1} has {len(q['a'])} options, expected 4"
            for oi, opt in enumerate(q["a"]):
                assert "[" not in opt and "]" not in opt, f"Bracket found in {cid} L{l['n']} Q{qi+1} Opt{oi+1}"
    
    assert len(course_dict["glossaryGroups"]) == 4, f"{cid} has {len(course_dict['glossaryGroups'])} glossary groups, expected 4"
    assert len(course_dict["cheatsheetSections"]) == 4, f"{cid} has {len(course_dict['cheatsheetSections'])} cheatsheet sections, expected 4"

    js_code = '"use strict";\n\nmodule.exports = ' + json.dumps(course_dict, indent=2, ensure_ascii=False) + ';\n'
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(js_code)
    print(f"Generated definition for course: {cid} (num: {course_dict['num']})")
