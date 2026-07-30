# Internal API

## TransferRepository

Loads transfer records from JSON.

### load()

Returns:

```javascript
Transfer[]
```

---

## TransferService

### getTransfers()

Returns all transfers.

### getTotalVolume()

Returns total transferred USDC.

### getAverageFee()

Returns average bridge fee.

---

## StatisticsService

### build()

Returns summary statistics.

---

## ExportService

### save(path, report)

Exports report to JSON.
