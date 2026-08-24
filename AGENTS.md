# Agent Guidelines

## Visual Change Verification

When making any visual/UI changes, you MUST confirm them using `playwright-cli` by running the local dev server and taking before/after screenshots.

### Required Workflow

1. **Before making changes:**
   - Start the dev server if not running
   - Navigate to the affected page with `playwright-cli open http://localhost:4321` (or appropriate port)
   - Take a screenshot: `playwright-cli screenshot --filename=debug/before-[description].png`
   - Close browser: `playwright-cli close`

2. **After making changes:**
   - Restart the dev server if needed
   - Navigate to the same page: `playwright-cli open http://localhost:4321`
   - Take a screenshot: `playwright-cli screenshot --filename=debug/after-[description].png`
   - Close browser: `playwright-cli close`

3. **Compare** the before/after screenshots to verify the change is correct.

### Screenshot Storage

- Store all comparison screenshots in the `/debug` directory
- Use descriptive filenames with timestamps or feature names
- Format: `debug/before-[feature].png` and `debug/after-[feature].png`
- The `/debug` directory is gitignored and safe for local artifacts

### Notes

- Always use the same viewport size for before/after comparisons
- Use `playwright-cli resize 1920 1080` to standardize viewport
- If the change affects multiple pages or breakpoints, capture each one
