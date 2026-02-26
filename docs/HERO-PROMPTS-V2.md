# Hero Image Prompts v2 - Text-Free Approach

## The Problem

AI image generators trained on stock photos and magazines often add fake text, watermarks, and magazine-style overlays - even when told not to. Words like "editorial," "magazine," and "professional" trigger this.

## New Strategy

1. **Use catalog/e-commerce framing** instead of editorial
2. **Describe the scene simply** - less is more
3. **Avoid trigger words** that cause text generation
4. **Right-justify subjects** - positions people on right, leaving left clear for content overlay
5. **Specify "clean" multiple times**

---

## Specs

| Spec | Value |
|------|-------|
| **Aspect Ratio** | 3:4 Portrait |
| **Dimensions** | 1200 × 1600 px |
| **Background** | Pure white, seamless |
| **Style** | Simple, clean, bright |

---

## Banned Words (DO NOT USE)

These words trigger text/watermark generation:

- ❌ magazine
- ❌ editorial
- ❌ cover
- ❌ vogue
- ❌ lifestyle
- ❌ high-end
- ❌ luxury
- ❌ publication
- ❌ headline
- ❌ title

---

## Safe Words (USE THESE)

- ✅ catalog
- ✅ e-commerce
- ✅ product shot
- ✅ lookbook
- ✅ simple
- ✅ clean
- ✅ minimal
- ✅ plain
- ✅ unedited
- ✅ raw photo

---

## Clothing Colors (Mix & Match)

**Don't make everyone beige!** Each person should wear a different color:

| Color | Description |
|-------|-------------|
| Sage green | Soft muted green |
| Dusty rose | Muted pink |
| Chambray blue | Soft denim blue |
| Cream | Off-white, warm |
| Olive | Earthy green |
| Terracotta | Warm clay/rust |
| Soft teal | Blue-green |
| Navy | Dark blue (for contrast) |
| Coral | Soft orange-pink |
| Taupe | Grey-brown neutral |

**Example mix for 4 people:**
- Person 1: Sage green top
- Person 2: Dusty rose sweater
- Person 3: Chambray blue shirt
- Person 4: Cream linen blouse

---

## Homepage Hero Prompts

### Option A - Minimal Description
```
Simple studio photo of 4 diverse adults standing together smiling, positioned on right side of frame. Varied casual clothes in soft colors - one in olive green, one in dusty rose, one in light blue, one in cream. White background. Right justified composition. Clean. No text.
```

### Option B - Catalog Style
```
E-commerce catalog photo of a group of 4 happy diverse people, ages 30-50, standing casually together. Subjects positioned on right side of frame, right justified. Each wearing different colored casual clothing - sage green top, dusty pink sweater, light chambray blue shirt, cream linen. Plain white seamless background. Soft lighting. Simple clean photo. No graphics.
```

### Option C - Lookbook Style
```
Lookbook photo shoot. Group of 4-5 diverse smiling adults in relaxed varied outfits - mix of olive, terracotta, soft blue, cream, dusty rose. Different styles and colors for each person. Standing naturally together on right side of frame. Right justified composition. Clean white backdrop. Bright soft lighting. Simple unedited photograph.
```

### Option D - Ultra Simple
```
4 diverse happy people standing together on right side of frame. Right justified. Each person wearing different colored casual clothes - green, pink, blue, cream. White background. Studio lighting. Simple photo.
```

---

## Therapy Images

### Individual - Option A
```
Simple portrait of one calm woman, 30s, slight smile, positioned on right side of frame. Right justified composition. Soft sage green blouse. White background. Soft light. Clean photo. No text.
```

### Individual - Option B
```
Catalog style portrait. Woman in her 40s with peaceful expression, positioned on right side of frame. Right justified. Wearing dusty rose sweater. Plain white backdrop. Simple studio lighting.
```

### Couples - Option A
```
Simple photo of a couple sitting close together, holding hands, positioned on right side of frame. Right justified composition. Mixed ethnicities, 30s-40s. One in soft blue, one in cream. White background. Warm natural expressions. Clean.
```

### Couples - Option B
```
Two people in a relationship, sitting together looking happy on right side of frame. Right justified. One wearing olive green, other in dusty pink. Plain white studio backdrop. Soft even lighting. Simple photograph.
```

---

## Wellness/Spa Images

### Relaxation - Option A
```
Simple portrait of woman with eyes closed, peaceful expression, positioned on right side of frame. Right justified composition. White robe or towel. White background. Soft lighting. Clean spa photo.
```

### Relaxation - Option B
```
Catalog photo of person relaxing, serene expression, positioned on right side of frame. Right justified. Wrapped in cream towel. Plain white backdrop. Bright soft studio light. Simple.
```

---

## Team/About Images

### Team - Option A
```
Simple group photo of 3 professionals standing together on right side of frame, friendly smiles. Right justified composition. Business casual - one in navy blazer, one in sage cardigan, one in soft coral top. White background. Clean studio shot.
```

### Team - Option B
```
Catalog style photo of 3 diverse professionals positioned on right side of frame. Right justified. One in chambray blue, one in cream sweater, one in terracotta blouse. Plain white backdrop. Approachable expressions. Simple.
```

---

## Getting Started / CTA Images

### Welcoming - Option A
```
Simple portrait of friendly person looking at camera with warm smile, positioned on right side of frame. Right justified composition. Soft teal sweater. White background. Inviting expression. Clean photo.
```

### Welcoming - Option B
```
One person, diverse, 30s, looking directly at camera with encouraging smile, positioned on right side of frame. Right justified. Dusty rose or soft blue top. Plain white studio backdrop. Simple warm portrait.
```

---

## If Still Getting Text

### Try These Additions:
Add to the END of any prompt:
```
--no text --no words --no letters --no watermarks
```

Or try:
```
[your prompt]. Negative: text, words, letters, watermarks, logos, titles, graphics, overlays.
```

### Alternative Tools

If Freepik keeps failing:

1. **Midjourney** - Add `--no text` parameter
2. **DALL-E 3** - Generally better at following "no text" instructions  
3. **Adobe Firefly** - Good at clean images
4. **Ideogram** - Has explicit "no text" toggle

### Post-Processing

If you get a great image with minor text:
1. Use Freepik's **inpainting/editing** tool
2. Select the text areas
3. Prompt: "white background" or "continue background"
4. Generate to remove text

---

## Quick Reference - Best Prompts

| Image | Recommended Prompt |
|-------|-------------------|
| **Homepage** | `E-commerce catalog photo of a group of 4 happy diverse people, ages 30-50, standing casually together. Subjects positioned on right side of frame, right justified. Each wearing different colored casual clothing - sage green top, dusty pink sweater, light chambray blue shirt, cream linen. Plain white seamless background. Soft lighting. Simple clean photo. No graphics.` |
| **Individual** | `Simple portrait of one calm woman, 30s, slight smile, positioned on right side of frame. Right justified composition. Soft sage green blouse. White background. Soft light. Clean photo. No text.` |
| **Couples** | `Simple photo of a couple sitting close together, holding hands, positioned on right side of frame. Right justified composition. Mixed ethnicities, 30s-40s. One in soft blue, one in cream. White background. Warm natural expressions. Clean.` |
| **Spa** | `Simple portrait of woman with eyes closed, peaceful expression, positioned on right side of frame. Right justified composition. White robe or towel. White background. Soft lighting. Clean spa photo.` |
| **Team** | `Simple group photo of 3 professionals standing together on right side of frame, friendly smiles. Right justified composition. Business casual - one in navy blazer, one in sage cardigan, one in soft coral top. White background. Clean studio shot.` |
| **CTA** | `Simple portrait of friendly person looking at camera with warm smile, positioned on right side of frame. Right justified composition. Soft teal sweater. White background. Inviting expression. Clean photo.` |

---

## Checklist Before Using Image

- [ ] Pure white background (no grey, no gradient)
- [ ] NO text anywhere in image
- [ ] NO watermarks or logos
- [ ] NO magazine-style overlays
- [ ] Subjects positioned on RIGHT side of frame (left side clear)
- [ ] People look natural, not stiff
- [ ] Clothing is varied colors, not all beige
- [ ] Good diversity in subjects
- [ ] Expressions are warm and genuine

---

*Created: January 23, 2026*
*Approach: Minimal prompts, catalog framing, avoid trigger words*
