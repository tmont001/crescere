# Student Materials Delivery Architecture
## Crescere — French A1 and Spanish A1

**Written:** 2026-06-29
**Scope:** Delivery of Markdown-sourced course materials to enrolled students
**Status of source materials:** Complete and committed. Distribution-ready Markdown files exist for syllabi, Week 1 vocabulary references, and Week 1 Session 1 homework (both languages).

---

## 1. Executive Summary

The Crescere course materials exist as production-complete Markdown files. The question this document answers is not what the content says — that is settled — but how it should reach students across PDF delivery, email, and a future student dashboard.

**The answer in one sentence:** Distribute PDFs to enrolled students for the first cohort via email. Use the distribution-ready Markdown layer as the single source for all downstream formats. Build toward a dashboard only after the first cohort confirms the delivery model works.

### How each channel works

| Channel | What it delivers | Who acts | When |
|---|---|---|---|
| **Email (instructor-sent)** | PDFs of syllabus, overviews, vocabulary, homework | Instructor | First cohort; indefinitely viable for small groups |
| **PDFs hosted on a resources page** | Downloadable files linked from a gated page | System | After a simple student portal exists |
| **Dashboard — course materials tab** | Rendered Markdown or hosted PDFs, released week by week | System + instructor | After enrollment auth is live |
| **Website — public previews** | Syllabus outcomes, weekly journey, one excerpt | Marketing copy | Now, once enrollment flow is confirmed working |
| **Instructor-only workflows** | Source Markdown files; instructor quick references; correction-priority sheet | Instructor | Already available in the repo |

**Immediate recommendation:** Do not block the first cohort on dashboard infrastructure. PDF + email is fully sufficient for a small-group live course and is the right default until enrollment volume justifies a self-serve portal.

---

## 2. Source vs. Distribution Layer

### Four layers, from raw to delivered

```
Layer 1 — Source Markdown
docs/materials/french-a1/week-01/session-01-homework.md
  ↓ (clean, apply header/footer, remove instructor content)
Layer 2 — Distribution-ready Markdown
docs/materials/distribution/french-a1/week-01/session-01-homework.md
  ↓ (export to PDF)           ↓ (parse for dashboard)
Layer 3a — PDF artifact       Layer 3b — Rendered dashboard content
  (stored in /public or CDN)    (JSON or rendered HTML from Markdown)
  ↓ (email to student)          ↓ (displayed in ResourcesPage)
Layer 4 — Student
```

### Definitions

**Source Markdown** (`docs/materials/`): The instructional authority. All content changes happen here first. Includes both student-facing and instructor-only files. Never modified based on what a downstream format needs.

**Distribution-ready Markdown** (`docs/materials/distribution/`): A cleaned copy of student-facing files only. Differences from source: standardized header (Crescere branding, week/session, timing line), standard footer, internal file references replaced with natural language, instructor notes removed. This is what PDFs and the dashboard are generated from. No instructor files belong in this layer.

**PDF artifacts**: Exported from distribution-ready Markdown using a consistent tool (see Section 6 for recommendation). PDFs are deliverables — they are not the source of truth. If a vocabulary item is wrong, fix it in the source Markdown, propagate to the distribution copy, and re-export the PDF.

**Rendered dashboard content**: In a future state, the dashboard reads distribution-ready Markdown at build time or runtime and renders it as HTML. The current app has no mechanism for this; it would need to be added.

### Does distribution-ready Markdown need to exist for every file?

**No — only for student-facing files, and only when the source needs cleanup.** The value of a distribution copy is:

1. Instructor content has been confirmed removed
2. Header and footer are standardized for PDF export
3. Internal `.md` file references have been replaced
4. The file is in a predictable path for a build pipeline or manifest

For files that are already fully clean (no instructor notes, no internal references), the distribution copy adds mostly headers and footers. That is still worth doing because standardized headers enable automated PDF generation and future manifest-driven delivery. But the priority order should be:

- **Create distribution copies now:** Files students need before or during Week 1
- **Create distribution copies week-by-week:** Files for Weeks 2–12, one week before the content is needed
- **Do not create distribution copies:** Instructor notes, quick references, formative checks, slide outlines, correction-priority sheet, curriculum docs, audit files, production plans

---

## 3. Student Dashboard Content Model

The dashboard needs to answer one question per student: "What materials are available to me right now, for this course, at this point in the term?"

### Recommended content model

Each material is an item with these fields:

| Field | Type | Example |
|---|---|---|
| `courseId` | string | `fr-a1` |
| `language` | `french` \| `spanish` | `french` |
| `level` | `A1` \| `A2` \| `B1` | `A1` |
| `week` | number \| null | `1` (null for syllabus) |
| `session` | number \| null | `1` (null for vocabulary references) |
| `title` | string | `Session 1 Homework` |
| `type` | enum (see below) | `homework` |
| `distributionPath` | string | `distribution/french-a1/week-01/session-01-homework.md` |
| `pdfPath` | string \| null | `resources/french-a1/week-01/session-01-homework.pdf` |
| `studentVisible` | boolean | `true` |
| `releaseTiming` | enum (see below) | `after-session-1` |
| `downloadable` | boolean | `true` |
| `requiresEnrollment` | boolean | `true` |
| `instructorOnly` | boolean | `false` |

### Material types

| Type | Example files |
|---|---|
| `syllabus` | `distribution/french-a1/syllabus.md` |
| `weekly-overview` | `distribution/french-a1/week-01/student-overview.md` |
| `vocabulary-reference` | `distribution/french-a1/week-01/vocabulary-reference.md` |
| `homework` | `distribution/french-a1/week-01/session-01-homework.md` |
| `reference-handout` | `distribution/spanish-a1/reference-ser-vs-estar.md` |
| `final-performance-guide` | `distribution/french-a1/week-12/final-performance-guide.md` |

### Release timing values

| Value | When to release |
|---|---|
| `on-enrollment` | Immediately when student books |
| `before-week-N` | 24–48 hours before Week N, Session 1 |
| `after-session-N` | Immediately after Session N ends |
| `start-of-week-12` | Not before Session 23 |
| `on-completion` | After Session 24 |

---

## 4. What Students Should See

### Before the course begins (on enrollment)
- Syllabus (both languages)
- Nothing else — the course materials are part of the enrolled experience

### Before each week (24–48 hours before the first session of that week)
- Weekly student overview for that week
- Weekly vocabulary reference for that week

### After each session (immediately after session ends)
- Session homework for that session

### Special: before final performance (start of Session 23)
- Final performance guide (Week 12 only — never earlier)
- Week 12 phrase bank (if one is created)

### After course completion
- No automatic additions
- Instructor may share a "what comes next" document or A2 preview at their discretion

### What is accessible but not time-gated (available throughout)
- Syllabus (stays accessible for the full course)
- All previously released vocabulary references, overviews, and homework files
- Spanish ser/estar reference (from Week 2 onward)

---

## 5. What Students Should Never See

These files must remain private regardless of how the dashboard is built. They must never appear in the `distribution/` folder or in any manifest entry with `studentVisible: true`.

| File type | Reason |
|---|---|
| `instructor-notes.md` (all weeks) | Pedagogy and correction strategy — instructor-only |
| `session-NN-slide-outline.md` (all sessions) | Instructor specification, not student content |
| `week-NN-formative-check.md` (all weeks) | Administered live; never distributed in advance |
| Instructor quick reference cards | Instructor tool |
| A1 correction-priority sheet | Instructor tool |
| Curriculum documents (`docs/curriculum/`) | Internal course architecture |
| Production plan, audit, formatting standard, bundle plan | Internal planning documents |
| Any file with `instructorOnly: true` in the manifest | General rule |

**Dashboard implementation note:** The simplest enforcement mechanism is path-based: only files under `docs/materials/distribution/` are ever served to students. Files in `docs/materials/french-a1/`, `docs/materials/spanish-a1/`, `docs/curriculum/`, or any other path are never served. This makes the rule programmable without per-file logic.

---

## 6. Recommended File Strategy

### Should we keep creating distribution-ready copies for every student-facing file?

**Yes, continue — but only for the files needed in the immediate week ahead.** Do not batch-create distribution copies for Weeks 2–12 before the first cohort runs. Build them one week at a time, on the rolling schedule that matches when sessions are taught.

The distribution copy is the right abstraction because:
- It is the clean, verified input for PDF export
- It is the correct path structure for a future build-time manifest
- It enforces the quality checklist before anything reaches a student

The one exception: if a source file is already completely clean (no instructor notes, no `.md` links, no draft content), the distribution copy's only function is adding headers and footers. That is still worth doing for PDF export consistency, but it is low-stakes enough that a single batch pass before the first cohort is fine rather than a carefully verified file-by-file process.

### Should the dashboard render directly from source Markdown?

**No.** The source Markdown folder contains instructor-only files alongside student files. Serving the source folder directly would require per-file access control. That is fragile. The distribution layer exists specifically to isolate the student-safe content into a known location. The dashboard should read only from `docs/materials/distribution/`.

### Should we use Markdown frontmatter?

**Yes — eventually.** Frontmatter would let the build system extract metadata (course, language, level, week, session, type, releaseTiming) directly from each file without a separate manifest. It would look like:

```yaml
---
courseId: fr-a1
language: french
level: A1
week: 1
session: 1
type: homework
title: Session 1 Homework
releaseTiming: after-session-1
studentVisible: true
downloadable: true
requiresEnrollment: true
---
```

This is not necessary for the first cohort (email + PDF works without it). But it is the right foundation before any build-time pipeline is added. Add frontmatter to distribution-ready files as they are created.

**Recommendation:** Add frontmatter to new distribution-ready files going forward. Do not retroactively update the existing ones until there is a build step that reads it.

### Should PDFs be generated from distribution-ready Markdown or source Markdown?

**Distribution-ready Markdown only.** Source Markdown includes instructor content that has not been verified removed. Using source as PDF input introduces the risk of accidentally distributing instructor notes.

### Recommended PDF export tool

For the first cohort, the simplest workflow is:

1. Open the distribution-ready Markdown file in a tool that renders Markdown (VS Code preview, Typora, Pandoc, or a browser extension)
2. Print/export to PDF from that rendered view
3. Save the PDF to a folder that mirrors the distribution path structure (e.g., `public/student-resources/french-a1/week-01/session-01-homework.pdf`)

**Pandoc command** (if installed):
```
pandoc distribution/french-a1/week-01/session-01-homework.md -o public/student-resources/french-a1/week-01/session-01-homework.pdf
```

This is manual and sufficient for a first cohort. Automate it only when the volume of files makes manual export impractical.

---

## 7. Suggested Manifest Structure

A `course-materials-manifest.ts` (or `.json`) file should be created — but not yet. Create it when the first cohort starts, once all Week 1 PDFs are exported and the delivery workflow is confirmed. A TypeScript manifest that maps to the existing `Resource` type in the codebase is the lowest-friction path.

### Proposed manifest entry shape

```typescript
export interface CourseMaterial {
  id: string;                          // e.g. 'fr-a1-w01-s01-homework'
  courseId: string;                    // e.g. 'fr-a1'
  language: 'french' | 'spanish';
  level: 'A1' | 'A2' | 'B1';
  week: number | null;                 // null for course-level docs (syllabus)
  session: number | null;              // null for week-level docs (overview, vocab)
  title: string;
  type: MaterialType;
  distributionPath: string;            // relative to repo root
  pdfPath: string | null;             // relative to /public, once exported
  studentVisible: boolean;
  releaseTiming: ReleaseTiming;
  downloadable: boolean;
  requiresEnrollment: boolean;
  instructorOnly: boolean;
}

type MaterialType =
  | 'syllabus'
  | 'weekly-overview'
  | 'vocabulary-reference'
  | 'homework'
  | 'reference-handout'
  | 'final-performance-guide';

type ReleaseTiming =
  | 'on-enrollment'
  | `before-week-${number}`
  | `after-session-${number}`
  | 'start-of-week-12'
  | 'on-completion';
```

### Compatibility with the existing `Resource` type

The app's current `Resource` type (`src/types/index.ts`) has: `id`, `title`, `type` (pdf/audio/video/link), `category`, `description`, `url`. A `CourseMaterial` entry can be mapped to a `Resource` for the existing `ResourcesPage` component with a simple adapter function — no type changes needed in `src/` until the full dashboard is built.

---

## 8. Website/App Integration Plan

### What the current app has

| Feature | Status |
|---|---|
| Public course pages (`/courses/:courseId`) | Live |
| Hardcoded course data in `src/data/courses.ts` | Live — TypeScript constants, no Markdown connection |
| Dashboard route (`/dashboard`) | Routes to "coming soon" page; all `/dashboard/*` redirected |
| Dashboard layout and pages (`ResourcesPage`, `DashboardHomePage`, etc.) | Components exist, coded, but not routed |
| `Resource` type and `RESOURCES` mock data | Exists in `dashboardMock.ts` — uses placeholder `url: '#'` |
| Authentication | None |
| Backend / API | None — pure client-side SPA |
| Markdown processing at build time | None |

### What integration would require

**To serve PDFs from the dashboard (short term):**
- Export PDFs and place them in `public/student-resources/[courseId]/[week]/[filename].pdf`
- Add real URLs to the `RESOURCES` constant (or a manifest) in place of `url: '#'`
- Wire up the existing `ResourcesPage` component by enabling the `/dashboard/resources` route
- Add a simple enrollment check (even a hardcoded passcode or URL token gating the `/dashboard` route) so files are not publicly indexed

**To render Markdown in the dashboard (medium term):**
- Add a Markdown processing library (e.g., `react-markdown` + `remark-gfm`)
- Add a build step or import alias that reads `.md` files from `docs/materials/distribution/`
- Create a `MaterialPage` route at `/dashboard/materials/:courseId/:week/:type` that renders the Markdown
- This can coexist with the PDF download option

**To add authenticated access (longer term):**
- Add Supabase auth (already partially present in the codebase via `SUPABASE_SERVICE_ROLE_KEY` in secrets)
- Enroll students in a `student_enrollments` table with `(userId, courseId, cohortId)`
- Gate `ResourcesPage` behind a session check
- Add release-timing logic based on cohort start date and current week

### Recommended integration sequence

1. **First:** PDFs in `public/`, linked from a gated but unauthenticated resources page (URL-guessed is fine for a small cohort — e.g., `/dashboard?cohort=abc123`)
2. **Second:** Enable the existing `ResourcesPage` route with real PDF URLs replacing mock `'#'` links
3. **Third:** Add Markdown rendering for materials that benefit from web-native formatting (vocabulary tables render better in HTML than in PDF)
4. **Fourth:** Add Supabase auth gating the dashboard behind a real login

Do not skip ahead to step 4 without first running a cohort through steps 1–2. The delivery model will change based on what students actually need.

---

## 9. MVP Recommendation

### Recommended option: A — PDF/email only for the first cohort

Send PDFs to enrolled students by email. The instructor emails materials directly: syllabus upon booking, overview and vocabulary before each week, homework after each session.

**Why this is the right choice:**

- **No infrastructure needed.** No auth, no hosted files, no dashboard changes. The existing "coming soon" page stays as-is.
- **Small-group courses already work this way.** Students in a 2–6 person live cohort expect a personal, instructor-driven experience. An automated portal is not what makes the course better — the instructor and the materials do.
- **Fastest path to first cohort.** The bottleneck is slide decks and PDF exports, not a student portal.
- **Learning before building.** Running a cohort via email reveals what students actually need from a portal (what do they re-download? what do they miss? what do they ask about?). Building the portal before that learning wastes the most uncertain investment.

**Why not Option B (static gated resources page):**
Adds infrastructure complexity with marginal benefit for 2–6 students. Only worth it when cohorts are larger than one instructor can manage via email.

**Why not Option C (simple dashboard without login):**
Without login, there is no way to ensure only enrolled students access materials. A URL-guessable page is security by obscurity. Acceptable for a single cohort if the stakes are low, but adds no student experience benefit over email.

**Why not Option D (full logged-in dashboard):**
The app has no auth today. Building auth, enrollment tables, and release-timing logic before running a single cohort is speculative overengineering. The dashboard exists as UI scaffolding — enable it after the first cohort confirms there is demand for self-serve access.

---

## 10. Revised Production Roadmap

### Immediate (before first cohort)

1. **Complete Week 1 distribution files** — create `session-02-homework.md` for both languages. That completes the Week 1 bundle.
2. **Export Week 1 PDFs** — export all distribution-ready Week 1 files (syllabus, overview, vocabulary reference, session-01-homework, session-02-homework) to PDF using Pandoc or equivalent. Store in `public/student-resources/`.
3. **Test email delivery workflow** — assemble a complete Week 1 bundle email for one language and confirm all attachments render correctly for the recipient.

### First cohort begins

4. **Build session slides in Canva** — one deck per session, built the week before it is taught. Source: `session-NN-slide-outline.md` files.
5. **Create Week 2 distribution files the week before Week 2** — overview, vocabulary, session-03-homework, session-04-homework for both languages; ser/estar reference for Spanish.
6. **Email materials on the schedule defined in the bundle plan** — overview + vocabulary before each week, homework after each session.

### After first cohort

7. **Assess what students actually needed from the materials** — which files were re-requested? What was confusing? What format worked better?
8. **Enable the existing `ResourcesPage` route** with real PDF links for cohort 2.
9. **Add frontmatter to distribution-ready files** as they are created for cohort 2.
10. **Write a course-materials-manifest** when the number of files makes manual URL management unwieldy.
11. **Add Markdown rendering** to the dashboard if students would benefit from web-native formatted materials.
12. **Add Supabase auth** when enrollment volume justifies a self-serve access model.

### What pauses

Do not continue creating distribution-ready files for Weeks 2–12 until Week 1 of the first cohort is complete. The week-by-week workflow is the right production model: create the distribution files for Week N+1 while Week N is being taught. This prevents building materials that may change based on first-cohort learning.

---

## 11. Next Claude Task

The highest-value immediate Claude task is completing the **Week 1 distribution bundle** by creating the two remaining files:

- `docs/materials/distribution/french-a1/week-01/session-02-homework.md`
- `docs/materials/distribution/spanish-a1/week-01/session-02-homework.md`

Source files:
- `docs/materials/french-a1/week-01/session-02-homework.md`
- `docs/materials/spanish-a1/week-01/session-02-homework.md`

These follow the same workflow as the Session 1 homework files: apply the standard header (Crescere branding, session number, "Complete before Session 3 (first session of Week 2)", estimated time), preserve all content exactly, add the standard footer, confirm no instructor content. The source files are expected to be clean.

After those two files are created, the Week 1 distribution bundle is complete for both languages. The next task after that is the PDF export pass — exporting all eight Week 1 distribution files to PDF in a consistent format, which prepares the actual deliverables for the first enrolled cohort.
