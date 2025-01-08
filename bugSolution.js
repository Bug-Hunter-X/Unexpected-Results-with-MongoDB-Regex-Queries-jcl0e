```javascript
const query = {
  field: { $regex: 'pattern', $options: 'i' } 
};

//Correct Usage: Explicitly defining $options for case-insensitive search
db.collection.find(query).toArray()

//For complex patterns, ensure proper escaping of special characters:
const complexPattern = 'This is a \(complex\) pattern.';
const complexQuery = {
  field: { $regex: complexPattern, $options: 'i' }
};
db.collection.find(complexQuery).toArray();
```