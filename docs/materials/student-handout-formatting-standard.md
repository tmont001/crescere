# Student Handout Formatting Standard
## French A1 and Spanish A1 — Distribution-Ready Document Guidelines

**Status:** Standard and template document only. No student materials are modified here. No PDFs are created here.

---

## 1. Purpose

This document defines how every student-facing handout should be structured and formatted before it is distributed to enrolled students.

It applies to all output formats: PDF, Google Doc, Canva document, email body, or any other delivery method.

It is not a design file. It does not define fonts, colors, logos, or layout. Those decisions belong to the design phase (Canva or equivalent). This document defines content structure: what must appear, what must not appear, in what order, and at what length — so that design and content are not tangled together and so that the Markdown source remains the authoritative version.

---

## 2. Source-of-Truth Rule

**The original Markdown course files are the source of truth. Always.**

When preparing a student handout, work from a copy of the source file — do not edit the source itself. Every content change must be made in the source Markdown first, then propagated to any distribution copy. The designed artifact (PDF, doc, Canva file) is always downstream of the Markdown.

This means:
- If a vocabulary item is wrong, fix it in `week-01-vocabulary.md` — then update the distribution copy
- If homework instructions need clarifying, fix them in `session-01-homework.md` — then update the distribution copy
- If a design decision changes how something looks, that affects only the PDF — the Markdown stays as-is

**Where distribution copies live:** Store distribution-ready Markdown files in `docs/distribution/`, not in the course folders. The course folders contain source files only. Example:

| Source file | Distribution copy |
|---|---|
| `docs/materials/french-a1/syllabus.md` | `docs/distribution/french-a1/syllabus.md` |
| `docs/materials/spanish-a1/week-01/session-01-homework.md` | `docs/distribution/spanish-a1/week-01/session-01-homework.md` |

---

## 3. Student-Facing Document Types

### Syllabus

| Field | Standard |
|---|---|
| **Purpose** | Sent to enrolled students upon booking. Sets expectations for the full 12-week course before any session begins. |
| **Recommended length** | Up to 4 pages as PDF |
| **Recommended format** | PDF — students keep this and refer back to it throughout the course |
| **Required header fields** | Course name, language and level, "Course Syllabus" |
| **Required footer fields** | Instructor contact, cohort dates and meeting times (filled in per cohort) |
| **Sections required** | Course at a glance, who it's for, outcomes, 12-week outline table, homework expectations, assessment philosophy, final performance description, A2 readiness criteria, materials needed, what student success looks like |
| **Sections that must never appear** | Instructor notes, formative check schedules or question sets, internal file paths, correction priorities, error correction strategies, pacing decisions, content marked draft |

---

### Weekly Student Overview

| Field | Standard |
|---|---|
| **Purpose** | Previews what the upcoming week covers. Sent 24–48 hours before the first session of each week. |
| **Recommended length** | 1–2 pages |
| **Recommended format** | PDF or formatted Google Doc |
| **Required header fields** | Course name, language and level, week number, "Week N Overview" |
| **Required footer fields** | Standard contact footer |
| **Sections required** | What you'll learn this week, what you'll be able to say by the end, what to practice between sessions, vocabulary to know before next week |
| **Sections that must never appear** | Instructor correction strategies, pacing notes, formative check instructions, internal file references, anything labeled "instructor" |

---

### Weekly Vocabulary Reference

| Field | Standard |
|---|---|
| **Purpose** | Word list and examples for the week. Students keep it as a reference during and after class. |
| **Recommended length** | 2–3 pages |
| **Recommended format** | PDF — designed for printing or on-screen reference |
| **Required header fields** | Course name, language and level, week number, "Week N Vocabulary Reference" |
| **Required footer fields** | Standard contact footer |
| **Sections required** | Clear Core/Reference labeling; at least one example sentence per Core item; pronunciation guidance where helpful |
| **Sections that must never appear** | Instructor correction cues, error patterns, "teacher notes", session-level pacing guidance, internal file references |

---

### Session Homework

| Field | Standard |
|---|---|
| **Purpose** | Assigned practice after a specific session. Sent immediately after the session ends. |
| **Recommended length** | 1 page maximum; 2 sides if printed |
| **Recommended format** | PDF or email body (both are acceptable for first cohort) |
| **Required header fields** | Course name, language and level, session number, "Session N Homework", due date ("Complete before Session N+1"), estimated time |
| **Required footer fields** | Standard contact footer |
| **Sections required** | Numbered required tasks, at least one speaking practice task, answer keys for written exercises, optional extension |
| **Sections that must never appear** | Formative check preview, next week's grammar content, instructor notes, internal file paths, unsubstantiated submission instructions (e.g., "upload to the platform" if no platform exists yet) |

---

### Reference Handout

| Field | Standard |
|---|---|
| **Purpose** | A grammar or vocabulary reference students keep and use throughout the course. Not a single-session document. |
| **Recommended length** | 1 page double-sided maximum |
| **Recommended format** | PDF |
| **Required header fields** | Course name, language and level, "Reference: [Topic]" — no week number (it's used for multiple weeks) |
| **Required footer fields** | Standard contact footer; optionally: "Distribute at start of Week N" is not shown to students — only the document itself is distributed |
| **Sections required** | Framing statement ("This is a reference, not a test"), core comparison or rule, high-frequency examples, common mistakes section if it is student-appropriate, practice exercise with embedded answer key |
| **Sections that must never appear** | Instructor notes, administration instructions, correction priorities, internal file paths, "do not test before Week N" annotations |

---

### Final Performance Guide

| Field | Standard |
|---|---|
| **Purpose** | Student-facing brief for the Week 12 assessment. Distributed at start of Session 23 (not before). |
| **Recommended length** | 1–2 pages |
| **Recommended format** | PDF |
| **Required header fields** | Course name, language and level, "Week 12 — Final Performance Guide" |
| **Required footer fields** | Standard contact footer |
| **Sections required** | What the final performance is, Part A description and what you need to cover, Part B description and submission instructions, what success looks like, phrase bank (if provided) |
| **Sections that must never appear** | Instructor timing guide, cohort-size tables, freeze/rush protocol, feedback formula, correction priorities, "do not distribute before Session 23" annotation |

---

### Email-Ready Homework Version

| Field | Standard |
|---|---|
| **Purpose** | Same as session homework, but formatted to be pasted directly into an email or messaging platform. |
| **Recommended length** | Same as homework (short) — but no header image, no multi-column tables |
| **Recommended format** | Plain text or minimal Markdown for email body |
| **Required header fields** | Subject line only: "French A1 — Session 1 Homework (due before Session 2)" |
| **Required footer fields** | Instructor name, reply-to note, session schedule reminder if helpful |
| **Sections required** | Same as homework, plus answer keys — students need to self-check when working alone |
| **Sections that must never appear** | Same as homework |

---

## 4. Standard Header Format

Every distribution-ready student document begins with this structure:

```markdown
# [Course Name] — [Document Type]

**[Language] [Level]** | [Week/Session identifier if applicable]

[Timing line if applicable — due date, "distribute before Session N", etc.]

---
```

### Examples

**French A1 syllabus:**
```markdown
# French A1 — Course Syllabus

**Beginner French**

---
```

**Spanish A1 Week 1 vocabulary reference:**
```markdown
# Spanish A1 — Week 1 Vocabulary Reference

**Beginner Spanish** | Week 1

---
```

**French A1 Session 1 homework:**
```markdown
# French A1 — Session 1 Homework

**Beginner French** | Session 1

Complete before Session 2 | Estimated time: 20–25 minutes

---
```

**Spanish ser/estar reference:**
```markdown
# Spanish A1 — Ser vs. Estar Reference

**Beginner Spanish** | Reference Handout

---
```

**Spanish A1 Session 2 homework:**
```markdown
# Spanish A1 — Session 2 Homework

**Beginner Spanish** | Session 2

Complete before Session 3 (start of Week 2) | Estimated time: 20–25 minutes

---
```

### Header rules

- One H1 per document — the document title
- Never include the source file path in the header
- Never include "Week N Overview" if the document is a syllabus — the syllabus covers the whole course
- Never include a due date on the syllabus or vocabulary references
- The timing line is only for homework and time-sensitive documents
- "Beginner French" and "Beginner Spanish" are the student-facing level labels — never "A1" alone, which is CEFR jargon most students won't know

---

## 5. Standard Footer Format

Every distribution-ready student document ends with this structure:

```markdown
---

*[Course Name] — [Language] [Level]*
*Questions? Message your instructor at [email or platform contact method]*
```

### Examples

**Standard footer — French A1:**
```markdown
---

*French A1 — Beginner French*
*Questions? Message your instructor at [instructor email]*
```

**Standard footer — Spanish A1 with cohort info:**
```markdown
---

*Spanish A1 — Beginner Spanish | [Cohort name or dates]*
*Questions? Message your instructor at [instructor email]*
```

### Footer rules

- Never include internal repository paths
- Never include file names (no `see session-02-homework.md`)
- If the document is cohort-specific (syllabus, schedule-dependent materials), include cohort dates in the footer — not in the header
- For email-ready versions, the footer is the email sign-off — instructor name and contact; the Markdown footer structure does not apply
- Platform references (e.g., "log in to [platform]") should only be included once a platform is confirmed and live — if no platform exists yet, omit it

---

## 6. File Link and Internal Reference Cleanup Rules

Before any student document is distributed, all internal Markdown file references must be removed or replaced with natural language.

### Direct replacement rules

| Internal reference | Replace with |
|---|---|
| `[week-01-vocabulary.md](week-01-vocabulary.md)` | "your Week 1 Vocabulary Reference" or "the Week 1 Vocabulary Reference (included in this bundle)" |
| `[week-02-vocabulary.md](week-02-vocabulary.md)` | "your Week 2 Vocabulary Reference" |
| `[session-01-homework.md](session-01-homework.md)` | "your Session 1 Homework" |
| `[reference-ser-vs-estar.md](reference-ser-vs-estar.md)` | "your Ser vs. Estar Reference" |
| `[week-12-final-performance.md](week-12-final-performance.md)` | "your Week 12 Final Performance Guide" |

### Files that must never appear in student materials — even by name

| File name | Why it must not appear |
|---|---|
| `instructor-notes.md` | Instructor-only content |
| `week-NN-formative-check.md` | Never referenced before administration |
| `instructor-quick-reference.md` | Instructor-only |
| `session-NN-slide-outline.md` | Instructor specification |
| `a1-correction-priority-sheet.md` | Instructor-only |
| `a1-production-plan.md` | Internal planning |
| Any audit file | Internal review |
| `curriculum.md` | Internal architecture |
| `week-01-student-handout-bundle-plan.md` | Internal planning |
| `student-handout-formatting-standard.md` (this file) | Internal standard |

### General rule

If a student reading the document would not understand why that file name appears — or would be confused or unsettled by it — remove or replace it.

---

## 7. Typography and Layout Guidance

These rules are tool-neutral. They apply whether the output is Canva, Google Docs, PDF, or email.

### Heading hierarchy

| Level | Use for | Markdown |
|---|---|---|
| H1 | Document title — one per document only | `#` |
| H2 | Major sections (e.g., "Part 1 — Speaking Practice") | `##` |
| H3 | Subsections within a major section (use sparingly) | `###` |
| Bold | Key terms; critical instructions | `**text**` |

Never use more than three heading levels in a student document. If you need H4, restructure the document.

### Table readability

- Maximum 4 columns in student vocabulary tables
- Maximum 3 columns in grammar or comparison tables
- Every table must have a header row
- Column headers should be plain labels (French / English / Example) — not descriptions
- Avoid tables where a cell spans more than one line of visible text; if content is that long, use a list instead

### Bullet length

- Maximum 2 lines per bullet in student documents
- If a bullet needs more explanation, use a numbered step or a new subsection
- Bullets are for reference lists; numbered items are for sequential tasks

### Vocabulary tables

- Four columns maximum: target word | translation | pronunciation note | example sentence
- If the table is still too wide for print (4 columns × average content), drop the pronunciation column and include pronunciation guidance as a separate note
- The example column may be abbreviated for email-only versions — one short sentence maximum

### Answer keys

- Embed answer keys directly in the homework file — do not separate them
- Label with bold: **Answers:** followed by the answers on the same line or the next
- For longer answer keys, use a numbered list matching the exercise numbers
- Never withhold answers from students working independently at home

### Optional extensions

- Always clearly labeled: **Optional extension** or **If you finish early:**
- Always placed at the end of the document — never interrupt required tasks
- No estimated time needed for optional extensions (if someone wants to do them, timing doesn't matter)

### Page breaks

- In Markdown: use `---` (horizontal rule) between major sections
- In PDF export: add a page break before the footer and between any sections that would print awkwardly split
- Homework files should never require more than one printed sheet (front and back) — if they do, trim

### Estimated timing blocks

- Appear only in homework files
- Format: `**Estimated time: 20–25 minutes**` in the header area, not repeated in the body
- Per-section time estimates (e.g., "5 min") are appropriate in homework but should be in parentheses after the section heading, not in the body text: `## Part 1 — Numbers (5 min)`

---

## 8. Vocabulary Reference Standard

### Core vs. Reference labeling

- **Core items** are those students are expected to know before the next formative check or week. Label them explicitly. Current source files use "Students are responsible for the **Core** items by the start of Week 2. Items marked **Reference** are for recognition and independent study." — keep this framing.
- **Reference items** are for motivated students and passive recognition. They are never tested directly.
- If a vocabulary file mixes Core and Reference items in the same table, either separate them into two tables or add a "Core / Reference" column.

### When to keep example sentences

- Keep at least one example per Core vocabulary item — always
- For Reference items, examples are optional; drop them if they would push the document past 3 pages
- For homework-embedded vocabulary (e.g., the alphabet in Session 1 homework), examples are not needed — just the word and its translation

### When to trim examples

- Trim when the vocabulary file would exceed 3 pages as a PDF
- Trim Reference section examples first
- Trim by shortening example sentences to the most illustrative phrase, not by removing examples entirely from Core items

### Pronunciation notes

- Keep pronunciation notes in the vocabulary PDF — students need them during independent study
- In email-ready versions, pronunciation notes may be abbreviated to 1–2 words (e.g., "back-of-throat r" rather than the full description)
- Never remove pronunciation guidance entirely from Week 1 materials — this is when students most need it

### Maximum recommended length

| Document | Max pages as PDF |
|---|---|
| Week 1 vocabulary reference | 3 pages |
| Weeks 2–11 vocabulary references | 2 pages |
| Week 12 vocabulary / phrase bank | 1 page |

### What to do if a vocabulary file is too long

1. Produce two versions: a Core Vocabulary Card (Core items only, no pronunciation column) as the primary handout, and the Full Vocabulary Reference as a supplementary PDF for self-study
2. The Core Vocabulary Card is what goes in the bundle; the Full Reference is offered as an optional download
3. Do not trim Core items — only Reference items may be removed from the primary handout

---

## 9. Homework Standard

### Required header elements — every homework file

```markdown
# [Course] — Session N Homework
**[Language] [Level]** | Session N
Complete before Session N+1 | Estimated time: X–X minutes
```

For end-of-week homework (the last session of a week), clarify which session it's due before:
```markdown
Complete before Session N+1 (first session of Week M) | Estimated time: X–X minutes
```

### Required vs. optional tasks

- All required tasks are numbered (`## Part 1`, `## Part 2`, etc.)
- Optional tasks are always at the end and always labeled: `## Optional Extension` or `## If You Finish Early:`
- No mixing of required and optional within the same numbered section

### Answer key handling

- Always include answer keys for any written exercise where there is a right answer
- Place the answer key immediately after the exercise — not at the end of the document
- Format: `**Answers:** 1. [answer] · 2. [answer] · 3. [answer]`
- For longer keys, use a numbered list
- Self-check answers are a feature, not a vulnerability — students working alone need them

### Speaking practice reminders

Every homework file must include at least one explicit speaking task with explicit instructions. Model language:

> Say it out loud — not silently. Out loud.

> Say it at least three times. On the third time, close your notes and say it from memory.

These phrases already appear in the existing homework files and should be preserved in all distribution copies.

### Submission instructions

- For speaking tasks: no submission needed — state this explicitly: "You don't need to send this to anyone — just do it."
- For written tasks: "Write this in your notebook or practice document." — do not reference a platform or upload system that does not yet exist
- If a voice recording option is ever offered, add it as an optional variation: "Or record a short voice message and send it before [next session]" — only when a confirmed delivery method exists

### How to phrase the due date

| Situation | Phrasing |
|---|---|
| After Session 1, due before Session 2 | "Complete before Session 2." |
| After Session 2, due before Session 3 | "Complete before Session 3 (first session of Week 2)." |
| After Session 23, due before Session 24 | "Complete before Session 24 (final session)." |
| Ongoing reference (vocabulary, reference handout) | No due date — "Keep this for reference throughout the course." |

---

## 10. Reference Handout Standard

Reference handouts are different from homework — they are not assigned practice, they are documents students keep throughout the course.

### When to distribute

Distribute at the specific moment defined by the course structure:
- Spanish ser/estar reference: end of Session 2 or start of Session 3 — **not Session 1**
- Final performance guide: start of Session 23 — **not before**
- Any pronunciation reference card: with Week 1 vocabulary, **before Session 1**

The distribution timing is noted in the instructor's course plan, not in the student document itself. Students receive the document; they do not need to know that it was withheld earlier.

### How to label as reference, not test

The first line of body text in a reference handout should be explicit:

> This is a reference — something to keep nearby while you practice. It is not a memorization sheet. You will not be tested directly on its contents.

The Spanish ser/estar reference already contains this framing in slightly different words ("This handout is a reference — something to keep nearby while you practice. It is not a memorization sheet.") — preserve it in all distribution copies.

### How to remove instructor notes

The Spanish ser/estar reference ends with an instructor-facing paragraph. Before distribution, remove it entirely:

**Remove this text (last paragraph of `reference-ser-vs-estar.md`):**
> Instructor note: This reference supports Week 2, Sessions 3 and 4. Distribute before Session 3 so students arrive having read it. It is a comprehension aid, not a quiz sheet — students should not be expected to have it memorized before Week 2 begins. The meaning-changing adjectives table is preview material for Session 4; do not test it in Session 3.

After removal, the document ends at the answer key for the practice exercise.

### How to prevent overwhelming Week 1 students

- Do not distribute any reference handout that covers Week 2+ content before Session 1
- The ser/estar reference is a Week 2 document — the syllabus already tells students it's coming; the Week 1 student overview correctly tells students not to worry about it yet
- If a student asks for the ser/estar reference early, the correct response is: "You'll get it at the end of next session — it'll be more useful with the Week 2 context."

---

## 11. Student-Facing Quality Checklist

Run this checklist on every distribution-ready document before it goes to students.

| Check | What to verify |
|---|---|
| **Course name** | Document clearly identifies the course by full name ("French A1 — Beginner French" or "Spanish A1 — Beginner Spanish") |
| **Language and level** | Both language and level are visible — not just "A1" |
| **Week or session identifier** | If document is week- or session-specific, the number is visible in the header |
| **Timing line** | Homework files: due date and estimated time in the header. Other documents: no due date needed. |
| **Student instructions** | Every task has a clear instruction in plain language. No ambiguity about what students are supposed to do. |
| **No instructor-only content** | Zero instructor-facing notes, correction cues, pacing notes, or formative check admin instructions. Search for: "Instructor note", "do not distribute", "administer at", "correction", "P1 / P2 / P3", "cut if time", "skip if". |
| **No internal file references** | No visible Markdown file paths, no references to files by name. Search for `.md` — if it appears, fix it. |
| **No draft language** | No "DRAFT", "v0", "v1", "work in progress", "TBD", or "placeholder" anywhere. |
| **Length appropriate** | Syllabus ≤ 4 pages. Overview ≤ 2 pages. Vocabulary ≤ 3 pages. Homework ≤ 1 page (2 sides). Reference ≤ 1 page double-sided. |
| **Contact footer included** | Standard footer with course name and instructor contact at the bottom of every document. |
| **Answer keys included** | Written exercises include embedded answer keys. |
| **Speaking tasks are explicit** | If a speaking task is required, the instruction says "out loud" explicitly — not just "practice". |
| **No unbuilt platform references** | No references to uploading, submitting to a dashboard, accessing a student portal, or using a referral/payment feature that does not yet exist. |
| **No assessment language that sets wrong expectations** | Nothing that implies a grade, a score, or a pass/fail result — unless the course explicitly uses graded assessments (it currently does not). |
| **Ser/estar reference check (Spanish only)** | If distributing the ser/estar reference, confirm the instructor note at the bottom has been removed. |

---

## 12. Recommended Production Workflow

Follow these steps each time a source Markdown file is converted into a distribution-ready handout. Work in `docs/distribution/` — never modify the source file in `docs/materials/`.

### Step 1 — Copy source content into distribution draft

Create a new file at the corresponding path in `docs/distribution/`. Copy the full source file content. Do not modify the source file at any point.

### Step 2 — Apply standard header

Replace whatever header the source file has with the standard header format from Section 4. Verify: course name, language and level, document type, week/session number if applicable, timing line if applicable.

### Step 3 — Clean internal links

Search the draft for `.md`. Every match is a candidate for cleanup. Apply the replacement rules from Section 6. If any file name from the "must never appear" list is present, remove or replace it.

### Step 4 — Remove instructor-only content

Search for the following terms and remove any paragraph, row, or section that contains them:
- "Instructor note" / "instructor note"
- "Do not distribute" / "do not test"
- "administer at" / "administer before"
- "correction" / "correct every" (if in a student-facing section — these appear only in instructor files)
- "Cut first" / "What to skip"
- Any content inside a "For instructors" or "Instructor:" block

The Spanish ser/estar reference has one specific paragraph to remove — see Section 10.

### Step 5 — Check length

Count pages at expected PDF export size (A4 or US Letter, 11pt body text, standard margins). If the document exceeds the length standard for its type, apply the trimming guidance from Section 8 (vocabulary) or trim optional extension content. Never cut required content to meet length.

### Step 6 — Add standard footer

Add the footer from Section 5 at the end of the document. Fill in the instructor contact. Add cohort info if the document is cohort-specific (syllabus, schedule-dependent materials).

### Step 7 — Run the quality checklist

Work through every item in Section 11. Do not skip. If any item fails, fix it before proceeding.

### Step 8 — Export or paste into final format

- For PDF: export from Google Docs, Canva, or equivalent; verify the exported PDF looks correct (no orphaned headers, no cut-off tables)
- For email body: paste the distribution Markdown into the email editor; verify formatting renders correctly; remove any Markdown syntax that your email client does not render (e.g., `**bold**` → just bold formatting)
- For Canva: the distribution Markdown is the source; manually transcribe content into Canva slide or handout template — do not use Canva AI to rewrite or summarize teaching content

---

## 13. Recommended Next Task

The next Claude task should be creating **distribution-ready Markdown versions of the two A1 syllabi** at:

- `docs/distribution/french-a1/syllabus.md`
- `docs/distribution/spanish-a1/syllabus.md`

This is the first item in the Section 9 production order from `week-01-student-handout-bundle-plan.md` and the highest-priority document before enrollment opens.

Each distribution syllabus should:
1. Copy the full content of the source syllabus
2. Apply the standard header from Section 4
3. Replace the placeholder final line ("Specific cohort dates, meeting times, and enrollment details are confirmed before each course begins.") with a placeholder block the instructor fills in per cohort: `[Cohort: — | Dates: — | Session time: — | Meeting link: —]`
4. Add the standard footer with a `[instructor email]` placeholder
5. Confirm no instructor-only content (the syllabi are clean — this step is a quick verification)
6. Pass the quality checklist from Section 11

The syllabi do not have vocabulary tables, homework exercises, or internal file references — they are the simplest documents to convert. Completing them establishes the header/footer pattern before moving to the more complex vocabulary and homework files.

After the two syllabi are done, proceed to the four Week 1 student overviews and vocabulary files, which require the additional step of fixing the internal file link in each overview.
