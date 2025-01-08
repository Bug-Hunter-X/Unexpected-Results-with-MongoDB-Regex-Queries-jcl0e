```javascript
const query = {
  field: { $regex: /pattern/i } 
};

//Incorrect usage that might lead to unexpected behavior
db.collection.find(query).toArray()
```