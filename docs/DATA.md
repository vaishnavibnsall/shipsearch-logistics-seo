# Data provenance and reproducibility

## Kaggle source

- Publisher: Prachi Gopalani, **E-Commerce Shipping Data**.
- Dataset page: https://www.kaggle.com/datasets/prachi13/customer-analytics
- Download endpoint: https://www.kaggle.com/api/v1/datasets/download/prachi13/customer-analytics
- Retrieved: 30 October 2026, without authentication.
- File: `Train.csv`, 10,999 data rows, 12 columns.
- SHA-256 of the UTF-8 CSV content: `dcdc3fd8f0507ec400174ef70d88d634321cc2ce8f4ea11bf4e8c847fdd325b3`.
- Source records are not committed or redistributed. Confirm current license terms on the publisher’s data card before redistribution or other reuse; no license is inferred from public availability. The project license covers original code and content only.

## Reproduce

Download the ZIP from the dataset page / endpoint, extract `Train.csv` into `data/raw/`, then run:

```sh
npm run analyze
npm run build
npm test
```

Or supply a different file location: `node scripts/analyze.mjs /absolute/path/Train.csv`.

The dependency-free parser expects this dataset’s simple unquoted comma-separated schema. It validates the row count and binary outcome. For a new dataset, use a full CSV parser and review the schema rather than silently accepting different data. The script hashes exact input text, so newline conversion changes the checksum.

## Results and interpretation

6,563 records carry label 1 (59.67%); 4,436 carry label 0. According to the publisher, **1 means NOT on time**. Average Customer_care_calls is 4.05. Mode totals reconcile to 10,999: Flight 1,777; Road 1,760; Ship 7,462. The generated summary records the counts and late-labelled breakdown.

The source does not establish a Dubai sample, random sampling, a collection period or independent observations. No population confidence interval, carrier ranking, causal relationship or machine learning accuracy is asserted. A high late share is a dataset finding, not a UAE service benchmark. Call frequency motivates a content hypothesis about clear delivery information; it does not prove page copy reduces calls.

## Other resources

Official Google, Aramex, DHL UAE and Emirates Post pages inform SEO choices, customer tasks and competitor observations. Links and review date are visible in `/case-study/` and `src/content.mjs`. Competitor copy is paraphrased. No competitor dataset is scraped or redistributed. Seed keyword priorities are qualitative, with no fabricated search volume, CPC or difficulty.
