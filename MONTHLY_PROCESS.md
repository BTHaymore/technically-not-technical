# Monthly Expense Report Process

This guide walks through the monthly expense report workflow.

## Overview

Each month, run the expense report process to scan receipts, extract details, and generate the final Excel and PDF report.

## Steps

1. **Gather receipts** — Move all PDFs, JPGs, and PNGs from the month into your receipt folder
2. **Run the workflow** — Open Claude CoWork and start the Monthly Expense Report skill
3. **Review extracted items** — Claude will list every receipt it found and what it extracted
4. **Add mileage** — When prompted, provide dates and directions for any mileage entries
5. **Review and export** — Claude builds the Excel report and combines everything into a single PDF

## Folder Structure

```
receipts/
  2026-03/
    receipt-01.pdf
    receipt-02.jpg
```

## Notes

- Supported formats: PDF, JPG, PNG
- Template and employee info are pulled automatically
- If a receipt is unclear, Claude will flag it and ask before proceeding

---

*Prompt coming soon*
