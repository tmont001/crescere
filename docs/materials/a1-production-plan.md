# A1 Production Plan
## French A1 and Spanish A1 — From Markdown to Live Teaching Assets

**Written:** 2026-06-25
**Scope:** French A1 and Spanish A1, Weeks 1–12
**Status of source materials:** Complete and committed. Working tree clean.

---

## 1. Executive Summary

### What exists

Both French A1 and Spanish A1 are fully written in Markdown and committed to version control. The complete set:

| File type | Count per course | Total (both courses) |
|---|---|---|
| Instructor notes (by week) | 12 | 24 |
| Session slide outlines | 24 | 48 |
| Session homework files | 24 | 48 |
| Weekly vocabulary files | 12 | 24 |
| Weekly formative checks | 11 | 22 |
| Student-facing overviews | 12 | 24 |
| Week 12 final performance guide | 1 | 2 |
| Syllabi | 1 each | 2 |
| Curriculum documents | 1 each | 2 |
| Reference handouts | 0 French / 1 Spanish | 1 |
| **Total Markdown files** | | **~197** |

Everything above is production-ready as a teaching specification. Nothing above is production-ready as a student-distributed or live-taught asset. The gap between the two is what this plan addresses.

### What does not yet exist

- Designed slide decks (Canva, PowerPoint, or HTML — none created)
- Branded student handout PDFs
- Visual teaching aids: city maps, home floor plans, café menus, market cards
- Audio pronunciation references (Week 1 for both languages)
- Print-ready role-play scenario cards
- Downloadable rubric sheets

### What is needed before the first live cohort

At minimum: one cohort-ready slide deck per week as the instructor teaches it, plus a student handout bundle that students can receive and use. Everything else can be built week by week or after the first cohort.

---

## 2. Source-of-Truth Strategy

The Markdown files are the source of truth for all content. Every designed asset (slide deck, PDF, handout) is a downstream artifact. If the Markdown and the designed asset ever conflict, the Markdown wins.

### File classification

| File type | Audience | Visibility | Distribution |
|---|---|---|---|
| `instructor-notes.md` | Instructor only | Private | Never student-facing |
| `session-NN-slide-outline.md` | Instructor only | Private | Specification only — not distributed |
| `week-NN-formative-check.md` | Instructor only | Private | Never student-facing (used in class, not sent ahead) |
| `week-NN-vocabulary.md` | Student-facing | Semi-public | Distribute as weekly vocab reference |
| `session-NN-homework.md` | Student-facing | Semi-public | Distribute per session |
| `student-facing-overview.md` | Student-facing | Semi-public | Distribute at start of each week |
| `syllabus.md` | Student-facing | Public/gated | Send to enrolled students |
| `week-12-final-performance.md` | Student-facing | Private until Week 12 | Send only at start of Week 12 |
| `reference-ser-vs-estar.md` | Student-facing | Semi-public (possible gated lead magnet) | Distribute at Week 2; preview on website |
| Curriculum docs | Internal planning | Private | Never student-facing |
| Audit doc | Internal | Private | Never student-facing |
| Production plan (this file) | Internal | Private | Never student-facing |

**Principle:** Student-facing materials are designed and distributed; instructor materials remain as-is in the repository. The slide outlines are not student materials — they are production specifications for the actual slide decks.

---

## 3. Instructor Asset Plan

Instructor assets should be built before each week is taught, not all at once. The following represent the full desired set.

### Priority 1 — Instructor quick reference cards (one per week)

A one-page reference for each week covering:
- Week theme and session titles
- What must not be cut (non-negotiable speaking rounds)
- The three most common student mistakes for each session with correction cues
- Homework due and homework assigned

**Format:** Single Markdown table, printed or kept open on a second screen during class. All source material is in the instructor notes; this is a condensed extract.

**Source files:** `instructor-notes.md` for each week.

### Priority 2 — Session 24 final performance quick reference

A single card covering:
- Per-student timing (2 / 3 / 4 / 5–6 student cohort table)
- Part A required elements checklist
- Part B submission logistics (add platform TBD)
- Feedback structure: strength → keep doing → one thing for A2
- Freeze protocol and rush protocol

**Source files:** `week-12/instructor-notes.md`, `week-12/week-12-final-performance.md`.

### Priority 3 — Correction-priority sheet

A two-language reference card for the instructor listing:
- The ten highest-frequency A1 errors in French and Spanish
- The exact correction phrase to use at each point
- Which week each error typically appears and peaks

**Source files:** All `instructor-notes.md` files — Common Student Mistakes tables.

### Priority 4 — Role-play management quick notes

For Weeks 6, 7, 9, 11, and 12 (the weeks with full scenario role plays):
- Scene-setting language (what to say to open the role play)
- Recovery prompts for student freezes
- Extension questions if the role play finishes early

**Source files:** `session-NN-slide-outline.md` files for relevant sessions; `instructor-notes.md` suggested language sections.

---

## 4. Student Handout Plan

### What to produce, and in what order

#### Tier 1 — Required before Week 1

| Handout | Source file | Notes |
|---|---|---|
| Syllabus (both languages) | `syllabus.md` | PDF export only; content complete |
| Week 1 student overview | `week-01/student-facing-overview.md` | Send before Session 1 |
| Week 1 vocabulary reference | `week-01/week-01-vocabulary.md` | Send before Session 1 |
| Week 1 Session 1 homework | `week-01/session-01-homework.md` | Send after Session 1 |

#### Tier 2 — Produce week by week as the cohort advances

For each week:
1. Student-facing overview (send at start of each new week)
2. Session N homework (send after each session)
3. Weekly vocabulary reference (send with the overview)

The Markdown files are ready; they need typography treatment (consistent font, header, footer with course name) but no content changes.

#### Tier 3 — Special handouts for specific weeks

| Handout | Week | Notes |
|---|---|---|
| Reference: ser vs. estar | Spanish Week 2 | Already complete in Markdown; needs 1-page PDF layout |
| Final performance guide | Both courses, Week 12 | Do not distribute before Session 23 |
| Week 12 phrase bank | Both courses, Week 12 | Distribute at start of Session 23; students use it in Part B |
| Course close: what comes next | Both courses, Session 24 | Brief 1-page on A2 and independent practice — currently in Session 24 slide; can be extracted |

#### Tier 4 — Produce after the first cohort

| Handout | Notes |
|---|---|
| Pronunciation IPA reference (French) | Week 1 instructor notes have the content; format as 1-page card |
| Pronunciation guide (Spanish) | Same; adds Spain vs. Latin American notes |
| City map for directions activity | Week 5 both languages; needs a visual not available in Markdown |
| Café/restaurant menu (French and Spanish) | Week 6; vocabulary exists; needs menu typesetting |
| Home floor plan template | Week 8; needs an illustrator or a Creative Commons line drawing |
| Market scenario role-play cards | Week 7; vocabulary exists; needs card layout |

### Handout length guidance

Student handouts should be short. Target:
- Weekly overview: 2 pages maximum
- Homework: 1 page maximum (2 sides if printed)
- Vocabulary reference: 2 pages maximum (double-column)
- Ser/estar reference: 1 page double-sided

If a handout exceeds these lengths in the current Markdown, trim by removing instructor-focused language. The vocabulary files include example sentences that can be reduced on the student handout to just the target words and one example per word.

---

## 5. Slide Deck Strategy

### Option comparison

| Tool | Polish | Version control | Ease of update | Website integration | First-cohort fit |
|---|---|---|---|---|---|
| **Canva** | High | No (binary; not git-compatible) | Medium (per-slide edit) | Good (shareable link) | ✓ Recommended |
| **PowerPoint** | Medium | No (binary .pptx) | Medium | Poor (requires export) | Workable |
| **Google Slides** | Medium | No | Easy | Medium (Google share link) | Workable |
| **Markdown/HTML (Marp/Reveal.js)** | Low–medium | Yes (plain text in git) | High | Possible (HTML export) | Not for first cohort |

### Recommendation for first cohort: Canva

Use Canva to produce designed slide decks for live teaching. The Markdown slide outlines are the specification; Canva is the rendering layer. The Markdown files remain the source of truth.

**Why Canva over Google Slides:** Brand consistency. The Crescere visual identity should appear in slides shown to students.

**Why Canva over Marp/HTML:** The course is designed to be taught live online via Google Meet. Students will see the instructor's screen. Canva decks look professional and reinforce the brand in every session. Markdown/HTML slides require setup overhead and look utilitarian.

**Why Canva over PowerPoint:** Canva is cloud-native, shareable by link, and maintains visual consistency without manual font/color management. PowerPoint is acceptable if Canva is unavailable.

**Guardrail:** Do not use Canva AI to generate slide content from the instructor notes or outlines. Use Canva AI for layout and visual polish only. The content lives in the Markdown; it must be manually transcribed into Canva to remain accurate.

---

## 6. Canva Production Workflow

### Template setup (do once)

Before building any decks:
1. Create a Crescere A1 slide master in Canva with: brand colors, header font, body font, and a consistent slide structure for grammar tables, vocabulary grids, role-play prompts, and speaking-round slides.
2. Create 5 slide variants in the master: Title, Grammar Explanation, Vocabulary Grid, Speaking Round, and Transition/Summary.
3. Save as a Canva Brand Template so all 24+24 session decks inherit the same look.

### Per-session workflow

1. Open the session's `session-NN-slide-outline.md`.
2. Read the full outline — Core Plan slides first.
3. Identify the slide types needed:
   - Vocabulary grid → use the Vocabulary Grid template
   - Grammar pattern → use the Grammar Explanation template
   - Speaking round → use the Speaking Round template (large prompt text, protected visual)
   - Role-play scenario → use the Speaking Round template with scene-setter visible
4. Build slides from the Core Plan only. Cut First and Extension content goes into **presenter notes**, not slides.
5. Add presenter notes to each slide drawn from the "Teacher notes" block in the slide outline.
6. End the deck with a Homework Summary slide (source: the session homework file).

### What to paste into Canva AI

Use Canva AI to:
- Generate background layouts or graphic accents (not text)
- Suggest icon pairings for vocabulary items (café = cup icon, etc.)
- Resize or rearrange layout components

Do not use Canva AI to:
- Write or rewrite any teaching language
- Generate grammar explanations
- Produce vocabulary lists (the Markdown files are the authority)
- Summarize or condense instructor notes

### Slide count guidance

For a 60-minute session, target **12–16 slides** in Canva. Typical distribution:
- 1 title / session overview slide
- 2–3 grammar explanation slides (one pattern per slide)
- 3–4 vocabulary slides (one semantic cluster per slide, 6–8 items max per slide)
- 2–3 practice / drill slides (prompt visible; answer in presenter notes)
- 2 speaking round slides (prompt only — do not clutter)
- 1 homework summary slide

Avoid more than 18 slides per 60-minute session. Slide-flipping pace should match conversation pace, not replace it.

### What goes in presenter notes vs. visible slides

| Content type | Visible slide | Presenter notes |
|---|---|---|
| Grammar pattern | ✓ Full table | — |
| Grammar exceptions | ✓ if critical; otherwise notes | Common exceptions, correction language |
| Vocabulary items | ✓ Word + translation | Example sentence in context |
| Practice prompt | ✓ Prompt only | Correct answer(s) |
| Speaking round prompt | ✓ Prompt only | Model answer; how to handle hesitation |
| Cut-first content | ✗ Not on slide | ✓ In notes with "IF TIME:" label |
| Extension content | ✗ Not on slide | ✓ In notes with "EXTENSION:" label |
| Common student errors | ✗ Never on slide | ✓ In notes at the relevant moment |
| Cultural notes | ✓ 1–2 lines if brief | Full context in notes |

### Handling specific content types

**Vocabulary grids:** Two columns maximum (target word + translation). Add a third column (example sentence) only if the slide has space. Font size 20pt minimum.

**Grammar tables:** One conjugation table per slide. Highlight irregular forms with brand accent color. Do not put two full paradigms on the same slide.

**Role-play scenarios:** Show only the scene-setter (one sentence describing the scenario). Do not show the target structures — students should produce them without a visible scaffold. Speaking instructions belong in presenter notes.

**Formative checks:** Do not put the formative check on a slide. The check is administered verbally or on paper. Slide the session forward into the formative check naturally.

---

## 7. Markdown/HTML Slide Workflow

### When to use this

The Markdown/HTML slide workflow (using [Marp](https://marp.app/) or [Reveal.js](https://revealjs.com/)) is useful for:
- Generating quick internal previews of a session outline during content development
- Sharing a text-only version of slides with a co-instructor or reviewer
- Producing a reference PDF of slide content without requiring Canva access
- Accessibility versions of student-facing visual materials

### When Canva is better

Canva is better whenever:
- Slides will be shown to students in a live session
- Brand consistency matters
- Vocabulary grids need visual alignment that Markdown tables cannot easily produce
- The instructor is presenting via screen share and needs presentation mode controls

### Marp workflow

1. Install the [Marp for VS Code extension](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) or use the Marp CLI.
2. Add `---` as a page divider between slides in a copy of the slide outline.
3. Export to PDF for reference use.
4. Do not use Marp-generated PDFs as student handouts without typography treatment.

The existing session slide outline files are close to Marp-compatible. A Marp theme matching Crescere brand colors would make this workflow faster for internal use.

---

## 8. Website Integration Plan

This section identifies what should and should not go on the public-facing website. No website files are modified here.

### What should go on the website

| Content | Source | Destination | Priority |
|---|---|---|---|
| Course overview blurb | `syllabus.md` — "Who This Course Is For" | French A1 and Spanish A1 course pages | High |
| "What You Will Be Able to Do" bullets | `syllabus.md` — learning outcomes section | Course page feature list | High |
| "What Student Success Looks Like" | `syllabus.md` | Course page or FAQ | Medium |
| Weekly journey summary (12-week table) | `syllabus.md` — Course Schedule table | Course page collapsible or accordion | Medium |
| Formative check philosophy ("not a grade") | `syllabus.md` | FAQ or "How Assessment Works" page | Medium |
| "Mistakes Are Expected" section | `week-12/student-facing-overview.md` | "How We Assess" section on course page | High |
| "A Note on Ser and Estar" | Spanish `syllabus.md` | Spanish A1 course page feature callout | High |
| Ser/estar reference preview | `reference-ser-vs-estar.md` (partial) | Gated lead magnet: "Download the Week 2 reference" | Medium |
| Final performance description | `week-12/student-facing-overview.md` — "What the Final Performance Involves" | Course page (replaces generic "assessment" section) | Medium |
| Inquiry/enrollment supporting copy | Synthesized from syllabi | Enrollment form page, post-inquiry confirmation email | Medium |

### What should remain private and not be posted publicly

| Content | Reason |
|---|---|
| Full slide outlines (all sessions) | Instructor specification — releasing publicly would undermine the course's differentiated value |
| Instructor notes (any week) | Internal pedagogy documentation — not for students or public |
| Formative check files | Administering these requires live context; publishing would remove their diagnostic value |
| Homework files in full | Homework is part of the enrolled student experience; partial preview is fine |
| Curriculum documents | Internal course architecture |
| Final performance full guide | Enrolled students only — distributing publicly would let students game the assessment |
| Weekly vocabulary files in full | Part of the enrolled product; a one-week preview is enough for marketing |

### Public preview strategy

A prospective student should be able to see:
- The learning outcomes
- The 12-week topic list
- The assessment philosophy
- One excerpt from a student-facing overview (e.g., Week 1 or Week 2)
- The ser/estar reference (partially or fully — low-cost preview of the course's quality)

A prospective student should not see:
- More than one full week's materials before enrolling
- The instructor notes or formative checks at any point

---

## 9. Production Order

Work should proceed in this order, with the first cohort launch driving phase 1 deadlines.

### Phase 1 — Instructor quick references (before any cohort)

1. Week 1 instructor quick reference card (extract from instructor notes)
2. Week 2 instructor quick reference card
3. Session 24 final performance quick reference
4. Correction-priority sheet (top 10 errors across the course, both languages)

**Estimated time:** 1 half-day per language, or roughly 2 hours total using Claude to extract and format from existing Markdown files.

### Phase 2 — Student handout bundle (before Week 1 of first cohort)

1. Syllabus PDF (content ready; needs typography treatment and PDF export)
2. Week 1 student-facing overview (PDF or formatted document)
3. Week 1 vocabulary reference (PDF)
4. Week 1 Session 1 homework (PDF)
5. Ser/estar reference handout — Spanish only (content complete; needs 1-page layout)

**Estimated time:** Half a day for both languages if using a consistent template.

### Phase 3 — First two weeks of slides (before Week 1 of first cohort)

1. Session 1 Canva deck — French A1
2. Session 2 Canva deck — French A1
3. Session 1 Canva deck — Spanish A1
4. Session 2 Canva deck — Spanish A1

**Estimated time:** 2–3 hours per deck if the Canva master template is ready. 8–12 hours total for both languages.

**Prerequisite:** Canva master template must be created before starting Phase 3.

### Phase 4 — Ongoing slide build (week by week)

Build each week's slides the week before it is taught. For a 12-week course with 2 sessions per week, this means building 2 decks per week. Build 1–2 weeks ahead so you have buffer.

Do not build all 24 sessions upfront before testing the approach in a real cohort. Session 1 delivery will reveal pacing and design issues; incorporate those before building the rest.

### Phase 5 — Website course page updates (after first session is scheduled)

1. Update French A1 and Spanish A1 course pages with outcomes copy and weekly journey
2. Add "Mistakes Are Expected" section and assessment philosophy
3. Add ser/estar preview callout to Spanish A1 page
4. Add inquiry/enrollment supporting copy

**Do not update website copy before the enrollment operations (inquiry → booking flow) are confirmed as working.** A public page with compelling copy and a broken or untested inquiry form damages trust more than a placeholder page.

### Phase 6 — Deeper asset production (after first cohort)

1. Pronunciation reference cards (Week 1 — both languages)
2. City map for directions activity (Week 5 — both languages)
3. Café and restaurant menu props (Week 6 — both languages)
4. Home floor plan template (Week 8 — both languages)
5. Market role-play cards (Week 7 — both languages)
6. Course-wide vocab compilation (student phrase booklet — end-of-course review)

These are quality-of-life improvements, not blockers. A first cohort can be run effectively without any of them using the verbal-only instructions that are already in the slide outlines.

---

## 10. First Cohort Minimum Viable Materials

### Required before enrollment opens

- [ ] Syllabus PDF (both languages) — send to enrolled students upon booking
- [ ] Website course page with accurate learning outcomes and pricing
- [ ] Enrollment/inquiry flow tested end-to-end (form → confirmation → booking link)

### Required before Week 1

- [ ] Session 1 and Session 2 slide decks (both languages)
- [ ] Week 1 student-facing overview (both languages)
- [ ] Week 1 vocabulary reference (both languages)
- [ ] Session 1 homework sheet (both languages)
- [ ] Session 24 final performance quick reference (instructor only)
- [ ] Ser/estar reference handout — Spanish only

### Can be produced week by week

- Sessions 3–24 slide decks (build each the week before)
- Weeks 2–12 student-facing overviews
- Weeks 2–12 homework sheets
- Weeks 2–12 vocabulary references
- Instructor quick reference cards (build each the week before)
- Formative check administration notes

### Can wait until after the first cohort

- Pronunciation reference cards
- City map visual assets
- Café and restaurant menu props
- Floor plan template
- Market role-play cards
- Website FAQ updates based on real student questions
- A2 course materials

---

## 11. Risks and Guardrails

### Risk 1 — Overdesigning slides before testing the course

**Description:** Spending 40+ hours building all 24 sessions in Canva before running a single live session. After the first cohort you will know which slides need more space, which explanations need a visual, and which sessions run long. Slides built before that learning are likely to need significant revision.

**Guardrail:** Build no more than 2 weeks ahead of the live cohort. Treat the first four sessions as a design pilot and revise the Canva template after Week 2 before continuing.

### Risk 2 — Canva AI rewriting pedagogy

**Description:** Canva AI tools can "improve" or "simplify" text. If used on grammar explanations, instructor language, or vocabulary items, it may change the wording in ways that reduce accuracy or overwrite deliberate choices (e.g., the gustar structure explanation, the doler/gustar parallel, the "not a gate" framing on formative checks).

**Guardrail:** Never use Canva AI on teaching text. Use it only for visual layout, color palette, icon selection, and background styling. All text on slides must be manually entered from the Markdown source files.

### Risk 3 — Publishing too much for free

**Description:** Putting full vocabulary files, detailed weekly overviews, or homework files on the public website before enrollment erodes the value of the enrolled product. Students who can get most of the course materials without enrolling have less reason to pay.

**Guardrail:** The public website should show outcomes and one representative excerpt — never full week materials. Consider gating the ser/estar reference behind an email opt-in rather than posting it freely.

### Risk 4 — Losing the Markdown source of truth

**Description:** After slides are built in Canva and handouts are formatted in a word processor, there is a risk of the designed files becoming the de facto source of truth. Future edits get made "in the deck" rather than "in the Markdown," and the Markdown becomes stale.

**Guardrail:** Any content change must be made first in the Markdown file, then propagated to designed assets. The Canva deck is an artifact of the Markdown, never the other way around. Keep this rule explicit in any internal workflow documentation.

### Risk 5 — Student handouts becoming too long

**Description:** The vocabulary files are comprehensive. Formatted as handouts without reduction, they become 4–6 page documents per week. Students receiving 4+ pages of material per week for 12 weeks will feel overwhelmed.

**Guardrail:** Student vocabulary handouts should contain the active word list (target word + translation) and one example sentence per word. All extended notes, regional variants, and etymology belong in the instructor notes — not in the student handout. Cap student weekly materials at 4 pages total (overview + vocabulary + homework).

### Risk 6 — Website promises outrunning enrollment operations

**Description:** If the course page is updated with compelling copy before the inquiry flow, booking system, and instructor availability are confirmed and tested, prospective students will submit inquiries that fall through the cracks.

**Guardrail:** Update website course pages only after the end-to-end enrollment flow (inquiry form → response → booking → confirmation → syllabus delivery) has been tested with at least one real booking. A holding page ("opening soon — join the waitlist") is better than a live page connected to an untested system.

### Risk 7 — Slide count growing too large

**Description:** The temptation in Canva is to add slides for every vocabulary item, every example sentence, and every grammar nuance. This produces 30+ slide decks for a 60-minute session. An instructor clicking through 30 slides in 60 minutes spends more time on transitions than on teaching.

**Guardrail:** Hard cap at 18 slides per 60-minute session. If content doesn't fit, it goes into presenter notes or is moved to the homework handout.

---

## 12. Recommended Next Claude Task

The highest-value next Claude task is creating the **Week 1 instructor quick reference cards** for both French and Spanish.

These require reading each language's Week 1 instructor notes, slide outlines, and vocabulary files — all of which exist — and condensing them into a single printable reference. This is a clearly bounded task with a specific output: two one-page Markdown files at:

- `docs/materials/french-a1/week-01/instructor-quick-reference.md`
- `docs/materials/spanish-a1/week-01/instructor-quick-reference.md`

Each should contain:
1. Session 1 and Session 2 at-a-glance (theme, grammar focus, protected blocks)
2. Top 5 errors to watch for with correction cues
3. What students should be able to do before Week 2
4. Homework assigned at end of each session

This is Phase 1, item 1 of the production order. It does not require Canva, does not require design decisions, and can be completed without creating any new content — only extracting and organizing what already exists.

After both Week 1 quick references are done, proceed to the **Canva master template setup** (Phase 1, prerequisite to Phase 3), which requires a human decision on brand colors, typography, and visual identity before any slide production can begin.

---

*Production plan written 2026-06-25. No files modified. One file created: this document.*
