# Placement Test Alignment Notes

**Review date:** 2026-06-08
**Reviewer:** Thomas Montanaro
**Scope:** Crescere adaptive placement test (French and Spanish, A1–C1)

---

## Summary

The placement test is well-designed, culturally grounded, and accurately calibrated for A1 through C1. The adaptive engine logic is sound. The question banks contain high-quality items that test productive knowledge rather than surface recognition. No major redesign is needed before launch.

Two fixes are recommended before the test is publicly linked from the main site. Three future enhancements are noted for post-launch consideration.

---

## CEFR Band Calibration

Current scoring bands and composite formula:

| Score range | CEFR level |
|---|---|
| 0–30 | A1 |
| 31–55 | A2 |
| 56–75 | B1 |
| 76–90 | B2 |
| 91–100 | C1 |

**Composite formula:**
Part 1 (MC) × 0.40 + Part 2 (Fill-in) × 0.25 + Part 3 (Reading) × 0.20 + writing binary 7.5 + voice binary 7.5

**Assessment:** The A2 band (24 points) is appropriately wide — this is the largest incoming population and a wide band prevents miscategorizing the common middle range. The B1 band (19 points) is appropriately narrow given B1's specificity.

**Writing and voice bonuses:** A student with an A2 auto-scored result (~45) who attempts both open-ended sections lands at ~60 (B1 range). This is intended behavior — open-ended attempts signal genuine engagement and the instructor-review flag allows adjustment. The safeguard is working correctly.

---

## Question Bank Assessment

### Overall verdict

Both question banks are solid. Items are culturally relevant, well-discriminating, and avoid the most common assessment design errors (too easy, ambiguous distractors, cultural bias). The reading passages are authentic-feeling and appropriately leveled.

### French question bank

- **A1 (fr-1 to fr-4):** Être conjugation, café vocabulary, definite article gender, time expression — all solid A1. The cultural café context (fr-2) is particularly well-chosen.
- **A2 (fr-5 to fr-8):** Near future, noisette café vocabulary, à/en prepositions, partitive negation — all appropriately calibrated.
- **B1 (fr-9 to fr-13):** Imparfait habitual use, reading comprehension, double object pronoun replacement, tu/vous pragmatic register, de/en with author name — all properly calibrated B1 content.
- **B2–C1 (fr-14 to fr-24):** Well-constructed. The C1 literary register items (quoique + subjonctif passé, tirer les vers du nez) are appropriately demanding.

### Spanish question bank

- **A1 (es-1 to es-4):** Ser for origin, ¡Salud!, el problema masculine exception, tener family sentence — excellent. The es-3 question on el problema is a good A1 test that rewards real learning.
- **A2 (es-5 to es-8):** Estar for temporary state (café frío), una caña cultural item, para/por distinction, me gustan (plural) — well-chosen. The gustan/gusta item (es-8) tests the highest-frequency A2 error.
- **B1 (es-9 to es-13):** Imperfect habitual, reading (Carlos in Madrid), se las di pronoun combo, quedamos cultural, Spain present perfect — solid B1 content. **See Issue 1 below for es-13.**
- **B2–C1 (es-14 to es-24):** High quality throughout.

### Fill-in questions

The fill-in section is well-designed:

- French A1 short answers (a, une) correctly set Levenshtein tolerance to 0 — these single-character answers must be exact.
- Spanish A1 fill-in (es for ser, está for estar) is the right question pair for the level — it tests the foundational distinction productively.
- Spanish B2 fill-in (es-fill-7: tuviera) correctly accepts tuvieras as an alternative. This is appropriate — voseo dialects use -ras endings and a Latin American learner with solid B2 knowledge should not be penalized.

### Reading passages

Both language pairs (B1 topic + B2 topic) are well-leveled. Questions test genuine comprehension, inference, and vocabulary in context rather than surface scanning. The French B2 passage (language evolution) and Spanish B2 passage (circular economy) are strong abstract-topic choices that naturally separate B1 from B2 readers.

---

## Pre-Launch Fixes

### Fix 1 — es-13: Accept both regional answers

**Issue:** Question asks for "Esta mañana ___ a mi jefe en el ascensor" and currently accepts only he visto (Spain: present perfect for same-day events). In Mexico, Argentina, Colombia, and most of Latin America, vi (preterite) is standard for same-day past events. A Latin American learner with solid B1 knowledge would answer vi and be marked wrong.

**Fix:** Accept both vi and he visto as correct answers. Alternatively, revise the question to signal Spain context explicitly: "Esta mañana, en Madrid, ___ a mi jefe en el ascensor."

**Why this matters:** The placement test is designed for a global Spanish-speaking audience. Penalizing Latin American usage at a key B1 discrimination point would systematically misplace Latin American learners.

**Priority:** High — should be fixed before the test is publicly linked.

### Fix 2 — Adaptive engine: Consider starting at difficulty 1

**Issue:** The adaptive engine currently starts every taker at difficulty 2 (A2 level). An absolute beginner faces an A2 question as their first test item. The adaptation is fast (two wrong answers → -1 difficulty), but a genuinely blank-slate A1 learner may experience the first one or two questions as discouraging before the engine adjusts.

**Fix:** Change the starting difficulty from 2 to 1. The adaptive engine will escalate quickly if the student answers correctly, so B1/B2 students will not experience this as slower — they will simply answer the first question correctly and move to difficulty 2 by question 2.

**Why this matters:** The test is a marketing touchpoint as well as a placement instrument. A first question a complete beginner cannot answer at all may discourage enrollment. Starting at difficulty 1 costs nothing for higher-level users and reduces friction for true beginners.

**Priority:** Medium — the scoring accuracy is not affected; this is a UX improvement. Acceptable to address post-launch.

---

## Pending Implementation Item

### Placement level → inquiry form

The results screen currently links to `/enroll?course=<id>` without passing the CEFR level. When the Phase 3B inquiry form is built, the "Express Interest" link should be updated to `/enroll?course=<id>&placement=<level>` so the form can pre-populate the student's level and the instructor can see it in the submission.

This is already documented in the Phase 3B implementation plan (Step 7). It requires no placement test changes — only a link update in `src/components/placement/ResultsScreen.tsx`.

---

## Future Enhancement Ideas

### Weakness categories → curriculum week mapping

Each placement question is currently tagged with a category (Verb tenses, Pronouns, Prepositions, etc.). In a future iteration, the results screen could map category weaknesses directly to the relevant curriculum week:

- Example: "Your verb tense accuracy suggests reviewing: Week 4 material in your recommended course."

This requires no changes to the test — only a mapping table built after the curriculum files are finalized. The mapping would link category + CEFR level → course file week. Consider building this when the courses go live.

### Speaking component calibration

The current voice section is binary (attempted / not attempted). In a future version, a short voice sample could be scored for fluency and pronunciation, adding up to 7.5 additional weighted points rather than a flat bonus. This would require a recording and review workflow that is out of scope until the student platform is built.

### Diagnostic report depth

Currently the results screen shows a level recommendation. Future enhancement: show a per-section breakdown (e.g., "Strong reading comprehension; verb tenses at A2 level; pronunciation unassessed") so students and the instructor have a richer picture before the first session.

---

## No Action Required

The following items were reviewed and require no changes:

- All 24 French MC questions: well-calibrated, no regional ambiguity issues
- All French fill-in questions: correct tolerance settings
- All French and Spanish reading passages: appropriately leveled
- Spanish A1 and A2 question items: no issues identified
- B2/C1 routing (sends to Contact page rather than course recommendation): correct behavior
- Writing prompts: appropriately level-agnostic; allow meaningful self-differentiation
