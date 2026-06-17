# Grace Financial Consultancy

A loan consultancy web application built with React + Vite.

## Loan Eligibility Calculator

The eligibility calculator is on the `/eligibility` page and walks users through 4 steps.

### Steps to Check Eligibility

1. **Monthly Income** — Select your monthly income (₹10,000 – ₹5,00,000)
2. **Employment Type** — Choose salaried or self-employed
3. **Existing EMIs** — Enter your current monthly EMI obligations
4. **CIBIL Score** — Enter your CIBIL score (300–900)

### Calculation Logic

```
Eligibility = (Monthly Income - Existing EMIs) × Employment Multiplier × CIBIL Factor
```

**Employment Multiplier:**
| Type | Multiplier |
|---|---|
| Salaried | 36× |
| Self-Employed | 30× |

**CIBIL Factor:**
| Score Range | Factor |
|---|---|
| 750+ | 1.0 |
| 650–749 | 0.7 |
| Below 650 | 0.4 |

**Example:**
- Monthly Income: ₹50,000
- Existing EMIs: ₹5,000
- Employment: Salaried (36×)
- CIBIL: 750+ (1.0)

→ (50,000 - 5,000) × 36 × 1.0 = **₹16,20,000**

### Recommended Loan Types

Based on the calculated eligibility amount:

| Eligibility | Loan Types |
|---|---|
| ≥ ₹3,00,000 | Personal Loan (up to ₹25 lakh) |
| ≥ ₹5,00,000 | Vehicle Loan (up to ₹50 lakh) |
| ≥ ₹10,00,000 | Home Loan (up ₹1 Cr) |
| ≥ ₹20,00,000 | Business Loan (up to ₹50 lakh) |
| Below ₹3,00,000 | Mudra Loan (up to ₹50,000) |

### Source Code

The calculation is in `src/pages/Eligibility.jsx` — function `calculateEligibility()` at line 14.
