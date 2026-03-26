```javascript id="zj9s4m"
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log(req.body);

  return res.status(200).json({ success: true });
}
```
